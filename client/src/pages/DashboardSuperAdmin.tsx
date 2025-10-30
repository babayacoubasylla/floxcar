// client/src/pages/DashboardSuperAdmin.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCar, FaList, FaFileInvoice, FaChartBar } from 'react-icons/fa';
import api from '../api';

const DashboardSuperAdmin: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [stats, setStats] = useState<{ enAttente: number; valideesParMoi: number; terminees: number; rejetees: number } | null>(null);
  const [latestVehicules, setLatestVehicules] = useState<any[]>([]);
  const [typesDepense, setTypesDepense] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/api/depenses/stats');
        if (res.data?.scope === 'ADMIN') setStats(res.data);
        const v = await api.get('/api/vehicules');
        setLatestVehicules((v.data || []).slice(0, 8));
        const t = await api.get('/api/types-depense');
        setTypesDepense((t.data || []).slice(0, 12));
      } catch (e) {
        console.error('Erreur stats super admin', e);
      }
    };
    load();
  }, []);

  const handleExport = async () => {
    setExporting(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/depenses/export`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Échec de l’export');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'depenses_floxcar.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err: any) {
      alert(`❌ Erreur lors de l’export : ${err.message}`);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* En-tête avec bouton d'export */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow-md">
            Dashboard Super Admin
          </h1>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Bienvenue dans votre espace super admin.
          </p>
        </div>
        <button
          onClick={handleExport}
          disabled={exporting}
          className={`mt-4 sm:mt-0 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
            exporting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {exporting ? 'Export en cours...' : '📥 Exporter Excel'}
        </button>
      </div>

      {/* Grille des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {/* Gérer les utilisateurs */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 flex flex-col items-center transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <FaUser className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">Gérer les utilisateurs</h3>
          <p className="text-gray-500 text-sm md:text-base text-center mb-4">Créer, modifier ou supprimer des utilisateurs</p>
          <Link
            to="/admin/utilisateurs"
            className="bg-purple-600 hover:bg-purple-700 text-white w-full text-center py-2 px-4 rounded-lg font-medium text-sm md:text-base shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Accéder
          </Link>
        </div>

        {/* Gérer les dépenses */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 flex flex-col items-center transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <FaFileInvoice className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">Gérer les dépenses</h3>
          <p className="text-gray-500 text-sm md:text-base text-center mb-4">Valider, rejeter ou reporter les dépenses</p>
          <Link
            to="/depenses/admin"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full text-center py-2 px-4 rounded-lg font-medium text-sm md:text-base shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Accéder
          </Link>
        </div>

        {/* Gérer les véhicules */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 flex flex-col items-center transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <FaCar className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">Gérer les véhicules</h3>
          <p className="text-gray-500 text-sm md:text-base text-center mb-4">Ajouter ou modifier des véhicules</p>
          <Link
            to="/admin/vehicules"
            className="bg-green-600 hover:bg-green-700 text-white w-full text-center py-2 px-4 rounded-lg font-medium text-sm md:text-base shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Accéder
          </Link>
        </div>

        {/* Gérer les types de dépense */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 flex flex-col items-center transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-yellow-100 p-3 rounded-full mb-4">
            <FaList className="h-8 w-8 md:h-10 md:w-10 text-yellow-600" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">Gérer les types de dépense</h3>
          <p className="text-gray-500 text-sm md:text-base text-center mb-4">Ajouter ou modifier les types de dépense</p>
          <Link
            to="/admin/types-depense"
            className="bg-yellow-600 hover:bg-yellow-700 text-white w-full text-center py-2 px-4 rounded-lg font-medium text-sm md:text-base shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Accéder
          </Link>
        </div>

        {/* Statistiques */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 flex flex-col items-center transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
          <div className="bg-teal-100 p-3 rounded-full mb-4">
            <FaChartBar className="h-8 w-8 md:h-10 md:w-10 text-teal-600" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">Statistiques</h3>
          {stats ? (
            <div className="w-full grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="bg-white border rounded-lg p-3"><span className="text-gray-500">En attente:</span> <span className="font-semibold">{stats.enAttente}</span></div>
              <div className="bg-white border rounded-lg p-3"><span className="text-gray-500">Validées par moi:</span> <span className="font-semibold">{stats.valideesParMoi}</span></div>
              <div className="bg-white border rounded-lg p-3"><span className="text-gray-500">Terminées:</span> <span className="font-semibold">{stats.terminees}</span></div>
              <div className="bg-white border rounded-lg p-3"><span className="text-gray-500">Rejetées:</span> <span className="font-semibold">{stats.rejetees}</span></div>
            </div>
          ) : (
            <div className="text-gray-400 italic">Chargement...</div>
          )}
        </div>
      </div>

      {/* Aperçu Véhicules et Types pour visibilité rapide */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center"><FaCar className="mr-2 text-green-600"/> Véhicules (aperçu)</h3>
            <Link to="/admin/vehicules" className="text-sm text-green-700 hover:underline">Voir tout</Link>
          </div>
          {latestVehicules.length === 0 ? (
            <div className="text-gray-500">Aucun véhicule pour l’instant.</div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {latestVehicules.map((v) => (
                <li key={v.id} className="border rounded p-2 text-sm text-gray-700">
                  <div className="font-medium">{v.immatriculation}</div>
                  <div className="text-gray-500">{v.type}{v.codeParc ? ` • ${v.codeParc}` : ''}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center"><FaList className="mr-2 text-yellow-600"/> Types de dépense (aperçu)</h3>
            <Link to="/admin/types-depense" className="text-sm text-yellow-700 hover:underline">Voir tout</Link>
          </div>
          {typesDepense.length === 0 ? (
            <div className="text-gray-500">Aucun type pour l’instant.</div>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {typesDepense.map((t) => (
                <li key={t.id} className="border rounded p-2 text-sm text-gray-700">{t.nom}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSuperAdmin;