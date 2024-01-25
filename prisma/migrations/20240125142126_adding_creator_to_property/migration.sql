-- AlterTable
ALTER TABLE "Properties" ADD COLUMN     "creatorId" TEXT NOT NULL DEFAULT '+243975344824';

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("phoneNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
