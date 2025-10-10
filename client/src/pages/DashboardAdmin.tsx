import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaCar, FaList, FaChartBar, FaCog } from 'react-icons/fa'

const DashboardSuperAdmin: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800">Dashboard Super Admin</h1>
        <p className="text-gray-600 mt-2">Bienvenue dans votre espace super admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full">
              <FaUser className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Gérer les utilisateurs</h3>
          </div>
          <p className="text-gray-600 mt-3">Créer, modifier ou supprimer des utilisateurs</p>
          <Link to="/admin/utilisateurs" className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition font-medium">
            Gérer les utilisateurs
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaCar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Gérer les véhicules</h3>
          </div>
          <p className="text-gray-600 mt-3">Ajouter ou modifier des véhicules</p>
          <Link to="/admin/vehicules" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium">
            Gérer les véhicules
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <FaList className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ml-4">Gérer les types de dépense</h3>
          </div>
          <p className="text-gray-600 mt-3">Ajouter ou modifier les types de dépense</p>
          <Link to="/admin/types-depense" className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition font-medium">
            Gérer les types
          </Link>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Statistiques du système</h2>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Graphique à venir...</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardSuperAdmin