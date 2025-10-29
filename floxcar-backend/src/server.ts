// src/server.ts
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import { app } from './app'; // Votre application Express existante

// --- Configuration Socket.IO ---
const httpServer = createServer(app); // Lier le serveur HTTP à l'application Express

// Configuration de Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware pour Socket.IO (optionnel, mais utile pour l'authentification)
io.use((socket, next) => {
  // Exemple d'authentification basique via handshake.auth.token
  // Remplacez ceci par votre logique d'authentification JWT réelle si nécessaire
  // const token = socket.handshake.auth.token; // ou headers.authorization
  // if (token && estTokenValide(token)) {
  //   socket.userId = userIdExtraitDuToken;
  //   next();
  // } else {
  //   next(new Error('Authentification échouée'));
  // }
  // Pour l'instant, on accepte toutes les connexions, mais en production,
  // authentifier le socket est crucial !
  console.log(`Socket ${socket.id} tente de se connecter.`);
  next();
});

// Gestion des connexions Socket.IO
io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté via Socket.IO', socket.id);

  // Exemple : Joindre une "room" basée sur l'ID de l'utilisateur connecté (nécessite l'authentification du socket)
  // const userId = socket.userId; // Si authentifié via le middleware
  // if (userId) {
  //   socket.join(userId.toString());
  //   console.log(`Socket ${socket.id} a rejoint la room ${userId}`);
  // }

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté', socket.id);
  });
});

// --- Fin Configuration Socket.IO ---

const PORT = parseInt(process.env.PORT || '5000', 10);

// Écoute sur 0.0.0.0 → accessible depuis le réseau local
// Utilisez httpServer au lieu de app pour écouter, car c'est le serveur HTTP qui gère les connexions WebSocket
httpServer.listen(PORT, '0.0.0.0', () => {
  const local = `http://localhost:${PORT}`;
  const network = `http://<ton-ip-locale>:${PORT}`;
  console.log(`✅ Serveur en écoute (HTTP + WebSocket):`);
  console.log(`   Local : ${local}`);
  console.log(`   Réseau : ${network}`);
  console.log(`💡 Pour trouver ton IP locale : ipconfig (Windows) ou ifconfig (Mac/Linux)`);
});

// Rendre l'instance io disponible pour les contrôleurs
export { io };