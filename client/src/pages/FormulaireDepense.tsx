import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

interface TypeDepense {
  id: number
  nom: string
}

const FormulaireDepense: React.FC = () => {
  const [types, setTypes] = useState<TypeDepense[]>([])
  const [formData, setFormData] = useState({
    dateIntervention: '',
    typeVehicule: '', // Cette propriété semble inutile si vous utilisez vehiculeId, à vérifier côté backend
    codeParc: '',
    typeDepenseId: '',
    vehiculeId: '',
    libelle: '',
    quantite: 1,
    montant: 0,
  })
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchTypes()
  }, [])

  const fetchTypes = async () => {
    try {
      // ⚠️ Vérifiez si l'API est correcte. Si elle nécessite une authentification, 
      // et que le token est expiré, cette ligne pourrait causer un 401.
      const response = await api.get('/api/types-depense') 
      setTypes(response.data)
    } catch (err) {
      setError('Erreur lors du chargement des types de dépense')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantite' || name === 'montant' ? Number(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      // Conversion des ids en nombre
      const dataToSend = {
        ...formData,
        typeDepenseId: Number(formData.typeDepenseId),
        vehiculeId: Number(formData.vehiculeId)
      }
      await api.post('/api/depenses', dataToSend)
      alert('Dépense soumise avec succès !')
      
      // ⬇️ CORRECTION DE LA REDIRECTION ⬇️
      navigate('/depenses/mes-depenses') 
      
    } catch (err: any) {
      // Si l'erreur est un 401, il se pourrait que l'intercepteur gère déjà la déconnexion.
      setError(err.response?.data?.error || 'Erreur lors de la soumission')
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <div className="p-6 text-center">Chargement...</div>

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Créer une dépense</h2>
        <p className="text-gray-600 mt-2">Remplissez le formulaire ci-dessous pour soumettre une dépense.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date d'intervention</label>
            <input
              type="date"
              name="dateIntervention"
              value={formData.dateIntervention}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Code Parc</label>
            <input
              type="text"
              name="codeParc"
              value={formData.codeParc}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="AB-123-CD"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ID du véhicule</label>
            <input
              type="number"
              name="vehiculeId"
              value={formData.vehiculeId}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ID du véhicule"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de dépense</label>
          <select
            name="typeDepenseId"
            value={formData.typeDepenseId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un type</option>
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.nom}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Libellé</label>
          <input
            type="text"
            name="libelle"
            value={formData.libelle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Détail de l'intervention"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantité</label>
            <input
              type="number"
              name="quantite"
              value={formData.quantite}
              onChange={handleChange}
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Montant (FCFA)</label>
            <input
              type="number"
              name="montant"
              value={formData.montant}
              onChange={handleChange}
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Pièce justificative (optionnel)</label>
          <input
            type="file"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            // Le bouton annuler renvoie aussi vers la nouvelle route
            onClick={() => navigate('/depenses/mes-depenses')}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? 'Envoi en cours...' : 'Soumettre la dépense'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormulaireDepense