import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import vehiculesRoutes from './routes/vehicules.routes.js';
import usersRoutes from './routes/users.routes.js';
import typesDepenseRoutes from './routes/types-depense.routes.js';
import depensesRoutes from './routes/depenses.routes.js';
import documentsRoutes from './routes/documents.routes.js';
import commentairesRoutes from './routes/commentaires.routes.js';
import historiqueRoutes from './routes/historique.routes.js';
import maintenanceRoutes from './routes/maintenance.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicules', vehiculesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/types-depense', typesDepenseRoutes);
app.use('/api/depenses', depensesRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/commentaires', commentairesRoutes);
app.use('/api/historique', historiqueRoutes); // ✅ Bien montée

app.get('/', (req, res) => {
  res.send('🚀 Bienvenue sur l’API FLOXCAR !');
});

// Monte la route de maintenance UNIQUEMENT si autorisée explicitement
if (process.env.ALLOW_DB_RESET === 'true') {
  app.use('/admin', maintenanceRoutes);
}

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});