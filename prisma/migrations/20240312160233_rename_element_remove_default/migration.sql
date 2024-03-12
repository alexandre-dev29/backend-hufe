/*
  Warnings:

  - You are about to drop the column `BathCount` on the `Properties` table. All the data in the column will be lost.
  - You are about to drop the column `sqaureMeters` on the `Properties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Properties" DROP COLUMN "BathCount",
DROP COLUMN "sqaureMeters",
ADD COLUMN     "bathCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "squareMeters" INTEGER NOT NULL DEFAULT 0;
