/*
  Warnings:

  - You are about to drop the column `sexo` on the `Animal` table. All the data in the column will be lost.
  - Added the required column `tipo` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "sexo",
ADD COLUMN     "tipo" TEXT NOT NULL;
