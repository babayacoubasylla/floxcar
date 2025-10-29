// client/src/pages/HistoriqueDepenses.tsx
import React, { useEffect, useState } from 'react';
import api from '../api';

const HistoriqueDepenses = () => {
  const [depenses, setDepenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDepenses = async () => {
      try {
        const res = await api.get('/api/depenses/historique');
        setDepenses(res.data);
      } catch (err) {
        setError('Erreur de chargement');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDepenses();
  }, []);

  if (loading) return <div className="p-6">Chargement...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Historique</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Véhicule</th>
            <th className="py-2 px-4 border-b">Montant</th>
            <th className="py-2 px-4 border-b">Statut</th>
          </tr>
        </thead>
        <tbody>
          {depenses.map(d => (
            <tr key={d.id}>
              <td className="py-2 px-4 border-b">{new Date(d.dateIntervention).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{d.codeParc}</td>
              <td className="py-2 px-4 border-b">{d.montant} FCFA</td>
              <td className="py-2 px-4 border-b">{d.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoriqueDepenses;