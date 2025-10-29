/*
  Warnings:

  - You are about to drop the column `typeDepense` on the `Depense` table. All the data in the column will be lost.
  - Added the required column `typeDepenseId` to the `Depense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Depense" DROP COLUMN "typeDepense",
ADD COLUMN     "typeDepenseId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."TypeDepense";

-- CreateTable
CREATE TABLE "public"."TypeDepense" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TypeDepense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeDepense_nom_key" ON "public"."TypeDepense"("nom");

-- AddForeignKey
ALTER TABLE "public"."Depense" ADD CONSTRAINT "Depense_typeDepenseId_fkey" FOREIGN KEY ("typeDepenseId") REFERENCES "public"."TypeDepense"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
