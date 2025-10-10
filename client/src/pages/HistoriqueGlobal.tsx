import React, { useState, useEffect } from 'react'
import api from '../api'

interface Depense {
  id: number
  dateIntervention: string
  typeVehicule: string
  codeParc: string
  typeDepense: string
  libelle: string
  montant: number
  statut: string
  soumisPar: {
    nom: string
  }
  valideParFinance?: {
    nom: string
  }
  valideParAdmin?: {
    nom: string
  }
}

const HistoriqueGlobal: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchHistorique()
  }, [])

  const fetchHistorique = async () => {
    try {
      const response = await api.get('/api/historique/global')
      setDepenses(response.data)
    } catch (err) {
      setError('Erreur lors du chargement de l\'historique')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement de l'historique...</div>
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Historique global</h2>
        <p className="text-gray-600 mt-2">Toutes les dépenses du parc automobile.</p>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validé par (Fin.)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validé par (Admin)</th>
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      depense.statut === 'TERMINE' ? 'bg-green-100 text-green-800' :
                      depense.statut === 'VALIDE_ADMIN' ? 'bg-blue-100 text-blue-800' :
                      depense.statut === 'VALIDE_FINANCE' ? 'bg-yellow-100 text-yellow-800' :
                      depense.statut === 'REJETE_ADMIN' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {depense.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.soumisPar.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.valideParFinance?.nom || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.valideParAdmin?.nom || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoriqueGlobal