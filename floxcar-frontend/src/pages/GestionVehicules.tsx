import React, { useState, useEffect } from 'react'
import api from '../api'
import AjouterOuModifierVehiculeModal from '../components/AjouterOuModifierVehiculeModal'

interface Vehicule {
  id: number
  type: string
  immatriculation: string
  codeParc: string
  description: string
  statut: string
  createdAt: string
}

const GestionVehicules: React.FC = () => {
  const [vehicules, setVehicules] = useState<Vehicule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingVehicule, setEditingVehicule] = useState<Vehicule | null>(null)

  useEffect(() => {
    fetchVehicules()
  }, [])

  const fetchVehicules = async () => {
    try {
      const response = await api.get('/api/vehicules')
      setVehicules(response.data)
    } catch (err) {
      setError('Erreur lors du chargement des véhicules')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAjout = () => {
    fetchVehicules() // Rafraîchir la liste
  }

  const handleModification = () => {
    fetchVehicules() // Rafraîchir la liste
    setEditingVehicule(null)
  }

  const handleSuppression = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      api.delete(`/api/vehicules/${id}`)
        .then(() => fetchVehicules())
        .catch(err => console.error(err))
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement des véhicules...</div>
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des véhicules</h2>
        <p className="text-gray-600 mt-2">Ajouter, modifier ou supprimer des véhicules.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Liste des véhicules</h3>
          <button
            onClick={() => {
              setEditingVehicule(null)
              setIsModalOpen(true)
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            + Ajouter un véhicule
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Immatriculation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code Parc</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicules.map((vehicule) => (
                <tr key={vehicule.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vehicule.immatriculation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicule.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicule.codeParc || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      vehicule.statut === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {vehicule.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingVehicule(vehicule)
                        setIsModalOpen(true)
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleSuppression(vehicule.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal d'ajout/modification */}
      <AjouterOuModifierVehiculeModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingVehicule(null)
        }}
        onAjout={handleAjout}
        onModification={handleModification}
        vehiculeInitial={editingVehicule}
      />
    </div>
  )
}

export default GestionVehicules