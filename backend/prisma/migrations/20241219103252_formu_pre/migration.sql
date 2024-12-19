/*
  Warnings:

  - Added the required column `pregunta` to the `preadop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "preadop" ADD COLUMN     "pregunta" TEXT NOT NULL;
