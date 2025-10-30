import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileInvoice, FaHistory, FaPlus } from 'react-icons/fa' // Importez seulement les icônes nécessaires
import api from '../api'

const DashboardLogisticien: React.FC = () => {
  const [stats, setStats] = useState<{ total: number; valides: number; rejetees: number; enAttente: number } | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/api/depenses/stats')
        if (res.data?.scope === 'LOGISTICIEN') setStats(res.data)
      } catch (e) {
        console.error('Erreur stats logisticien', e)
      }
    }
    load()
  }, [])

  return (
    <div className="p-8 bg-background min-h-screen font-sans">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold font-display text-primary drop-shadow-chic">Dashboard Logisticien</h1>
        <p className="text-gray-500 mt-2 text-lg">Bienvenue dans votre espace logisticien.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mes dépenses */}
        <div className="bg-surface p-8 rounded-chic shadow-chic border-t-4 border-primary flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
          <div className="bg-primary/10 p-4 rounded-full mb-3">
            <FaFileInvoice className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mes dépenses</h3>
          <p className="text-gray-500 mb-4">Voir l'historique de vos dépenses</p>
          {/* ⬇️ LIEN CORRIGÉ ⬇️ */}
          <Link to="/depenses/mes-depenses" className="btn-primary w-full text-center py-2 rounded-lg font-bold text-lg shadow-card">
            Voir mes dépenses
          </Link>
        </div>

        {/* Créer une dépense (URL correcte, pas de changement) */}
        <div className="bg-surface p-8 rounded-chic shadow-chic border-t-4 border-green-500 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 p-4 rounded-full mb-3">
            <FaPlus className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Créer une dépense</h3>
          <p className="text-gray-500 mb-4">Soumettre une nouvelle demande</p>
          <Link to="/depense/nouvelle" className="btn-success w-full text-center py-2 rounded-lg font-bold text-lg shadow-card">
            Créer une dépense
          </Link>
        </div>

        {/* Historique */}
        <div className="bg-surface p-8 rounded-chic shadow-chic border-t-4 border-purple-500 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl">
          <div className="bg-purple-100 p-4 rounded-full mb-3">
            <FaHistory className="h-10 w-10 text-purple-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Historique</h3>
          <p className="text-gray-500 mb-4">Voir les dépenses terminées</p>
          {/* ⬇️ LIEN CORRIGÉ ⬇️ */}
          <Link to="/depenses/historique" className="bg-purple-600 hover:bg-purple-700 text-white w-full text-center py-2 rounded-lg font-bold text-lg shadow-card transition">
            Voir l'historique
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-surface p-8 rounded-chic shadow-chic">
        <h2 className="text-2xl font-bold text-primary mb-6 font-display">Statistiques récentes</h2>
        {stats ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">Total</div>
              <div className="text-2xl font-bold">{stats.total}</div>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">Validées</div>
              <div className="text-2xl font-bold text-green-600">{stats.valides}</div>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">Rejetées</div>
              <div className="text-2xl font-bold text-red-600">{stats.rejetees}</div>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">En attente</div>
              <div className="text-2xl font-bold text-yellow-600">{stats.enAttente}</div>
            </div>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center bg-background rounded-xl">
            <p className="text-gray-400 italic">Chargement...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardLogisticien;