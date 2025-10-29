// floxcar-backend/prisma/seed-vehicules.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const vehicules = [
    { immatriculation: 'AA-2223-C', type: 'Camion Benne', codeParc: 'CB001', description: 'Camion benne de 20m³' },
    { immatriculation: 'BB-1234-D', type: 'Véhicule de Service', codeParc: 'VS002', description: 'Véhicule utilitaire' },
    { immatriculation: 'CC-4567-E', type: 'Camion Plateau', codeParc: 'CP003', description: 'Plateau 15m³' },
    { immatriculation: 'DD-8910-F', type: 'Voiture de Direction', codeParc: 'VD004', description: 'Berline de direction' },
  ];

  for (const vehiculeData of vehicules) {
    await prisma.vehicule.upsert({
      where: { immatriculation: vehiculeData.immatriculation },
      update: {},
      create: vehiculeData,
    });
  }

  console.log('✅ Tous les véhicules ont été créés/mis à jour');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding des véhicules :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });