import React, { useState, useEffect } from 'react'
import api from '../api'

interface Vehicule {
  id?: number
  type: string
  immatriculation: string
  codeParc: string
  description: string
  statut: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onAjout: () => void
  onModification: () => void
  vehiculeInitial?: Vehicule | null
}

const AjouterOuModifierVehiculeModal: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  onAjout, 
  onModification, 
  vehiculeInitial 
}) => {
  const [formData, setFormData] = useState<Vehicule>({ 
    type: '', 
    immatriculation: '', 
    codeParc: '', 
    description: '', 
    statut: 'actif'
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (vehiculeInitial) {
      setFormData({
        type: vehiculeInitial.type || '',
        immatriculation: vehiculeInitial.immatriculation || '',
        codeParc: vehiculeInitial.codeParc || '',
        description: vehiculeInitial.description || '',
        statut: vehiculeInitial.statut || 'actif'
      })
    } else {
      setFormData({ 
        type: '', 
        immatriculation: '', 
        codeParc: '', 
        description: '', 
        statut: 'actif'
      })
    }
  }, [vehiculeInitial])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      if (vehiculeInitial?.id) {
        // Modification
        await api.put(`/api/vehicules/${vehiculeInitial.id}`, formData)
        onModification()
      } else {
        // Ajout
        await api.post('/api/vehicules', formData)
        onAjout()
      }
      alert(vehiculeInitial?.id ? 'Véhicule modifié avec succès !' : 'Véhicule ajouté avec succès !')
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
          {vehiculeInitial?.id ? 'Modifier un véhicule' : 'Ajouter un véhicule'}
        </h3>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Immatriculation</label>
            <input
              type="text"
              name="immatriculation"
              value={formData.immatriculation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Code Parc</label>
            <input
              type="text"
              name="codeParc"
              value={formData.codeParc}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
            <select
              name="statut"
              value={formData.statut}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="actif">Actif</option>
              <option value="inactif">Inactif</option>
              <option value="en_reparation">En réparation</option>
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
              {loading ? 'En cours...' : vehiculeInitial?.id ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AjouterOuModifierVehiculeModal