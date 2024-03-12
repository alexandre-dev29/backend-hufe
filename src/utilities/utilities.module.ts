import { Module } from '@nestjs/common';
import { DateScalar } from './date-scalar';
import { PrismaService } from './prisma.service';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary-provider';
import { UtilityService } from './utilities.service';
import { JwtService } from '@nestjs/jwt';
import { AwsService } from './aws.service';

@Module({
  providers: [
    DateScalar,
    PrismaService,
    CloudinaryService,
    CloudinaryProvider,
    UtilityService,
    JwtService,
    AwsService,
  ],
  exports: [PrismaService, CloudinaryService, CloudinaryProvider],
})
export class UtilitiesModule {}
