// src/api/depensesApi.ts
import api from '../api';
import { Depense } from '../types';

export const fetchDepenses = async (): Promise<Depense[]> => {
  const response = await api.get('/api/depenses');
  return response.data;
};

export const fetchDepensesByUser = async (): Promise<Depense[]> => {
  const response = await api.get('/api/depenses/mes-depenses');
  return response.data;
};

export const fetchDepenseById = async (id: number): Promise<Depense> => {
  const response = await api.get(`/api/depenses/${id}`);
  return response.data;
};

export const createDepense = async (depenseData: Omit<Depense, 'id' | 'soumisPar' | 'statut'>): Promise<Depense> => {
  const response = await api.post('/api/depenses', depenseData);
  return response.data;
};

export const fetchDepensesAPourvoir = async (): Promise<Depense[]> => {
  const response = await api.get('/api/depenses/a-pourvoir');
  return response.data;
};

export const validerDepense = async (
  id: number,
  action: 'valider' | 'rejeter',
  commentaire?: string
): Promise<Depense> => {
  const response = await api.patch(`/api/depenses/${id}/validation`, {
    action,
    commentaire,
  });
  return response.data;
};

// ✅ NOUVELLE FONCTION
export const fetchMesValidations = async (): Promise<Depense[]> => {
  const response = await api.get('/api/depenses/mes-validations');
  return response.data;
};