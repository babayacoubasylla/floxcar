import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaFileInvoice, FaChartBar, FaHistory, FaCheck, FaTimes } from 'react-icons/fa'
import api from '../api'

interface Depense {
  id: number
  dateIntervention: string
  typeVehicule: string
  codeParc: string
  typeDepense: string
  libelle: string
  montant: number
  soumisPar: {
    nom: string
  }
}

const DashboardFinance: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDepenses()
  }, [])

  const fetchDepenses = async () => {
    try {
      const response = await api.get('/api/depenses/en-attente-finance')
      setDepenses(response.data)
    } catch (err) {
      console.error("Erreur lors du chargement des dépenses:", err)
    } finally {
      setLoading(false)
    }
  }

  // ⬇️ LOGIQUE DE VALIDATION ET REJET ⬇️
  const handleAction = async (depenseId: number, action: 'valider' | 'rejeter') => {
    // Si vous souhaitez gérer un état de chargement pour l'action, faites-le ici
    try {
      // ⚠️ ASSUREZ-VOUS que ces endpoints existent côté serveur (PUT /api/depenses/:id/valider-finance)
      await api.put(`/api/depenses/${depenseId}/${action}-finance`);
      
      // Met à jour la liste en supprimant la dépense traitée
      setDepenses(prevDepenses => prevDepenses.filter(d => d.id !== depenseId));
      alert(`Dépense n°${depenseId} ${action}e avec succès.`);
      
    } catch (err) {
      console.error(`Erreur lors de l'action ${action} sur la dépense n°${depenseId}:`, err);
      // Gérer l'erreur de manière plus visible pour l'utilisateur
      alert(`Échec de l'action ${action}. Vérifiez la console et assurez-vous que le token n'est pas expiré.`);
    }
  }

  const handleValidation = (depenseId: number) => handleAction(depenseId, 'valider');
  const handleRejet = (depenseId: number) => handleAction(depenseId, 'rejeter');
  // ⬆️ FIN LOGIQUE DE GESTION ⬆️

  if (loading) return <div className="p-6 text-center">Chargement...</div>

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800">Dashboard Finance</h1>
        <p className="text-gray-600 mt-2">Bienvenue dans votre espace finance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <FaFileInvoice className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Dépenses à valider</h3>
          </div>
          <p className="text-gray-600 mt-3">Voir les dépenses en attente</p>
          <Link to="/depenses/finance" className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition font-medium">
            Voir les dépenses
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaChartBar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Statistiques</h3>
          </div>
          <p className="text-gray-600 mt-3">Voir les dépenses par mois</p>
          {/* ⬇️ LIEN CORRIGÉ ⬇️ */}
          <Link to="/finance/statistiques" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium">
            Voir les stats
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaHistory className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Historique</h3>
          </div>
          <p className="text-gray-600 mt-3">Voir toutes les dépenses</p>
          {/* ⬇️ LIEN CORRIGÉ ⬇️ */}
          <Link to="/finance/historique" className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition font-medium">
            Voir l'historique
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dépenses en attente de validation</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {depenses.map((depense) => (
                <tr key={depense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(depense.dateIntervention).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.codeParc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.typeDepense}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{depense.libelle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.montant.toLocaleString()} FCFA</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.soumisPar.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {/* ⬇️ AJOUT DE L'ÉVÉNEMENT onClick ⬇️ */}
                    <button 
                        onClick={() => handleValidation(depense.id)}
                        className="text-green-600 hover:text-green-900 mr-4 flex items-center"
                    >
                      <FaCheck className="mr-1" /> Valider
                    </button>
                    {/* ⬇️ AJOUT DE L'ÉVÉNEMENT onClick ⬇️ */}
                    <button 
                        onClick={() => handleRejet(depense.id)}
                        className="text-red-600 hover:text-red-900 flex items-center"
                    >
                      <FaTimes className="mr-1" /> Rejeter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardFinance