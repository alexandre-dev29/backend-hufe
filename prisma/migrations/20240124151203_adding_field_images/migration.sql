/*
  Warnings:

  - Added the required column `height` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secure_url` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "secure_url" TEXT NOT NULL,
ADD COLUMN     "width" INTEGER NOT NULL;
