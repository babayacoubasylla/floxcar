// client/src/types/index.ts
export interface User {
  id: number;
  nom: string;
  email: string;
  role: 'LOGISTICIEN' | 'FINANCE' | 'GESTION' | 'ADMIN_GENERAL' | 'DG' | 'SUPER_ADMIN';
}

export interface Depense {
  id: number;
  dateIntervention: string;
  typeVehicule: string;
  codeParc: string;
  libelle: string;
  quantite?: number;
  montant: number;
  statut: string;
  dateCreation: string;

  // Relations
  soumisPar: { nom: string; email: string };
  vehicule: { immatriculation: string; type: string };

  // Validation
  valideParFinanceId?: number | null;
  valideParGestionId?: number | null;
  valideParAdminId?: number | null;
  valideParDgId?: number | null;

  // Commentaires
  commentaireFinance?: string | null;
  commentaireGestion?: string | null;
  commentaireAdmin?: string | null;
}