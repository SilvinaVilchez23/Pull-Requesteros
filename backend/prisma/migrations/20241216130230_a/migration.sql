-- CreateTable
CREATE TABLE "Animales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "raza" TEXT NOT NULL,

    CONSTRAINT "Animales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adoptante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "direccion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" INTEGER NOT NULL,

    CONSTRAINT "Adoptante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refugio_transito" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "capacidad_maxima" INTEGER NOT NULL,
    "telefono" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "refugio_transito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animales_en_refugio_transito" (
    "id" SERIAL NOT NULL,
    "refugio_id" INTEGER NOT NULL,
    "animal_id" INTEGER NOT NULL,

    CONSTRAINT "animales_en_refugio_transito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animales_adoptados" (
    "id" SERIAL NOT NULL,
    "adoptante_id" INTEGER NOT NULL,
    "animal_id" INTEGER NOT NULL,

    CONSTRAINT "animales_adoptados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adoptante_email_key" ON "Adoptante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adoptante_telefono_key" ON "Adoptante"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "refugio_transito_nombre_key" ON "refugio_transito"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "refugio_transito_telefono_key" ON "refugio_transito"("telefono");

-- AddForeignKey
ALTER TABLE "animales_en_refugio_transito" ADD CONSTRAINT "animales_en_refugio_transito_refugio_id_fkey" FOREIGN KEY ("refugio_id") REFERENCES "refugio_transito"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animales_en_refugio_transito" ADD CONSTRAINT "animales_en_refugio_transito_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animales_adoptados" ADD CONSTRAINT "animales_adoptados_adoptante_id_fkey" FOREIGN KEY ("adoptante_id") REFERENCES "Adoptante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animales_adoptados" ADD CONSTRAINT "animales_adoptados_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "Animales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
