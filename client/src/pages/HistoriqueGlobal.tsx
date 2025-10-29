// client/src/pages/HistoriqueGlobal.tsx
import React, { useState, useEffect } from 'react';
import api from '../api';

interface Depense {
  id: number;
  dateIntervention: string;
  codeParc: string;
  typeDepense: { nom: string };
  libelle: string;
  montant: number;
  statut: string;
  soumisPar: { nom: string };
  valideParFinance?: { nom: string };
  valideParGestion?: { nom: string };
  valideParAdmin?: { nom: string };
}

const HistoriqueGlobal: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistorique();
  }, []);

  const fetchHistorique = async () => {
    try {
      console.log('🔍 [Historique] Appel API...');
      // ✅ URL CORRECTE qui correspond à la route ajoutée
      const response = await api.get('/api/depenses/historique');
      setDepenses(response.data);
    } catch (err: any) {
      console.error('💥 [Historique] Erreur:', err);
      if (err.response?.status === 401) {
        setError('Session expirée. Veuillez vous reconnecter.');
      } else if (err.response?.status === 404) {
        setError('Page historique non trouvée (404)');
      } else {
        setError('Erreur lors du chargement de l\'historique');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement de l'historique...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Historique global</h2>
        <p className="text-gray-600 mt-2">Toutes les dépenses du parc automobile.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gestion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Admin</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {depenses.map((depense) => (
                <tr key={depense.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(depense.dateIntervention).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.codeParc}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.typeDepense.nom}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{depense.libelle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.montant.toLocaleString()} FCFA</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      depense.statut === 'TERMINE' ? 'bg-green-100 text-green-800' :
                      depense.statut === 'VALIDE_GESTION' ? 'bg-blue-100 text-blue-800' :
                      depense.statut === 'VALIDE_FINANCE' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {depense.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.soumisPar.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.valideParFinance?.nom || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.valideParGestion?.nom || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.valideParAdmin?.nom || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoriqueGlobal;