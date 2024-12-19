-- DropForeignKey
ALTER TABLE "animal_adoptados" DROP CONSTRAINT "animal_adoptados_adoptante_id_fkey";

-- DropForeignKey
ALTER TABLE "animal_adoptados" DROP CONSTRAINT "animal_adoptados_animal_id_fkey";

-- AddForeignKey
ALTER TABLE "animal_adoptados" ADD CONSTRAINT "animal_adoptados_adoptante_id_fkey" FOREIGN KEY ("adoptante_id") REFERENCES "Adoptante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal_adoptados" ADD CONSTRAINT "animal_adoptados_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
