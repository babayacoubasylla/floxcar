import React, { useState, useEffect } from 'react'
import api from '../api'

interface TypeDepense {
  id?: number
  nom: string
  description: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onAjout: () => void
  onModification: () => void
  typeInitial?: TypeDepense | null
}

const AjouterOuModifierTypeModal: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  onAjout, 
  onModification, 
  typeInitial 
}) => {
  const [formData, setFormData] = useState<TypeDepense>({ 
    nom: '', 
    description: '' 
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeInitial) {
      setFormData({
        nom: typeInitial.nom || '',
        description: typeInitial.description || ''
      })
    } else {
      setFormData({ nom: '', description: '' })
    }
  }, [typeInitial])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      if (typeInitial?.id) {
        // Modification
        await api.put(`/api/types-depense/${typeInitial.id}`, formData)
        onModification()
      } else {
        // Ajout
        await api.post('/api/types-depense', formData)
        onAjout()
      }
      alert(typeInitial?.id ? 'Type modifié avec succès !' : 'Type ajouté avec succès !')
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
          {typeInitial?.id ? 'Modifier un type' : 'Ajouter un type'}
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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description (optionnel)</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
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
              {loading ? 'En cours...' : typeInitial?.id ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AjouterOuModifierTypeModal