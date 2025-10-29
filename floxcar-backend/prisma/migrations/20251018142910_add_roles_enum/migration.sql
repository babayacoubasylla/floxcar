/*
  Warnings:

  - The values [FINANCE] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The values [COMPLEMENT_DEMANDE] on the enum `StatutDepense` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `commentaireAdmin` on the `Depense` table. All the data in the column will be lost.
  - You are about to drop the column `commentaireFinance` on the `Depense` table. All the data in the column will be lost.
  - You are about to drop the column `valideParAdminId` on the `Depense` table. All the data in the column will be lost.
  - You are about to drop the column `valideParFinanceId` on the `Depense` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('LOGISTICIEN', 'CONTROLEUR_FINANCIER', 'CONTROLEUR_GESTION', 'RESPONSABLE_ADMIN', 'ADMIN_GENERAL', 'DG', 'SUPER_ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "StatutDepense_new" AS ENUM ('BROUILLON', 'SOUMIS', 'REJETE_FINANCE', 'VALIDE_FINANCE', 'REJETE_ADMIN', 'VALIDE_ADMIN', 'TRAITE_PAR_CONTROLEUR_FINANCIER', 'TRAITE_PAR_CONTROLEUR_GESTION', 'TRAITE_PAR_RESPONSABLE_ADMIN', 'TRAITE_PAR_ADMIN_GENERAL', 'REJETE', 'TERMINE');
ALTER TABLE "public"."Depense" ALTER COLUMN "statut" DROP DEFAULT;
ALTER TABLE "Depense" ALTER COLUMN "statut" TYPE "StatutDepense_new" USING ("statut"::text::"StatutDepense_new");
ALTER TYPE "StatutDepense" RENAME TO "StatutDepense_old";
ALTER TYPE "StatutDepense_new" RENAME TO "StatutDepense";
DROP TYPE "public"."StatutDepense_old";
ALTER TABLE "Depense" ALTER COLUMN "statut" SET DEFAULT 'SOUMIS';
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Depense" DROP CONSTRAINT "Depense_valideParAdminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Depense" DROP CONSTRAINT "Depense_valideParFinanceId_fkey";

-- AlterTable
ALTER TABLE "Depense" DROP COLUMN "commentaireAdmin",
DROP COLUMN "commentaireFinance",
DROP COLUMN "valideParAdminId",
DROP COLUMN "valideParFinanceId",
ADD COLUMN     "commentaireAdminGeneral" TEXT,
ADD COLUMN     "commentaireControleurFinancier" TEXT,
ADD COLUMN     "commentaireControleurGestion" TEXT,
ADD COLUMN     "commentaireDG" TEXT,
ADD COLUMN     "commentaireResponsableAdmin" TEXT,
ADD COLUMN     "valideParAdminGeneralId" INTEGER,
ADD COLUMN     "valideParControleurFinancierId" INTEGER,
ADD COLUMN     "valideParControleurGestionId" INTEGER,
ADD COLUMN     "valideParDGId" INTEGER,
ADD COLUMN     "valideParResponsableAdminId" INTEGER;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParControleurFinancierId_fkey" FOREIGN KEY ("valideParControleurFinancierId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParControleurGestionId_fkey" FOREIGN KEY ("valideParControleurGestionId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParResponsableAdminId_fkey" FOREIGN KEY ("valideParResponsableAdminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParAdminGeneralId_fkey" FOREIGN KEY ("valideParAdminGeneralId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Depense" ADD CONSTRAINT "Depense_valideParDGId_fkey" FOREIGN KEY ("valideParDGId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
