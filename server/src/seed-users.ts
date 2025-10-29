import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const users = [
  { nom: 'Logisticien Principal', email: 'logisticien@test.com', role: 'LOGISTICIEN', password: 'log123' },
  { nom: 'Contrôleur Financier', email: 'finance@test.com', role: 'FINANCE', password: 'fin123' },
  { nom: 'Contrôleur de Gestion', email: 'gestion@test.com', role: 'GESTION', password: 'ges123' },
  { nom: 'Responsable Administration', email: 'admin@test.com', role: 'ADMIN_GENERAL', password: 'adm123' },
  { nom: 'Direction Générale', email: 'dg@test.com', role: 'DG', password: 'dg123' },
  { nom: 'Super Administrateur', email: 'super@test.com', role: 'SUPER_ADMIN', password: 'sup123' },
];

async function main() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        nom: user.nom,
        email: user.email,
        role: user.role,
        password: hashedPassword,
      },
    });
    console.log(`✅ ${user.email} créé`);
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());