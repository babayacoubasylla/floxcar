// src/pages/MesDepenses.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepensesByUser } from '../api/depensesApi';
import type { Depense } from '../types';

const MesDepenses: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadDepenses = async () => {
      try {
        const data = await fetchDepensesByUser();
        setDepenses(data);
      } catch (err) {
        setError('Erreur lors du chargement de vos dépenses');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadDepenses();
  }, []);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'TERMINE': return 'bg-green-100 text-green-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement de vos dépenses...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mes dépenses</h1>
          <p className="text-gray-600">Historique de vos dépenses soumises</p>
        </div>
        <Link
          to="/depense/nouvelle"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          + Nouvelle dépense
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Véhicule</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Détail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {depenses.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    Vous n’avez soumis aucune dépense pour le moment.
                  </td>
                </tr>
              ) : (
                depenses.map((depense) => (
                  <tr key={depense.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(depense.dateIntervention).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {depense.vehicule.immatriculation} ({depense.vehicule.codeParc})
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {depense.typeDepense.nom}
                    </td>
                    <td className="px-4 py-3 max-w-xs truncate">
                      {depense.libelle}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {depense.montant.toLocaleString()} FCFA
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutColor(depense.statut)}`}>
                        {depense.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Link
                        to={`/depenses/${depense.id}/valider`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Voir le détail
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MesDepenses;