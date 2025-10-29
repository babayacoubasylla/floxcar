// src/pages/DashboardSuperAdmin.tsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCar, FaList, FaFileInvoice, FaChartBar, FaFileExport, FaFileImport } from 'react-icons/fa';
import api from '../api';

const DashboardSuperAdmin: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🔽 EXPORT : déclenche l'export global
  const handleExport = async () => {
    setExporting(true);
    try {
      const response = await api.get('/api/export/global', {
        responseType: 'blob', // Important pour les fichiers
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `floxcar_export_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error('Erreur lors de l’export Excel:', err);
      alert('Échec de l’export. Vérifiez les logs.');
    } finally {
      setExporting(false);
    }
  };

  // 🔽 IMPORT : gère le fichier sélectionné
  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls') && !file.name.endsWith('.csv')) {
      alert('Veuillez sélectionner un fichier Excel (.xlsx, .xls) ou CSV.');
      return;
    }

    setImporting(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/api/import/global', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Import réussi ! Données mises à jour.');
      console.log('Import response:', response.data);
    } catch (err: any) {
      console.error('Erreur lors de l’import Excel:', err);
      const msg = err.response?.data?.message || 'Échec de l’import.';
      alert(`Erreur : ${msg}`);
    } finally {
      setImporting(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de bord Super Administrateur</h1>
        <p className="text-gray-600 mt-2">Contrôle total du système FLOXCAR</p>
      </div>

      {/* 🔻 Section Import / Export */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Export */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <FaFileExport className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Exporter vers Excel</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Exportez toutes les données du projet (dépenses, utilisateurs, véhicules, etc.) dans un fichier Excel.
          </p>
          <button
            onClick={handleExport}
            disabled={exporting}
            className={`px-4 py-2 rounded-lg font-medium text-white flex items-center ${
              exporting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {exporting ? 'Export en cours...' : 'Exporter (.xlsx)'}
          </button>
        </div>

        {/* Import */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaFileImport className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Importer depuis Excel</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Importez un fichier Excel préparé pour mettre à jour la base de données.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept=".xlsx,.xls,.csv"
            className="hidden"
            id="import-file"
          />
          <label
            htmlFor="import-file"
            className={`px-4 py-2 rounded-lg font-medium text-white flex items-center cursor-pointer ${
              importing ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {importing ? 'Import en cours...' : 'Choisir un fichier'}
          </label>
        </div>
      </div>

      {/* 🔻 Autres sections existantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Gestion des utilisateurs */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FaUser className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Utilisateurs</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Gérer les comptes et rôles</p>
          <Link to="/admin/utilisateurs" className="text-purple-600 font-medium hover:underline text-sm">
            Accéder
          </Link>
        </div>

        {/* Gestion des dépenses */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaFileInvoice className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Dépenses</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Voir et valider toutes les dépenses</p>
          <Link to="/depenses/a-pourvoir" className="text-blue-600 font-medium hover:underline text-sm">
            Voir toutes
          </Link>
        </div>

        {/* Gestion des véhicules */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <FaCar className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Véhicules</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Gérer le parc automobile</p>
          <Link to="/admin/vehicules" className="text-green-600 font-medium hover:underline text-sm">
            Accéder
          </Link>
        </div>

        {/* Types de dépense */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-amber-100 p-2 rounded-lg">
              <FaList className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Types de dépense</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Configurer les catégories</p>
          <Link to="/admin/types-depense" className="text-amber-600 font-medium hover:underline text-sm">
            Accéder
          </Link>
        </div>

        {/* Statistiques */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-teal-100 p-2 rounded-lg">
              <FaChartBar className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="ml-3 font-semibold text-gray-800">Statistiques</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Vue d’ensemble des données</p>
          <span className="text-gray-400 text-sm">Bientôt disponible</span>
        </div>
      </div>

      {/* Section historique global */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Historique global</h2>
        <p className="text-gray-600 text-sm">
          En tant que Super Admin, vous pouvez accéder à l’historique complet via la page des dépenses.
        </p>
        <Link
          to="/depenses/a-pourvoir"
          className="mt-3 inline-block text-blue-600 hover:underline text-sm font-medium"
        >
          Voir l’historique des validations
        </Link>
      </div>
    </div>
  );
};

export default DashboardSuperAdmin;