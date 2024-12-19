-- CreateTable
CREATE TABLE "formu_pre" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT NOT NULL,
    "mascota" TEXT NOT NULL,

    CONSTRAINT "formu_pre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "formu_pre_email_key" ON "formu_pre"("email");

-- CreateIndex
CREATE UNIQUE INDEX "formu_pre_telefono_key" ON "formu_pre"("telefono");
