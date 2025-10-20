// floxcar-backend/prisma/seed-users.ts
import { PrismaClient } from '../src/generated/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Démarrage du seeding des utilisateurs...');

  const password = await bcrypt.hash('password123', 10);
  console.log('🔐 Mot de passe haché généré (tous les comptes utilisent "password123")');

  const users = [
    // Vos comptes principaux
    { email: 'finance@test.com', nom: 'DAF', role: 'CONTROLEUR_FINANCIER' },
    { email: 'logisticien@test.com', nom: 'Logisticien Principal', role: 'LOGISTICIEN' },
    { email: 'gestion@test.com', nom: 'Contrôleur de Gestion', role: 'CONTROLEUR_GESTION' },
    { email: 'admin@test.com', nom: 'Administrateur Général', role: 'ADMIN_GENERAL' },
    { email: 'dg@test.com', nom: 'Directeur Général', role: 'DG' },
    { email: 'superadmin@test.com', nom: 'Super Administrateur', role: 'SUPER_ADMIN' },
    { email: 'controleur.finance@test.com', nom: 'Contrôleur Financier', role: 'CONTROLEUR_FINANCIER' },
    { email: 'controleur.gestion@test.com', nom: 'Contrôleur de Gestion', role: 'CONTROLEUR_GESTION' },
    { email: 'responsable.admin@test.com', nom: 'Responsable Administration', role: 'RESPONSABLE_ADMIN' },
  ];

  console.log(`📝 Traitement de ${users.length} utilisateurs...`);

  for (const userData of users) {
    console.log(`🔄 Traitement : ${userData.email}`);
    const existing = await prisma.user.findUnique({ where: { email: userData.email } });

    if (existing) {
      await prisma.user.update({
        where: { email: userData.email },
        data: { ...userData, password },
      });
      console.log(`  ✅ Mis à jour : ${userData.email}`);
    } else {
      await prisma.user.create({
        data: { ...userData, password },
      });
      console.log(`  ✅ Créé : ${userData.email}`);
    }
  }

  console.log('✅ Tous les utilisateurs sont prêts.');
}

main()
  .catch((e) => {
    console.error('❌ Erreur dans le seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });