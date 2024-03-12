import { Injectable } from '@nestjs/common';

import {
  CreateOnePropertiesArgs,
  DeleteOnePropertiesArgs,
  FindFirstPropertiesArgs,
  FindManyPropertiesArgs,
  ImagesCreateWithoutPropertyInput,
  UpdateOnePropertiesArgs,
} from '../types/@generated';
import { PrismaService } from '../utilities/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prismaService: PrismaService) {}
  create(
    createPropertyInput: CreateOnePropertiesArgs,
    imagesInformations: ImagesCreateWithoutPropertyInput[],
  ) {
    return this.prismaService.properties.create({
      data: {
        ...createPropertyInput.data,
        Images: { create: [...imagesInformations] },
      },
    });
  }

  findAll(findManyProperties: FindManyPropertiesArgs) {
    return this.prismaService.properties.findMany({
      ...findManyProperties,
      include: { quartier: true, Images: true },
      distinct: 'idProperty',
    });
  }

  findOne(findOneArgs: FindFirstPropertiesArgs) {
    return this.prismaService.properties.findFirst({
      ...findOneArgs,
      include: { quartier: true, Images: true },
      distinct: 'idProperty',
    });
  }

  update(updatePropertyInput: UpdateOnePropertiesArgs) {
    return this.prismaService.properties.update(updatePropertyInput);
  }

  remove(deleteOne: DeleteOnePropertiesArgs) {
    return this.prismaService.properties.delete(deleteOne);
  }
}
