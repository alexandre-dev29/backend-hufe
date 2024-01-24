import { Module } from '@nestjs/common';
import { DateScalar } from './date-scalar';
import { PrismaService } from './prisma.service';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary-provider';

@Module({
  providers: [DateScalar, PrismaService, CloudinaryService, CloudinaryProvider],
  exports: [PrismaService, CloudinaryService, CloudinaryProvider],
})
export class UtilitiesModule {}
