import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const types = [
    { nom: 'CARBURANT', description: 'Frais de carburant' },
    { nom: 'LUBRIFIANT', description: 'Huile moteur, graisse, etc.' },
    { nom: 'MECANIQUE', description: 'Réparation mécanique' },
    { nom: 'HYDRAULIQUE', description: 'Réparation hydraulique' },
    { nom: 'ELECTRICITE', description: 'Réparation électrique' },
    { nom: 'PNEUMATIQUE', description: 'Changement de pneus' },
    { nom: 'PREVENTIF', description: 'Entretien préventif' },
    { nom: 'CURATIF', description: 'Entretien curatif' },
    { nom: 'TRAVAUX_EXTERIEUR', description: 'Travaux extérieurs' },
    { nom: 'PIECE_DETACHEE', description: 'Achat de pièces détachées' },
    { nom: 'VISITE_TECHNIQUE', description: 'Visite technique annuelle' },
    { nom: 'AIR', description: 'Système d’air' },
    { nom: 'SUSPENSIONS', description: 'Réparation des suspensions' },
    { nom: 'FREINAGE', description: 'Système de freinage' },
    { nom: 'BACHE', description: 'Réparation de bâche' },
  ]

  for (const type of types) {
    await prisma.typeDepense.upsert({
      where: { nom: type.nom },
      update: {},
      create: type,
    })
  }

  console.log('Types de dépense créés avec succès')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })