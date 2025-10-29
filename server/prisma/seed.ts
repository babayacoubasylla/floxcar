// server/prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('gestion123', 10);
  
  await prisma.user.upsert({
    where: { email: 'gestion@test.com' },
    update: {},
    create: {
      email: 'gestion@test.com',
      nom: 'Contrôle Gestion',
      role: 'GESTION',
      password,
    },
  });

  console.log('✅ Utilisateur gestion@test.com créé');
}

main()
  .catch(e => {
    console.error('❌ Erreur :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });