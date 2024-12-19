/*
  Warnings:

  - You are about to drop the column `asunto` on the `formu_pre` table. All the data in the column will be lost.
  - You are about to drop the column `departamento` on the `formu_pre` table. All the data in the column will be lost.
  - You are about to drop the column `miembro` on the `formu_pre` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `formu_pre` table. All the data in the column will be lost.
  - You are about to drop the column `pregunta` on the `formu_pre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `formu_pre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telefono]` on the table `formu_pre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `formu_pre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mascota` to the `formu_pre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "formu_pre" DROP COLUMN "asunto",
DROP COLUMN "departamento",
DROP COLUMN "miembro",
DROP COLUMN "nombre",
DROP COLUMN "pregunta",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "mascota" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "formu_pre_email_key" ON "formu_pre"("email");

-- CreateIndex
CREATE UNIQUE INDEX "formu_pre_telefono_key" ON "formu_pre"("telefono");
