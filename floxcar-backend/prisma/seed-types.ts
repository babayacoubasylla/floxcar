// floxcar-backend/prisma/seed-types.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const types = [
    { nom: 'Carburant', description: 'Achat de carburant' },
    { nom: 'Réparation mécanique', description: 'Réparations moteur, freins, etc.' },
    { nom: 'Pneus', description: 'Changement ou réparation de pneus' },
    { nom: 'Lavage', description: 'Nettoyage du véhicule' },
    { nom: 'Assurance', description: 'Prime d’assurance annuelle' },
    { nom: 'Péage', description: 'Frais de péage autoroutier' },
    { nom: 'Parking', description: 'Frais de stationnement' },
  ];

  for (const data of types) {
    await prisma.typeDepense.upsert({
      where: { nom: data.nom },
      update: {},
      create: data,
    });
  }

  console.log('✅ Types de dépense créés');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding des types :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });