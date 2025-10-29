// src/pages/DashboardLogisticien.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDepensesByUser } from '../api/depensesApi'; // ✅ Nom corrigé
import { Depense } from '../types';

const DashboardLogisticien: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDepenses = async () => {
      try {
        const data = await fetchDepensesByUser(); // ✅ Utilise le bon nom
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

  const stats = {
    total: depenses.length,
    soumises: depenses.filter(d => d.statut === 'SOUMIS').length,
    terminees: depenses.filter(d => d.statut === 'TERMINE').length,
    rejetees: depenses.filter(d => d.statut === 'REJETE').length,
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'SOUMIS': return 'bg-yellow-100 text-yellow-800';
      case 'TERMINE': return 'bg-green-100 text-green-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <div className="p-8 text-center">Chargement...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Logisticien</h1>
        <p className="text-gray-600 mt-2">Gérez vos dépenses et suivez leur traitement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Total dépenses</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">En attente</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.soumises}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Validées</h3>
          <p className="text-3xl font-bold text-green-600">{stats.terminees}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Rejetées</h3>
          <p className="text-3xl font-bold text-red-600">{stats.rejetees}</p>
        </div>
      </div>

      <div className="mb-8 flex gap-4">
        <Link
          to="/depense/nouvelle"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          + Nouvelle dépense
        </Link>
        <Link
          to="/depenses/mes-depenses"
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
        >
          Voir tout l'historique
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Dernières dépenses</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {depenses.slice(0, 5).map(depense => (
                <tr key={depense.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(depense.dateIntervention).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{depense.libelle}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{depense.montant.toLocaleString()} FCFA</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatutColor(depense.statut)}`}>
                      {depense.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogisticien;