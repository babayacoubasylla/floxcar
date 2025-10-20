// src/pages/DashboardRespAdmin.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFileInvoiceDollar, FaHistory, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import api from '../api';

interface HistoriqueItem {
  id: number;
  dateIntervention: string;
  codeParc: string;
  typeDepense: string;
  libelle: string;
  montant: number;
  statut: string;
  soumisPar: { nom: string };
  valideParControleurFinancier?: { nom: string };
  valideParControleurGestion?: { nom: string };
  valideParResponsableAdmin?: { nom: string };
  valideParAdminGeneral?: { nom: string };
  valideParDG?: { nom: string };
}

const DashboardRespAdmin: React.FC = () => {
  const [historique, setHistorique] = useState<HistoriqueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatut, setFilterStatut] = useState<string>('all');

  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const response = await api.get('/api/historique/global');
        setHistorique(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement de l’historique:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorique();
  }, []);

  const filteredHistorique = historique.filter(item => {
    if (filterStatut === 'all') return true;
    return item.statut === filterStatut.toUpperCase();
  });

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'TERMINE': return 'bg-green-100 text-green-800';
      case 'REJETE': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord – Responsable Administration</h1>
        <p className="text-gray-600 mt-2">
          Validez les demandes de dépense, suivez l’historique et gérez les validations en cours.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link to="/depenses/a-pourvoir" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaFileInvoiceDollar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Dépenses à valider</h3>
                <p className="text-sm text-gray-600">En attente de votre validation</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/depenses/historique" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaHistory className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Historique complet</h3>
                <p className="text-sm text-gray-600">Toutes les validations</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/depenses/mes-validations" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <FaCheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Mes validations</h3>
                <p className="text-sm text-gray-600">Vos décisions de validation</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <FaExclamationTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">En attente</h3>
              <p className="text-sm text-gray-600">
                {historique.filter(h => !h.valideParResponsableAdmin && h.statut !== 'REJETE').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton explicite (optionnel, si vous préférez un lien visible en plus des cartes) */}
      <div className="mb-6 text-right">
        <Link
          to="/depenses/mes-validations"
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Voir mes validations
        </Link>
      </div>

      {/* Recent History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Historique récent</h2>
          <select
            value={filterStatut}
            onChange={(e) => setFilterStatut(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="all">Tous les statuts</option>
            <option value="en_cours">En cours</option>
            <option value="termine">Terminé</option>
            <option value="rejete">Rejeté</option>
          </select>
        </div>

        {loading ? (
          <div className="p-6 text-center text-gray-500">Chargement...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validé par vous</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredHistorique.length > 0 ? (
                  filteredHistorique.slice(0, 5).map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.dateIntervention}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.libelle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.montant.toLocaleString()} FCFA</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatutColor(item.statut)}`}>
                          {item.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.soumisPar.nom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.valideParResponsableAdmin ? '✅ Oui' : '❌ Non'}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">Aucune donnée disponible</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardRespAdmin;