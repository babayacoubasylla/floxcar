import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const testUsers = [
  { email: 'logisticien@test.com', password: 'log123', nom: 'Logisticien Principal', role: 'LOGISTICIEN' },
  { email: 'finance@test.com', password: 'fin123', nom: 'Contrôleur Financier', role: 'FINANCE' },
  { email: 'gestion@test.com', password: 'ges123', nom: 'Contrôleur de Gestion', role: 'GESTION' },
  { email: 'admin@test.com', password: 'adm123', nom: 'Responsable Administration', role: 'ADMIN_GENERAL' },
  { email: 'dg@test.com', password: 'dg123', nom: 'Direction Générale', role: 'DG' },
  { email: 'super@test.com', password: 'sup123', nom: 'Super Administrateur', role: 'SUPER_ADMIN' },
];

async function main() {
  for (const user of testUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        password: hashedPassword,
        nom: user.nom,
        role: user.role,
      },
      create: {
        email: user.email,
        password: hashedPassword,
        nom: user.nom,
        role: user.role,
      },
    });
    console.log(`✅ ${user.email} prêt`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Erreur :', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });