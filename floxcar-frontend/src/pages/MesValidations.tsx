// src/pages/MesValidations.tsx
import React, { useState, useEffect } from 'react';
import { fetchMesValidations } from '../api/depensesApi';
import { Depense } from '../types';

const MesValidations: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchMesValidations();
        setDepenses(data);
      } catch (err) {
        setError('Erreur chargement historique.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="p-8 text-center">Chargement...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mes validations</h1>
      
      {depenses.length === 0 ? (
        <p className="text-gray-600">Vous n’avez validé aucune dépense pour le moment.</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Demandeur</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {depenses.map(depense => (
                <tr key={depense.id}>
                  <td className="px-4 py-3 whitespace-nowrap">{new Date(depense.dateIntervention).toLocaleDateString()}</td>
                  <td className="px-4 py-3">{depense.libelle}</td>
                  <td className="px-4 py-3">{depense.soumisPar.nom}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      depense.statut === 'TERMINE' ? 'bg-green-100 text-green-800' :
                      depense.statut === 'REJETE' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {depense.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MesValidations;