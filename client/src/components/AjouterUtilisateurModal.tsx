import React, { useState, useEffect } from 'react'
import api from '../api'

interface Utilisateur {
  id?: number
  nom: string
  email: string
  password?: string
  role: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onAjout: () => void
  onModification: () => void
  userInitial?: Utilisateur | null
}

const AjouterOuModifierUtilisateurModal: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  onAjout, 
  onModification, 
  userInitial 
}) => {
  const [formData, setFormData] = useState<Utilisateur>({ 
    nom: '', 
    email: '', 
    password: '',
    role: 'LOGISTICIEN'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (userInitial) {
      setFormData({
        nom: userInitial.nom || '',
        email: userInitial.email || '',
        password: '',
        role: userInitial.role || 'LOGISTICIEN'
      })
    } else {
      setFormData({ 
        nom: '', 
        email: '', 
        password: '',
        role: 'LOGISTICIEN'
      })
    }
  }, [userInitial])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (userInitial?.id) {
        // Modification
        await api.put(`/api/users/${userInitial.id}`, formData)
        onModification()
      } else {
        // Ajout
        await api.post('/api/users', formData)
        onAjout()
      }
      alert(userInitial?.id ? 'Utilisateur modifié avec succès !' : 'Utilisateur ajouté avec succès !')
      onClose()
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erreur lors de la sauvegarde')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {userInitial?.id ? 'Modifier un utilisateur' : 'Ajouter un utilisateur'}
        </h3>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={userInitial?.id ? "Laisser vide pour ne pas changer" : "Mot de passe requis"}
              required={!userInitial?.id}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rôle</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="LOGISTICIEN">Logisticien</option>
              <option value="FINANCE">Finance</option>
              <option value="ADMIN_GENERAL">Admin Général</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              disabled={loading}
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'En cours...' : userInitial?.id ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AjouterOuModifierUtilisateurModal