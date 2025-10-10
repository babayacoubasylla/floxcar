import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'
import vehiculesRoutes from './routes/vehicules.routes'
import usersRoutes from './routes/users.routes'
import typesDepenseRoutes from './routes/types-depense.routes'
import depensesRoutes from './routes/depenses.routes'
import documentsRoutes from './routes/documents.routes'
import commentairesRoutes from './routes/commentaires.routes'
import historiqueRoutes from './routes/historique.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/vehicules', vehiculesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/types-depense', typesDepenseRoutes)
app.use('/api/depenses', depensesRoutes)
app.use('/api/documents', documentsRoutes)
app.use('/api/commentaires', commentairesRoutes)
app.use('/api/historique', historiqueRoutes)

app.get('/', (req, res) => {
  res.send('🚀 Bienvenue sur l’API FLOXCAR !')
})

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`)
})