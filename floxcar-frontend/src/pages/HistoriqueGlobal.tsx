// src/pages/HistoriqueGlobal.tsx
import React, { useState, useEffect } from 'react';
import api from '../api';

interface Depense {
  id: number;
  dateIntervention: string;
  codeParc: string;
  typeDepense: { nom: string };
  libelle: string;
  montant: number;
  statut: string;
  soumisPar: { nom: string };
  // Tous les validateurs possibles
  valideParControleurFinancier?: { nom: string };
  valideParControleurGestion?: { nom: string };
  valideParResponsableAdmin?: { nom: string };
  valideParAdminGeneral?: { nom: string };
  valideParDG?: { nom: string };
}

const HistoriqueGlobal: React.FC = () => {
  const [depenses, setDepenses] = useState<Depense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistorique();
  }, []);

  const fetchHistorique = async () => {
    try {
      const response = await api.get('/api/historique/global');
      setDepenses(response.data);
    } catch (err) {
      setError('Erreur lors du chargement de l\'historique');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'TERMINE':
        return 'bg-green-100 text-green-800';
      case 'REJETE':
        return 'bg-red-100 text-red-800';
      case 'SOUMIS':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement de l'historique...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Historique global des dépenses</h1>
        <p className="text-gray-600 mt-2">Suivi complet de toutes les dépenses et validations</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Véhicule</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Libellé</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Soumis par</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Finance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gestion</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Resp. Admin</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Admin Général</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">DG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {depenses.map((depense) => (
                <tr key={depense.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">{new Date(depense.dateIntervention).toLocaleDateString()}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.codeParc}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.typeDepense.nom}</td>
                  <td className="px-4 py-3 max-w-xs truncate">{depense.libelle}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.montant.toLocaleString()} FCFA</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatutColor(depense.statut)}`}>
                      {depense.statut}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.soumisPar.nom}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.valideParControleurFinancier?.nom || '-'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.valideParControleurGestion?.nom || '-'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.valideParResponsableAdmin?.nom || '-'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.valideParAdminGeneral?.nom || '-'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{depense.valideParDG?.nom || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoriqueGlobal;