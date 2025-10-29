// client/src/components/StatutValidation.tsx

import React from 'react';

interface Depense {
  id: number;
  valideParFinanceId?: number | null;
  valideParGestionId?: number | null;
  valideParAdminId?: number | null;
}

interface StatutValidationProps {
  depense: Depense;
  userRole: string; // ex: 'FINANCE', 'GESTION', 'ADMIN_GENERAL'
  onValider: (role: 'finance' | 'gestion' | 'admin') => void;
}

export const StatutValidation: React.FC<StatutValidationProps> = ({
  depense,
  userRole,
  onValider,
}) => {
  const isValidated = (role: string): boolean => {
    if (role === 'finance') return depense.valideParFinanceId != null;
    if (role === 'gestion') return depense.valideParGestionId != null;
    if (role === 'admin') return depense.valideParAdminId != null;
    return false;
  };

  const canValidate = (roleKey: string, roleEnum: string): boolean => {
    return userRole === roleEnum && !isValidated(roleKey);
  };

  const roleMap = [
    { key: 'finance', label: 'Finance', enum: 'FINANCE' },
    { key: 'gestion', label: 'Gestion', enum: 'GESTION' },
    { key: 'admin', label: 'Admin', enum: 'ADMIN_GENERAL' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mt-2">
      {roleMap.map(({ key, label, enum: roleEnum }) => (
        <div key={key} className="flex items-center gap-1">
          <span className="text-sm font-medium text-gray-700">{label}:</span>
          {isValidated(key) ? (
            <span className="text-green-600 font-bold">✅</span>
          ) : (
            <span className="text-gray-400">⏳</span>
          )}
          {canValidate(key, roleEnum) && (
            <button
              onClick={() => onValider(key as any)}
              className="ml-1 text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 rounded"
            >
              Valider
            </button>
          )}
        </div>
      ))}
    </div>
  );
};