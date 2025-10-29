import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

interface TypeDepense {
  id: number;
  nom: string;
}

interface Vehicule {
  id: number;
  immatriculation: string;
  type?: string;
}

const FormulaireDepense: React.FC = () => {
  const [types, setTypes] = useState<TypeDepense[]>([]);
  const [vehicules, setVehicules] = useState<Vehicule[]>([]);
  const [formData, setFormData] = useState({
    dateIntervention: '',
    codeParc: '',
    typeDepenseId: '',
    vehiculeId: '',
    libelle: '',
    quantite: 1,
    montant: 0,
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([fetchTypes(), fetchVehicules()]).finally(() => setLoading(false));
  }, []);

  const fetchTypes = async () => {
    try {
      const response = await api.get('/api/types-depense');
      setTypes(response.data);
    } catch (err: any) {
      console.error('Erreur types:', err);
    }
  };

  const fetchVehicules = async () => {
    try {
      const response = await api.get('/api/vehicules');
      setVehicules(response.data);
    } catch (err: any) {
      console.error('Erreur véhicules:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantite' || name === 'montant' ? Number(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    if (!formData.dateIntervention || !formData.codeParc || !formData.libelle || !formData.montant) {
      setError('Veuillez remplir tous les champs obligatoires.');
      setSubmitting(false);
      return;
    }

    if (!formData.typeDepenseId || !formData.vehiculeId) {
      setError('Veuillez sélectionner un type de dépense et un véhicule.');
      setSubmitting(false);
      return;
    }

    try {
      const payload = {
        dateIntervention: formData.dateIntervention,
        codeParc: formData.codeParc,
        typeDepenseId: Number(formData.typeDepenseId),
        vehiculeId: Number(formData.vehiculeId),
        libelle: formData.libelle,
        quantite: formData.quantite || 1,
        montant: formData.montant,
      };

      await api.post('/api/depenses', payload);
      alert('✅ Dépense soumise avec succès !');
      navigate('/depenses/mes-depenses');
    } catch (err: any) {
      console.error('Erreur soumission:', err);
      setError(
        err.response?.data?.error ||
        err.response?.data?.message ||
        'Erreur lors de la soumission. Vérifiez les données.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement...</div>;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Créer une dépense</h2>
        <p className="text-gray-600 mt-2">Remplissez le formulaire pour soumettre une dépense.</p>
      </div>

      {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date d'intervention</label>
            <input
              type="date"
              name="dateIntervention"
              value={formData.dateIntervention}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: AB-123-CD"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Véhicule</label>
          <select
            name="vehiculeId"
            value={formData.vehiculeId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un véhicule</option>
            {vehicules.map((v) => (
              <option key={v.id} value={v.id}>
                {v.immatriculation} {v.type ? `(${v.type})` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de dépense</label>
          <select
            name="typeDepenseId"
            value={formData.typeDepenseId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un type</option>
            {types.map((type) => (
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
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
            {submitting ? 'Envoi...' : 'Soumettre'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormulaireDepense;