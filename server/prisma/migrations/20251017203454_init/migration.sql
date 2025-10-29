-- CreateEnum
CREATE TYPE "Role" AS ENUM ('LOGISTICIEN', 'FINANCE', 'GESTION', 'ADMIN_GENERAL', 'DG', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "StatutDepense" AS ENUM ('SOUMIS', 'VALIDE_FINANCE', 'VALIDE_GESTION', 'TERMINE', 'REJETEE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "codeParc" TEXT,
    "description" TEXT,
    "statut" TEXT DEFAULT 'ACTIF',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeDepense" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TypeDepense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Depense" (
    "id" SERIAL NOT NULL,
    "dateIntervention" TIMESTAMP(3) NOT NULL,
    "codeParc" TEXT NOT NULL,
    "typeDepenseId" INTEGER NOT NULL,
    "libelle" TEXT NOT NULL,
    "quantite" INTEGER DEFAULT 1,
    "montant" INTEGER NOT NULL,
    "statut" "StatutDepense" NOT NULL DEFAULT 'SOUMIS',
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentaireFinance" TEXT,
    "commentaireGestion" TEXT,
    "commentaireAdmin" TEXT,
    "commentaireLogisticien" TEXT,
    "commentaireDg" TEXT,
    "dateReport" TIMESTAMP(3),
    "vehiculeId" INTEGER NOT NULL,
    "soumisParId" INTEGER NOT NULL,
    "valideParFinanceId" INTEGER,
    "valideParGestionId" INTEGER,
    "valideParAdminId" INTEGER,
    "valideParDgId" INTEGER,

    CONSTRAINT "Depense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoriqueValidation" (
    "id" SERIAL NOT NULL,
    "depenseId" INTEGER NOT NULL,
    "validateurId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "commentaire" TEXT,
    "dateAction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistoriqueValidation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" SERIAL NOT NULL,
    "texte" TEXT NOT NULL,
    "auteur" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "depenseId" INTEGER NOT NULL,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "depenseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicule_immatriculation_key" ON "Vehicule"("immatriculation");

-- CreateIndex
CREATE UNIQUE INDEX "TypeDepense_nom_key" ON "TypeDepense"("nom");

-- CreateIndex
CREATE INDEX "HistoriqueValidation_depenseId_idx" ON "HistoriqueValidation"("depenseId");

-- CreateIndex
CREATE INDEX "HistoriqueValidation_validateurId_idx" ON "HistoriqueValidation"("validateurId");

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_vehiculeId_fkey" FOREIGN KEY ("vehiculeId") REFERENCES "Vehicule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_soumisParId_fkey" FOREIGN KEY ("soumisParId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParFinanceId_fkey" FOREIGN KEY ("valideParFinanceId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParGestionId_fkey" FOREIGN KEY ("valideParGestionId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParAdminId_fkey" FOREIGN KEY ("valideParAdminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParDgId_fkey" FOREIGN KEY ("valideParDgId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_typeDepenseId_fkey" FOREIGN KEY ("typeDepenseId") REFERENCES "TypeDepense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoriqueValidation" ADD CONSTRAINT "HistoriqueValidation_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "Depense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoriqueValidation" ADD CONSTRAINT "HistoriqueValidation_validateurId_fkey" FOREIGN KEY ("validateurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "Depense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_depenseId_fkey" FOREIGN KEY ("depenseId") REFERENCES "Depense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
