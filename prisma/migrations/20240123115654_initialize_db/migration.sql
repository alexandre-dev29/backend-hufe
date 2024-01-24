-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('RENT', 'BUY');

-- CreateEnum
CREATE TYPE "PropertyStatus" AS ENUM ('AVAILABLE', 'OCCUPIED');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('HOUSE', 'APPARTMENT');

-- CreateEnum
CREATE TYPE "PropertyDistance" AS ENUM ('ASPHALT', 'HOPITAL');

-- CreateEnum
CREATE TYPE "PotentialCost" AS ENUM ('WATER', 'SNEL');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CLIENT', 'VENDOR');

-- CreateTable
CREATE TABLE "Users" (
    "phoneNumber" TEXT NOT NULL,
    "fullName" VARCHAR(200) NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "isPhoneVerified" BOOLEAN NOT NULL DEFAULT false,
    "userType" "UserType" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("phoneNumber")
);

-- CreateTable
CREATE TABLE "Properties" (
    "idProperty" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "propertyName" TEXT NOT NULL,
    "postalCode" TEXT,
    "propertyStatus" "PropertyStatus" NOT NULL DEFAULT 'AVAILABLE',
    "propertyType" "PropertyType" NOT NULL DEFAULT 'HOUSE',
    "pieceCount" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quartierId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("idProperty")
);

-- CreateTable
CREATE TABLE "PropertyAmenties" (
    "idAmenty" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "amentyType" TEXT NOT NULL,
    "amentyValue" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyAmenties_pkey" PRIMARY KEY ("idAmenty")
);

-- CreateTable
CREATE TABLE "PotentialCosts" (
    "idPotentialCost" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "costType" "PotentialCost" NOT NULL DEFAULT 'WATER',
    "costValue" DECIMAL(65,30) NOT NULL,
    "propertyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PotentialCosts_pkey" PRIMARY KEY ("idPotentialCost")
);

-- CreateTable
CREATE TABLE "PropertyDistances" (
    "idDistances" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "distanceType" "PropertyDistance" NOT NULL DEFAULT 'ASPHALT',
    "distanceValue" DECIMAL(65,30) NOT NULL,
    "propertyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyDistances_pkey" PRIMARY KEY ("idDistances")
);

-- CreateTable
CREATE TABLE "Cities" (
    "idCity" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "cityName" TEXT NOT NULL,
    "cityDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("idCity")
);

-- CreateTable
CREATE TABLE "Communes" (
    "idCommune" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "communeName" TEXT NOT NULL,
    "communeDescription" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Communes_pkey" PRIMARY KEY ("idCommune")
);

-- CreateTable
CREATE TABLE "Quartiers" (
    "idQuartier" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "quartierName" TEXT NOT NULL,
    "quartierDescription" TEXT NOT NULL,
    "communeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quartiers_pkey" PRIMARY KEY ("idQuartier")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_phoneNumber_key" ON "Users"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_quartierId_fkey" FOREIGN KEY ("quartierId") REFERENCES "Quartiers"("idQuartier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyAmenties" ADD CONSTRAINT "PropertyAmenties_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Properties"("idProperty") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PotentialCosts" ADD CONSTRAINT "PotentialCosts_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Properties"("idProperty") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyDistances" ADD CONSTRAINT "PropertyDistances_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Properties"("idProperty") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communes" ADD CONSTRAINT "Communes_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("idCity") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quartiers" ADD CONSTRAINT "Quartiers_communeId_fkey" FOREIGN KEY ("communeId") REFERENCES "Communes"("idCommune") ON DELETE RESTRICT ON UPDATE CASCADE;
