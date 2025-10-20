// src/types.ts (exemple partiel)
export interface User {
  id: number;
  nom: string;
  email: string;
  // ... autres champs
}

export interface TypeDepense {
  id: number;
  nom: string;
  // ... autres champs
}

export interface Vehicule {
  id: number;
  immatriculation: string;
  // ... autres champs
}

export interface Depense {
  id: number;
  dateIntervention: string; // ou Date si vous la convertissez
  libelle: string;
  typeDepenseId: number;
  typeDepense: TypeDepense; // Relation
  montant: number;
  statut: string; // SOUMIS, TERMINE, REJETE, etc.
  vehiculeId: number;
  vehicule: Vehicule; // Relation
  soumisParId: number;
  soumisPar: User; // Relation
  // --- NOUVEAU : Champs de validation ---
  valideParControleurFinancierId: number | null;
  valideParControleurFinancier: User | null; // Relation optionnelle
  valideParControleurGestionId: number | null;
  valideParControleurGestion: User | null;
  valideParResponsableAdminId: number | null;
  valideParResponsableAdmin: User | null;
  valideParAdminGeneralId: number | null;
  valideParAdminGeneral: User | null;
  // Commentaires
  commentaireControleurFinancier: string | null;
  commentaireControleurGestion: string | null;
  commentaireResponsableAdmin: string | null;
  commentaireAdminGeneral: string | null;
  // ... autres champs
}