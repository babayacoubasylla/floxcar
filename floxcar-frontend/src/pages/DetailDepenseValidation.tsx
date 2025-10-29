// src/pages/DetailDepenseValidation.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchDepenseById, validerDepense } from '../api/depensesApi';
import { Depense } from '../types';
import { getUser } from '../utils/auth';

const DetailDepenseValidation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [depense, setDepense] = useState<Depense | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [commentaire, setCommentaire] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false); // 🔒 Verrou visuel

  const user = getUser();
  const isValidator = user && [
    'CONTROLEUR_FINANCIER',
    'CONTROLEUR_GESTION',
    'RESPONSABLE_ADMIN',
    'ADMIN_GENERAL',
    'DG',
    'SUPER_ADMIN'
  ].includes(user.role);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const data = await fetchDepenseById(parseInt(id));
        setDepense(data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement de la dépense.');
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleValidation = async (action: 'valider' | 'rejeter') => {
    if (!depense || submitting) return; // 🔒 Empêche les doubles clics

    setSubmitting(true);
    try {
      await validerDepense(depense.id, action, commentaire);
      alert(`Dépense ${action === 'valider' ? 'validée' : 'rejetée'} avec succès.`);
      navigate('/depenses/a-pourvoir');
    } catch (err: any) {
      const message = err.response?.data?.error || `Échec de la ${action}. Veuillez réessayer.`;
      alert(message);
    } finally {
      setSubmitting(false); // 🔓 Déverrouille après réponse
    }
  };

  if (loading) return <div className="p-8 text-center">Chargement...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!depense) return <div className="p-8 text-center">Dépense non trouvée.</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Détail de la dépense</h1>
        <p className="text-gray-600">ID : {depense.id}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        {/* Détails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div><h3 className="text-sm font-medium text-gray-500">Date</h3><p>{new Date(depense.dateIntervention).toLocaleDateString()}</p></div>
          <div><h3 className="text-sm font-medium text-gray-500">Libellé</h3><p>{depense.libelle}</p></div>
          <div><h3 className="text-sm font-medium text-gray-500">Type</h3><p>{depense.typeDepense.nom}</p></div>
          <div><h3 className="text-sm font-medium text-gray-500">Montant</h3><p>{depense.montant.toLocaleString()} FCFA</p></div>
          <div><h3 className="text-sm font-medium text-gray-500">Véhicule</h3><p>{depense.vehicule.immatriculation}</p></div>
          <div><h3 className="text-sm font-medium text-gray-500">Demandeur</h3><p>{depense.soumisPar.nom}</p></div>
        </div>

        {/* Statut */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500">Statut</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
            depense.statut === 'TERMINE' ? 'bg-green-100 text-green-800' :
            depense.statut === 'REJETE' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {depense.statut}
          </span>
        </div>

        {/* Historique validations */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Historique</h3>
          <div className="space-y-2 text-sm">
            {[
              { label: 'Finance', user: depense.valideParControleurFinancier, comment: depense.commentaireControleurFinancier },
              { label: 'Gestion', user: depense.valideParControleurGestion, comment: depense.commentaireControleurGestion },
              { label: 'Resp. Admin', user: depense.valideParResponsableAdmin, comment: depense.commentaireResponsableAdmin },
              { label: 'Admin Général', user: depense.valideParAdminGeneral, comment: depense.commentaireAdminGeneral },
              { label: 'DG', user: depense.valideParDG, comment: depense.commentaireDG },
            ].map(({ label, user, comment }) => (
              <div key={label}>
                <div className="flex justify-between">
                  <span>{label} :</span>
                  <span>{user ? `✅ ${user.nom}` : 'En attente'}</span>
                </div>
                {comment && <div className="text-gray-600 ml-4">💬 {comment}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire validation (réservé) */}
        {isValidator && depense.statut === 'SOUMIS' && (
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Votre validation</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Commentaire (optionnel)</label>
              <textarea
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                disabled={submitting}
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleValidation('valider')}
                disabled={submitting}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm font-medium"
              >
                {submitting ? 'Validation...' : 'Valider'}
              </button>
              <button
                onClick={() => handleValidation('rejeter')}
                disabled={submitting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 text-sm font-medium"
              >
                {submitting ? 'Rejet...' : 'Rejeter'}
              </button>
            </div>
          </div>
        )}
      </div>

      <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">
        ← Retour
      </button>
    </div>
  );
};

export default DetailDepenseValidation;