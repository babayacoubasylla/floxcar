import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Types de dépense normalisés
const TYPES_DEPENSE = [
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

// Véhicules extraits de ton Excel (liste complète)
const VEHICULES = [
  { immatriculation: 'AB CM 30.01', type: 'Ampiroll', codeParc: 'CM30-01' },
  { immatriculation: 'AB CM 30.02', type: 'Ampiroll', codeParc: 'CM30-02' },
  { immatriculation: 'AB CM 30.03', type: 'Ampiroll', codeParc: 'CM30-03' },
  { immatriculation: 'AB CM 30.04', type: 'Ampiroll', codeParc: 'CM30-04' },
  { immatriculation: 'AB CM 30.05', type: 'Ampiroll', codeParc: 'CM30-05' },
  { immatriculation: 'AB CM 30.06', type: 'Ampiroll', codeParc: 'CM30-06' },
  { immatriculation: 'AB CM 30.07', type: 'Ampiroll', codeParc: 'CM30-07' },
  { immatriculation: 'AB CM 30.08', type: 'Ampiroll', codeParc: 'CM30-08' },
  { immatriculation: 'AB CM 30.09', type: 'Ampiroll', codeParc: 'CM30-09' },
  { immatriculation: 'DA CM 30.10', type: 'Ampiroll', codeParc: 'CM30-10' },
  { immatriculation: 'DA CM 30.11', type: 'Ampiroll', codeParc: 'CM30-11' },
  { immatriculation: 'DA CM 30.12', type: 'Ampiroll', codeParc: 'CM30-12' },
  { immatriculation: 'BK CM 30.13', type: 'Ampiroll', codeParc: 'CM30-13' },
  { immatriculation: 'BK CM 30.14', type: 'Ampiroll', codeParc: 'CM30-14' },
  { immatriculation: 'BK CM 30.15', type: 'Ampiroll', codeParc: 'CM30-15' },
  { immatriculation: 'BK CM 30.16', type: 'Ampiroll', codeParc: 'CM30-16' },
  { immatriculation: 'SP CM 30.17', type: 'Ampiroll', codeParc: 'CM30-17' },
  { immatriculation: 'SP CM 30.18', type: 'Ampiroll', codeParc: 'CM30-18' },
  { immatriculation: 'SP CM 30.19', type: 'Ampiroll', codeParc: 'CM30-19' },
  { immatriculation: 'AB BT 18.01', type: 'Tasseurs', codeParc: 'BT18-01' },
  { immatriculation: 'AB BT 18.02', type: 'Tasseurs', codeParc: 'BT18-02' },
  { immatriculation: 'AB BT 18.03', type: 'Tasseurs', codeParc: 'BT18-03' },
  { immatriculation: 'AB BT 18.04', type: 'Tasseurs', codeParc: 'BT18-04' },
  { immatriculation: 'AB BT 18.05', type: 'Tasseurs', codeParc: 'BT18-05' },
  { immatriculation: 'AB BT 18.06', type: 'Tasseurs', codeParc: 'BT18-06' },
  { immatriculation: 'AB BT 18.07', type: 'Tasseurs', codeParc: 'BT18-07' },
  { immatriculation: 'AB BT 18.08', type: 'Tasseurs', codeParc: 'BT18-08' },
  { immatriculation: 'AB BT 18.09', type: 'Tasseurs', codeParc: 'BT18-09' },
  { immatriculation: 'AB BT 18.10', type: 'Tasseurs', codeParc: 'BT18-10' },
  { immatriculation: 'AB BT 18.11', type: 'Tasseurs', codeParc: 'BT18-11' },
  { immatriculation: 'AB BT 18.12', type: 'Tasseurs', codeParc: 'BT18-12' },
  { immatriculation: 'AB BT 18.13', type: 'Tasseurs', codeParc: 'BT18-13' },
  { immatriculation: 'BK BT 18.14', type: 'Tasseurs', codeParc: 'BT18-14' },
  { immatriculation: 'BK BT 18.15', type: 'Tasseurs', codeParc: 'BT18-15' },
  { immatriculation: 'SP BT 18.16', type: 'Tasseurs', codeParc: 'BT18-16' },
  { immatriculation: 'SP BT 18.17', type: 'Tasseurs', codeParc: 'BT18-17' },
  { immatriculation: 'SP BT 18.18', type: 'Tasseurs', codeParc: 'BT18-18' },
  { immatriculation: 'AB TA 01', type: 'Tracteur', codeParc: 'TA01' },
  { immatriculation: 'AB TA 02', type: 'Tracteur', codeParc: 'TA02' },
  { immatriculation: 'AB TA 03', type: 'Tracteur', codeParc: 'TA03' },
  { immatriculation: 'AB TA 04', type: 'Tracteur', codeParc: 'TA04' },
  { immatriculation: 'AB TA 05', type: 'Tracteur', codeParc: 'TA05' },
  { immatriculation: 'AB TA 06', type: 'Tracteur', codeParc: 'TA06' },
  { immatriculation: 'AB TA 07', type: 'Tracteur', codeParc: 'TA07' },
  { immatriculation: 'AB TA 08', type: 'Tracteur', codeParc: 'TA08' },
  { immatriculation: 'AB TA 09', type: 'Tracteur', codeParc: 'TA09' },
  { immatriculation: 'AB TA 10', type: 'Tracteur', codeParc: 'TA10' },
  { immatriculation: 'AB TA 11', type: 'Tracteur', codeParc: 'TA11' },
  { immatriculation: 'AB TA 12', type: 'Tracteur', codeParc: 'TA12' },
  { immatriculation: 'AB TA 13', type: 'Tracteur', codeParc: 'TA13' },
  { immatriculation: 'AB TA 14', type: 'Tracteur', codeParc: 'TA14' },
  { immatriculation: 'AB TA 15', type: 'Tracteur', codeParc: 'TA15' },
  { immatriculation: 'AB TA 16', type: 'Tracteur', codeParc: 'TA16' },
  { immatriculation: 'AB TA 17', type: 'Tracteur', codeParc: 'TA17' },
  { immatriculation: 'AB TA 18', type: 'Tracteur', codeParc: 'TA18' },
  { immatriculation: 'AB TA 19', type: 'Tracteur', codeParc: 'TA19' },
  { immatriculation: 'DA TA 20', type: 'Tracteur', codeParc: 'TA20' },
  { immatriculation: 'DA TA 21', type: 'Tracteur', codeParc: 'TA21' },
  { immatriculation: 'DA TA 22', type: 'Tracteur', codeParc: 'TA22' },
  { immatriculation: 'BK TA 23', type: 'Tracteur', codeParc: 'TA23' },
  { immatriculation: 'BK TA 24', type: 'Tracteur', codeParc: 'TA24' },
  { immatriculation: 'BK TA 25', type: 'Tracteur', codeParc: 'TA25' },
  { immatriculation: 'BK TA 26', type: 'Tracteur', codeParc: 'TA26' },
  { immatriculation: 'BK TA 27', type: 'Tracteur', codeParc: 'TA27' },
  { immatriculation: 'BK TA 28', type: 'Tracteur', codeParc: 'TA28' },
  { immatriculation: 'BK TA 29', type: 'Tracteur', codeParc: 'TA29' },
  { immatriculation: 'SP TA 30', type: 'Tracteur', codeParc: 'TA30' },
  { immatriculation: 'SP TA 31', type: 'Tracteur', codeParc: 'TA31' },
  { immatriculation: 'SP TA 32', type: 'Tracteur', codeParc: 'TA32' },
  { immatriculation: 'SP TA 33', type: 'Tracteur', codeParc: 'TA33' },
  { immatriculation: 'SP TA 34', type: 'Tracteur', codeParc: 'TA34' },
  { immatriculation: 'SP TA 35', type: 'Tracteur', codeParc: 'TA35' },
  { immatriculation: 'SP TA 36', type: 'Tracteur', codeParc: 'TA36' },
  { immatriculation: 'AB TC 01', type: 'Tricycle', codeParc: 'TC01' },
  { immatriculation: 'AB TC 02', type: 'Tricycle', codeParc: 'TC02' },
  { immatriculation: 'AB TC 03', type: 'Tricycle', codeParc: 'TC03' },
  { immatriculation: 'AB TC 04', type: 'Tricycle', codeParc: 'TC04' },
  { immatriculation: 'AB TC 05', type: 'Tricycle', codeParc: 'TC05' },
];

async function main() {
  console.log('🌱 Suppression des anciennes données...');
  await prisma.depense.deleteMany();
  await prisma.vehicule.deleteMany();
  await prisma.typeDepense.deleteMany();

  console.log('📥 Création des types de dépense...');
  for (const nom of TYPES_DEPENSE) {
    await prisma.typeDepense.create({
      data: { nom }, // ✅ syntaxe correcte
    });
  }

  console.log('🚗 Création des véhicules...');
  for (const v of VEHICULES) {
    await prisma.vehicule.create({
      data: {
        immatriculation: v.immatriculation,
        type: v.type,
        codeParc: v.codeParc,
        statut: 'actif',
      },
    });
  }

  console.log('✅ Données de référence importées avec succès !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });