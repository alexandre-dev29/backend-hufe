import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PropertiesService } from './properties.service';

import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import {
  CreateOnePropertiesArgs,
  DeleteOnePropertiesArgs,
  FindFirstPropertiesArgs,
  FindManyPropertiesArgs,
  ImagesCreateWithoutPropertyInput,
  Properties,
  UpdateOnePropertiesArgs,
} from '../types/@generated';
import { CloudinaryService } from '../utilities/cloudinary.service';
import { UseGuards } from '@nestjs/common';
import { MainAuthGuardGuard } from '../security/main-guard.guard';
import { AccessGuard, UseAbility } from 'nest-casl';
import { PropertiesSecurityActions } from '../security/actions/security-actions';

@Resolver(() => Properties)
export class PropertiesResolver {
  constructor(
    private readonly propertiesService: PropertiesService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Mutation(() => Properties)
  // @UseGuards(MainAuthGuardGuard, AccessGuard)
  // @UseAbility(PropertiesSecurityActions.create, Properties)
  async createProperty(
    @Args() createPropertyInput: CreateOnePropertiesArgs,
    @Args({ name: 'propertyImages', type: () => [GraphQLUpload] })
    propertyImages: FileUpload[],
  ) {
    const listOfImages: ImagesCreateWithoutPropertyInput[] = [];
    for (const promisedFile of propertyImages) {
      console.log(promisedFile);
      const fileUpload = await promisedFile;
      const response = await this.cloudinaryService.uploadFile(fileUpload);
      if (response) {
        listOfImages.push({
          height: response.height,
          url: response.url,
          secure_url: response.secure_url,
          width: response.width,
        });
      }
    }
    return this.propertiesService.create(createPropertyInput, listOfImages);
  }

  @Query(() => [Properties], { name: 'properties' })
  // @UseGuards(MainAuthGuardGuard, AccessGuard)
  // @UseAbility(PropertiesSecurityActions.readAll, Properties)
  findAll(@Args() findAllProperties: FindManyPropertiesArgs) {
    return this.propertiesService.findAll(findAllProperties);
  }

  @Query(() => Properties, { name: 'property' })
  // @UseGuards(MainAuthGuardGuard, AccessGuard)
  // @UseAbility(PropertiesSecurityActions.readOne, Properties)
  findOne(@Args() findOneArgs: FindFirstPropertiesArgs) {
    return this.propertiesService.findOne(findOneArgs);
  }

  @Mutation(() => String)
  // @UseGuards(MainAuthGuardGuard, AccessGuard)
  // @UseAbility(PropertiesSecurityActions.update, Properties)
  updateProperty(@Args() updatePropertyInput: UpdateOnePropertiesArgs) {
    return 'good';
  }

  @Mutation(() => Properties)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(PropertiesSecurityActions.removeOne, Properties)
  removeProperty(@Args() deleteonePropertyArgs: DeleteOnePropertiesArgs) {
    return this.propertiesService.remove(deleteonePropertyArgs);
  }
}
