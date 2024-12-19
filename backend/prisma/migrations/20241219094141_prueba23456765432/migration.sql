/*
  Warnings:

  - You are about to drop the `formu_pre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "formu_pre";

-- CreateTable
CREATE TABLE "preadop" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT NOT NULL,
    "mascota" TEXT NOT NULL,

    CONSTRAINT "preadop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "preadop_email_key" ON "preadop"("email");

-- CreateIndex
CREATE UNIQUE INDEX "preadop_telefono_key" ON "preadop"("telefono");
