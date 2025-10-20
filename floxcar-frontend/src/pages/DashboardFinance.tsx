// src/pages/DashboardFinance.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepensesAPourvoir } from '../api/depensesApi';
import { Depense } from '../types';

const DashboardFinance: React.FC = () => {
  const [depensesAValider, setDepensesAValider] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchDepensesAPourvoir();
        setDepensesAValider(data);
      } catch (err) {
        setError('Impossible de charger les dépenses.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="p-8 text-center">Chargement des dépenses en attente...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Contrôleur Financier</h1>
        <p className="text-gray-600 mt-2">Validez ou rejetez les dépenses soumises par les logisticiens.</p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Dépenses à traiter</h3>
          <p className="text-3xl font-bold text-blue-600">{depensesAValider.length}</p>
        </div>
      </div>

      {/* Action rapide */}
      <div className="mb-8">
        <Link
          to="/depenses/a-pourvoir"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition"
        >
          Voir toutes les dépenses à valider
        </Link>
      </div>

      {/* Lien vers mes validations */}
      <div className="mb-4">
        <Link
          to="/depenses/mes-validations"
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Voir mes validations
        </Link>
      </div>

      {/* Liste récente */}
      {depensesAValider.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Dernières dépenses à valider</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demandeur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {depensesAValider.slice(0, 5).map((depense) => (
                  <tr key={depense.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(depense.dateIntervention).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{depense.libelle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{depense.soumisPar.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{depense.montant.toLocaleString()} FCFA</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/depenses/${depense.id}/valider`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Valider
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {depensesAValider.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-600">Aucune dépense en attente de validation.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardFinance;