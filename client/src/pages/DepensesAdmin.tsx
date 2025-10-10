// client/src/pages/DepensesAdmin.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

// Interface pour typer les objets dépense reçus de l'API
interface Depense {
  id: number;
  dateIntervention: string;
  typeVehicule: string;
  codeParc: string;
  typeDepense: string;
  libelle: string;
  montant: number;
  soumisPar: {
    nom: string;
  };
  // valideParFinance peut être null si la dépense n'a pas encore été validée par la finance
  valideParFinance: {
    nom: string;
  } | null;
}

const DepensesAdmin: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [depenseId, setDepenseId] = useState<number | null>(null);
  const [action, setAction] = useState<'accepter' | 'rejeter' | 'reporter' | null>(null);
  const [dateReport, setDateReport] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepenses();
  }, []);

  /**
   * Récupère la liste des dépenses en attente de validation admin depuis le backend.
   */
  const fetchDepenses = async () => {
    try {
      // Appel API pour obtenir les dépenses
      const response = await api.get('/api/depenses/en-attente-admin');
      console.log('Données reçues de /api/depenses/en-attente-admin:', response.data); // Log pour débogage
      setDepenses(response.data);
    } catch (err: any) {
      console.error('Erreur lors du chargement des dépenses:', err);
      // Message d'erreur plus détaillé si possible
      const errorMsg = err.response?.data?.error || err.message || 'Erreur inconnue';
      setError(`Erreur lors du chargement des dépenses : ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Gère la validation/rejet/report d'une dépense par l'admin.
   */
  const handleValidation = async () => {
    // Vérification de base
    if (!depenseId || !action) return;

    try {
      // Appel API pour mettre à jour le statut de la dépense
      await api.put(`/api/depenses/${depenseId}/valider-admin`, {
        statut: action,
        commentaire: commentaire || undefined, // Envoyer undefined si vide
        dateReport: action === 'reporter' ? dateReport : null,
      });
      
      alert('Dépense traitée avec succès !');
      
      // Réinitialiser les états du modal
      setDepenseId(null);
      setAction(null);
      setCommentaire('');
      setDateReport('');
      
      // Recharger la liste pour refléter le changement
      fetchDepenses();
    } catch (err: any) {
      console.error('Erreur lors du traitement de la dépense:', err);
      const errorMsg = err.response?.data?.error || err.message || 'Erreur inconnue';
      setError(`Erreur lors du traitement de la dépense : ${errorMsg}`);
    }
  };

  // Affichage pendant le chargement
  if (loading) return <div className="p-6 text-center">Chargement des dépenses...</div>;
  
  // Affichage en cas d'erreur
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Dépenses à valider</h2>
        <p className="text-gray-600 mt-2">Liste des dépenses validées par la finance.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="overflow-x-auto">
          {/* Tableau des dépenses */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validé par (Finance)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Boucle sur les dépenses */}
              {depenses.map((depense) => (
                <tr key={depense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(depense.dateIntervention).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.codeParc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.typeDepense}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{depense.libelle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.montant.toLocaleString()} FCFA</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.soumisPar.nom}</td>
                  {/* Gestion du cas où valideParFinance est null */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {depense.valideParFinance?.nom || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {/* Boutons d'action */}
                    <button
                      onClick={() => {
                        setDepenseId(depense.id);
                        setAction('accepter');
                      }}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      Accepter
                    </button>
                    <button
                      onClick={() => {
                        setDepenseId(depense.id);
                        setAction('rejeter');
                      }}
                      className="text-red-600 hover:text-red-900 mr-4"
                    >
                      Rejeter
                    </button>
                    <button
                      onClick={() => {
                        setDepenseId(depense.id);
                        setAction('reporter');
                      }}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      Reporter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de validation/rejet/report */}
      {depenseId && action && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {action === 'accepter'
                ? 'Accepter la dépense'
                : action === 'rejeter'
                ? 'Rejeter la dépense'
                : 'Reporter la dépense'}
            </h3>
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir{' '}
              {action === 'accepter'
                ? 'accepter'
                : action === 'rejeter'
                ? 'rejeter'
                : 'reporter'}{' '}
              cette dépense ?
            </p>
            
            {/* Champ commentaire */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Commentaire (optionnel)
              </label>
              <textarea
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Ajouter un commentaire..."
              />
            </div>
            
            {/* Champ date de report (uniquement pour 'reporter') */}
            {action === 'reporter' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de report
                </label>
                <input
                  type="date"
                  value={dateReport}
                  onChange={(e) => setDateReport(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            
            {/* Boutons du modal */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setDepenseId(null);
                  setAction(null);
                  setCommentaire('');
                  setDateReport('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={handleValidation}
                className={`px-4 py-2 rounded-lg text-white ${
                  action === 'accepter'
                    ? 'bg-green-600 hover:bg-green-700'
                    : action === 'rejeter'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-yellow-600 hover:bg-yellow-700'
                }`}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepensesAdmin;