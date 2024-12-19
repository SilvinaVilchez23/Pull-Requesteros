-- AlterTable
ALTER TABLE "Animal" ALTER COLUMN "sexo" DROP DEFAULT;

-- CreateTable
CREATE TABLE "formu_pre" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "miembro" TEXT NOT NULL,
    "asunto" TEXT NOT NULL,
    "pregunta" TEXT NOT NULL,

    CONSTRAINT "formu_pre_pkey" PRIMARY KEY ("id")
);
