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
import { AwsService } from '../utilities/aws.service';
import { UtilityService } from '../utilities/utilities.service';
import { loadImage } from 'canvas';

@Resolver(() => Properties)
export class PropertiesResolver {
  constructor(
    private readonly propertiesService: PropertiesService,
    private cloudinaryService: CloudinaryService,
    private s3UploadService: AwsService,
    private utilityService: UtilityService,
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
      const fileUpload = await promisedFile;
      const response = await this.s3UploadService.uploadFileToS3(fileUpload);
      const myImage = await loadImage(response.Location);
      const imageData = this.utilityService.getImageData(myImage);
      const imageHash = this.utilityService.generateImageHash(imageData);

      if (response) {
        listOfImages.push({
          height: imageData.height,
          url: response.Location,
          secure_url: response.Location,
          width: imageData.width,
          image_hash: imageHash,
        });
      }
    }
    return this.propertiesService.create(createPropertyInput, listOfImages);
  }

  @Mutation(() => String)
  async testUploadS3(
    @Args({ name: 'propertyImages', type: () => GraphQLUpload })
    propertyImages: FileUpload,
  ) {
    const fileUpload = await propertyImages;
    const response = await this.s3UploadService.uploadFileToS3(fileUpload);
    return JSON.stringify(response);
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
