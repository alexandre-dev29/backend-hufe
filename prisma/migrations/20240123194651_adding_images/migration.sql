-- CreateTable
CREATE TABLE "Images" (
    "idImage" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("idImage")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Properties"("idProperty") ON DELETE RESTRICT ON UPDATE CASCADE;
