-- AlterTable
ALTER TABLE "Properties" ADD COLUMN     "BathCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "bedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sqaureMeters" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "pieceCount" SET DEFAULT 0;
