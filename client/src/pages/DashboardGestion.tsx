// client/src/pages/DashboardGestion.tsx

import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import api from '../api';
import { validerDepenseParRole, rejeterDepenseParRole } from '../utils/depenseService';
import { StatutValidation } from '../components/StatutValidation';
import type { Depense } from '../types';

const getUserRole = (): string => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      return user.role || 'LOGISTICIEN';
    } catch {
      return 'LOGISTICIEN';
    }
  }
  return 'LOGISTICIEN';
};

const DashboardGestion: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<{ enAttente: number; valideesParMoi: number } | null>(null);
  // const navigate = useNavigate();
  const userRole = getUserRole();

  useEffect(() => {
    fetchDepenses();
    fetchStats();
  }, []);

  const fetchDepenses = async () => {
    try {
      // On récupère toutes les dépenses non terminées
      const response = await api.get('/api/depenses');
      // Option : filtrer côté frontend pour n'afficher que celles validées par Finance mais pas par Gestion
      const filtered = response.data.filter((d: Depense) => {
        return d.statut !== 'TERMINE' && d.valideParFinanceId != null;
      });
      setDepenses(filtered);
    } catch (err) {
      setError('Erreur lors du chargement des dépenses');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.get('/api/depenses/stats');
      if (res.data?.scope === 'GESTION') setStats({ enAttente: res.data.enAttente, valideesParMoi: res.data.valideesParMoi });
    } catch (e) {
      console.error('Erreur stats gestion', e);
    }
  };

  const handleValider = async (role: 'finance' | 'gestion' | 'admin', depenseId: number) => {
    const commentaire = prompt(`Ajouter un commentaire pour la validation (${role}) ?`);
    try {
      await validerDepenseParRole(depenseId, role, commentaire || '');
      alert(`✅ Validation ${role} effectuée avec succès !`);
      fetchDepenses();
      fetchStats();
    } catch (err: any) {
      alert(`❌ Erreur : ${err.message}`);
    }
  };

  const handleRejeter = async (depenseId: number) => {
    const commentaire = prompt('Motif du rejet (optionnel) ?') || '';
    try {
      await rejeterDepenseParRole(depenseId, 'gestion', commentaire);
      alert('❌ Dépense rejetée.');
      fetchDepenses();
      fetchStats();
    } catch (err: any) {
      alert(`❌ Erreur : ${err.message}`);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement des dépenses...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Contrôle de Gestion</h2>
        <p className="text-gray-600 mt-2">Validez les dépenses déjà approuvées par la finance.</p>
        {stats && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">En attente</div>
              <div className="text-2xl font-bold">{stats.enAttente}</div>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <div className="text-sm text-gray-500">Validées par moi</div>
              <div className="text-2xl font-bold">{stats.valideesParMoi}</div>
            </div>
          </div>
        )}
      </div>

      {depenses.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-500">
          Aucune dépense à valider pour le moment.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Libellé</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Soumis par</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {depenses.map((depense) => (
                  <tr key={depense.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(depense.dateIntervention).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.codeParc}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.vehicule?.type || '—'}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{depense.libelle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {depense.montant.toLocaleString()} FCFA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{depense.soumisPar.nom}</td>
                    <td className="px-6 py-4">
                      <StatutValidation
                        depense={depense}
                        userRole={userRole}
                        onValider={(role) => handleValider(role, depense.id)}
                      />
                      {userRole === 'GESTION' && (
                        <button onClick={() => handleRejeter(depense.id)} className="mt-2 text-xs text-red-600 hover:underline">Rejeter</button>
                      )}
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

export default DashboardGestion;