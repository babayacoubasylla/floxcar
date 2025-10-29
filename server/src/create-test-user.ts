import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'finance@test.com';
  const password = 'fin123';
  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: {
      email,
      password: hashed,
      nom: 'Contrôleur Financier',
      role: 'FINANCE',
    },
  });

  console.log('✅ Utilisateur de test créé ou mis à jour');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());