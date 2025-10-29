// src/middleware/auth.ts (dans ton dossier backend)
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface étendue pour typer req.user
interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role: string;
    nom: string;
  };
}

// Middleware d'authentification par token JWT
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Accès refusé — token manquant' });
  }

  if (!process.env.JWT_SECRET) {
    console.error('❌ JWT_SECRET non défini dans .env');
    return res.status(500).json({ error: 'Erreur de configuration serveur' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('❌ Token invalide:', err.message);
      return res.status(403).json({ error: 'Token invalide ou expiré' });
    }

    if (typeof decoded !== 'object' || !decoded || !('id' in decoded)) {
      return res.status(403).json({ error: 'Token mal formé' });
    }

    req.user = {
      id: Number(decoded.id),
      email: String(decoded.email),
      role: String(decoded.role),
      nom: String(decoded.nom),
    };

    next();
  });
};

// Middleware d'autorisation par rôle
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Utilisateur non authentifié' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Accès interdit — rôle insuffisant' });
    }

    next();
  };
};