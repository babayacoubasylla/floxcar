// floxcar-frontend/src/components/LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaKey, FaUser } from 'react-icons/fa';
import api from '../api';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getDashboardPath = (role: string): string => {
    switch (role) {
      case 'LOGISTICIEN':
        return '/dashboard/logisticien';
      case 'CONTROLEUR_FINANCIER':
        return '/dashboard/finance';
      case 'CONTROLEUR_GESTION':
        return '/depenses/a-pourvoir';
      case 'RESPONSABLE_ADMIN':
        return '/depenses/a-pourvoir';
      case 'ADMIN_GENERAL':
        return '/dashboard/admin';
      case 'DG':
        return '/depenses/a-pourvoir';
      case 'SUPER_ADMIN':
        return '/dashboard/superadmin';
      default:
        return '/';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // ✅ CORRIGÉ : pas de /api ici
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      const dashboardPath = getDashboardPath(user.role);
      navigate(dashboardPath);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-5 rounded-full">
            <FaCar className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">FLOXCAR</h2>
        <p className="text-center text-gray-600 mb-8">Gestion de flux de maintenance</p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaKey className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mot de passe"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg font-bold text-lg"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          © 2025 FLOXCAR - Tous droits réservés
        </p>
      </div>
    </div>
  );
};

export default LoginForm;