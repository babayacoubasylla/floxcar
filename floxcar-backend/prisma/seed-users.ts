// floxcar-backend/prisma/seed-users.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  const users = [
    { email: 'superadmin@test.com', nom: 'Super Administrateur', role: 'SUPER_ADMIN' },
    { email: 'admin@test.com', nom: 'Administrateur Général', role: 'ADMIN_GENERAL' },
    { email: 'finance@test.com', nom: 'DAF', role: 'CONTROLEUR_FINANCIER' },
    { email: 'gestion@test.com', nom: 'Contrôleur de Gestion', role: 'CONTROLEUR_GESTION' },
    { email: 'responsable.admin@test.com', nom: 'Responsable Administration', role: 'RESPONSABLE_ADMIN' },
    { email: 'logisticien@test.com', nom: 'Logisticien Principal', role: 'LOGISTICIEN' },
    { email: 'dg@test.com', nom: 'Directeur Général', role: 'DG' },
  ];

  for (const userData of users) {
    const existing = await prisma.user.findUnique({ where: { email: userData.email } });
    if (existing) {
      await prisma.user.update({ where: { email: userData.email }, data: { ...userData, password } });
    } else {
      await prisma.user.create({ data: { ...userData, password } });
    }
  }

  console.log('✅ Utilisateurs créés');
}

main()
  .catch((e) => {
    console.error('❌ Erreur seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });