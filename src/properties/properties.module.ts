import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';
import { PrismaService } from '../utilities/prisma.service';
import { CloudinaryService } from '../utilities/cloudinary.service';

@Module({
  providers: [
    PropertiesResolver,
    PropertiesService,
    PrismaService,
    CloudinaryService,
  ],
})
export class PropertiesModule {}
