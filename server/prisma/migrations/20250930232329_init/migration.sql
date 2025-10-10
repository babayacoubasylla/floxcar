-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('LOGISTICIEN', 'FINANCE', 'ADMIN_GENERAL', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "public"."TypeDepense" AS ENUM ('CARBURANT', 'LUBRIFIANT', 'MECANIQUE', 'HYDRAULIQUE', 'ELECTRICITE', 'PNEUMATIQUE', 'PREVENTIF', 'CURATIF', 'TRAVAUX_EXTERIEUR', 'PIECE_DETACHEE', 'VISITE_TECHNIQUE', 'AIR', 'SUSPENSIONS', 'FREINAGE', 'BACHE');

-- CreateEnum
CREATE TYPE "public"."StatutDepense" AS ENUM ('BROUILLON', 'SOUMIS', 'REJETE_FINANCE', 'VALIDE_FINANCE', 'REJETE_ADMIN', 'VALIDE_ADMIN', 'COMPLEMENT_DEMANDE', 'TERMINE');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vehicule" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "codeParc" TEXT,
    "description" TEXT,
    "statut" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Depense" (
    "id" SERIAL NOT NULL,
    "dateIntervention" TIMESTAMP(3) NOT NULL,
    "typeVehicule" TEXT NOT NULL,
    "codeParc" TEXT NOT NULL,
    "typeDepense" "public"."TypeDepense" NOT NULL,
    "libelle" TEXT NOT NULL,
    "quantite" INTEGER,
    "montant" INTEGER NOT NULL,
    "statut" "public"."StatutDepense" NOT NULL DEFAULT 'SOUMIS',
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentaireFinance" TEXT,
    "commentaireAdmin" TEXT,
    "commentaireLogisticien" TEXT,
    "dateReport" TIMESTAMP(3),
    "vehiculeId" INTEGER NOT NULL,
    "soumisParId" INTEGER NOT NULL,
    "valideParFinanceId" INTEGER,
    "valideParAdminId" INTEGER,

    CONSTRAINT "Depense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Commentaire" (
    "id" SERIAL NOT NULL,
    "texte" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depenseId" INTEGER NOT NULL,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Document" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "depenseId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicule_immatriculation_key" ON "public"."Vehicule"("immatriculation");

-- AddForeignKey
ALTER TABLE "public"."Depense" ADD CONSTRAINT "Depense_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "public"."Vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Depense" ADD CONSTRAINT "Depense_soumisParId_fkey" FOREIGN KEY ("soumisParId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Depense" ADD CONSTRAINT "Depense_valideParFinanceId_fkey" FOREIGN KEY ("valideParFinanceId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Depense" ADD CONSTRAINT "Depense_valideParAdminId_fkey" FOREIGN KEY ("valideParAdminId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Commentaire" ADD CONSTRAINT "Commentaire_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "public"."Depense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "public"."Depense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
