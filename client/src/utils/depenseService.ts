// client/src/utils/depenseService.ts

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const validerDepenseParRole = async (
  depenseId: number,
  role: 'finance' | 'gestion' | 'admin',
  commentaire: string = ''
): Promise<any> => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Utilisateur non authentifié');
  }

  const response = await fetch(`${API_BASE}/depenses/${depenseId}/valider/${role}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ commentaire }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Erreur ${response.status} lors de la validation`);
  }

  return response.json();
};