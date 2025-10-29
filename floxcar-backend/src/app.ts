// floxcar-backend/src/app.ts
import express, { ErrorRequestHandler } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes';
import depenseRoutes from './routes/depenses.routes';
import userRoutes from './routes/users.routes';
import vehiculeRoutes from './routes/vehicules.routes';
import commentaireRoutes from './routes/commentaires.routes';
import documentRoutes from './routes/documents.routes';
import historiqueRoutes from './routes/historique.routes';
import typeDepenseRoutes from './routes/types-depense.routes';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://floxcar-frontend.onrender.com'
    ],
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/depenses', depenseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicules', vehiculeRoutes);
app.use('/api/commentaires', commentaireRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/historique', historiqueRoutes);
app.use('/api/types-depense', typeDepenseRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
};

app.use(errorHandler);

export { app };