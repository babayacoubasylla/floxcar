// client/src/utils/depenseService.ts
import api from '../api';

export const validerDepenseParRole = async (
  depenseId: number,
  role: 'finance' | 'gestion' | 'admin',
  commentaire: string = ''
): Promise<any> => {
  const res = await api.patch(`/api/depenses/${depenseId}/valider/${role}`, { commentaire });
  return res.data;
};

export const rejeterDepenseParRole = async (
  depenseId: number,
  role: 'finance' | 'gestion' | 'admin',
  commentaire: string = ''
): Promise<any> => {
  const res = await api.patch(`/api/depenses/${depenseId}/rejeter/${role}`, { commentaire });
  return res.data;
};