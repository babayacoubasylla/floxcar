import React from 'react'

const MesDepenses: React.FC = () => {
  return (
    <div className="p-8 bg-background min-h-screen font-sans">
      <div className="max-w-4xl mx-auto bg-surface p-8 rounded-chic shadow-chic">
        <h2 className="text-2xl font-bold text-primary font-display mb-2">Mes dépenses</h2>
        <p className="text-gray-500 mb-6">Voici la liste de vos dépenses soumises.</p>
        <div className="overflow-x-auto">
          <table className="table min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Date</th>
                <th>Véhicule</th>
                <th>Type</th>
                <th>Libellé</th>
                <th>Montant</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition">
                <td>2025-04-01</td>
                <td>AB-123-CD</td>
                <td>Mécanique</td>
                <td>Remplacement batterie</td>
                <td>150 000 FCFA</td>
                <td className="text-green-600 font-semibold">Validé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MesDepenses