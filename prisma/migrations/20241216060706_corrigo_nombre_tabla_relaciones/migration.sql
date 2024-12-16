/*
  Warnings:

  - You are about to drop the `animales_adoptados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animales_en_refugio_transito` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "animales_adoptados" DROP CONSTRAINT "animales_adoptados_adoptante_id_fkey";

-- DropForeignKey
ALTER TABLE "animales_adoptados" DROP CONSTRAINT "animales_adoptados_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "animales_en_refugio_transito" DROP CONSTRAINT "animales_en_refugio_transito_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "animales_en_refugio_transito" DROP CONSTRAINT "animales_en_refugio_transito_refugio_id_fkey";

-- DropTable
DROP TABLE "animales_adoptados";

-- DropTable
DROP TABLE "animales_en_refugio_transito";

-- CreateTable
CREATE TABLE "animal_en_refugio_transito" (
    "id" SERIAL NOT NULL,
    "refugio_id" INTEGER NOT NULL,
    "animal_id" INTEGER NOT NULL,

    CONSTRAINT "animal_en_refugio_transito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animal_adoptado" (
    "id" SERIAL NOT NULL,
    "adoptante_id" INTEGER NOT NULL,
    "animal_id" INTEGER NOT NULL,

    CONSTRAINT "animal_adoptado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animal_en_refugio_transito" ADD CONSTRAINT "animal_en_refugio_transito_refugio_id_fkey" FOREIGN KEY ("refugio_id") REFERENCES "refugio_transito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_en_refugio_transito" ADD CONSTRAINT "animal_en_refugio_transito_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_adoptado" ADD CONSTRAINT "animal_adoptado_adoptante_id_fkey" FOREIGN KEY ("adoptante_id") REFERENCES "Adoptante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_adoptado" ADD CONSTRAINT "animal_adoptado_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
