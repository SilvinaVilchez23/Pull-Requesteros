-- DropForeignKey
ALTER TABLE "animal_en_refugio_transito" DROP CONSTRAINT "animal_en_refugio_transito_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "animal_en_refugio_transito" DROP CONSTRAINT "animal_en_refugio_transito_refugio_id_fkey";

-- AddForeignKey
ALTER TABLE "animal_en_refugio_transito" ADD CONSTRAINT "animal_en_refugio_transito_refugio_id_fkey" FOREIGN KEY ("refugio_id") REFERENCES "refugio_transito"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_en_refugio_transito" ADD CONSTRAINT "animal_en_refugio_transito_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
