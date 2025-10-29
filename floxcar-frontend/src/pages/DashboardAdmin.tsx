// src/pages/DashboardAdmin.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCar, FaList, FaHistory } from 'react-icons/fa';
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
  dateValidation?: string;
}

const DashboardAdmin: React.FC = () => {
  const [historique, setHistorique] = useState<HistoriqueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterDate, setFilterDate] = useState<string>('');

  useEffect(() => {
    fetchHistorique();
  }, []);

  const fetchHistorique = async () => {
    try {
      const response = await api.get('/api/historique/global');
      setHistorique(response.data);
    } catch (err) {
      console.error('Erreur chargement historique:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredHistorique = historique.filter(item => {
    const matchesRole = filterRole === 'all' ||
      (filterRole === 'finance' && item.valideParControleurFinancier) ||
      (filterRole === 'gestion' && item.valideParControleurGestion) ||
      (filterRole === 'admin' && item.valideParResponsableAdmin) ||
      (filterRole === 'general' && item.valideParAdminGeneral) ||
      (filterRole === 'dg' && item.valideParDG);

    const matchesDate = !filterDate || item.dateIntervention.startsWith(filterDate);
    return matchesRole && matchesDate;
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
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Administrateur</h1>
        <p className="text-gray-600 mt-2">Gérez les utilisateurs, véhicules, types de dépense et suivez les validations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link to="/admin/utilisateurs" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaUser className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Utilisateurs</h3>
                <p className="text-sm text-gray-600">Gérer les comptes</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/admin/vehicules" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaCar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Véhicules</h3>
                <p className="text-sm text-gray-600">Gérer le parc</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/admin/types-depense" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg">
                <FaList className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Types dépense</h3>
                <p className="text-sm text-gray-600">Configurer les catégories</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="#historique" className="block">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-lg">
                <FaHistory className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Historique</h3>
                <p className="text-sm text-gray-600">Suivi des validations</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div id="historique" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Historique des validations</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Validateur</label>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">Tous</option>
                <option value="finance">Finance</option>
                <option value="gestion">Gestion</option>
                <option value="admin">Resp. Admin</option>
                <option value="general">Admin Général</option>
                <option value="dg">DG</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Véhicule</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Soumis par</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Validé par</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={7} className="px-4 py-6 text-center text-gray-500">Chargement...</td></tr>
              ) : filteredHistorique.length === 0 ? (
                <tr><td colSpan={7} className="px-4 py-6 text-center text-gray-500">Aucune donnée</td></tr>
              ) : (
                filteredHistorique.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{new Date(item.dateIntervention).toLocaleDateString()}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.codeParc}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{item.libelle}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.montant.toLocaleString()} FCFA</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.soumisPar.nom}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.valideParControleurFinancier?.nom ||
                       item.valideParControleurGestion?.nom ||
                       item.valideParResponsableAdmin?.nom ||
                       item.valideParAdminGeneral?.nom ||
                       item.valideParDG?.nom || '-'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutColor(item.statut)}`}>
                        {item.statut}
                      </span>
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

export default DashboardAdmin;