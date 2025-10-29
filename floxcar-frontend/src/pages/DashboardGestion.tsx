// src/pages/DashboardGestion.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepensesAPourvoir } from '../api/depensesApi';
import { Depense } from '../types';

const DashboardGestion: React.FC = () => {
  const [depensesAValider, setDepensesAValider] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepensesAPourvoir().then(setDepensesAValider).finally(() => setLoading(false));
  }, []);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'TERMINE': return 'bg-green-100 text-green-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord Contrôleur de Gestion</h1>
        <p className="text-gray-600">Validez les dépenses liées à la gestion opérationnelle.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-600">Dépenses à valider</p>
          <p className="text-2xl font-bold text-blue-600">{depensesAValider.length}</p>
        </div>
      </div>

      <div className="mb-6">
        <Link
          to="/depenses/a-pourvoir"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
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

      {depensesAValider.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Libellé</th>
                  <th className="px-4 py-2 text-left">Demandeur</th>
                  <th className="px-4 py-2 text-left">Montant</th>
                  <th className="px-4 py-2 text-left">Statut</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {depensesAValider.slice(0, 5).map(depense => (
                  <tr key={depense.id} className="hover:bg-gray-50">
                    <td>{new Date(depense.dateIntervention).toLocaleDateString()}</td>
                    <td className="max-w-xs truncate">{depense.libelle}</td>
                    <td>{depense.soumisPar.nom}</td>
                    <td>{depense.montant.toLocaleString()} FCFA</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatutColor(depense.statut)}`}>
                        {depense.statut}
                      </span>
                    </td>
                    <td>
                      <Link to={`/depenses/${depense.id}/valider`} className="text-blue-600 hover:underline">
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

      {/* Section historique (optionnelle mais recommandée) */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-3">Historique de mes validations</h2>
        <p className="text-gray-600 text-sm">Cette section peut être ajoutée via une nouvelle API `/api/depenses/historique-mes-validations`.</p>
      </div>
    </div>
  );
};

export default DashboardGestion;