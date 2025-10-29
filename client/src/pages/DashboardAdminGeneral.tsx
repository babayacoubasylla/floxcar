// src/pages/DashboardAdminGeneral.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoice, FaHistory, FaChartBar, FaCheck, FaTimes } from 'react-icons/fa';
import api from '../api';

interface Depense {
  id: number;
  dateIntervention: string;
  codeParc: string;
  libelle: string;
  montant: number;
  soumisPar: { nom: string };
  valideParFinance?: { nom: string };
  valideParGestion?: { nom: string };
}

const DashboardAdminGeneral: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepenses();
  }, []);

  const fetchDepenses = async () => {
    try {
      const response = await api.get('/api/depenses/en-attente-admin');
      setDepenses(response.data);
    } catch (err) {
      console.error('Erreur lors du chargement des dépenses:', err);
      alert('❌ Impossible de charger les dépenses. Vérifiez votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleValidation = async (id: number) => {
    if (!window.confirm('✅ Confirmer la validation de cette dépense ?')) return;

    try {
      await api.patch(`/api/depenses/${id}/valider/admin`, {});
      alert('✅ Dépense validée avec succès.');
      setDepenses((prev) => prev.filter((d) => d.id !== id));
    } catch (err: any) {
      console.error('Erreur lors de la validation:', err);
      const msg =
        err.response?.data?.error ||
        err.response?.status === 400
          ? 'La dépense est déjà validée ou invalide.'
          : 'Erreur serveur. Veuillez réessayer.';
      alert(`❌ ${msg}`);
    }
  };

  const handleRejet = (id: number) => {
    alert('⚠️ La fonctionnalité de rejet n’est pas encore implémentée.');
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <p className="mt-2 text-gray-600">Chargement des dépenses...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Dashboard Administration</h1>
        <p className="text-gray-600 mt-2">
          Validez les dépenses déjà approuvées par la Finance et la Gestion.
        </p>
      </div>

      {/* Cartes d'action rapide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-700">Dépenses à valider</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{depenses.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <Link
            to="/admin/historique"
            className="flex items-center text-purple-700 hover:text-purple-900 font-medium"
          >
            <FaHistory className="mr-2 text-lg" />
            Historique des validations
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <Link
            to="/admin/statistiques"
            className="flex items-center text-green-700 hover:text-green-900 font-medium"
          >
            <FaChartBar className="mr-2 text-lg" />
            Statistiques
          </Link>
        </div>
      </div>

      {/* Tableau des dépenses */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <FaFileInvoice className="mr-2 text-blue-600" />
            Dépenses en attente de validation
          </h2>
        </div>

        {depenses.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <FaFileInvoice className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p>Aucune dépense à valider pour le moment.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Véhicule
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Libellé
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Montant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Soumis par
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Validations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {depenses.map((d) => (
                  <tr key={d.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(d.dateIntervention).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{d.codeParc}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">{d.libelle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {d.montant.toLocaleString('fr-FR')} FCFA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{d.soumisPar.nom}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <div className="text-green-700">✓ Finance: {d.valideParFinance?.nom || '—'}</div>
                      <div className="text-green-700">✓ Gestion: {d.valideParGestion?.nom || '—'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleValidation(d.id)}
                        className="inline-flex items-center px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition mr-2"
                      >
                        <FaCheck className="mr-1" /> Valider
                      </button>
                      <button
                        onClick={() => handleRejet(d.id)}
                        className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
                      >
                        <FaTimes className="mr-1" /> Rejeter
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAdminGeneral;