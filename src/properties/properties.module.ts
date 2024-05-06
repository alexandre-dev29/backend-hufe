import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';
import { PrismaService } from '../utilities/prisma.service';
import { CloudinaryService } from '../utilities/cloudinary.service';
import { CaslModule } from 'nest-casl';
import { propertiesPermissions } from './properties.permission';
import { AwsService } from '../utilities/aws.service';
import { UtilityService } from '../utilities/utilities.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CaslModule.forFeature({ permissions: propertiesPermissions })],
  providers: [
    PropertiesResolver,
    PropertiesService,
    PrismaService,
    CloudinaryService,
    AwsService,
    UtilityService,
    JwtService,
  ],
})
export class PropertiesModule {}
