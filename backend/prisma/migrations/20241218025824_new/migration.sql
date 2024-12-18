/*
  Warnings:

  - You are about to drop the column `especie` on the `Animal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "especie",
ADD COLUMN     "imagenUrl" TEXT NOT NULL DEFAULT 'https://bowwowblogger.wordpress.com/wp-content/uploads/2012/12/dog-question-mark-curious.gif',
ADD COLUMN     "sexo" TEXT NOT NULL DEFAULT 'No especificado';
