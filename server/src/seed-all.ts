// server/src/seed-all.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // 1. Utilisateurs
  const users = [
    { email: 'logisticien@test.com', password: 'log123', nom: 'Logisticien Principal', role: 'LOGISTICIEN' },
    { email: 'finance@test.com', password: 'fin123', nom: 'Contrôleur Financier', role: 'FINANCE' },
    { email: 'gestion@test.com', password: 'ges123', nom: 'Contrôleur de Gestion', role: 'GESTION' },
    { email: 'admin@test.com', password: 'adm123', nom: 'Responsable Admin', role: 'ADMIN_GENERAL' },
    { email: 'dg@test.com', password: 'dg123', nom: 'Direction Générale', role: 'DG' },
    { email: 'super@test.com', password: 'sup123', nom: 'Super Admin', role: 'SUPER_ADMIN' },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        ...u,
        password: await bcrypt.hash(u.password, 10),
      },
    });
  }

  // 2. Types de dépense
  const types = [
    'Carburant',
    'Entretien préventif',
    'Lubrifiant',
    'Huile hydraulique',
    'Mécanique',
    'Pneumatique',
    'Électricité',
    'Hydraulique',
    'Travaux extérieurs',
    'Pièces détachées',
    'Visite technique',
    'Freinage',
    'Suspension',
    'Moteur',
    'Bâche',
    'Air comprimé',
  ];

  for (const nom of types) {
    await prisma.typeDepense.upsert({
      where: { nom },
      update: {},
      create: { nom },
    });
  }

  // 3. Véhicules (extrait de ton Excel)
  const vehicules = [
    { immatriculation: 'AB CM 30.01', type: 'Ampiroll', codeParc: 'CM30-01' },
    { immatriculation: 'AB CM 30.02', type: 'Ampiroll', codeParc: 'CM30-02' },
    { immatriculation: 'AB BT 18.01', type: 'Tasseurs', codeParc: 'BT18-01' },
    { immatriculation: 'AB TA 01', type: 'Tracteur', codeParc: 'TA01' },
    { immatriculation: 'AB TC 01', type: 'Tricycle', codeParc: 'TC01' },
  ];

  for (const v of vehicules) {
    await prisma.vehicule.upsert({
      where: { immatriculation: v.immatriculation },
      update: {},
      create: v,
    });
  }

  console.log('✅ Données de test créées avec succès !');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });