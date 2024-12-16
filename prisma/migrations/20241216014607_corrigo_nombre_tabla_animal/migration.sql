/*
  Warnings:

  - You are about to drop the `Animales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "animales_adoptados" DROP CONSTRAINT "animales_adoptados_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "animales_en_refugio_transito" DROP CONSTRAINT "animales_en_refugio_transito_animal_id_fkey";

-- DropTable
DROP TABLE "Animales";

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "raza" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animales_en_refugio_transito" ADD CONSTRAINT "animales_en_refugio_transito_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animales_adoptados" ADD CONSTRAINT "animales_adoptados_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
