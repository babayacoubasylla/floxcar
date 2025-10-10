// client/src/pages/GestionTypesDepense.tsx

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'
import AjouterOuModifierTypeModal from '../components/AjouterOuModifierTypeModal'

interface TypeDepense {
  id: number
  nom: string
  description: string
}

const GestionTypesDepense: React.FC = () => {
  const [types, setTypes] = useState<TypeDepense[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingType, setEditingType] = useState<TypeDepense | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchTypes()
  }, [])

  const fetchTypes = async () => {
    try {
      const response = await api.get('/api/types-depense')
      setTypes(response.data)
    } catch (err) {
      setError('Erreur lors du chargement des types de dépense')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAjout = () => {
    fetchTypes() // Rafraîchir la liste
  }

  const handleModification = () => {
    fetchTypes() // Rafraîchir la liste
    setEditingType(null)
  }

  const handleSuppression = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce type ?')) {
      api.delete(`/api/types-depense/${id}`)
        .then(() => fetchTypes())
        .catch(err => console.error(err))
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement des types de dépense...</div>
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des types de dépense</h2>
        <p className="text-gray-600 mt-2">Ajouter, modifier ou supprimer des types de dépense.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Liste des types de dépense</h3>
          <button
            onClick={() => {
              setEditingType(null)
              setIsModalOpen(true)
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            + Ajouter un type
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {types.map((type) => (
                <tr key={type.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{type.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type.description || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingType(type)
                        setIsModalOpen(true)
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleSuppression(type.id)}
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
      <AjouterOuModifierTypeModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingType(null)
        }}
        onAjout={handleAjout}
        onModification={handleModification}
        typeInitial={editingType}
      />
    </div>
  )
}

export default GestionTypesDepense