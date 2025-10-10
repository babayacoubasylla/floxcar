import React, { useState, useEffect } from 'react'
import api from '../api'
import AjouterOuModifierUtilisateurModal from '../components/AjouterOuModifierUtilisateurModal'

interface Utilisateur {
  id: number
  nom: string
  email: string
  role: string
  createdAt: string
}

const GestionUtilisateurs: React.FC = () => {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<Utilisateur | null>(null)

  useEffect(() => {
    fetchUtilisateurs()
  }, [])

  const fetchUtilisateurs = async () => {
    try {
      const response = await api.get('/api/users')
      setUtilisateurs(response.data)
    } catch (err) {
      setError('Erreur lors du chargement des utilisateurs')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAjout = () => {
    fetchUtilisateurs() // Rafraîchir la liste
  }

  const handleModification = () => {
    fetchUtilisateurs() // Rafraîchir la liste
    setEditingUser(null)
  }

  const handleSuppression = (id: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      api.delete(`/api/users/${id}`)
        .then(() => fetchUtilisateurs())
        .catch(err => console.error(err))
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement des utilisateurs...</div>
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des utilisateurs</h2>
        <p className="text-gray-600 mt-2">Ajouter, modifier ou supprimer des utilisateurs.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Liste des utilisateurs</h3>
          <button
            onClick={() => {
              setEditingUser(null)
              setIsModalOpen(true)
            }}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            + Ajouter un utilisateur
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'ajout</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {utilisateurs.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'ADMIN_GENERAL' ? 'bg-red-100 text-red-800' :
                      user.role === 'FINANCE' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEditingUser(user)
                        setIsModalOpen(true)
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleSuppression(user.id)}
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
      <AjouterOuModifierUtilisateurModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingUser(null)
        }}
        onAjout={handleAjout}
        onModification={handleModification}
        userInitial={editingUser}
      />
    </div>
  )
}

export default GestionUtilisateurs