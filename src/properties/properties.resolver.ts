import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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

@Resolver(() => Properties)
export class PropertiesResolver {
  constructor(
    private readonly propertiesService: PropertiesService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Mutation(() => Properties)
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
    const response = await this.propertiesService.create(
      createPropertyInput,
      listOfImages,
    );
    return response;
  }

  @Query(() => [Properties], { name: 'properties' })
  findAll(@Args() findAllProperties: FindManyPropertiesArgs) {
    return this.propertiesService.findAll(findAllProperties);
  }

  @Query(() => Properties, { name: 'property' })
  findOne(@Args() findOneArgs: FindFirstPropertiesArgs) {
    return this.propertiesService.findOne(findOneArgs);
  }

  @Mutation(() => Properties)
  updateProperty(@Args() updatePropertyInput: UpdateOnePropertiesArgs) {
    return this.propertiesService.update(updatePropertyInput);
  }

  @Mutation(() => Properties)
  removeProperty(@Args() deleteonePropertyArgs: DeleteOnePropertiesArgs) {
    return this.propertiesService.remove(deleteonePropertyArgs);
  }
}
