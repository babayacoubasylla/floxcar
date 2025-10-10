// client/src/pages/DepensesFinance.tsx

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

const DepensesFinance: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [commentaire, setCommentaire] = useState('')
  const [depenseId, setDepenseId] = useState<number | null>(null)
  const [action, setAction] = useState<'valider' | 'rejeter' | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchDepenses()
  }, [])

  const fetchDepenses = async () => {
    try {
      const response = await api.get('/api/depenses/en-attente-finance')
      setDepenses(response.data)
    } catch (err) {
      setError('Erreur lors du chargement des dépenses')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleValidation = async () => {
    if (!depenseId || !action) return

    try {
      await api.put(`/api/depenses/${depenseId}/valider-finance`, {
        statut: action,
        commentaire
      })
      alert('Dépense traitée avec succès !')
      setDepenseId(null)
      setAction(null)
      setCommentaire('')
      fetchDepenses() // Rafraîchir la liste
    } catch (err) {
      setError('Erreur lors du traitement de la dépense')
      console.error(err)
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement des dépenses...</div>
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dépenses à valider</h2>
        <p className="text-gray-600 mt-2">Liste des dépenses soumises par les logisticiens.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
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
                    <button
                      onClick={() => {
                        setDepenseId(depense.id)
                        setAction('valider')
                      }}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      Valider
                    </button>
                    <button
                      onClick={() => {
                        setDepenseId(depense.id)
                        setAction('rejeter')
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Rejeter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de validation */}
      {depenseId && action && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {action === 'valider' ? 'Valider la dépense' : 'Rejeter la dépense'}
            </h3>
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir {action === 'valider' ? 'valider' : 'rejeter'} cette dépense ?
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Commentaire (optionnel)</label>
              <textarea
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Ajouter un commentaire..."
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setDepenseId(null)
                  setAction(null)
                  setCommentaire('')
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={handleValidation}
                className={`px-4 py-2 rounded-lg text-white ${
                  action === 'valider' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DepensesFinance