// src/pages/DepensesAPourvoir.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepensesAPourvoir } from '../api/depensesApi';
import { Depense } from '../types';

const DepensesAPourvoir: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDepensesAPourvoir();
        setDepenses(data);
      } catch (err) {
        setError('Erreur lors du chargement des dépenses.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'TERMINE': return 'bg-green-100 text-green-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (loading) return <div className="p-8 text-center">Chargement des dépenses en attente...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dépenses à pourvoir</h1>
        <p className="text-gray-600">Liste des dépenses nécessitant votre validation</p>
      </div>

      {depenses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-600">Aucune dépense en attente de votre validation.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Demandeur</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {depenses.map((depense) => (
                  <tr key={depense.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{new Date(depense.dateIntervention).toLocaleDateString()}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{depense.libelle}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{depense.typeDepense.nom}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{depense.montant.toLocaleString()} FCFA</td>
                    <td className="px-4 py-3 whitespace-nowrap">{depense.soumisPar.nom}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutColor(depense.statut)}`}>
                        {depense.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Link
                        to={`/depenses/${depense.id}/valider`}
                        className="text-indigo-600 hover:text-indigo-900 font-medium"
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
    </div>
  );
};

export default DepensesAPourvoir;