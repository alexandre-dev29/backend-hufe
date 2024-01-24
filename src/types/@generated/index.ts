import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';

export enum UsersScalarFieldEnum {
    phoneNumber = "phoneNumber",
    fullName = "fullName",
    email = "email",
    password = "password",
    isPhoneVerified = "isPhoneVerified",
    userType = "userType",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum QuartiersScalarFieldEnum {
    idQuartier = "idQuartier",
    quartierName = "quartierName",
    quartierDescription = "quartierDescription",
    communeId = "communeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PropertyDistancesScalarFieldEnum {
    idDistances = "idDistances",
    distanceType = "distanceType",
    distanceValue = "distanceValue",
    propertyId = "propertyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PropertyAmentiesScalarFieldEnum {
    idAmenty = "idAmenty",
    amentyType = "amentyType",
    amentyValue = "amentyValue",
    propertyId = "propertyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PropertiesScalarFieldEnum {
    idProperty = "idProperty",
    propertyName = "propertyName",
    postalCode = "postalCode",
    propertyStatus = "propertyStatus",
    propertyType = "propertyType",
    pieceCount = "pieceCount",
    price = "price",
    quartierId = "quartierId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum UserType {
    CLIENT = "CLIENT",
    VENDOR = "VENDOR"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum PropertyType {
    HOUSE = "HOUSE",
    APPARTMENT = "APPARTMENT"
}

export enum PropertyStatus {
    AVAILABLE = "AVAILABLE",
    OCCUPIED = "OCCUPIED"
}

export enum PropertyDistance {
    ASPHALT = "ASPHALT",
    HOPITAL = "HOPITAL"
}

export enum PotentialCost {
    WATER = "WATER",
    SNEL = "SNEL"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum PotentialCostsScalarFieldEnum {
    idPotentialCost = "idPotentialCost",
    costType = "costType",
    costValue = "costValue",
    propertyId = "propertyId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ImagesScalarFieldEnum {
    idImage = "idImage",
    url = "url",
    secure_url = "secure_url",
    width = "width",
    height = "height",
    propertyId = "propertyId"
}

export enum CommunesScalarFieldEnum {
    idCommune = "idCommune",
    communeName = "communeName",
    communeDescription = "communeDescription",
    cityId = "cityId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CitiesScalarFieldEnum {
    idCity = "idCity",
    cityName = "cityName",
    cityDescription = "cityDescription",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CitiesScalarFieldEnum, { name: 'CitiesScalarFieldEnum', description: undefined })
registerEnumType(CommunesScalarFieldEnum, { name: 'CommunesScalarFieldEnum', description: undefined })
registerEnumType(ImagesScalarFieldEnum, { name: 'ImagesScalarFieldEnum', description: undefined })
registerEnumType(PotentialCostsScalarFieldEnum, { name: 'PotentialCostsScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(PotentialCost, { name: 'PotentialCost', description: undefined })
registerEnumType(PropertyDistance, { name: 'PropertyDistance', description: undefined })
registerEnumType(PropertyStatus, { name: 'PropertyStatus', description: undefined })
registerEnumType(PropertyType, { name: 'PropertyType', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserType, { name: 'UserType', description: undefined })
registerEnumType(PropertiesScalarFieldEnum, { name: 'PropertiesScalarFieldEnum', description: undefined })
registerEnumType(PropertyAmentiesScalarFieldEnum, { name: 'PropertyAmentiesScalarFieldEnum', description: undefined })
registerEnumType(PropertyDistancesScalarFieldEnum, { name: 'PropertyDistancesScalarFieldEnum', description: undefined })
registerEnumType(QuartiersScalarFieldEnum, { name: 'QuartiersScalarFieldEnum', description: undefined })
registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCities {
    @Field(() => CitiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CitiesCountAggregate>;
    @Field(() => CitiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CitiesMinAggregate>;
    @Field(() => CitiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CitiesMaxAggregate>;
}

@ArgsType()
export class CitiesAggregateArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => [CitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CitiesOrderByWithRelationInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CitiesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CitiesCountAggregateInput>;
    @Field(() => CitiesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CitiesMinAggregateInput>;
    @Field(() => CitiesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CitiesMaxAggregateInput>;
}

@InputType()
export class CitiesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCity?: true;
    @Field(() => Boolean, {nullable:true})
    cityName?: true;
    @Field(() => Boolean, {nullable:true})
    cityDescription?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CitiesCountAggregate {
    @Field(() => Int, {nullable:false})
    idCity!: number;
    @Field(() => Int, {nullable:false})
    cityName!: number;
    @Field(() => Int, {nullable:false})
    cityDescription!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CitiesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CitiesCount {
    @Field(() => Int, {nullable:false})
    Communes?: number;
}

@InputType()
export class CitiesCreateManyInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CitiesCreateNestedOneWithoutCommunesInput {
    @Field(() => CitiesCreateWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesCreateWithoutCommunesInput)
    create?: InstanceType<typeof CitiesCreateWithoutCommunesInput>;
    @Field(() => CitiesCreateOrConnectWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: InstanceType<typeof CitiesCreateOrConnectWithoutCommunesInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    @Type(() => CitiesWhereUniqueInput)
    connect?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
}

@InputType()
export class CitiesCreateOrConnectWithoutCommunesInput {
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => CitiesCreateWithoutCommunesInput, {nullable:false})
    @Type(() => CitiesCreateWithoutCommunesInput)
    create!: InstanceType<typeof CitiesCreateWithoutCommunesInput>;
}

@InputType()
export class CitiesCreateWithoutCommunesInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CitiesCreateInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommunesCreateNestedManyWithoutCityInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesCreateNestedManyWithoutCityInput>;
}

@ArgsType()
export class CitiesGroupByArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => [CitiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CitiesOrderByWithAggregationInput>;
    @Field(() => [CitiesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CitiesScalarFieldEnum>;
    @Field(() => CitiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CitiesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CitiesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CitiesCountAggregateInput>;
    @Field(() => CitiesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CitiesMinAggregateInput>;
    @Field(() => CitiesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CitiesMaxAggregateInput>;
}

@ObjectType()
export class CitiesGroupBy {
    @Field(() => String, {nullable:false})
    idCity!: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CitiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CitiesCountAggregate>;
    @Field(() => CitiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CitiesMinAggregate>;
    @Field(() => CitiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CitiesMaxAggregate>;
}

@InputType()
export class CitiesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCity?: true;
    @Field(() => Boolean, {nullable:true})
    cityName?: true;
    @Field(() => Boolean, {nullable:true})
    cityDescription?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CitiesMaxAggregate {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:true})
    cityName?: string;
    @Field(() => String, {nullable:true})
    cityDescription?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CitiesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CitiesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCity?: true;
    @Field(() => Boolean, {nullable:true})
    cityName?: true;
    @Field(() => Boolean, {nullable:true})
    cityDescription?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CitiesMinAggregate {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:true})
    cityName?: string;
    @Field(() => String, {nullable:true})
    cityDescription?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CitiesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CitiesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idCity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CitiesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CitiesCountOrderByAggregateInput>;
    @Field(() => CitiesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CitiesMaxOrderByAggregateInput>;
    @Field(() => CitiesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CitiesMinOrderByAggregateInput>;
}

@InputType()
export class CitiesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idCity?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CommunesOrderByRelationAggregateInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesOrderByRelationAggregateInput>;
}

@InputType()
export class CitiesRelationFilter {
    @Field(() => CitiesWhereInput, {nullable:true})
    is?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => CitiesWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CitiesWhereInput>;
}

@InputType()
export class CitiesScalarWhereWithAggregatesInput {
    @Field(() => [CitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CitiesScalarWhereWithAggregatesInput>;
    @Field(() => [CitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CitiesScalarWhereWithAggregatesInput>;
    @Field(() => [CitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CitiesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idCity?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cityName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cityDescription?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CitiesUncheckedCreateWithoutCommunesInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CitiesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommunesUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesUncheckedCreateNestedManyWithoutCityInput>;
}

@InputType()
export class CitiesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CitiesUncheckedUpdateWithoutCommunesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CitiesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommunesUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesUncheckedUpdateManyWithoutCityNestedInput>;
}

@InputType()
export class CitiesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CitiesUpdateOneRequiredWithoutCommunesNestedInput {
    @Field(() => CitiesCreateWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesCreateWithoutCommunesInput)
    create?: InstanceType<typeof CitiesCreateWithoutCommunesInput>;
    @Field(() => CitiesCreateOrConnectWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: InstanceType<typeof CitiesCreateOrConnectWithoutCommunesInput>;
    @Field(() => CitiesUpsertWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesUpsertWithoutCommunesInput)
    upsert?: InstanceType<typeof CitiesUpsertWithoutCommunesInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    @Type(() => CitiesWhereUniqueInput)
    connect?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => CitiesUpdateToOneWithWhereWithoutCommunesInput, {nullable:true})
    @Type(() => CitiesUpdateToOneWithWhereWithoutCommunesInput)
    update?: InstanceType<typeof CitiesUpdateToOneWithWhereWithoutCommunesInput>;
}

@InputType()
export class CitiesUpdateToOneWithWhereWithoutCommunesInput {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => CitiesUpdateWithoutCommunesInput, {nullable:false})
    @Type(() => CitiesUpdateWithoutCommunesInput)
    data!: InstanceType<typeof CitiesUpdateWithoutCommunesInput>;
}

@InputType()
export class CitiesUpdateWithoutCommunesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CitiesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCity?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommunesUpdateManyWithoutCityNestedInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesUpdateManyWithoutCityNestedInput>;
}

@InputType()
export class CitiesUpsertWithoutCommunesInput {
    @Field(() => CitiesUpdateWithoutCommunesInput, {nullable:false})
    @Type(() => CitiesUpdateWithoutCommunesInput)
    update!: InstanceType<typeof CitiesUpdateWithoutCommunesInput>;
    @Field(() => CitiesCreateWithoutCommunesInput, {nullable:false})
    @Type(() => CitiesCreateWithoutCommunesInput)
    create!: InstanceType<typeof CitiesCreateWithoutCommunesInput>;
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
}

@InputType()
export class CitiesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idCity?: string;
    @Field(() => [CitiesWhereInput], {nullable:true})
    AND?: Array<CitiesWhereInput>;
    @Field(() => [CitiesWhereInput], {nullable:true})
    OR?: Array<CitiesWhereInput>;
    @Field(() => [CitiesWhereInput], {nullable:true})
    NOT?: Array<CitiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    cityName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityDescription?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CommunesListRelationFilter, {nullable:true})
    Communes?: InstanceType<typeof CommunesListRelationFilter>;
}

@InputType()
export class CitiesWhereInput {
    @Field(() => [CitiesWhereInput], {nullable:true})
    AND?: Array<CitiesWhereInput>;
    @Field(() => [CitiesWhereInput], {nullable:true})
    OR?: Array<CitiesWhereInput>;
    @Field(() => [CitiesWhereInput], {nullable:true})
    NOT?: Array<CitiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idCity?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityDescription?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CommunesListRelationFilter, {nullable:true})
    Communes?: InstanceType<typeof CommunesListRelationFilter>;
}

@ObjectType()
export class Cities {
    @Field(() => ID, {nullable:false})
    idCity!: string;
    @Field(() => String, {nullable:false})
    cityName!: string;
    @Field(() => String, {nullable:false})
    cityDescription!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Communes], {nullable:true})
    Communes?: Array<Communes>;
    @Field(() => CitiesCount, {nullable:false})
    _count?: InstanceType<typeof CitiesCount>;
}

@ArgsType()
export class CreateManyCitiesArgs {
    @Field(() => [CitiesCreateManyInput], {nullable:false})
    @Type(() => CitiesCreateManyInput)
    data!: Array<CitiesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCitiesArgs {
    @Field(() => CitiesCreateInput, {nullable:false})
    @Type(() => CitiesCreateInput)
    data!: InstanceType<typeof CitiesCreateInput>;
}

@ArgsType()
export class DeleteManyCitiesArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
}

@ArgsType()
export class DeleteOneCitiesArgs {
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
}

@ArgsType()
export class FindFirstCitiesOrThrowArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => [CitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CitiesOrderByWithRelationInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CitiesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCitiesArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => [CitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CitiesOrderByWithRelationInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CitiesScalarFieldEnum>;
}

@ArgsType()
export class FindManyCitiesArgs {
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
    @Field(() => [CitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CitiesOrderByWithRelationInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CitiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CitiesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCitiesOrThrowArgs {
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
}

@ArgsType()
export class FindUniqueCitiesArgs {
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
}

@ArgsType()
export class UpdateManyCitiesArgs {
    @Field(() => CitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => CitiesUpdateManyMutationInput)
    data!: InstanceType<typeof CitiesUpdateManyMutationInput>;
    @Field(() => CitiesWhereInput, {nullable:true})
    @Type(() => CitiesWhereInput)
    where?: InstanceType<typeof CitiesWhereInput>;
}

@ArgsType()
export class UpdateOneCitiesArgs {
    @Field(() => CitiesUpdateInput, {nullable:false})
    @Type(() => CitiesUpdateInput)
    data!: InstanceType<typeof CitiesUpdateInput>;
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
}

@ArgsType()
export class UpsertOneCitiesArgs {
    @Field(() => CitiesWhereUniqueInput, {nullable:false})
    @Type(() => CitiesWhereUniqueInput)
    where!: Prisma.AtLeast<CitiesWhereUniqueInput, 'idCity'>;
    @Field(() => CitiesCreateInput, {nullable:false})
    @Type(() => CitiesCreateInput)
    create!: InstanceType<typeof CitiesCreateInput>;
    @Field(() => CitiesUpdateInput, {nullable:false})
    @Type(() => CitiesUpdateInput)
    update!: InstanceType<typeof CitiesUpdateInput>;
}

@ObjectType()
export class AggregateCommunes {
    @Field(() => CommunesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommunesCountAggregate>;
    @Field(() => CommunesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommunesMinAggregate>;
    @Field(() => CommunesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommunesMaxAggregate>;
}

@ArgsType()
export class CommunesAggregateArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => [CommunesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunesOrderByWithRelationInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommunesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommunesCountAggregateInput>;
    @Field(() => CommunesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommunesMinAggregateInput>;
    @Field(() => CommunesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommunesMaxAggregateInput>;
}

@InputType()
export class CommunesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCommune?: true;
    @Field(() => Boolean, {nullable:true})
    communeName?: true;
    @Field(() => Boolean, {nullable:true})
    communeDescription?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CommunesCountAggregate {
    @Field(() => Int, {nullable:false})
    idCommune!: number;
    @Field(() => Int, {nullable:false})
    communeName!: number;
    @Field(() => Int, {nullable:false})
    communeDescription!: number;
    @Field(() => Int, {nullable:false})
    cityId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CommunesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCommune?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CommunesCount {
    @Field(() => Int, {nullable:false})
    Quartiers?: number;
}

@InputType()
export class CommunesCreateManyCityInputEnvelope {
    @Field(() => [CommunesCreateManyCityInput], {nullable:false})
    @Type(() => CommunesCreateManyCityInput)
    data!: Array<CommunesCreateManyCityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommunesCreateManyCityInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunesCreateManyInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunesCreateNestedManyWithoutCityInput {
    @Field(() => [CommunesCreateWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateWithoutCityInput)
    create?: Array<CommunesCreateWithoutCityInput>;
    @Field(() => [CommunesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<CommunesCreateOrConnectWithoutCityInput>;
    @Field(() => CommunesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => CommunesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof CommunesCreateManyCityInputEnvelope>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
}

@InputType()
export class CommunesCreateNestedOneWithoutQuartiersInput {
    @Field(() => CommunesCreateWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesCreateWithoutQuartiersInput)
    create?: InstanceType<typeof CommunesCreateWithoutQuartiersInput>;
    @Field(() => CommunesCreateOrConnectWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutQuartiersInput)
    connectOrCreate?: InstanceType<typeof CommunesCreateOrConnectWithoutQuartiersInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
}

@InputType()
export class CommunesCreateOrConnectWithoutCityInput {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesCreateWithoutCityInput, {nullable:false})
    @Type(() => CommunesCreateWithoutCityInput)
    create!: InstanceType<typeof CommunesCreateWithoutCityInput>;
}

@InputType()
export class CommunesCreateOrConnectWithoutQuartiersInput {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesCreateWithoutQuartiersInput, {nullable:false})
    @Type(() => CommunesCreateWithoutQuartiersInput)
    create!: InstanceType<typeof CommunesCreateWithoutQuartiersInput>;
}

@InputType()
export class CommunesCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => QuartiersCreateNestedManyWithoutCommunesInput, {nullable:true})
    @Type(() => QuartiersCreateNestedManyWithoutCommunesInput)
    Quartiers?: InstanceType<typeof QuartiersCreateNestedManyWithoutCommunesInput>;
}

@InputType()
export class CommunesCreateWithoutQuartiersInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CitiesCreateNestedOneWithoutCommunesInput, {nullable:false})
    city!: InstanceType<typeof CitiesCreateNestedOneWithoutCommunesInput>;
}

@InputType()
export class CommunesCreateInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => QuartiersCreateNestedManyWithoutCommunesInput, {nullable:true})
    @Type(() => QuartiersCreateNestedManyWithoutCommunesInput)
    Quartiers?: InstanceType<typeof QuartiersCreateNestedManyWithoutCommunesInput>;
    @Field(() => CitiesCreateNestedOneWithoutCommunesInput, {nullable:false})
    city!: InstanceType<typeof CitiesCreateNestedOneWithoutCommunesInput>;
}

@ArgsType()
export class CommunesGroupByArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => [CommunesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunesOrderByWithAggregationInput>;
    @Field(() => [CommunesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommunesScalarFieldEnum>;
    @Field(() => CommunesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommunesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommunesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommunesCountAggregateInput>;
    @Field(() => CommunesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommunesMinAggregateInput>;
    @Field(() => CommunesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommunesMaxAggregateInput>;
}

@ObjectType()
export class CommunesGroupBy {
    @Field(() => String, {nullable:false})
    idCommune!: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CommunesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommunesCountAggregate>;
    @Field(() => CommunesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommunesMinAggregate>;
    @Field(() => CommunesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommunesMaxAggregate>;
}

@InputType()
export class CommunesListRelationFilter {
    @Field(() => CommunesWhereInput, {nullable:true})
    every?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => CommunesWhereInput, {nullable:true})
    some?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => CommunesWhereInput, {nullable:true})
    none?: InstanceType<typeof CommunesWhereInput>;
}

@InputType()
export class CommunesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCommune?: true;
    @Field(() => Boolean, {nullable:true})
    communeName?: true;
    @Field(() => Boolean, {nullable:true})
    communeDescription?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CommunesMaxAggregate {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:true})
    communeName?: string;
    @Field(() => String, {nullable:true})
    communeDescription?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCommune?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CommunesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idCommune?: true;
    @Field(() => Boolean, {nullable:true})
    communeName?: true;
    @Field(() => Boolean, {nullable:true})
    communeDescription?: true;
    @Field(() => Boolean, {nullable:true})
    cityId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CommunesMinAggregate {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:true})
    communeName?: string;
    @Field(() => String, {nullable:true})
    communeDescription?: string;
    @Field(() => String, {nullable:true})
    cityId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idCommune?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CommunesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CommunesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idCommune?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CommunesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommunesCountOrderByAggregateInput>;
    @Field(() => CommunesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommunesMaxOrderByAggregateInput>;
    @Field(() => CommunesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommunesMinOrderByAggregateInput>;
}

@InputType()
export class CommunesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idCommune?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => QuartiersOrderByRelationAggregateInput, {nullable:true})
    @Type(() => QuartiersOrderByRelationAggregateInput)
    Quartiers?: InstanceType<typeof QuartiersOrderByRelationAggregateInput>;
    @Field(() => CitiesOrderByWithRelationInput, {nullable:true})
    city?: InstanceType<typeof CitiesOrderByWithRelationInput>;
}

@InputType()
export class CommunesRelationFilter {
    @Field(() => CommunesWhereInput, {nullable:true})
    is?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => CommunesWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CommunesWhereInput>;
}

@InputType()
export class CommunesScalarWhereWithAggregatesInput {
    @Field(() => [CommunesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommunesScalarWhereWithAggregatesInput>;
    @Field(() => [CommunesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommunesScalarWhereWithAggregatesInput>;
    @Field(() => [CommunesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommunesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idCommune?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    communeName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    communeDescription?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cityId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CommunesScalarWhereInput {
    @Field(() => [CommunesScalarWhereInput], {nullable:true})
    AND?: Array<CommunesScalarWhereInput>;
    @Field(() => [CommunesScalarWhereInput], {nullable:true})
    OR?: Array<CommunesScalarWhereInput>;
    @Field(() => [CommunesScalarWhereInput], {nullable:true})
    NOT?: Array<CommunesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idCommune?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CommunesUncheckedCreateNestedManyWithoutCityInput {
    @Field(() => [CommunesCreateWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateWithoutCityInput)
    create?: Array<CommunesCreateWithoutCityInput>;
    @Field(() => [CommunesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<CommunesCreateOrConnectWithoutCityInput>;
    @Field(() => CommunesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => CommunesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof CommunesCreateManyCityInputEnvelope>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
}

@InputType()
export class CommunesUncheckedCreateWithoutCityInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => QuartiersUncheckedCreateNestedManyWithoutCommunesInput, {nullable:true})
    @Type(() => QuartiersUncheckedCreateNestedManyWithoutCommunesInput)
    Quartiers?: InstanceType<typeof QuartiersUncheckedCreateNestedManyWithoutCommunesInput>;
}

@InputType()
export class CommunesUncheckedCreateWithoutQuartiersInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommunesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => QuartiersUncheckedCreateNestedManyWithoutCommunesInput, {nullable:true})
    @Type(() => QuartiersUncheckedCreateNestedManyWithoutCommunesInput)
    Quartiers?: InstanceType<typeof QuartiersUncheckedCreateNestedManyWithoutCommunesInput>;
}

@InputType()
export class CommunesUncheckedUpdateManyWithoutCityNestedInput {
    @Field(() => [CommunesCreateWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateWithoutCityInput)
    create?: Array<CommunesCreateWithoutCityInput>;
    @Field(() => [CommunesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<CommunesCreateOrConnectWithoutCityInput>;
    @Field(() => [CommunesUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<CommunesUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => CommunesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => CommunesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof CommunesCreateManyCityInputEnvelope>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<CommunesUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [CommunesUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<CommunesUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [CommunesScalarWhereInput], {nullable:true})
    @Type(() => CommunesScalarWhereInput)
    deleteMany?: Array<CommunesScalarWhereInput>;
}

@InputType()
export class CommunesUncheckedUpdateManyWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunesUncheckedUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => QuartiersUncheckedUpdateManyWithoutCommunesNestedInput, {nullable:true})
    @Type(() => QuartiersUncheckedUpdateManyWithoutCommunesNestedInput)
    Quartiers?: InstanceType<typeof QuartiersUncheckedUpdateManyWithoutCommunesNestedInput>;
}

@InputType()
export class CommunesUncheckedUpdateWithoutQuartiersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cityId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => QuartiersUncheckedUpdateManyWithoutCommunesNestedInput, {nullable:true})
    @Type(() => QuartiersUncheckedUpdateManyWithoutCommunesNestedInput)
    Quartiers?: InstanceType<typeof QuartiersUncheckedUpdateManyWithoutCommunesNestedInput>;
}

@InputType()
export class CommunesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommunesUpdateManyWithWhereWithoutCityInput {
    @Field(() => CommunesScalarWhereInput, {nullable:false})
    @Type(() => CommunesScalarWhereInput)
    where!: InstanceType<typeof CommunesScalarWhereInput>;
    @Field(() => CommunesUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunesUpdateManyMutationInput)
    data!: InstanceType<typeof CommunesUpdateManyMutationInput>;
}

@InputType()
export class CommunesUpdateManyWithoutCityNestedInput {
    @Field(() => [CommunesCreateWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateWithoutCityInput)
    create?: Array<CommunesCreateWithoutCityInput>;
    @Field(() => [CommunesCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<CommunesCreateOrConnectWithoutCityInput>;
    @Field(() => [CommunesUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<CommunesUpsertWithWhereUniqueWithoutCityInput>;
    @Field(() => CommunesCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => CommunesCreateManyCityInputEnvelope)
    createMany?: InstanceType<typeof CommunesCreateManyCityInputEnvelope>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesWhereUniqueInput], {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>>;
    @Field(() => [CommunesUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<CommunesUpdateWithWhereUniqueWithoutCityInput>;
    @Field(() => [CommunesUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => CommunesUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<CommunesUpdateManyWithWhereWithoutCityInput>;
    @Field(() => [CommunesScalarWhereInput], {nullable:true})
    @Type(() => CommunesScalarWhereInput)
    deleteMany?: Array<CommunesScalarWhereInput>;
}

@InputType()
export class CommunesUpdateOneRequiredWithoutQuartiersNestedInput {
    @Field(() => CommunesCreateWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesCreateWithoutQuartiersInput)
    create?: InstanceType<typeof CommunesCreateWithoutQuartiersInput>;
    @Field(() => CommunesCreateOrConnectWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesCreateOrConnectWithoutQuartiersInput)
    connectOrCreate?: InstanceType<typeof CommunesCreateOrConnectWithoutQuartiersInput>;
    @Field(() => CommunesUpsertWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesUpsertWithoutQuartiersInput)
    upsert?: InstanceType<typeof CommunesUpsertWithoutQuartiersInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    @Type(() => CommunesWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesUpdateToOneWithWhereWithoutQuartiersInput, {nullable:true})
    @Type(() => CommunesUpdateToOneWithWhereWithoutQuartiersInput)
    update?: InstanceType<typeof CommunesUpdateToOneWithWhereWithoutQuartiersInput>;
}

@InputType()
export class CommunesUpdateToOneWithWhereWithoutQuartiersInput {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => CommunesUpdateWithoutQuartiersInput, {nullable:false})
    @Type(() => CommunesUpdateWithoutQuartiersInput)
    data!: InstanceType<typeof CommunesUpdateWithoutQuartiersInput>;
}

@InputType()
export class CommunesUpdateWithWhereUniqueWithoutCityInput {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesUpdateWithoutCityInput, {nullable:false})
    @Type(() => CommunesUpdateWithoutCityInput)
    data!: InstanceType<typeof CommunesUpdateWithoutCityInput>;
}

@InputType()
export class CommunesUpdateWithoutCityInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => QuartiersUpdateManyWithoutCommunesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateManyWithoutCommunesNestedInput)
    Quartiers?: InstanceType<typeof QuartiersUpdateManyWithoutCommunesNestedInput>;
}

@InputType()
export class CommunesUpdateWithoutQuartiersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CitiesUpdateOneRequiredWithoutCommunesNestedInput, {nullable:true})
    city?: InstanceType<typeof CitiesUpdateOneRequiredWithoutCommunesNestedInput>;
}

@InputType()
export class CommunesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idCommune?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => QuartiersUpdateManyWithoutCommunesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateManyWithoutCommunesNestedInput)
    Quartiers?: InstanceType<typeof QuartiersUpdateManyWithoutCommunesNestedInput>;
    @Field(() => CitiesUpdateOneRequiredWithoutCommunesNestedInput, {nullable:true})
    city?: InstanceType<typeof CitiesUpdateOneRequiredWithoutCommunesNestedInput>;
}

@InputType()
export class CommunesUpsertWithWhereUniqueWithoutCityInput {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesUpdateWithoutCityInput, {nullable:false})
    @Type(() => CommunesUpdateWithoutCityInput)
    update!: InstanceType<typeof CommunesUpdateWithoutCityInput>;
    @Field(() => CommunesCreateWithoutCityInput, {nullable:false})
    @Type(() => CommunesCreateWithoutCityInput)
    create!: InstanceType<typeof CommunesCreateWithoutCityInput>;
}

@InputType()
export class CommunesUpsertWithoutQuartiersInput {
    @Field(() => CommunesUpdateWithoutQuartiersInput, {nullable:false})
    @Type(() => CommunesUpdateWithoutQuartiersInput)
    update!: InstanceType<typeof CommunesUpdateWithoutQuartiersInput>;
    @Field(() => CommunesCreateWithoutQuartiersInput, {nullable:false})
    @Type(() => CommunesCreateWithoutQuartiersInput)
    create!: InstanceType<typeof CommunesCreateWithoutQuartiersInput>;
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
}

@InputType()
export class CommunesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idCommune?: string;
    @Field(() => [CommunesWhereInput], {nullable:true})
    AND?: Array<CommunesWhereInput>;
    @Field(() => [CommunesWhereInput], {nullable:true})
    OR?: Array<CommunesWhereInput>;
    @Field(() => [CommunesWhereInput], {nullable:true})
    NOT?: Array<CommunesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    communeName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => QuartiersListRelationFilter, {nullable:true})
    @Type(() => QuartiersListRelationFilter)
    Quartiers?: InstanceType<typeof QuartiersListRelationFilter>;
    @Field(() => CitiesRelationFilter, {nullable:true})
    city?: InstanceType<typeof CitiesRelationFilter>;
}

@InputType()
export class CommunesWhereInput {
    @Field(() => [CommunesWhereInput], {nullable:true})
    AND?: Array<CommunesWhereInput>;
    @Field(() => [CommunesWhereInput], {nullable:true})
    OR?: Array<CommunesWhereInput>;
    @Field(() => [CommunesWhereInput], {nullable:true})
    NOT?: Array<CommunesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idCommune?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cityId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => QuartiersListRelationFilter, {nullable:true})
    @Type(() => QuartiersListRelationFilter)
    Quartiers?: InstanceType<typeof QuartiersListRelationFilter>;
    @Field(() => CitiesRelationFilter, {nullable:true})
    city?: InstanceType<typeof CitiesRelationFilter>;
}

@ObjectType()
export class Communes {
    @Field(() => ID, {nullable:false})
    idCommune!: string;
    @Field(() => String, {nullable:false})
    communeName!: string;
    @Field(() => String, {nullable:false})
    communeDescription!: string;
    @Field(() => String, {nullable:false})
    cityId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Quartiers], {nullable:true})
    Quartiers?: Array<Quartiers>;
    @Field(() => Cities, {nullable:false})
    city?: InstanceType<typeof Cities>;
    @Field(() => CommunesCount, {nullable:false})
    _count?: InstanceType<typeof CommunesCount>;
}

@ArgsType()
export class CreateManyCommunesArgs {
    @Field(() => [CommunesCreateManyInput], {nullable:false})
    @Type(() => CommunesCreateManyInput)
    data!: Array<CommunesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommunesArgs {
    @Field(() => CommunesCreateInput, {nullable:false})
    @Type(() => CommunesCreateInput)
    data!: InstanceType<typeof CommunesCreateInput>;
}

@ArgsType()
export class DeleteManyCommunesArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
}

@ArgsType()
export class DeleteOneCommunesArgs {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
}

@ArgsType()
export class FindFirstCommunesOrThrowArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => [CommunesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunesOrderByWithRelationInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommunesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCommunesArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => [CommunesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunesOrderByWithRelationInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommunesScalarFieldEnum>;
}

@ArgsType()
export class FindManyCommunesArgs {
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
    @Field(() => [CommunesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunesOrderByWithRelationInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommunesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommunesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCommunesOrThrowArgs {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
}

@ArgsType()
export class FindUniqueCommunesArgs {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
}

@ArgsType()
export class UpdateManyCommunesArgs {
    @Field(() => CommunesUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunesUpdateManyMutationInput)
    data!: InstanceType<typeof CommunesUpdateManyMutationInput>;
    @Field(() => CommunesWhereInput, {nullable:true})
    @Type(() => CommunesWhereInput)
    where?: InstanceType<typeof CommunesWhereInput>;
}

@ArgsType()
export class UpdateOneCommunesArgs {
    @Field(() => CommunesUpdateInput, {nullable:false})
    @Type(() => CommunesUpdateInput)
    data!: InstanceType<typeof CommunesUpdateInput>;
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
}

@ArgsType()
export class UpsertOneCommunesArgs {
    @Field(() => CommunesWhereUniqueInput, {nullable:false})
    @Type(() => CommunesWhereUniqueInput)
    where!: Prisma.AtLeast<CommunesWhereUniqueInput, 'idCommune'>;
    @Field(() => CommunesCreateInput, {nullable:false})
    @Type(() => CommunesCreateInput)
    create!: InstanceType<typeof CommunesCreateInput>;
    @Field(() => CommunesUpdateInput, {nullable:false})
    @Type(() => CommunesUpdateInput)
    update!: InstanceType<typeof CommunesUpdateInput>;
}

@ObjectType()
export class AggregateImages {
    @Field(() => ImagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImagesCountAggregate>;
    @Field(() => ImagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    @Field(() => ImagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    @Field(() => ImagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImagesMinAggregate>;
    @Field(() => ImagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}

@ArgsType()
export class CreateManyImagesArgs {
    @Field(() => [ImagesCreateManyInput], {nullable:false})
    @Type(() => ImagesCreateManyInput)
    data!: Array<ImagesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneImagesArgs {
    @Field(() => ImagesCreateInput, {nullable:false})
    @Type(() => ImagesCreateInput)
    data!: InstanceType<typeof ImagesCreateInput>;
}

@ArgsType()
export class DeleteManyImagesArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
}

@ArgsType()
export class DeleteOneImagesArgs {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
}

@ArgsType()
export class FindFirstImagesOrThrowArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstImagesArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}

@ArgsType()
export class FindManyImagesArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ImagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImagesScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueImagesOrThrowArgs {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
}

@ArgsType()
export class FindUniqueImagesArgs {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
}

@ArgsType()
export class ImagesAggregateArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => [ImagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithRelationInput>;
    @Field(() => ImagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    @Field(() => ImagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    @Field(() => ImagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    @Field(() => ImagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    @Field(() => ImagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}

@InputType()
export class ImagesAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    width?: true;
    @Field(() => Boolean, {nullable:true})
    height?: true;
}

@ObjectType()
export class ImagesAvgAggregate {
    @Field(() => Float, {nullable:true})
    width?: number;
    @Field(() => Float, {nullable:true})
    height?: number;
}

@InputType()
export class ImagesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
}

@InputType()
export class ImagesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idImage?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    secure_url?: true;
    @Field(() => Boolean, {nullable:true})
    width?: true;
    @Field(() => Boolean, {nullable:true})
    height?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ImagesCountAggregate {
    @Field(() => Int, {nullable:false})
    idImage!: number;
    @Field(() => Int, {nullable:false})
    url!: number;
    @Field(() => Int, {nullable:false})
    secure_url!: number;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => Int, {nullable:false})
    propertyId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ImagesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    secure_url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesCreateManyPropertyInputEnvelope {
    @Field(() => [ImagesCreateManyPropertyInput], {nullable:false})
    @Type(() => ImagesCreateManyPropertyInput)
    data!: Array<ImagesCreateManyPropertyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ImagesCreateManyPropertyInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
}

@InputType()
export class ImagesCreateManyInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => String, {nullable:false})
    propertyId!: string;
}

@InputType()
export class ImagesCreateNestedManyWithoutPropertyInput {
    @Field(() => [ImagesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create?: Array<ImagesCreateWithoutPropertyInput>;
    @Field(() => [ImagesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPropertyInput>;
    @Field(() => ImagesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof ImagesCreateManyPropertyInputEnvelope>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
}

@InputType()
export class ImagesCreateOrConnectWithoutPropertyInput {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => ImagesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create!: InstanceType<typeof ImagesCreateWithoutPropertyInput>;
}

@InputType()
export class ImagesCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
}

@InputType()
export class ImagesCreateInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => PropertiesCreateNestedOneWithoutImagesInput, {nullable:false})
    @Type(() => PropertiesCreateNestedOneWithoutImagesInput)
    Property!: InstanceType<typeof PropertiesCreateNestedOneWithoutImagesInput>;
}

@ArgsType()
export class ImagesGroupByArgs {
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => [ImagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImagesOrderByWithAggregationInput>;
    @Field(() => [ImagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImagesScalarFieldEnum>;
    @Field(() => ImagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ImagesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ImagesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImagesCountAggregateInput>;
    @Field(() => ImagesAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ImagesAvgAggregateInput>;
    @Field(() => ImagesSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ImagesSumAggregateInput>;
    @Field(() => ImagesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImagesMinAggregateInput>;
    @Field(() => ImagesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImagesMaxAggregateInput>;
}

@ObjectType()
export class ImagesGroupBy {
    @Field(() => String, {nullable:false})
    idImage!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => ImagesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ImagesCountAggregate>;
    @Field(() => ImagesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ImagesAvgAggregate>;
    @Field(() => ImagesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ImagesSumAggregate>;
    @Field(() => ImagesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ImagesMinAggregate>;
    @Field(() => ImagesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ImagesMaxAggregate>;
}

@InputType()
export class ImagesListRelationFilter {
    @Field(() => ImagesWhereInput, {nullable:true})
    every?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => ImagesWhereInput, {nullable:true})
    some?: InstanceType<typeof ImagesWhereInput>;
    @Field(() => ImagesWhereInput, {nullable:true})
    none?: InstanceType<typeof ImagesWhereInput>;
}

@InputType()
export class ImagesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idImage?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    secure_url?: true;
    @Field(() => Boolean, {nullable:true})
    width?: true;
    @Field(() => Boolean, {nullable:true})
    height?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
}

@ObjectType()
export class ImagesMaxAggregate {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    secure_url?: string;
    @Field(() => Int, {nullable:true})
    width?: number;
    @Field(() => Int, {nullable:true})
    height?: number;
    @Field(() => String, {nullable:true})
    propertyId?: string;
}

@InputType()
export class ImagesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    secure_url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idImage?: true;
    @Field(() => Boolean, {nullable:true})
    url?: true;
    @Field(() => Boolean, {nullable:true})
    secure_url?: true;
    @Field(() => Boolean, {nullable:true})
    width?: true;
    @Field(() => Boolean, {nullable:true})
    height?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
}

@ObjectType()
export class ImagesMinAggregate {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:true})
    url?: string;
    @Field(() => String, {nullable:true})
    secure_url?: string;
    @Field(() => Int, {nullable:true})
    width?: number;
    @Field(() => Int, {nullable:true})
    height?: number;
    @Field(() => String, {nullable:true})
    propertyId?: string;
}

@InputType()
export class ImagesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    secure_url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
}

@InputType()
export class ImagesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ImagesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    secure_url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => ImagesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ImagesCountOrderByAggregateInput>;
    @Field(() => ImagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ImagesAvgOrderByAggregateInput>;
    @Field(() => ImagesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ImagesMaxOrderByAggregateInput>;
    @Field(() => ImagesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ImagesMinOrderByAggregateInput>;
    @Field(() => ImagesSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ImagesSumOrderByAggregateInput>;
}

@InputType()
export class ImagesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idImage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    secure_url?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => PropertiesOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    Property?: InstanceType<typeof PropertiesOrderByWithRelationInput>;
}

@InputType()
export class ImagesScalarWhereWithAggregatesInput {
    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImagesScalarWhereWithAggregatesInput>;
    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImagesScalarWhereWithAggregatesInput>;
    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idImage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    secure_url?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    width?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    height?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ImagesScalarWhereInput {
    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    AND?: Array<ImagesScalarWhereInput>;
    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    OR?: Array<ImagesScalarWhereInput>;
    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secure_url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    width?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    height?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ImagesSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    width?: true;
    @Field(() => Boolean, {nullable:true})
    height?: true;
}

@ObjectType()
export class ImagesSumAggregate {
    @Field(() => Int, {nullable:true})
    width?: number;
    @Field(() => Int, {nullable:true})
    height?: number;
}

@InputType()
export class ImagesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;
}

@InputType()
export class ImagesUncheckedCreateNestedManyWithoutPropertyInput {
    @Field(() => [ImagesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create?: Array<ImagesCreateWithoutPropertyInput>;
    @Field(() => [ImagesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPropertyInput>;
    @Field(() => ImagesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof ImagesCreateManyPropertyInputEnvelope>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
}

@InputType()
export class ImagesUncheckedCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
}

@InputType()
export class ImagesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => String, {nullable:false})
    propertyId!: string;
}

@InputType()
export class ImagesUncheckedUpdateManyWithoutPropertyNestedInput {
    @Field(() => [ImagesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create?: Array<ImagesCreateWithoutPropertyInput>;
    @Field(() => [ImagesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [ImagesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => ImagesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof ImagesCreateManyPropertyInputEnvelope>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [ImagesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}

@InputType()
export class ImagesUncheckedUpdateManyWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUncheckedUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUpdateManyWithWhereWithoutPropertyInput {
    @Field(() => ImagesScalarWhereInput, {nullable:false})
    @Type(() => ImagesScalarWhereInput)
    where!: InstanceType<typeof ImagesScalarWhereInput>;
    @Field(() => ImagesUpdateManyMutationInput, {nullable:false})
    @Type(() => ImagesUpdateManyMutationInput)
    data!: InstanceType<typeof ImagesUpdateManyMutationInput>;
}

@InputType()
export class ImagesUpdateManyWithoutPropertyNestedInput {
    @Field(() => [ImagesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create?: Array<ImagesCreateWithoutPropertyInput>;
    @Field(() => [ImagesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [ImagesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => ImagesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof ImagesCreateManyPropertyInputEnvelope>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>>;
    @Field(() => [ImagesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [ImagesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}

@InputType()
export class ImagesUpdateWithWhereUniqueWithoutPropertyInput {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => ImagesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutPropertyInput)
    data!: InstanceType<typeof ImagesUpdateWithoutPropertyInput>;
}

@InputType()
export class ImagesUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ImagesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idImage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    secure_url?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    width?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    height?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => PropertiesUpdateOneRequiredWithoutImagesNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateOneRequiredWithoutImagesNestedInput)
    Property?: InstanceType<typeof PropertiesUpdateOneRequiredWithoutImagesNestedInput>;
}

@InputType()
export class ImagesUpsertWithWhereUniqueWithoutPropertyInput {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => ImagesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutPropertyInput)
    update!: InstanceType<typeof ImagesUpdateWithoutPropertyInput>;
    @Field(() => ImagesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => ImagesCreateWithoutPropertyInput)
    create!: InstanceType<typeof ImagesCreateWithoutPropertyInput>;
}

@InputType()
export class ImagesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idImage?: string;
    @Field(() => [ImagesWhereInput], {nullable:true})
    AND?: Array<ImagesWhereInput>;
    @Field(() => [ImagesWhereInput], {nullable:true})
    OR?: Array<ImagesWhereInput>;
    @Field(() => [ImagesWhereInput], {nullable:true})
    NOT?: Array<ImagesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secure_url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    width?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    height?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    Property?: InstanceType<typeof PropertiesRelationFilter>;
}

@InputType()
export class ImagesWhereInput {
    @Field(() => [ImagesWhereInput], {nullable:true})
    AND?: Array<ImagesWhereInput>;
    @Field(() => [ImagesWhereInput], {nullable:true})
    OR?: Array<ImagesWhereInput>;
    @Field(() => [ImagesWhereInput], {nullable:true})
    NOT?: Array<ImagesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idImage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    url?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    secure_url?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    width?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    height?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    Property?: InstanceType<typeof PropertiesRelationFilter>;
}

@ObjectType()
export class Images {
    @Field(() => ID, {nullable:false})
    idImage!: string;
    @Field(() => String, {nullable:false})
    url!: string;
    @Field(() => String, {nullable:false})
    secure_url!: string;
    @Field(() => Int, {nullable:false})
    width!: number;
    @Field(() => Int, {nullable:false})
    height!: number;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Properties, {nullable:false})
    Property?: InstanceType<typeof Properties>;
}

@ArgsType()
export class UpdateManyImagesArgs {
    @Field(() => ImagesUpdateManyMutationInput, {nullable:false})
    @Type(() => ImagesUpdateManyMutationInput)
    data!: InstanceType<typeof ImagesUpdateManyMutationInput>;
    @Field(() => ImagesWhereInput, {nullable:true})
    @Type(() => ImagesWhereInput)
    where?: InstanceType<typeof ImagesWhereInput>;
}

@ArgsType()
export class UpdateOneImagesArgs {
    @Field(() => ImagesUpdateInput, {nullable:false})
    @Type(() => ImagesUpdateInput)
    data!: InstanceType<typeof ImagesUpdateInput>;
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
}

@ArgsType()
export class UpsertOneImagesArgs {
    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'idImage'>;
    @Field(() => ImagesCreateInput, {nullable:false})
    @Type(() => ImagesCreateInput)
    create!: InstanceType<typeof ImagesCreateInput>;
    @Field(() => ImagesUpdateInput, {nullable:false})
    @Type(() => ImagesUpdateInput)
    update!: InstanceType<typeof ImagesUpdateInput>;
}

@ObjectType()
export class AggregatePotentialCosts {
    @Field(() => PotentialCostsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PotentialCostsCountAggregate>;
    @Field(() => PotentialCostsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PotentialCostsAvgAggregate>;
    @Field(() => PotentialCostsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PotentialCostsSumAggregate>;
    @Field(() => PotentialCostsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PotentialCostsMinAggregate>;
    @Field(() => PotentialCostsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PotentialCostsMaxAggregate>;
}

@ArgsType()
export class CreateManyPotentialCostsArgs {
    @Field(() => [PotentialCostsCreateManyInput], {nullable:false})
    @Type(() => PotentialCostsCreateManyInput)
    data!: Array<PotentialCostsCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePotentialCostsArgs {
    @Field(() => PotentialCostsCreateInput, {nullable:false})
    @Type(() => PotentialCostsCreateInput)
    data!: InstanceType<typeof PotentialCostsCreateInput>;
}

@ArgsType()
export class DeleteManyPotentialCostsArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
}

@ArgsType()
export class DeleteOnePotentialCostsArgs {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
}

@ArgsType()
export class FindFirstPotentialCostsOrThrowArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsOrderByWithRelationInput], {nullable:true})
    @Type(() => PotentialCostsOrderByWithRelationInput)
    orderBy?: Array<PotentialCostsOrderByWithRelationInput>;
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    cursor?: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PotentialCostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PotentialCostsScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPotentialCostsArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsOrderByWithRelationInput], {nullable:true})
    @Type(() => PotentialCostsOrderByWithRelationInput)
    orderBy?: Array<PotentialCostsOrderByWithRelationInput>;
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    cursor?: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PotentialCostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PotentialCostsScalarFieldEnum>;
}

@ArgsType()
export class FindManyPotentialCostsArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsOrderByWithRelationInput], {nullable:true})
    @Type(() => PotentialCostsOrderByWithRelationInput)
    orderBy?: Array<PotentialCostsOrderByWithRelationInput>;
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    cursor?: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PotentialCostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PotentialCostsScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePotentialCostsOrThrowArgs {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
}

@ArgsType()
export class FindUniquePotentialCostsArgs {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
}

@ArgsType()
export class PotentialCostsAggregateArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsOrderByWithRelationInput], {nullable:true})
    @Type(() => PotentialCostsOrderByWithRelationInput)
    orderBy?: Array<PotentialCostsOrderByWithRelationInput>;
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    cursor?: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PotentialCostsCountAggregateInput, {nullable:true})
    @Type(() => PotentialCostsCountAggregateInput)
    _count?: InstanceType<typeof PotentialCostsCountAggregateInput>;
    @Field(() => PotentialCostsAvgAggregateInput, {nullable:true})
    @Type(() => PotentialCostsAvgAggregateInput)
    _avg?: InstanceType<typeof PotentialCostsAvgAggregateInput>;
    @Field(() => PotentialCostsSumAggregateInput, {nullable:true})
    @Type(() => PotentialCostsSumAggregateInput)
    _sum?: InstanceType<typeof PotentialCostsSumAggregateInput>;
    @Field(() => PotentialCostsMinAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMinAggregateInput)
    _min?: InstanceType<typeof PotentialCostsMinAggregateInput>;
    @Field(() => PotentialCostsMaxAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMaxAggregateInput)
    _max?: InstanceType<typeof PotentialCostsMaxAggregateInput>;
}

@InputType()
export class PotentialCostsAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    costValue?: true;
}

@ObjectType()
export class PotentialCostsAvgAggregate {
    @Field(() => GraphQLDecimal, {nullable:true})
    costValue?: Decimal;
}

@InputType()
export class PotentialCostsAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idPotentialCost?: true;
    @Field(() => Boolean, {nullable:true})
    costType?: true;
    @Field(() => Boolean, {nullable:true})
    costValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PotentialCostsCountAggregate {
    @Field(() => Int, {nullable:false})
    idPotentialCost!: number;
    @Field(() => Int, {nullable:false})
    costType!: number;
    @Field(() => Int, {nullable:false})
    costValue!: number;
    @Field(() => Int, {nullable:false})
    propertyId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PotentialCostsCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idPotentialCost?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsCreateManyPropertyInputEnvelope {
    @Field(() => [PotentialCostsCreateManyPropertyInput], {nullable:false})
    @Type(() => PotentialCostsCreateManyPropertyInput)
    data!: Array<PotentialCostsCreateManyPropertyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PotentialCostsCreateManyPropertyInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsCreateManyInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsCreateNestedManyWithoutPropertyInput {
    @Field(() => [PotentialCostsCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create?: Array<PotentialCostsCreateWithoutPropertyInput>;
    @Field(() => [PotentialCostsCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PotentialCostsCreateOrConnectWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PotentialCostsCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PotentialCostsCreateManyPropertyInputEnvelope>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
}

@InputType()
export class PotentialCostsCreateOrConnectWithoutPropertyInput {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => PotentialCostsCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create!: InstanceType<typeof PotentialCostsCreateWithoutPropertyInput>;
}

@InputType()
export class PotentialCostsCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsCreateInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesCreateNestedOneWithoutPotentialCostsInput, {nullable:false})
    @Type(() => PropertiesCreateNestedOneWithoutPotentialCostsInput)
    property!: InstanceType<typeof PropertiesCreateNestedOneWithoutPotentialCostsInput>;
}

@ArgsType()
export class PotentialCostsGroupByArgs {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsOrderByWithAggregationInput], {nullable:true})
    @Type(() => PotentialCostsOrderByWithAggregationInput)
    orderBy?: Array<PotentialCostsOrderByWithAggregationInput>;
    @Field(() => [PotentialCostsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PotentialCostsScalarFieldEnum>;
    @Field(() => PotentialCostsScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PotentialCostsScalarWhereWithAggregatesInput)
    having?: InstanceType<typeof PotentialCostsScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PotentialCostsCountAggregateInput, {nullable:true})
    @Type(() => PotentialCostsCountAggregateInput)
    _count?: InstanceType<typeof PotentialCostsCountAggregateInput>;
    @Field(() => PotentialCostsAvgAggregateInput, {nullable:true})
    @Type(() => PotentialCostsAvgAggregateInput)
    _avg?: InstanceType<typeof PotentialCostsAvgAggregateInput>;
    @Field(() => PotentialCostsSumAggregateInput, {nullable:true})
    @Type(() => PotentialCostsSumAggregateInput)
    _sum?: InstanceType<typeof PotentialCostsSumAggregateInput>;
    @Field(() => PotentialCostsMinAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMinAggregateInput)
    _min?: InstanceType<typeof PotentialCostsMinAggregateInput>;
    @Field(() => PotentialCostsMaxAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMaxAggregateInput)
    _max?: InstanceType<typeof PotentialCostsMaxAggregateInput>;
}

@ObjectType()
export class PotentialCostsGroupBy {
    @Field(() => String, {nullable:false})
    idPotentialCost!: string;
    @Field(() => PotentialCost, {nullable:false})
    costType!: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    costValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PotentialCostsCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PotentialCostsCountAggregate>;
    @Field(() => PotentialCostsAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PotentialCostsAvgAggregate>;
    @Field(() => PotentialCostsSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PotentialCostsSumAggregate>;
    @Field(() => PotentialCostsMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PotentialCostsMinAggregate>;
    @Field(() => PotentialCostsMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PotentialCostsMaxAggregate>;
}

@InputType()
export class PotentialCostsListRelationFilter {
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    every?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    some?: InstanceType<typeof PotentialCostsWhereInput>;
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    none?: InstanceType<typeof PotentialCostsWhereInput>;
}

@InputType()
export class PotentialCostsMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idPotentialCost?: true;
    @Field(() => Boolean, {nullable:true})
    costType?: true;
    @Field(() => Boolean, {nullable:true})
    costValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PotentialCostsMaxAggregate {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:true})
    costValue?: Decimal;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idPotentialCost?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idPotentialCost?: true;
    @Field(() => Boolean, {nullable:true})
    costType?: true;
    @Field(() => Boolean, {nullable:true})
    costValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PotentialCostsMinAggregate {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:true})
    costValue?: Decimal;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idPotentialCost?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idPotentialCost?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PotentialCostsCountOrderByAggregateInput, {nullable:true})
    @Type(() => PotentialCostsCountOrderByAggregateInput)
    _count?: InstanceType<typeof PotentialCostsCountOrderByAggregateInput>;
    @Field(() => PotentialCostsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PotentialCostsAvgOrderByAggregateInput)
    _avg?: InstanceType<typeof PotentialCostsAvgOrderByAggregateInput>;
    @Field(() => PotentialCostsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMaxOrderByAggregateInput)
    _max?: InstanceType<typeof PotentialCostsMaxOrderByAggregateInput>;
    @Field(() => PotentialCostsMinOrderByAggregateInput, {nullable:true})
    @Type(() => PotentialCostsMinOrderByAggregateInput)
    _min?: InstanceType<typeof PotentialCostsMinOrderByAggregateInput>;
    @Field(() => PotentialCostsSumOrderByAggregateInput, {nullable:true})
    @Type(() => PotentialCostsSumOrderByAggregateInput)
    _sum?: InstanceType<typeof PotentialCostsSumOrderByAggregateInput>;
}

@InputType()
export class PotentialCostsOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idPotentialCost?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertiesOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    property?: InstanceType<typeof PropertiesOrderByWithRelationInput>;
}

@InputType()
export class PotentialCostsScalarWhereWithAggregatesInput {
    @Field(() => [PotentialCostsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereWithAggregatesInput)
    AND?: Array<PotentialCostsScalarWhereWithAggregatesInput>;
    @Field(() => [PotentialCostsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereWithAggregatesInput)
    OR?: Array<PotentialCostsScalarWhereWithAggregatesInput>;
    @Field(() => [PotentialCostsScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereWithAggregatesInput)
    NOT?: Array<PotentialCostsScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumPotentialCostWithAggregatesFilter, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    costValue?: InstanceType<typeof DecimalWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PotentialCostsScalarWhereInput {
    @Field(() => [PotentialCostsScalarWhereInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereInput)
    AND?: Array<PotentialCostsScalarWhereInput>;
    @Field(() => [PotentialCostsScalarWhereInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereInput)
    OR?: Array<PotentialCostsScalarWhereInput>;
    @Field(() => [PotentialCostsScalarWhereInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereInput)
    NOT?: Array<PotentialCostsScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFilter>;
    @Field(() => EnumPotentialCostFilter, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    costValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PotentialCostsSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    costValue?: true;
}

@ObjectType()
export class PotentialCostsSumAggregate {
    @Field(() => GraphQLDecimal, {nullable:true})
    costValue?: Decimal;
}

@InputType()
export class PotentialCostsSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    costValue?: keyof typeof SortOrder;
}

@InputType()
export class PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput {
    @Field(() => [PotentialCostsCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create?: Array<PotentialCostsCreateWithoutPropertyInput>;
    @Field(() => [PotentialCostsCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PotentialCostsCreateOrConnectWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PotentialCostsCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PotentialCostsCreateManyPropertyInputEnvelope>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
}

@InputType()
export class PotentialCostsUncheckedCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => PotentialCost, {nullable:true})
    costType?: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    costValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PotentialCostsCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create?: Array<PotentialCostsCreateWithoutPropertyInput>;
    @Field(() => [PotentialCostsCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PotentialCostsCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PotentialCostsCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PotentialCostsCreateManyPropertyInputEnvelope>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PotentialCostsUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PotentialCostsUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PotentialCostsScalarWhereInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereInput)
    deleteMany?: Array<PotentialCostsScalarWhereInput>;
}

@InputType()
export class PotentialCostsUncheckedUpdateManyWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUncheckedUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUpdateManyWithWhereWithoutPropertyInput {
    @Field(() => PotentialCostsScalarWhereInput, {nullable:false})
    @Type(() => PotentialCostsScalarWhereInput)
    where!: InstanceType<typeof PotentialCostsScalarWhereInput>;
    @Field(() => PotentialCostsUpdateManyMutationInput, {nullable:false})
    @Type(() => PotentialCostsUpdateManyMutationInput)
    data!: InstanceType<typeof PotentialCostsUpdateManyMutationInput>;
}

@InputType()
export class PotentialCostsUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PotentialCostsCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create?: Array<PotentialCostsCreateWithoutPropertyInput>;
    @Field(() => [PotentialCostsCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PotentialCostsCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PotentialCostsCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PotentialCostsCreateManyPropertyInputEnvelope>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsWhereUniqueInput], {nullable:true})
    @Type(() => PotentialCostsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>>;
    @Field(() => [PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PotentialCostsUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PotentialCostsUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PotentialCostsScalarWhereInput], {nullable:true})
    @Type(() => PotentialCostsScalarWhereInput)
    deleteMany?: Array<PotentialCostsScalarWhereInput>;
}

@InputType()
export class PotentialCostsUpdateWithWhereUniqueWithoutPropertyInput {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => PotentialCostsUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PotentialCostsUpdateWithoutPropertyInput)
    data!: InstanceType<typeof PotentialCostsUpdateWithoutPropertyInput>;
}

@InputType()
export class PotentialCostsUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PotentialCostsUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPotentialCostFieldUpdateOperationsInput, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    costValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUpdateOneRequiredWithoutPotentialCostsNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateOneRequiredWithoutPotentialCostsNestedInput)
    property?: InstanceType<typeof PropertiesUpdateOneRequiredWithoutPotentialCostsNestedInput>;
}

@InputType()
export class PotentialCostsUpsertWithWhereUniqueWithoutPropertyInput {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => PotentialCostsUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PotentialCostsUpdateWithoutPropertyInput)
    update!: InstanceType<typeof PotentialCostsUpdateWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PotentialCostsCreateWithoutPropertyInput)
    create!: InstanceType<typeof PotentialCostsCreateWithoutPropertyInput>;
}

@InputType()
export class PotentialCostsWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idPotentialCost?: string;
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    AND?: Array<PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    OR?: Array<PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    NOT?: Array<PotentialCostsWhereInput>;
    @Field(() => EnumPotentialCostFilter, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    costValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@InputType()
export class PotentialCostsWhereInput {
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    AND?: Array<PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    OR?: Array<PotentialCostsWhereInput>;
    @Field(() => [PotentialCostsWhereInput], {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    NOT?: Array<PotentialCostsWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idPotentialCost?: InstanceType<typeof StringFilter>;
    @Field(() => EnumPotentialCostFilter, {nullable:true})
    costType?: InstanceType<typeof EnumPotentialCostFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    costValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@ObjectType()
export class PotentialCosts {
    @Field(() => ID, {nullable:false})
    idPotentialCost!: string;
    @Field(() => PotentialCost, {nullable:false,defaultValue:'WATER'})
    costType!: keyof typeof PotentialCost;
    @Field(() => GraphQLDecimal, {nullable:false})
    costValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Properties, {nullable:false})
    property?: InstanceType<typeof Properties>;
}

@ArgsType()
export class UpdateManyPotentialCostsArgs {
    @Field(() => PotentialCostsUpdateManyMutationInput, {nullable:false})
    @Type(() => PotentialCostsUpdateManyMutationInput)
    data!: InstanceType<typeof PotentialCostsUpdateManyMutationInput>;
    @Field(() => PotentialCostsWhereInput, {nullable:true})
    @Type(() => PotentialCostsWhereInput)
    where?: InstanceType<typeof PotentialCostsWhereInput>;
}

@ArgsType()
export class UpdateOnePotentialCostsArgs {
    @Field(() => PotentialCostsUpdateInput, {nullable:false})
    @Type(() => PotentialCostsUpdateInput)
    data!: InstanceType<typeof PotentialCostsUpdateInput>;
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
}

@ArgsType()
export class UpsertOnePotentialCostsArgs {
    @Field(() => PotentialCostsWhereUniqueInput, {nullable:false})
    @Type(() => PotentialCostsWhereUniqueInput)
    where!: Prisma.AtLeast<PotentialCostsWhereUniqueInput, 'idPotentialCost'>;
    @Field(() => PotentialCostsCreateInput, {nullable:false})
    @Type(() => PotentialCostsCreateInput)
    create!: InstanceType<typeof PotentialCostsCreateInput>;
    @Field(() => PotentialCostsUpdateInput, {nullable:false})
    @Type(() => PotentialCostsUpdateInput)
    update!: InstanceType<typeof PotentialCostsUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    set?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    increment?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    decrement?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    multiply?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    divide?: Decimal;
}

@InputType()
export class DecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    equals?: Decimal;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    in?: Array<Decimal>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    notIn?: Array<Decimal>;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lte?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gte?: Decimal;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class DecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    equals?: Decimal;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    in?: Array<Decimal>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    notIn?: Array<Decimal>;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lte?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gte?: Decimal;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class EnumPotentialCostFieldUpdateOperationsInput {
    @Field(() => PotentialCost, {nullable:true})
    set?: keyof typeof PotentialCost;
}

@InputType()
export class EnumPotentialCostFilter {
    @Field(() => PotentialCost, {nullable:true})
    equals?: keyof typeof PotentialCost;
    @Field(() => [PotentialCost], {nullable:true})
    in?: Array<keyof typeof PotentialCost>;
    @Field(() => [PotentialCost], {nullable:true})
    notIn?: Array<keyof typeof PotentialCost>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPotentialCostFilter>;
}

@InputType()
export class EnumPotentialCostWithAggregatesFilter {
    @Field(() => PotentialCost, {nullable:true})
    equals?: keyof typeof PotentialCost;
    @Field(() => [PotentialCost], {nullable:true})
    in?: Array<keyof typeof PotentialCost>;
    @Field(() => [PotentialCost], {nullable:true})
    notIn?: Array<keyof typeof PotentialCost>;
    @Field(() => NestedEnumPotentialCostWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPotentialCostWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPotentialCostFilter>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPotentialCostFilter>;
}

@InputType()
export class EnumPropertyDistanceFieldUpdateOperationsInput {
    @Field(() => PropertyDistance, {nullable:true})
    set?: keyof typeof PropertyDistance;
}

@InputType()
export class EnumPropertyDistanceFilter {
    @Field(() => PropertyDistance, {nullable:true})
    equals?: keyof typeof PropertyDistance;
    @Field(() => [PropertyDistance], {nullable:true})
    in?: Array<keyof typeof PropertyDistance>;
    @Field(() => [PropertyDistance], {nullable:true})
    notIn?: Array<keyof typeof PropertyDistance>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
}

@InputType()
export class EnumPropertyDistanceWithAggregatesFilter {
    @Field(() => PropertyDistance, {nullable:true})
    equals?: keyof typeof PropertyDistance;
    @Field(() => [PropertyDistance], {nullable:true})
    in?: Array<keyof typeof PropertyDistance>;
    @Field(() => [PropertyDistance], {nullable:true})
    notIn?: Array<keyof typeof PropertyDistance>;
    @Field(() => NestedEnumPropertyDistanceWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyDistanceWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
}

@InputType()
export class EnumPropertyStatusFieldUpdateOperationsInput {
    @Field(() => PropertyStatus, {nullable:true})
    set?: keyof typeof PropertyStatus;
}

@InputType()
export class EnumPropertyStatusFilter {
    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;
    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;
    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
}

@InputType()
export class EnumPropertyStatusWithAggregatesFilter {
    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;
    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;
    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;
    @Field(() => NestedEnumPropertyStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
}

@InputType()
export class EnumPropertyTypeFieldUpdateOperationsInput {
    @Field(() => PropertyType, {nullable:true})
    set?: keyof typeof PropertyType;
}

@InputType()
export class EnumPropertyTypeFilter {
    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;
    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;
    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
}

@InputType()
export class EnumPropertyTypeWithAggregatesFilter {
    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;
    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;
    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;
    @Field(() => NestedEnumPropertyTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
}

@InputType()
export class EnumUserTypeFieldUpdateOperationsInput {
    @Field(() => UserType, {nullable:true})
    set?: keyof typeof UserType;
}

@InputType()
export class EnumUserTypeFilter {
    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;
    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;
    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}

@InputType()
export class EnumUserTypeWithAggregatesFilter {
    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;
    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;
    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;
    @Field(() => NestedEnumUserTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    equals?: Decimal;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    in?: Array<Decimal>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    notIn?: Array<Decimal>;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lte?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gte?: Decimal;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedDecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    equals?: Decimal;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    in?: Array<Decimal>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    notIn?: Array<Decimal>;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    lte?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gt?: Decimal;
    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    gte?: Decimal;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedEnumPotentialCostFilter {
    @Field(() => PotentialCost, {nullable:true})
    equals?: keyof typeof PotentialCost;
    @Field(() => [PotentialCost], {nullable:true})
    in?: Array<keyof typeof PotentialCost>;
    @Field(() => [PotentialCost], {nullable:true})
    notIn?: Array<keyof typeof PotentialCost>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPotentialCostFilter>;
}

@InputType()
export class NestedEnumPotentialCostWithAggregatesFilter {
    @Field(() => PotentialCost, {nullable:true})
    equals?: keyof typeof PotentialCost;
    @Field(() => [PotentialCost], {nullable:true})
    in?: Array<keyof typeof PotentialCost>;
    @Field(() => [PotentialCost], {nullable:true})
    notIn?: Array<keyof typeof PotentialCost>;
    @Field(() => NestedEnumPotentialCostWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPotentialCostWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPotentialCostFilter>;
    @Field(() => NestedEnumPotentialCostFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPotentialCostFilter>;
}

@InputType()
export class NestedEnumPropertyDistanceFilter {
    @Field(() => PropertyDistance, {nullable:true})
    equals?: keyof typeof PropertyDistance;
    @Field(() => [PropertyDistance], {nullable:true})
    in?: Array<keyof typeof PropertyDistance>;
    @Field(() => [PropertyDistance], {nullable:true})
    notIn?: Array<keyof typeof PropertyDistance>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
}

@InputType()
export class NestedEnumPropertyDistanceWithAggregatesFilter {
    @Field(() => PropertyDistance, {nullable:true})
    equals?: keyof typeof PropertyDistance;
    @Field(() => [PropertyDistance], {nullable:true})
    in?: Array<keyof typeof PropertyDistance>;
    @Field(() => [PropertyDistance], {nullable:true})
    notIn?: Array<keyof typeof PropertyDistance>;
    @Field(() => NestedEnumPropertyDistanceWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyDistanceWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
    @Field(() => NestedEnumPropertyDistanceFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyDistanceFilter>;
}

@InputType()
export class NestedEnumPropertyStatusFilter {
    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;
    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;
    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
}

@InputType()
export class NestedEnumPropertyStatusWithAggregatesFilter {
    @Field(() => PropertyStatus, {nullable:true})
    equals?: keyof typeof PropertyStatus;
    @Field(() => [PropertyStatus], {nullable:true})
    in?: Array<keyof typeof PropertyStatus>;
    @Field(() => [PropertyStatus], {nullable:true})
    notIn?: Array<keyof typeof PropertyStatus>;
    @Field(() => NestedEnumPropertyStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
    @Field(() => NestedEnumPropertyStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyStatusFilter>;
}

@InputType()
export class NestedEnumPropertyTypeFilter {
    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;
    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;
    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
}

@InputType()
export class NestedEnumPropertyTypeWithAggregatesFilter {
    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;
    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;
    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;
    @Field(() => NestedEnumPropertyTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumPropertyTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumPropertyTypeFilter>;
}

@InputType()
export class NestedEnumUserTypeFilter {
    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;
    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;
    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserTypeFilter>;
}

@InputType()
export class NestedEnumUserTypeWithAggregatesFilter {
    @Field(() => UserType, {nullable:true})
    equals?: keyof typeof UserType;
    @Field(() => [UserType], {nullable:true})
    in?: Array<keyof typeof UserType>;
    @Field(() => [UserType], {nullable:true})
    notIn?: Array<keyof typeof UserType>;
    @Field(() => NestedEnumUserTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumUserTypeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumUserTypeFilter>;
    @Field(() => NestedEnumUserTypeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumUserTypeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateProperties {
    @Field(() => PropertiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertiesCountAggregate>;
    @Field(() => PropertiesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PropertiesAvgAggregate>;
    @Field(() => PropertiesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PropertiesSumAggregate>;
    @Field(() => PropertiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertiesMinAggregate>;
    @Field(() => PropertiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertiesMaxAggregate>;
}

@ArgsType()
export class CreateManyPropertiesArgs {
    @Field(() => [PropertiesCreateManyInput], {nullable:false})
    @Type(() => PropertiesCreateManyInput)
    data!: Array<PropertiesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePropertiesArgs {
    @Field(() => PropertiesCreateInput, {nullable:false})
    @Type(() => PropertiesCreateInput)
    data!: InstanceType<typeof PropertiesCreateInput>;
}

@ArgsType()
export class DeleteManyPropertiesArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@ArgsType()
export class DeleteOnePropertiesArgs {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@ArgsType()
export class FindFirstPropertiesOrThrowArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => [PropertiesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    orderBy?: Array<PropertiesOrderByWithRelationInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertiesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPropertiesArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => [PropertiesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    orderBy?: Array<PropertiesOrderByWithRelationInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertiesScalarFieldEnum>;
}

@ArgsType()
export class FindManyPropertiesArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => [PropertiesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    orderBy?: Array<PropertiesOrderByWithRelationInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertiesScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePropertiesOrThrowArgs {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@ArgsType()
export class FindUniquePropertiesArgs {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@ArgsType()
export class PropertiesAggregateArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => [PropertiesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    orderBy?: Array<PropertiesOrderByWithRelationInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertiesCountAggregateInput, {nullable:true})
    @Type(() => PropertiesCountAggregateInput)
    _count?: InstanceType<typeof PropertiesCountAggregateInput>;
    @Field(() => PropertiesAvgAggregateInput, {nullable:true})
    @Type(() => PropertiesAvgAggregateInput)
    _avg?: InstanceType<typeof PropertiesAvgAggregateInput>;
    @Field(() => PropertiesSumAggregateInput, {nullable:true})
    @Type(() => PropertiesSumAggregateInput)
    _sum?: InstanceType<typeof PropertiesSumAggregateInput>;
    @Field(() => PropertiesMinAggregateInput, {nullable:true})
    @Type(() => PropertiesMinAggregateInput)
    _min?: InstanceType<typeof PropertiesMinAggregateInput>;
    @Field(() => PropertiesMaxAggregateInput, {nullable:true})
    @Type(() => PropertiesMaxAggregateInput)
    _max?: InstanceType<typeof PropertiesMaxAggregateInput>;
}

@InputType()
export class PropertiesAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    pieceCount?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class PropertiesAvgAggregate {
    @Field(() => Float, {nullable:true})
    pieceCount?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}

@InputType()
export class PropertiesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class PropertiesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idProperty?: true;
    @Field(() => Boolean, {nullable:true})
    propertyName?: true;
    @Field(() => Boolean, {nullable:true})
    postalCode?: true;
    @Field(() => Boolean, {nullable:true})
    propertyStatus?: true;
    @Field(() => Boolean, {nullable:true})
    propertyType?: true;
    @Field(() => Boolean, {nullable:true})
    pieceCount?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    quartierId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PropertiesCountAggregate {
    @Field(() => Int, {nullable:false})
    idProperty!: number;
    @Field(() => Int, {nullable:false})
    propertyName!: number;
    @Field(() => Int, {nullable:false})
    postalCode!: number;
    @Field(() => Int, {nullable:false})
    propertyStatus!: number;
    @Field(() => Int, {nullable:false})
    propertyType!: number;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    quartierId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PropertiesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idProperty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyStatus?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PropertiesCount {
    @Field(() => Int, {nullable:false})
    PropertyAmenties?: number;
    @Field(() => Int, {nullable:false})
    PotentialCosts?: number;
    @Field(() => Int, {nullable:false})
    PropertyDistances?: number;
    @Field(() => Int, {nullable:false})
    Images?: number;
}

@InputType()
export class PropertiesCreateManyQuartierInputEnvelope {
    @Field(() => [PropertiesCreateManyQuartierInput], {nullable:false})
    @Type(() => PropertiesCreateManyQuartierInput)
    data!: Array<PropertiesCreateManyQuartierInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PropertiesCreateManyQuartierInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertiesCreateManyInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertiesCreateNestedManyWithoutQuartierInput {
    @Field(() => [PropertiesCreateWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create?: Array<PropertiesCreateWithoutQuartierInput>;
    @Field(() => [PropertiesCreateOrConnectWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutQuartierInput)
    connectOrCreate?: Array<PropertiesCreateOrConnectWithoutQuartierInput>;
    @Field(() => PropertiesCreateManyQuartierInputEnvelope, {nullable:true})
    @Type(() => PropertiesCreateManyQuartierInputEnvelope)
    createMany?: InstanceType<typeof PropertiesCreateManyQuartierInputEnvelope>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
}

@InputType()
export class PropertiesCreateNestedOneWithoutImagesInput {
    @Field(() => PropertiesCreateWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutImagesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutImagesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutImagesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@InputType()
export class PropertiesCreateNestedOneWithoutPotentialCostsInput {
    @Field(() => PropertiesCreateWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPotentialCostsInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPotentialCostsInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPotentialCostsInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPotentialCostsInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@InputType()
export class PropertiesCreateNestedOneWithoutPropertyAmentiesInput {
    @Field(() => PropertiesCreateWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPropertyAmentiesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPropertyAmentiesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@InputType()
export class PropertiesCreateNestedOneWithoutPropertyDistancesInput {
    @Field(() => PropertiesCreateWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPropertyDistancesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPropertyDistancesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPropertyDistancesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPropertyDistancesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@InputType()
export class PropertiesCreateOrConnectWithoutImagesInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateWithoutImagesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutImagesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutImagesInput>;
}

@InputType()
export class PropertiesCreateOrConnectWithoutPotentialCostsInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateWithoutPotentialCostsInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPotentialCostsInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPotentialCostsInput>;
}

@InputType()
export class PropertiesCreateOrConnectWithoutPropertyAmentiesInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateWithoutPropertyAmentiesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPropertyAmentiesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPropertyAmentiesInput>;
}

@InputType()
export class PropertiesCreateOrConnectWithoutPropertyDistancesInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateWithoutPropertyDistancesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPropertyDistancesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPropertyDistancesInput>;
}

@InputType()
export class PropertiesCreateOrConnectWithoutQuartierInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateWithoutQuartierInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create!: InstanceType<typeof PropertiesCreateWithoutQuartierInput>;
}

@InputType()
export class PropertiesCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesCreateNestedManyWithoutPropertyInput>;
    @Field(() => QuartiersCreateNestedOneWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateNestedOneWithoutPropertiesInput)
    quartier!: InstanceType<typeof QuartiersCreateNestedOneWithoutPropertiesInput>;
}

@InputType()
export class PropertiesCreateWithoutPotentialCostsInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesCreateNestedManyWithoutPropertyInput>;
    @Field(() => QuartiersCreateNestedOneWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateNestedOneWithoutPropertiesInput)
    quartier!: InstanceType<typeof QuartiersCreateNestedOneWithoutPropertiesInput>;
    @Field(() => ImagesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesCreateWithoutPropertyAmentiesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PotentialCostsCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesCreateNestedManyWithoutPropertyInput>;
    @Field(() => QuartiersCreateNestedOneWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateNestedOneWithoutPropertiesInput)
    quartier!: InstanceType<typeof QuartiersCreateNestedOneWithoutPropertiesInput>;
    @Field(() => ImagesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesCreateWithoutPropertyDistancesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsCreateNestedManyWithoutPropertyInput>;
    @Field(() => QuartiersCreateNestedOneWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateNestedOneWithoutPropertiesInput)
    quartier!: InstanceType<typeof QuartiersCreateNestedOneWithoutPropertiesInput>;
    @Field(() => ImagesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesCreateWithoutQuartierInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesCreateInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesCreateNestedManyWithoutPropertyInput>;
    @Field(() => QuartiersCreateNestedOneWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateNestedOneWithoutPropertiesInput)
    quartier!: InstanceType<typeof QuartiersCreateNestedOneWithoutPropertiesInput>;
    @Field(() => ImagesCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesCreateNestedManyWithoutPropertyInput>;
}

@ArgsType()
export class PropertiesGroupByArgs {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => [PropertiesOrderByWithAggregationInput], {nullable:true})
    @Type(() => PropertiesOrderByWithAggregationInput)
    orderBy?: Array<PropertiesOrderByWithAggregationInput>;
    @Field(() => [PropertiesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertiesScalarFieldEnum>;
    @Field(() => PropertiesScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PropertiesScalarWhereWithAggregatesInput)
    having?: InstanceType<typeof PropertiesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertiesCountAggregateInput, {nullable:true})
    @Type(() => PropertiesCountAggregateInput)
    _count?: InstanceType<typeof PropertiesCountAggregateInput>;
    @Field(() => PropertiesAvgAggregateInput, {nullable:true})
    @Type(() => PropertiesAvgAggregateInput)
    _avg?: InstanceType<typeof PropertiesAvgAggregateInput>;
    @Field(() => PropertiesSumAggregateInput, {nullable:true})
    @Type(() => PropertiesSumAggregateInput)
    _sum?: InstanceType<typeof PropertiesSumAggregateInput>;
    @Field(() => PropertiesMinAggregateInput, {nullable:true})
    @Type(() => PropertiesMinAggregateInput)
    _min?: InstanceType<typeof PropertiesMinAggregateInput>;
    @Field(() => PropertiesMaxAggregateInput, {nullable:true})
    @Type(() => PropertiesMaxAggregateInput)
    _max?: InstanceType<typeof PropertiesMaxAggregateInput>;
}

@ObjectType()
export class PropertiesGroupBy {
    @Field(() => String, {nullable:false})
    idProperty!: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:false})
    propertyStatus!: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:false})
    propertyType!: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PropertiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertiesCountAggregate>;
    @Field(() => PropertiesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PropertiesAvgAggregate>;
    @Field(() => PropertiesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PropertiesSumAggregate>;
    @Field(() => PropertiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertiesMinAggregate>;
    @Field(() => PropertiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertiesMaxAggregate>;
}

@InputType()
export class PropertiesListRelationFilter {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    every?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    some?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    none?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idProperty?: true;
    @Field(() => Boolean, {nullable:true})
    propertyName?: true;
    @Field(() => Boolean, {nullable:true})
    postalCode?: true;
    @Field(() => Boolean, {nullable:true})
    propertyStatus?: true;
    @Field(() => Boolean, {nullable:true})
    propertyType?: true;
    @Field(() => Boolean, {nullable:true})
    pieceCount?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    quartierId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertiesMaxAggregate {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:true})
    propertyName?: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:true})
    pieceCount?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
    @Field(() => String, {nullable:true})
    quartierId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertiesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idProperty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyStatus?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertiesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idProperty?: true;
    @Field(() => Boolean, {nullable:true})
    propertyName?: true;
    @Field(() => Boolean, {nullable:true})
    postalCode?: true;
    @Field(() => Boolean, {nullable:true})
    propertyStatus?: true;
    @Field(() => Boolean, {nullable:true})
    propertyType?: true;
    @Field(() => Boolean, {nullable:true})
    pieceCount?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    quartierId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertiesMinAggregate {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:true})
    propertyName?: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:true})
    pieceCount?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
    @Field(() => String, {nullable:true})
    quartierId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertiesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idProperty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyStatus?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertiesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PropertiesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idProperty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyName?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    propertyStatus?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertiesCountOrderByAggregateInput, {nullable:true})
    @Type(() => PropertiesCountOrderByAggregateInput)
    _count?: InstanceType<typeof PropertiesCountOrderByAggregateInput>;
    @Field(() => PropertiesAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PropertiesAvgOrderByAggregateInput)
    _avg?: InstanceType<typeof PropertiesAvgOrderByAggregateInput>;
    @Field(() => PropertiesMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PropertiesMaxOrderByAggregateInput)
    _max?: InstanceType<typeof PropertiesMaxOrderByAggregateInput>;
    @Field(() => PropertiesMinOrderByAggregateInput, {nullable:true})
    @Type(() => PropertiesMinOrderByAggregateInput)
    _min?: InstanceType<typeof PropertiesMinOrderByAggregateInput>;
    @Field(() => PropertiesSumOrderByAggregateInput, {nullable:true})
    @Type(() => PropertiesSumOrderByAggregateInput)
    _sum?: InstanceType<typeof PropertiesSumOrderByAggregateInput>;
}

@InputType()
export class PropertiesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idProperty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyName?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    propertyStatus?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertyAmentiesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyAmentiesOrderByRelationAggregateInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesOrderByRelationAggregateInput>;
    @Field(() => PotentialCostsOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PotentialCostsOrderByRelationAggregateInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsOrderByRelationAggregateInput>;
    @Field(() => PropertyDistancesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesOrderByRelationAggregateInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesOrderByRelationAggregateInput>;
    @Field(() => QuartiersOrderByWithRelationInput, {nullable:true})
    @Type(() => QuartiersOrderByWithRelationInput)
    quartier?: InstanceType<typeof QuartiersOrderByWithRelationInput>;
    @Field(() => ImagesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ImagesOrderByRelationAggregateInput)
    Images?: InstanceType<typeof ImagesOrderByRelationAggregateInput>;
}

@InputType()
export class PropertiesRelationFilter {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    is?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    isNot?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesScalarWhereWithAggregatesInput {
    @Field(() => [PropertiesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertiesScalarWhereWithAggregatesInput)
    AND?: Array<PropertiesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertiesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertiesScalarWhereWithAggregatesInput)
    OR?: Array<PropertiesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertiesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertiesScalarWhereWithAggregatesInput)
    NOT?: Array<PropertiesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idProperty?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumPropertyStatusWithAggregatesFilter, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusWithAggregatesFilter>;
    @Field(() => EnumPropertyTypeWithAggregatesFilter, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pieceCount?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: InstanceType<typeof DecimalWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    quartierId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PropertiesScalarWhereInput {
    @Field(() => [PropertiesScalarWhereInput], {nullable:true})
    @Type(() => PropertiesScalarWhereInput)
    AND?: Array<PropertiesScalarWhereInput>;
    @Field(() => [PropertiesScalarWhereInput], {nullable:true})
    @Type(() => PropertiesScalarWhereInput)
    OR?: Array<PropertiesScalarWhereInput>;
    @Field(() => [PropertiesScalarWhereInput], {nullable:true})
    @Type(() => PropertiesScalarWhereInput)
    NOT?: Array<PropertiesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idProperty?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumPropertyStatusFilter, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFilter>;
    @Field(() => EnumPropertyTypeFilter, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFilter>;
    @Field(() => IntFilter, {nullable:true})
    pieceCount?: InstanceType<typeof IntFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PropertiesSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    pieceCount?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class PropertiesSumAggregate {
    @Field(() => Int, {nullable:true})
    pieceCount?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}

@InputType()
export class PropertiesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    pieceCount?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class PropertiesUncheckedCreateNestedManyWithoutQuartierInput {
    @Field(() => [PropertiesCreateWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create?: Array<PropertiesCreateWithoutQuartierInput>;
    @Field(() => [PropertiesCreateOrConnectWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutQuartierInput)
    connectOrCreate?: Array<PropertiesCreateOrConnectWithoutQuartierInput>;
    @Field(() => PropertiesCreateManyQuartierInputEnvelope, {nullable:true})
    @Type(() => PropertiesCreateManyQuartierInputEnvelope)
    createMany?: InstanceType<typeof PropertiesCreateManyQuartierInputEnvelope>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
}

@InputType()
export class PropertiesUncheckedCreateWithoutImagesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedCreateWithoutPotentialCostsInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedCreateWithoutPropertyAmentiesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedCreateWithoutPropertyDistancesInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedCreateWithoutQuartierInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode?: string;
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:true})
    propertyType?: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput>;
    @Field(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput, {nullable:true})
    @Type(() => ImagesUncheckedCreateNestedManyWithoutPropertyInput)
    Images?: InstanceType<typeof ImagesUncheckedCreateNestedManyWithoutPropertyInput>;
}

@InputType()
export class PropertiesUncheckedUpdateManyWithoutQuartierNestedInput {
    @Field(() => [PropertiesCreateWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create?: Array<PropertiesCreateWithoutQuartierInput>;
    @Field(() => [PropertiesCreateOrConnectWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutQuartierInput)
    connectOrCreate?: Array<PropertiesCreateOrConnectWithoutQuartierInput>;
    @Field(() => [PropertiesUpsertWithWhereUniqueWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpsertWithWhereUniqueWithoutQuartierInput)
    upsert?: Array<PropertiesUpsertWithWhereUniqueWithoutQuartierInput>;
    @Field(() => PropertiesCreateManyQuartierInputEnvelope, {nullable:true})
    @Type(() => PropertiesCreateManyQuartierInputEnvelope)
    createMany?: InstanceType<typeof PropertiesCreateManyQuartierInputEnvelope>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesUpdateWithWhereUniqueWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpdateWithWhereUniqueWithoutQuartierInput)
    update?: Array<PropertiesUpdateWithWhereUniqueWithoutQuartierInput>;
    @Field(() => [PropertiesUpdateManyWithWhereWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpdateManyWithWhereWithoutQuartierInput)
    updateMany?: Array<PropertiesUpdateManyWithWhereWithoutQuartierInput>;
    @Field(() => [PropertiesScalarWhereInput], {nullable:true})
    @Type(() => PropertiesScalarWhereInput)
    deleteMany?: Array<PropertiesScalarWhereInput>;
}

@InputType()
export class PropertiesUncheckedUpdateManyWithoutQuartierInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertiesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertiesUncheckedUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUncheckedUpdateWithoutPotentialCostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUncheckedUpdateWithoutPropertyAmentiesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUncheckedUpdateWithoutPropertyDistancesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUncheckedUpdateWithoutQuartierInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUncheckedUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUncheckedUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertiesUpdateManyWithWhereWithoutQuartierInput {
    @Field(() => PropertiesScalarWhereInput, {nullable:false})
    @Type(() => PropertiesScalarWhereInput)
    where!: InstanceType<typeof PropertiesScalarWhereInput>;
    @Field(() => PropertiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertiesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertiesUpdateManyMutationInput>;
}

@InputType()
export class PropertiesUpdateManyWithoutQuartierNestedInput {
    @Field(() => [PropertiesCreateWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create?: Array<PropertiesCreateWithoutQuartierInput>;
    @Field(() => [PropertiesCreateOrConnectWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutQuartierInput)
    connectOrCreate?: Array<PropertiesCreateOrConnectWithoutQuartierInput>;
    @Field(() => [PropertiesUpsertWithWhereUniqueWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpsertWithWhereUniqueWithoutQuartierInput)
    upsert?: Array<PropertiesUpsertWithWhereUniqueWithoutQuartierInput>;
    @Field(() => PropertiesCreateManyQuartierInputEnvelope, {nullable:true})
    @Type(() => PropertiesCreateManyQuartierInputEnvelope)
    createMany?: InstanceType<typeof PropertiesCreateManyQuartierInputEnvelope>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>>;
    @Field(() => [PropertiesUpdateWithWhereUniqueWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpdateWithWhereUniqueWithoutQuartierInput)
    update?: Array<PropertiesUpdateWithWhereUniqueWithoutQuartierInput>;
    @Field(() => [PropertiesUpdateManyWithWhereWithoutQuartierInput], {nullable:true})
    @Type(() => PropertiesUpdateManyWithWhereWithoutQuartierInput)
    updateMany?: Array<PropertiesUpdateManyWithWhereWithoutQuartierInput>;
    @Field(() => [PropertiesScalarWhereInput], {nullable:true})
    @Type(() => PropertiesScalarWhereInput)
    deleteMany?: Array<PropertiesScalarWhereInput>;
}

@InputType()
export class PropertiesUpdateOneRequiredWithoutImagesNestedInput {
    @Field(() => PropertiesCreateWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutImagesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutImagesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutImagesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutImagesInput>;
    @Field(() => PropertiesUpsertWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesUpsertWithoutImagesInput)
    upsert?: InstanceType<typeof PropertiesUpsertWithoutImagesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => PropertiesUpdateToOneWithWhereWithoutImagesInput)
    update?: InstanceType<typeof PropertiesUpdateToOneWithWhereWithoutImagesInput>;
}

@InputType()
export class PropertiesUpdateOneRequiredWithoutPotentialCostsNestedInput {
    @Field(() => PropertiesCreateWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPotentialCostsInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPotentialCostsInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPotentialCostsInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPotentialCostsInput>;
    @Field(() => PropertiesUpsertWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesUpsertWithoutPotentialCostsInput)
    upsert?: InstanceType<typeof PropertiesUpsertWithoutPotentialCostsInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateToOneWithWhereWithoutPotentialCostsInput, {nullable:true})
    @Type(() => PropertiesUpdateToOneWithWhereWithoutPotentialCostsInput)
    update?: InstanceType<typeof PropertiesUpdateToOneWithWhereWithoutPotentialCostsInput>;
}

@InputType()
export class PropertiesUpdateOneRequiredWithoutPropertyAmentiesNestedInput {
    @Field(() => PropertiesCreateWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPropertyAmentiesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPropertyAmentiesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesUpsertWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesUpsertWithoutPropertyAmentiesInput)
    upsert?: InstanceType<typeof PropertiesUpsertWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateToOneWithWhereWithoutPropertyAmentiesInput, {nullable:true})
    @Type(() => PropertiesUpdateToOneWithWhereWithoutPropertyAmentiesInput)
    update?: InstanceType<typeof PropertiesUpdateToOneWithWhereWithoutPropertyAmentiesInput>;
}

@InputType()
export class PropertiesUpdateOneRequiredWithoutPropertyDistancesNestedInput {
    @Field(() => PropertiesCreateWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesCreateWithoutPropertyDistancesInput)
    create?: InstanceType<typeof PropertiesCreateWithoutPropertyDistancesInput>;
    @Field(() => PropertiesCreateOrConnectWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesCreateOrConnectWithoutPropertyDistancesInput)
    connectOrCreate?: InstanceType<typeof PropertiesCreateOrConnectWithoutPropertyDistancesInput>;
    @Field(() => PropertiesUpsertWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesUpsertWithoutPropertyDistancesInput)
    upsert?: InstanceType<typeof PropertiesUpsertWithoutPropertyDistancesInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:true})
    @Type(() => PropertiesWhereUniqueInput)
    connect?: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateToOneWithWhereWithoutPropertyDistancesInput, {nullable:true})
    @Type(() => PropertiesUpdateToOneWithWhereWithoutPropertyDistancesInput)
    update?: InstanceType<typeof PropertiesUpdateToOneWithWhereWithoutPropertyDistancesInput>;
}

@InputType()
export class PropertiesUpdateToOneWithWhereWithoutImagesInput {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesUpdateWithoutImagesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutImagesInput)
    data!: InstanceType<typeof PropertiesUpdateWithoutImagesInput>;
}

@InputType()
export class PropertiesUpdateToOneWithWhereWithoutPotentialCostsInput {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesUpdateWithoutPotentialCostsInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPotentialCostsInput)
    data!: InstanceType<typeof PropertiesUpdateWithoutPotentialCostsInput>;
}

@InputType()
export class PropertiesUpdateToOneWithWhereWithoutPropertyAmentiesInput {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesUpdateWithoutPropertyAmentiesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPropertyAmentiesInput)
    data!: InstanceType<typeof PropertiesUpdateWithoutPropertyAmentiesInput>;
}

@InputType()
export class PropertiesUpdateToOneWithWhereWithoutPropertyDistancesInput {
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
    @Field(() => PropertiesUpdateWithoutPropertyDistancesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPropertyDistancesInput)
    data!: InstanceType<typeof PropertiesUpdateWithoutPropertyDistancesInput>;
}

@InputType()
export class PropertiesUpdateWithWhereUniqueWithoutQuartierInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateWithoutQuartierInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutQuartierInput)
    data!: InstanceType<typeof PropertiesUpdateWithoutQuartierInput>;
}

@InputType()
export class PropertiesUpdateWithoutImagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput)
    quartier?: InstanceType<typeof QuartiersUpdateOneRequiredWithoutPropertiesNestedInput>;
}

@InputType()
export class PropertiesUpdateWithoutPotentialCostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput)
    quartier?: InstanceType<typeof QuartiersUpdateOneRequiredWithoutPropertiesNestedInput>;
    @Field(() => ImagesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpdateWithoutPropertyAmentiesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PotentialCostsUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput)
    quartier?: InstanceType<typeof QuartiersUpdateOneRequiredWithoutPropertiesNestedInput>;
    @Field(() => ImagesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpdateWithoutPropertyDistancesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUpdateManyWithoutPropertyNestedInput>;
    @Field(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput)
    quartier?: InstanceType<typeof QuartiersUpdateOneRequiredWithoutPropertiesNestedInput>;
    @Field(() => ImagesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpdateWithoutQuartierInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => ImagesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProperty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postalCode?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyStatusFieldUpdateOperationsInput, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pieceCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithoutPropertyNestedInput)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PotentialCostsUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PotentialCostsUpdateManyWithoutPropertyNestedInput)
    PotentialCosts?: InstanceType<typeof PotentialCostsUpdateManyWithoutPropertyNestedInput>;
    @Field(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithoutPropertyNestedInput)
    PropertyDistances?: InstanceType<typeof PropertyDistancesUpdateManyWithoutPropertyNestedInput>;
    @Field(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    @Type(() => QuartiersUpdateOneRequiredWithoutPropertiesNestedInput)
    quartier?: InstanceType<typeof QuartiersUpdateOneRequiredWithoutPropertiesNestedInput>;
    @Field(() => ImagesUpdateManyWithoutPropertyNestedInput, {nullable:true})
    @Type(() => ImagesUpdateManyWithoutPropertyNestedInput)
    Images?: InstanceType<typeof ImagesUpdateManyWithoutPropertyNestedInput>;
}

@InputType()
export class PropertiesUpsertWithWhereUniqueWithoutQuartierInput {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesUpdateWithoutQuartierInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutQuartierInput)
    update!: InstanceType<typeof PropertiesUpdateWithoutQuartierInput>;
    @Field(() => PropertiesCreateWithoutQuartierInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutQuartierInput)
    create!: InstanceType<typeof PropertiesCreateWithoutQuartierInput>;
}

@InputType()
export class PropertiesUpsertWithoutImagesInput {
    @Field(() => PropertiesUpdateWithoutImagesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutImagesInput)
    update!: InstanceType<typeof PropertiesUpdateWithoutImagesInput>;
    @Field(() => PropertiesCreateWithoutImagesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutImagesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutImagesInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesUpsertWithoutPotentialCostsInput {
    @Field(() => PropertiesUpdateWithoutPotentialCostsInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPotentialCostsInput)
    update!: InstanceType<typeof PropertiesUpdateWithoutPotentialCostsInput>;
    @Field(() => PropertiesCreateWithoutPotentialCostsInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPotentialCostsInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPotentialCostsInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesUpsertWithoutPropertyAmentiesInput {
    @Field(() => PropertiesUpdateWithoutPropertyAmentiesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPropertyAmentiesInput)
    update!: InstanceType<typeof PropertiesUpdateWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesCreateWithoutPropertyAmentiesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPropertyAmentiesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPropertyAmentiesInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesUpsertWithoutPropertyDistancesInput {
    @Field(() => PropertiesUpdateWithoutPropertyDistancesInput, {nullable:false})
    @Type(() => PropertiesUpdateWithoutPropertyDistancesInput)
    update!: InstanceType<typeof PropertiesUpdateWithoutPropertyDistancesInput>;
    @Field(() => PropertiesCreateWithoutPropertyDistancesInput, {nullable:false})
    @Type(() => PropertiesCreateWithoutPropertyDistancesInput)
    create!: InstanceType<typeof PropertiesCreateWithoutPropertyDistancesInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@InputType()
export class PropertiesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idProperty?: string;
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    AND?: Array<PropertiesWhereInput>;
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    OR?: Array<PropertiesWhereInput>;
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    NOT?: Array<PropertiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    propertyName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumPropertyStatusFilter, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFilter>;
    @Field(() => EnumPropertyTypeFilter, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFilter>;
    @Field(() => IntFilter, {nullable:true})
    pieceCount?: InstanceType<typeof IntFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertyAmentiesListRelationFilter, {nullable:true})
    @Type(() => PropertyAmentiesListRelationFilter)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesListRelationFilter>;
    @Field(() => PotentialCostsListRelationFilter, {nullable:true})
    @Type(() => PotentialCostsListRelationFilter)
    PotentialCosts?: InstanceType<typeof PotentialCostsListRelationFilter>;
    @Field(() => PropertyDistancesListRelationFilter, {nullable:true})
    @Type(() => PropertyDistancesListRelationFilter)
    PropertyDistances?: InstanceType<typeof PropertyDistancesListRelationFilter>;
    @Field(() => QuartiersRelationFilter, {nullable:true})
    @Type(() => QuartiersRelationFilter)
    quartier?: InstanceType<typeof QuartiersRelationFilter>;
    @Field(() => ImagesListRelationFilter, {nullable:true})
    @Type(() => ImagesListRelationFilter)
    Images?: InstanceType<typeof ImagesListRelationFilter>;
}

@InputType()
export class PropertiesWhereInput {
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    AND?: Array<PropertiesWhereInput>;
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    OR?: Array<PropertiesWhereInput>;
    @Field(() => [PropertiesWhereInput], {nullable:true})
    @Type(() => PropertiesWhereInput)
    NOT?: Array<PropertiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idProperty?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumPropertyStatusFilter, {nullable:true})
    propertyStatus?: InstanceType<typeof EnumPropertyStatusFilter>;
    @Field(() => EnumPropertyTypeFilter, {nullable:true})
    propertyType?: InstanceType<typeof EnumPropertyTypeFilter>;
    @Field(() => IntFilter, {nullable:true})
    pieceCount?: InstanceType<typeof IntFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertyAmentiesListRelationFilter, {nullable:true})
    @Type(() => PropertyAmentiesListRelationFilter)
    PropertyAmenties?: InstanceType<typeof PropertyAmentiesListRelationFilter>;
    @Field(() => PotentialCostsListRelationFilter, {nullable:true})
    @Type(() => PotentialCostsListRelationFilter)
    PotentialCosts?: InstanceType<typeof PotentialCostsListRelationFilter>;
    @Field(() => PropertyDistancesListRelationFilter, {nullable:true})
    @Type(() => PropertyDistancesListRelationFilter)
    PropertyDistances?: InstanceType<typeof PropertyDistancesListRelationFilter>;
    @Field(() => QuartiersRelationFilter, {nullable:true})
    @Type(() => QuartiersRelationFilter)
    quartier?: InstanceType<typeof QuartiersRelationFilter>;
    @Field(() => ImagesListRelationFilter, {nullable:true})
    @Type(() => ImagesListRelationFilter)
    Images?: InstanceType<typeof ImagesListRelationFilter>;
}

@ObjectType()
export class Properties {
    @Field(() => ID, {nullable:false})
    idProperty!: string;
    @Field(() => String, {nullable:false})
    propertyName!: string;
    @Field(() => String, {nullable:true})
    postalCode!: string | null;
    @Field(() => PropertyStatus, {nullable:false,defaultValue:'AVAILABLE'})
    propertyStatus!: keyof typeof PropertyStatus;
    @Field(() => PropertyType, {nullable:false,defaultValue:'HOUSE'})
    propertyType!: keyof typeof PropertyType;
    @Field(() => Int, {nullable:false})
    pieceCount!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;
    @Field(() => String, {nullable:false})
    quartierId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [PropertyAmenties], {nullable:true})
    PropertyAmenties?: Array<PropertyAmenties>;
    @Field(() => [PotentialCosts], {nullable:true})
    PotentialCosts?: Array<PotentialCosts>;
    @Field(() => [PropertyDistances], {nullable:true})
    PropertyDistances?: Array<PropertyDistances>;
    @Field(() => Quartiers, {nullable:false})
    quartier?: InstanceType<typeof Quartiers>;
    @Field(() => [Images], {nullable:true})
    Images?: Array<Images>;
    @Field(() => PropertiesCount, {nullable:false})
    _count?: InstanceType<typeof PropertiesCount>;
}

@ArgsType()
export class UpdateManyPropertiesArgs {
    @Field(() => PropertiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertiesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertiesUpdateManyMutationInput>;
    @Field(() => PropertiesWhereInput, {nullable:true})
    @Type(() => PropertiesWhereInput)
    where?: InstanceType<typeof PropertiesWhereInput>;
}

@ArgsType()
export class UpdateOnePropertiesArgs {
    @Field(() => PropertiesUpdateInput, {nullable:false})
    @Type(() => PropertiesUpdateInput)
    data!: InstanceType<typeof PropertiesUpdateInput>;
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
}

@ArgsType()
export class UpsertOnePropertiesArgs {
    @Field(() => PropertiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertiesWhereUniqueInput, 'idProperty'>;
    @Field(() => PropertiesCreateInput, {nullable:false})
    @Type(() => PropertiesCreateInput)
    create!: InstanceType<typeof PropertiesCreateInput>;
    @Field(() => PropertiesUpdateInput, {nullable:false})
    @Type(() => PropertiesUpdateInput)
    update!: InstanceType<typeof PropertiesUpdateInput>;
}

@ObjectType()
export class AggregatePropertyAmenties {
    @Field(() => PropertyAmentiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertyAmentiesCountAggregate>;
    @Field(() => PropertyAmentiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertyAmentiesMinAggregate>;
    @Field(() => PropertyAmentiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertyAmentiesMaxAggregate>;
}

@ArgsType()
export class CreateManyPropertyAmentiesArgs {
    @Field(() => [PropertyAmentiesCreateManyInput], {nullable:false})
    @Type(() => PropertyAmentiesCreateManyInput)
    data!: Array<PropertyAmentiesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePropertyAmentiesArgs {
    @Field(() => PropertyAmentiesCreateInput, {nullable:false})
    @Type(() => PropertyAmentiesCreateInput)
    data!: InstanceType<typeof PropertyAmentiesCreateInput>;
}

@ArgsType()
export class DeleteManyPropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
}

@ArgsType()
export class DeleteOnePropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
}

@ArgsType()
export class FindFirstPropertyAmentiesOrThrowArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmentiesOrderByWithRelationInput>;
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyAmentiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyAmentiesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmentiesOrderByWithRelationInput>;
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyAmentiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyAmentiesScalarFieldEnum>;
}

@ArgsType()
export class FindManyPropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmentiesOrderByWithRelationInput>;
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyAmentiesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyAmentiesScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePropertyAmentiesOrThrowArgs {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
}

@ArgsType()
export class FindUniquePropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
}

@ArgsType()
export class PropertyAmentiesAggregateArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyAmentiesOrderByWithRelationInput>;
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertyAmentiesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PropertyAmentiesCountAggregateInput>;
    @Field(() => PropertyAmentiesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PropertyAmentiesMinAggregateInput>;
    @Field(() => PropertyAmentiesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PropertyAmentiesMaxAggregateInput>;
}

@InputType()
export class PropertyAmentiesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idAmenty?: true;
    @Field(() => Boolean, {nullable:true})
    amentyType?: true;
    @Field(() => Boolean, {nullable:true})
    amentyValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PropertyAmentiesCountAggregate {
    @Field(() => Int, {nullable:false})
    idAmenty!: number;
    @Field(() => Int, {nullable:false})
    amentyType!: number;
    @Field(() => Int, {nullable:false})
    amentyValue!: number;
    @Field(() => Int, {nullable:false})
    propertyId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PropertyAmentiesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idAmenty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyAmentiesCreateManyPropertyInputEnvelope {
    @Field(() => [PropertyAmentiesCreateManyPropertyInput], {nullable:false})
    @Type(() => PropertyAmentiesCreateManyPropertyInput)
    data!: Array<PropertyAmentiesCreateManyPropertyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PropertyAmentiesCreateManyPropertyInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesCreateManyInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesCreateNestedManyWithoutPropertyInput {
    @Field(() => [PropertyAmentiesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create?: Array<PropertyAmentiesCreateWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyAmentiesCreateOrConnectWithoutPropertyInput>;
    @Field(() => PropertyAmentiesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyAmentiesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyAmentiesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
}

@InputType()
export class PropertyAmentiesCreateOrConnectWithoutPropertyInput {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => PropertyAmentiesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create!: InstanceType<typeof PropertyAmentiesCreateWithoutPropertyInput>;
}

@InputType()
export class PropertyAmentiesCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesCreateInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesCreateNestedOneWithoutPropertyAmentiesInput, {nullable:false})
    @Type(() => PropertiesCreateNestedOneWithoutPropertyAmentiesInput)
    property!: InstanceType<typeof PropertiesCreateNestedOneWithoutPropertyAmentiesInput>;
}

@ArgsType()
export class PropertyAmentiesGroupByArgs {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyAmentiesOrderByWithAggregationInput>;
    @Field(() => [PropertyAmentiesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyAmentiesScalarFieldEnum>;
    @Field(() => PropertyAmentiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PropertyAmentiesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertyAmentiesCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PropertyAmentiesCountAggregateInput>;
    @Field(() => PropertyAmentiesMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PropertyAmentiesMinAggregateInput>;
    @Field(() => PropertyAmentiesMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PropertyAmentiesMaxAggregateInput>;
}

@ObjectType()
export class PropertyAmentiesGroupBy {
    @Field(() => String, {nullable:false})
    idAmenty!: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PropertyAmentiesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertyAmentiesCountAggregate>;
    @Field(() => PropertyAmentiesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertyAmentiesMinAggregate>;
    @Field(() => PropertyAmentiesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertyAmentiesMaxAggregate>;
}

@InputType()
export class PropertyAmentiesListRelationFilter {
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    every?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    some?: InstanceType<typeof PropertyAmentiesWhereInput>;
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    none?: InstanceType<typeof PropertyAmentiesWhereInput>;
}

@InputType()
export class PropertyAmentiesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idAmenty?: true;
    @Field(() => Boolean, {nullable:true})
    amentyType?: true;
    @Field(() => Boolean, {nullable:true})
    amentyValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertyAmentiesMaxAggregate {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:true})
    amentyType?: string;
    @Field(() => String, {nullable:true})
    amentyValue?: string;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idAmenty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyAmentiesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idAmenty?: true;
    @Field(() => Boolean, {nullable:true})
    amentyType?: true;
    @Field(() => Boolean, {nullable:true})
    amentyValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertyAmentiesMinAggregate {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:true})
    amentyType?: string;
    @Field(() => String, {nullable:true})
    amentyValue?: string;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idAmenty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyAmentiesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PropertyAmentiesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idAmenty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertyAmentiesCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PropertyAmentiesCountOrderByAggregateInput>;
    @Field(() => PropertyAmentiesMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PropertyAmentiesMaxOrderByAggregateInput>;
    @Field(() => PropertyAmentiesMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PropertyAmentiesMinOrderByAggregateInput>;
}

@InputType()
export class PropertyAmentiesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idAmenty?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    amentyValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertiesOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    property?: InstanceType<typeof PropertiesOrderByWithRelationInput>;
}

@InputType()
export class PropertyAmentiesScalarWhereWithAggregatesInput {
    @Field(() => [PropertyAmentiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyAmentiesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertyAmentiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyAmentiesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertyAmentiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyAmentiesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idAmenty?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    amentyType?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    amentyValue?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PropertyAmentiesScalarWhereInput {
    @Field(() => [PropertyAmentiesScalarWhereInput], {nullable:true})
    AND?: Array<PropertyAmentiesScalarWhereInput>;
    @Field(() => [PropertyAmentiesScalarWhereInput], {nullable:true})
    OR?: Array<PropertyAmentiesScalarWhereInput>;
    @Field(() => [PropertyAmentiesScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyAmentiesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idAmenty?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    amentyType?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    amentyValue?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PropertyAmentiesUncheckedCreateNestedManyWithoutPropertyInput {
    @Field(() => [PropertyAmentiesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create?: Array<PropertyAmentiesCreateWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyAmentiesCreateOrConnectWithoutPropertyInput>;
    @Field(() => PropertyAmentiesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyAmentiesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyAmentiesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
}

@InputType()
export class PropertyAmentiesUncheckedCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyAmentiesUncheckedUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PropertyAmentiesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create?: Array<PropertyAmentiesCreateWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyAmentiesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PropertyAmentiesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyAmentiesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyAmentiesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesScalarWhereInput], {nullable:true})
    @Type(() => PropertyAmentiesScalarWhereInput)
    deleteMany?: Array<PropertyAmentiesScalarWhereInput>;
}

@InputType()
export class PropertyAmentiesUncheckedUpdateManyWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUncheckedUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput {
    @Field(() => PropertyAmentiesScalarWhereInput, {nullable:false})
    @Type(() => PropertyAmentiesScalarWhereInput)
    where!: InstanceType<typeof PropertyAmentiesScalarWhereInput>;
    @Field(() => PropertyAmentiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertyAmentiesUpdateManyMutationInput>;
}

@InputType()
export class PropertyAmentiesUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PropertyAmentiesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create?: Array<PropertyAmentiesCreateWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyAmentiesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PropertyAmentiesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyAmentiesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyAmentiesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>>;
    @Field(() => [PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyAmentiesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PropertyAmentiesScalarWhereInput], {nullable:true})
    @Type(() => PropertyAmentiesScalarWhereInput)
    deleteMany?: Array<PropertyAmentiesScalarWhereInput>;
}

@InputType()
export class PropertyAmentiesUpdateWithWhereUniqueWithoutPropertyInput {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => PropertyAmentiesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateWithoutPropertyInput)
    data!: InstanceType<typeof PropertyAmentiesUpdateWithoutPropertyInput>;
}

@InputType()
export class PropertyAmentiesUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyAmentiesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idAmenty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    amentyValue?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUpdateOneRequiredWithoutPropertyAmentiesNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateOneRequiredWithoutPropertyAmentiesNestedInput)
    property?: InstanceType<typeof PropertiesUpdateOneRequiredWithoutPropertyAmentiesNestedInput>;
}

@InputType()
export class PropertyAmentiesUpsertWithWhereUniqueWithoutPropertyInput {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => PropertyAmentiesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateWithoutPropertyInput)
    update!: InstanceType<typeof PropertyAmentiesUpdateWithoutPropertyInput>;
    @Field(() => PropertyAmentiesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyAmentiesCreateWithoutPropertyInput)
    create!: InstanceType<typeof PropertyAmentiesCreateWithoutPropertyInput>;
}

@InputType()
export class PropertyAmentiesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idAmenty?: string;
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    AND?: Array<PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    OR?: Array<PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    NOT?: Array<PropertyAmentiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    amentyType?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    amentyValue?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@InputType()
export class PropertyAmentiesWhereInput {
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    AND?: Array<PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    OR?: Array<PropertyAmentiesWhereInput>;
    @Field(() => [PropertyAmentiesWhereInput], {nullable:true})
    NOT?: Array<PropertyAmentiesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idAmenty?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    amentyType?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    amentyValue?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@ObjectType()
export class PropertyAmenties {
    @Field(() => ID, {nullable:false})
    idAmenty!: string;
    @Field(() => String, {nullable:false})
    amentyType!: string;
    @Field(() => String, {nullable:false})
    amentyValue!: string;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Properties, {nullable:false})
    property?: InstanceType<typeof Properties>;
}

@ArgsType()
export class UpdateManyPropertyAmentiesArgs {
    @Field(() => PropertyAmentiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertyAmentiesUpdateManyMutationInput>;
    @Field(() => PropertyAmentiesWhereInput, {nullable:true})
    @Type(() => PropertyAmentiesWhereInput)
    where?: InstanceType<typeof PropertyAmentiesWhereInput>;
}

@ArgsType()
export class UpdateOnePropertyAmentiesArgs {
    @Field(() => PropertyAmentiesUpdateInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateInput)
    data!: InstanceType<typeof PropertyAmentiesUpdateInput>;
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
}

@ArgsType()
export class UpsertOnePropertyAmentiesArgs {
    @Field(() => PropertyAmentiesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyAmentiesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyAmentiesWhereUniqueInput, 'idAmenty'>;
    @Field(() => PropertyAmentiesCreateInput, {nullable:false})
    @Type(() => PropertyAmentiesCreateInput)
    create!: InstanceType<typeof PropertyAmentiesCreateInput>;
    @Field(() => PropertyAmentiesUpdateInput, {nullable:false})
    @Type(() => PropertyAmentiesUpdateInput)
    update!: InstanceType<typeof PropertyAmentiesUpdateInput>;
}

@ObjectType()
export class AggregatePropertyDistances {
    @Field(() => PropertyDistancesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertyDistancesCountAggregate>;
    @Field(() => PropertyDistancesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PropertyDistancesAvgAggregate>;
    @Field(() => PropertyDistancesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PropertyDistancesSumAggregate>;
    @Field(() => PropertyDistancesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertyDistancesMinAggregate>;
    @Field(() => PropertyDistancesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertyDistancesMaxAggregate>;
}

@ArgsType()
export class CreateManyPropertyDistancesArgs {
    @Field(() => [PropertyDistancesCreateManyInput], {nullable:false})
    @Type(() => PropertyDistancesCreateManyInput)
    data!: Array<PropertyDistancesCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePropertyDistancesArgs {
    @Field(() => PropertyDistancesCreateInput, {nullable:false})
    @Type(() => PropertyDistancesCreateInput)
    data!: InstanceType<typeof PropertyDistancesCreateInput>;
}

@ArgsType()
export class DeleteManyPropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
}

@ArgsType()
export class DeleteOnePropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
}

@ArgsType()
export class FindFirstPropertyDistancesOrThrowArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyDistancesOrderByWithRelationInput)
    orderBy?: Array<PropertyDistancesOrderByWithRelationInput>;
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyDistancesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyDistancesScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyDistancesOrderByWithRelationInput)
    orderBy?: Array<PropertyDistancesOrderByWithRelationInput>;
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyDistancesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyDistancesScalarFieldEnum>;
}

@ArgsType()
export class FindManyPropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyDistancesOrderByWithRelationInput)
    orderBy?: Array<PropertyDistancesOrderByWithRelationInput>;
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PropertyDistancesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyDistancesScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePropertyDistancesOrThrowArgs {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
}

@ArgsType()
export class FindUniquePropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
}

@ArgsType()
export class PropertyDistancesAggregateArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesOrderByWithRelationInput], {nullable:true})
    @Type(() => PropertyDistancesOrderByWithRelationInput)
    orderBy?: Array<PropertyDistancesOrderByWithRelationInput>;
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    cursor?: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertyDistancesCountAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesCountAggregateInput)
    _count?: InstanceType<typeof PropertyDistancesCountAggregateInput>;
    @Field(() => PropertyDistancesAvgAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesAvgAggregateInput)
    _avg?: InstanceType<typeof PropertyDistancesAvgAggregateInput>;
    @Field(() => PropertyDistancesSumAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesSumAggregateInput)
    _sum?: InstanceType<typeof PropertyDistancesSumAggregateInput>;
    @Field(() => PropertyDistancesMinAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMinAggregateInput)
    _min?: InstanceType<typeof PropertyDistancesMinAggregateInput>;
    @Field(() => PropertyDistancesMaxAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMaxAggregateInput)
    _max?: InstanceType<typeof PropertyDistancesMaxAggregateInput>;
}

@InputType()
export class PropertyDistancesAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    distanceValue?: true;
}

@ObjectType()
export class PropertyDistancesAvgAggregate {
    @Field(() => GraphQLDecimal, {nullable:true})
    distanceValue?: Decimal;
}

@InputType()
export class PropertyDistancesAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idDistances?: true;
    @Field(() => Boolean, {nullable:true})
    distanceType?: true;
    @Field(() => Boolean, {nullable:true})
    distanceValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PropertyDistancesCountAggregate {
    @Field(() => Int, {nullable:false})
    idDistances!: number;
    @Field(() => Int, {nullable:false})
    distanceType!: number;
    @Field(() => Int, {nullable:false})
    distanceValue!: number;
    @Field(() => Int, {nullable:false})
    propertyId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PropertyDistancesCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idDistances?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesCreateManyPropertyInputEnvelope {
    @Field(() => [PropertyDistancesCreateManyPropertyInput], {nullable:false})
    @Type(() => PropertyDistancesCreateManyPropertyInput)
    data!: Array<PropertyDistancesCreateManyPropertyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PropertyDistancesCreateManyPropertyInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesCreateManyInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesCreateNestedManyWithoutPropertyInput {
    @Field(() => [PropertyDistancesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create?: Array<PropertyDistancesCreateWithoutPropertyInput>;
    @Field(() => [PropertyDistancesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyDistancesCreateOrConnectWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyDistancesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyDistancesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
}

@InputType()
export class PropertyDistancesCreateOrConnectWithoutPropertyInput {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => PropertyDistancesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create!: InstanceType<typeof PropertyDistancesCreateWithoutPropertyInput>;
}

@InputType()
export class PropertyDistancesCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesCreateInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesCreateNestedOneWithoutPropertyDistancesInput, {nullable:false})
    @Type(() => PropertiesCreateNestedOneWithoutPropertyDistancesInput)
    property!: InstanceType<typeof PropertiesCreateNestedOneWithoutPropertyDistancesInput>;
}

@ArgsType()
export class PropertyDistancesGroupByArgs {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesOrderByWithAggregationInput], {nullable:true})
    @Type(() => PropertyDistancesOrderByWithAggregationInput)
    orderBy?: Array<PropertyDistancesOrderByWithAggregationInput>;
    @Field(() => [PropertyDistancesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyDistancesScalarFieldEnum>;
    @Field(() => PropertyDistancesScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PropertyDistancesScalarWhereWithAggregatesInput)
    having?: InstanceType<typeof PropertyDistancesScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PropertyDistancesCountAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesCountAggregateInput)
    _count?: InstanceType<typeof PropertyDistancesCountAggregateInput>;
    @Field(() => PropertyDistancesAvgAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesAvgAggregateInput)
    _avg?: InstanceType<typeof PropertyDistancesAvgAggregateInput>;
    @Field(() => PropertyDistancesSumAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesSumAggregateInput)
    _sum?: InstanceType<typeof PropertyDistancesSumAggregateInput>;
    @Field(() => PropertyDistancesMinAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMinAggregateInput)
    _min?: InstanceType<typeof PropertyDistancesMinAggregateInput>;
    @Field(() => PropertyDistancesMaxAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMaxAggregateInput)
    _max?: InstanceType<typeof PropertyDistancesMaxAggregateInput>;
}

@ObjectType()
export class PropertyDistancesGroupBy {
    @Field(() => String, {nullable:false})
    idDistances!: string;
    @Field(() => PropertyDistance, {nullable:false})
    distanceType!: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    distanceValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PropertyDistancesCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PropertyDistancesCountAggregate>;
    @Field(() => PropertyDistancesAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PropertyDistancesAvgAggregate>;
    @Field(() => PropertyDistancesSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PropertyDistancesSumAggregate>;
    @Field(() => PropertyDistancesMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PropertyDistancesMinAggregate>;
    @Field(() => PropertyDistancesMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PropertyDistancesMaxAggregate>;
}

@InputType()
export class PropertyDistancesListRelationFilter {
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    every?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    some?: InstanceType<typeof PropertyDistancesWhereInput>;
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    none?: InstanceType<typeof PropertyDistancesWhereInput>;
}

@InputType()
export class PropertyDistancesMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idDistances?: true;
    @Field(() => Boolean, {nullable:true})
    distanceType?: true;
    @Field(() => Boolean, {nullable:true})
    distanceValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertyDistancesMaxAggregate {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:true})
    distanceValue?: Decimal;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idDistances?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idDistances?: true;
    @Field(() => Boolean, {nullable:true})
    distanceType?: true;
    @Field(() => Boolean, {nullable:true})
    distanceValue?: true;
    @Field(() => Boolean, {nullable:true})
    propertyId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PropertyDistancesMinAggregate {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:true})
    distanceValue?: Decimal;
    @Field(() => String, {nullable:true})
    propertyId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idDistances?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idDistances?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertyDistancesCountOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesCountOrderByAggregateInput)
    _count?: InstanceType<typeof PropertyDistancesCountOrderByAggregateInput>;
    @Field(() => PropertyDistancesAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesAvgOrderByAggregateInput)
    _avg?: InstanceType<typeof PropertyDistancesAvgOrderByAggregateInput>;
    @Field(() => PropertyDistancesMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMaxOrderByAggregateInput)
    _max?: InstanceType<typeof PropertyDistancesMaxOrderByAggregateInput>;
    @Field(() => PropertyDistancesMinOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesMinOrderByAggregateInput)
    _min?: InstanceType<typeof PropertyDistancesMinOrderByAggregateInput>;
    @Field(() => PropertyDistancesSumOrderByAggregateInput, {nullable:true})
    @Type(() => PropertyDistancesSumOrderByAggregateInput)
    _sum?: InstanceType<typeof PropertyDistancesSumOrderByAggregateInput>;
}

@InputType()
export class PropertyDistancesOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idDistances?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    propertyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PropertiesOrderByWithRelationInput, {nullable:true})
    @Type(() => PropertiesOrderByWithRelationInput)
    property?: InstanceType<typeof PropertiesOrderByWithRelationInput>;
}

@InputType()
export class PropertyDistancesScalarWhereWithAggregatesInput {
    @Field(() => [PropertyDistancesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereWithAggregatesInput)
    AND?: Array<PropertyDistancesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertyDistancesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereWithAggregatesInput)
    OR?: Array<PropertyDistancesScalarWhereWithAggregatesInput>;
    @Field(() => [PropertyDistancesScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereWithAggregatesInput)
    NOT?: Array<PropertyDistancesScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idDistances?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumPropertyDistanceWithAggregatesFilter, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    distanceValue?: InstanceType<typeof DecimalWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PropertyDistancesScalarWhereInput {
    @Field(() => [PropertyDistancesScalarWhereInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereInput)
    AND?: Array<PropertyDistancesScalarWhereInput>;
    @Field(() => [PropertyDistancesScalarWhereInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereInput)
    OR?: Array<PropertyDistancesScalarWhereInput>;
    @Field(() => [PropertyDistancesScalarWhereInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereInput)
    NOT?: Array<PropertyDistancesScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idDistances?: InstanceType<typeof StringFilter>;
    @Field(() => EnumPropertyDistanceFilter, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    distanceValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PropertyDistancesSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    distanceValue?: true;
}

@ObjectType()
export class PropertyDistancesSumAggregate {
    @Field(() => GraphQLDecimal, {nullable:true})
    distanceValue?: Decimal;
}

@InputType()
export class PropertyDistancesSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    distanceValue?: keyof typeof SortOrder;
}

@InputType()
export class PropertyDistancesUncheckedCreateNestedManyWithoutPropertyInput {
    @Field(() => [PropertyDistancesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create?: Array<PropertyDistancesCreateWithoutPropertyInput>;
    @Field(() => [PropertyDistancesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyDistancesCreateOrConnectWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyDistancesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyDistancesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
}

@InputType()
export class PropertyDistancesUncheckedCreateWithoutPropertyInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => PropertyDistance, {nullable:true})
    distanceType?: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    distanceValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PropertyDistancesUncheckedUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PropertyDistancesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create?: Array<PropertyDistancesCreateWithoutPropertyInput>;
    @Field(() => [PropertyDistancesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyDistancesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyDistancesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyDistancesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PropertyDistancesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyDistancesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PropertyDistancesScalarWhereInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereInput)
    deleteMany?: Array<PropertyDistancesScalarWhereInput>;
}

@InputType()
export class PropertyDistancesUncheckedUpdateManyWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUncheckedUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    propertyId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUpdateManyWithWhereWithoutPropertyInput {
    @Field(() => PropertyDistancesScalarWhereInput, {nullable:false})
    @Type(() => PropertyDistancesScalarWhereInput)
    where!: InstanceType<typeof PropertyDistancesScalarWhereInput>;
    @Field(() => PropertyDistancesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertyDistancesUpdateManyMutationInput>;
}

@InputType()
export class PropertyDistancesUpdateManyWithoutPropertyNestedInput {
    @Field(() => [PropertyDistancesCreateWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create?: Array<PropertyDistancesCreateWithoutPropertyInput>;
    @Field(() => [PropertyDistancesCreateOrConnectWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesCreateOrConnectWithoutPropertyInput)
    connectOrCreate?: Array<PropertyDistancesCreateOrConnectWithoutPropertyInput>;
    @Field(() => [PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput)
    upsert?: Array<PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateManyPropertyInputEnvelope, {nullable:true})
    @Type(() => PropertyDistancesCreateManyPropertyInputEnvelope)
    createMany?: InstanceType<typeof PropertyDistancesCreateManyPropertyInputEnvelope>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesWhereUniqueInput], {nullable:true})
    @Type(() => PropertyDistancesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>>;
    @Field(() => [PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput)
    update?: Array<PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput>;
    @Field(() => [PropertyDistancesUpdateManyWithWhereWithoutPropertyInput], {nullable:true})
    @Type(() => PropertyDistancesUpdateManyWithWhereWithoutPropertyInput)
    updateMany?: Array<PropertyDistancesUpdateManyWithWhereWithoutPropertyInput>;
    @Field(() => [PropertyDistancesScalarWhereInput], {nullable:true})
    @Type(() => PropertyDistancesScalarWhereInput)
    deleteMany?: Array<PropertyDistancesScalarWhereInput>;
}

@InputType()
export class PropertyDistancesUpdateWithWhereUniqueWithoutPropertyInput {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => PropertyDistancesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateWithoutPropertyInput)
    data!: InstanceType<typeof PropertyDistancesUpdateWithoutPropertyInput>;
}

@InputType()
export class PropertyDistancesUpdateWithoutPropertyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PropertyDistancesUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idDistances?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumPropertyDistanceFieldUpdateOperationsInput, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    distanceValue?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUpdateOneRequiredWithoutPropertyDistancesNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateOneRequiredWithoutPropertyDistancesNestedInput)
    property?: InstanceType<typeof PropertiesUpdateOneRequiredWithoutPropertyDistancesNestedInput>;
}

@InputType()
export class PropertyDistancesUpsertWithWhereUniqueWithoutPropertyInput {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => PropertyDistancesUpdateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateWithoutPropertyInput)
    update!: InstanceType<typeof PropertyDistancesUpdateWithoutPropertyInput>;
    @Field(() => PropertyDistancesCreateWithoutPropertyInput, {nullable:false})
    @Type(() => PropertyDistancesCreateWithoutPropertyInput)
    create!: InstanceType<typeof PropertyDistancesCreateWithoutPropertyInput>;
}

@InputType()
export class PropertyDistancesWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idDistances?: string;
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    AND?: Array<PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    OR?: Array<PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    NOT?: Array<PropertyDistancesWhereInput>;
    @Field(() => EnumPropertyDistanceFilter, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    distanceValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@InputType()
export class PropertyDistancesWhereInput {
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    AND?: Array<PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    OR?: Array<PropertyDistancesWhereInput>;
    @Field(() => [PropertyDistancesWhereInput], {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    NOT?: Array<PropertyDistancesWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idDistances?: InstanceType<typeof StringFilter>;
    @Field(() => EnumPropertyDistanceFilter, {nullable:true})
    distanceType?: InstanceType<typeof EnumPropertyDistanceFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    distanceValue?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringFilter, {nullable:true})
    propertyId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PropertiesRelationFilter, {nullable:true})
    @Type(() => PropertiesRelationFilter)
    property?: InstanceType<typeof PropertiesRelationFilter>;
}

@ObjectType()
export class PropertyDistances {
    @Field(() => ID, {nullable:false})
    idDistances!: string;
    @Field(() => PropertyDistance, {nullable:false,defaultValue:'ASPHALT'})
    distanceType!: keyof typeof PropertyDistance;
    @Field(() => GraphQLDecimal, {nullable:false})
    distanceValue!: Decimal;
    @Field(() => String, {nullable:false})
    propertyId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Properties, {nullable:false})
    property?: InstanceType<typeof Properties>;
}

@ArgsType()
export class UpdateManyPropertyDistancesArgs {
    @Field(() => PropertyDistancesUpdateManyMutationInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateManyMutationInput)
    data!: InstanceType<typeof PropertyDistancesUpdateManyMutationInput>;
    @Field(() => PropertyDistancesWhereInput, {nullable:true})
    @Type(() => PropertyDistancesWhereInput)
    where?: InstanceType<typeof PropertyDistancesWhereInput>;
}

@ArgsType()
export class UpdateOnePropertyDistancesArgs {
    @Field(() => PropertyDistancesUpdateInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateInput)
    data!: InstanceType<typeof PropertyDistancesUpdateInput>;
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
}

@ArgsType()
export class UpsertOnePropertyDistancesArgs {
    @Field(() => PropertyDistancesWhereUniqueInput, {nullable:false})
    @Type(() => PropertyDistancesWhereUniqueInput)
    where!: Prisma.AtLeast<PropertyDistancesWhereUniqueInput, 'idDistances'>;
    @Field(() => PropertyDistancesCreateInput, {nullable:false})
    @Type(() => PropertyDistancesCreateInput)
    create!: InstanceType<typeof PropertyDistancesCreateInput>;
    @Field(() => PropertyDistancesUpdateInput, {nullable:false})
    @Type(() => PropertyDistancesUpdateInput)
    update!: InstanceType<typeof PropertyDistancesUpdateInput>;
}

@ObjectType()
export class AggregateQuartiers {
    @Field(() => QuartiersCountAggregate, {nullable:true})
    _count?: InstanceType<typeof QuartiersCountAggregate>;
    @Field(() => QuartiersMinAggregate, {nullable:true})
    _min?: InstanceType<typeof QuartiersMinAggregate>;
    @Field(() => QuartiersMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof QuartiersMaxAggregate>;
}

@ArgsType()
export class CreateManyQuartiersArgs {
    @Field(() => [QuartiersCreateManyInput], {nullable:false})
    @Type(() => QuartiersCreateManyInput)
    data!: Array<QuartiersCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneQuartiersArgs {
    @Field(() => QuartiersCreateInput, {nullable:false})
    @Type(() => QuartiersCreateInput)
    data!: InstanceType<typeof QuartiersCreateInput>;
}

@ArgsType()
export class DeleteManyQuartiersArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
}

@ArgsType()
export class DeleteOneQuartiersArgs {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
}

@ArgsType()
export class FindFirstQuartiersOrThrowArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => [QuartiersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuartiersOrderByWithRelationInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [QuartiersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuartiersScalarFieldEnum>;
}

@ArgsType()
export class FindFirstQuartiersArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => [QuartiersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuartiersOrderByWithRelationInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [QuartiersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuartiersScalarFieldEnum>;
}

@ArgsType()
export class FindManyQuartiersArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => [QuartiersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuartiersOrderByWithRelationInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [QuartiersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof QuartiersScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueQuartiersOrThrowArgs {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
}

@ArgsType()
export class FindUniqueQuartiersArgs {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
}

@ArgsType()
export class QuartiersAggregateArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => [QuartiersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuartiersOrderByWithRelationInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => QuartiersCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof QuartiersCountAggregateInput>;
    @Field(() => QuartiersMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof QuartiersMinAggregateInput>;
    @Field(() => QuartiersMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof QuartiersMaxAggregateInput>;
}

@InputType()
export class QuartiersCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idQuartier?: true;
    @Field(() => Boolean, {nullable:true})
    quartierName?: true;
    @Field(() => Boolean, {nullable:true})
    quartierDescription?: true;
    @Field(() => Boolean, {nullable:true})
    communeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class QuartiersCountAggregate {
    @Field(() => Int, {nullable:false})
    idQuartier!: number;
    @Field(() => Int, {nullable:false})
    quartierName!: number;
    @Field(() => Int, {nullable:false})
    quartierDescription!: number;
    @Field(() => Int, {nullable:false})
    communeId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class QuartiersCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idQuartier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class QuartiersCount {
    @Field(() => Int, {nullable:false})
    Properties?: number;
}

@InputType()
export class QuartiersCreateManyCommunesInputEnvelope {
    @Field(() => [QuartiersCreateManyCommunesInput], {nullable:false})
    @Type(() => QuartiersCreateManyCommunesInput)
    data!: Array<QuartiersCreateManyCommunesInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class QuartiersCreateManyCommunesInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class QuartiersCreateManyInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => String, {nullable:false})
    communeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class QuartiersCreateNestedManyWithoutCommunesInput {
    @Field(() => [QuartiersCreateWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create?: Array<QuartiersCreateWithoutCommunesInput>;
    @Field(() => [QuartiersCreateOrConnectWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: Array<QuartiersCreateOrConnectWithoutCommunesInput>;
    @Field(() => QuartiersCreateManyCommunesInputEnvelope, {nullable:true})
    @Type(() => QuartiersCreateManyCommunesInputEnvelope)
    createMany?: InstanceType<typeof QuartiersCreateManyCommunesInputEnvelope>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
}

@InputType()
export class QuartiersCreateNestedOneWithoutPropertiesInput {
    @Field(() => QuartiersCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersCreateWithoutPropertiesInput)
    create?: InstanceType<typeof QuartiersCreateWithoutPropertiesInput>;
    @Field(() => QuartiersCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: InstanceType<typeof QuartiersCreateOrConnectWithoutPropertiesInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
}

@InputType()
export class QuartiersCreateOrConnectWithoutCommunesInput {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersCreateWithoutCommunesInput, {nullable:false})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create!: InstanceType<typeof QuartiersCreateWithoutCommunesInput>;
}

@InputType()
export class QuartiersCreateOrConnectWithoutPropertiesInput {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateWithoutPropertiesInput)
    create!: InstanceType<typeof QuartiersCreateWithoutPropertiesInput>;
}

@InputType()
export class QuartiersCreateWithoutCommunesInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesCreateNestedManyWithoutQuartierInput, {nullable:true})
    @Type(() => PropertiesCreateNestedManyWithoutQuartierInput)
    Properties?: InstanceType<typeof PropertiesCreateNestedManyWithoutQuartierInput>;
}

@InputType()
export class QuartiersCreateWithoutPropertiesInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommunesCreateNestedOneWithoutQuartiersInput, {nullable:false})
    Communes!: InstanceType<typeof CommunesCreateNestedOneWithoutQuartiersInput>;
}

@InputType()
export class QuartiersCreateInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommunesCreateNestedOneWithoutQuartiersInput, {nullable:false})
    Communes!: InstanceType<typeof CommunesCreateNestedOneWithoutQuartiersInput>;
    @Field(() => PropertiesCreateNestedManyWithoutQuartierInput, {nullable:true})
    @Type(() => PropertiesCreateNestedManyWithoutQuartierInput)
    Properties?: InstanceType<typeof PropertiesCreateNestedManyWithoutQuartierInput>;
}

@ArgsType()
export class QuartiersGroupByArgs {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => [QuartiersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuartiersOrderByWithAggregationInput>;
    @Field(() => [QuartiersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuartiersScalarFieldEnum>;
    @Field(() => QuartiersScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof QuartiersScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => QuartiersCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof QuartiersCountAggregateInput>;
    @Field(() => QuartiersMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof QuartiersMinAggregateInput>;
    @Field(() => QuartiersMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof QuartiersMaxAggregateInput>;
}

@ObjectType()
export class QuartiersGroupBy {
    @Field(() => String, {nullable:false})
    idQuartier!: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => String, {nullable:false})
    communeId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => QuartiersCountAggregate, {nullable:true})
    _count?: InstanceType<typeof QuartiersCountAggregate>;
    @Field(() => QuartiersMinAggregate, {nullable:true})
    _min?: InstanceType<typeof QuartiersMinAggregate>;
    @Field(() => QuartiersMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof QuartiersMaxAggregate>;
}

@InputType()
export class QuartiersListRelationFilter {
    @Field(() => QuartiersWhereInput, {nullable:true})
    every?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => QuartiersWhereInput, {nullable:true})
    some?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => QuartiersWhereInput, {nullable:true})
    none?: InstanceType<typeof QuartiersWhereInput>;
}

@InputType()
export class QuartiersMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idQuartier?: true;
    @Field(() => Boolean, {nullable:true})
    quartierName?: true;
    @Field(() => Boolean, {nullable:true})
    quartierDescription?: true;
    @Field(() => Boolean, {nullable:true})
    communeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class QuartiersMaxAggregate {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:true})
    quartierName?: string;
    @Field(() => String, {nullable:true})
    quartierDescription?: string;
    @Field(() => String, {nullable:true})
    communeId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class QuartiersMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idQuartier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class QuartiersMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    idQuartier?: true;
    @Field(() => Boolean, {nullable:true})
    quartierName?: true;
    @Field(() => Boolean, {nullable:true})
    quartierDescription?: true;
    @Field(() => Boolean, {nullable:true})
    communeId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class QuartiersMinAggregate {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:true})
    quartierName?: string;
    @Field(() => String, {nullable:true})
    quartierDescription?: string;
    @Field(() => String, {nullable:true})
    communeId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class QuartiersMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    idQuartier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class QuartiersOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class QuartiersOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    idQuartier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => QuartiersCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof QuartiersCountOrderByAggregateInput>;
    @Field(() => QuartiersMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof QuartiersMaxOrderByAggregateInput>;
    @Field(() => QuartiersMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof QuartiersMinOrderByAggregateInput>;
}

@InputType()
export class QuartiersOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    idQuartier?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    quartierDescription?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    communeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CommunesOrderByWithRelationInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesOrderByWithRelationInput>;
    @Field(() => PropertiesOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PropertiesOrderByRelationAggregateInput)
    Properties?: InstanceType<typeof PropertiesOrderByRelationAggregateInput>;
}

@InputType()
export class QuartiersRelationFilter {
    @Field(() => QuartiersWhereInput, {nullable:true})
    is?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => QuartiersWhereInput, {nullable:true})
    isNot?: InstanceType<typeof QuartiersWhereInput>;
}

@InputType()
export class QuartiersScalarWhereWithAggregatesInput {
    @Field(() => [QuartiersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuartiersScalarWhereWithAggregatesInput>;
    @Field(() => [QuartiersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuartiersScalarWhereWithAggregatesInput>;
    @Field(() => [QuartiersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuartiersScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idQuartier?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    quartierName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    quartierDescription?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    communeId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class QuartiersScalarWhereInput {
    @Field(() => [QuartiersScalarWhereInput], {nullable:true})
    AND?: Array<QuartiersScalarWhereInput>;
    @Field(() => [QuartiersScalarWhereInput], {nullable:true})
    OR?: Array<QuartiersScalarWhereInput>;
    @Field(() => [QuartiersScalarWhereInput], {nullable:true})
    NOT?: Array<QuartiersScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idQuartier?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class QuartiersUncheckedCreateNestedManyWithoutCommunesInput {
    @Field(() => [QuartiersCreateWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create?: Array<QuartiersCreateWithoutCommunesInput>;
    @Field(() => [QuartiersCreateOrConnectWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: Array<QuartiersCreateOrConnectWithoutCommunesInput>;
    @Field(() => QuartiersCreateManyCommunesInputEnvelope, {nullable:true})
    @Type(() => QuartiersCreateManyCommunesInputEnvelope)
    createMany?: InstanceType<typeof QuartiersCreateManyCommunesInputEnvelope>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
}

@InputType()
export class QuartiersUncheckedCreateWithoutCommunesInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesUncheckedCreateNestedManyWithoutQuartierInput, {nullable:true})
    @Type(() => PropertiesUncheckedCreateNestedManyWithoutQuartierInput)
    Properties?: InstanceType<typeof PropertiesUncheckedCreateNestedManyWithoutQuartierInput>;
}

@InputType()
export class QuartiersUncheckedCreateWithoutPropertiesInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => String, {nullable:false})
    communeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class QuartiersUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => String, {nullable:false})
    communeId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PropertiesUncheckedCreateNestedManyWithoutQuartierInput, {nullable:true})
    @Type(() => PropertiesUncheckedCreateNestedManyWithoutQuartierInput)
    Properties?: InstanceType<typeof PropertiesUncheckedCreateNestedManyWithoutQuartierInput>;
}

@InputType()
export class QuartiersUncheckedUpdateManyWithoutCommunesNestedInput {
    @Field(() => [QuartiersCreateWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create?: Array<QuartiersCreateWithoutCommunesInput>;
    @Field(() => [QuartiersCreateOrConnectWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: Array<QuartiersCreateOrConnectWithoutCommunesInput>;
    @Field(() => [QuartiersUpsertWithWhereUniqueWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpsertWithWhereUniqueWithoutCommunesInput)
    upsert?: Array<QuartiersUpsertWithWhereUniqueWithoutCommunesInput>;
    @Field(() => QuartiersCreateManyCommunesInputEnvelope, {nullable:true})
    @Type(() => QuartiersCreateManyCommunesInputEnvelope)
    createMany?: InstanceType<typeof QuartiersCreateManyCommunesInputEnvelope>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersUpdateWithWhereUniqueWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpdateWithWhereUniqueWithoutCommunesInput)
    update?: Array<QuartiersUpdateWithWhereUniqueWithoutCommunesInput>;
    @Field(() => [QuartiersUpdateManyWithWhereWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpdateManyWithWhereWithoutCommunesInput)
    updateMany?: Array<QuartiersUpdateManyWithWhereWithoutCommunesInput>;
    @Field(() => [QuartiersScalarWhereInput], {nullable:true})
    @Type(() => QuartiersScalarWhereInput)
    deleteMany?: Array<QuartiersScalarWhereInput>;
}

@InputType()
export class QuartiersUncheckedUpdateManyWithoutCommunesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class QuartiersUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class QuartiersUncheckedUpdateWithoutCommunesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUncheckedUpdateManyWithoutQuartierNestedInput, {nullable:true})
    @Type(() => PropertiesUncheckedUpdateManyWithoutQuartierNestedInput)
    Properties?: InstanceType<typeof PropertiesUncheckedUpdateManyWithoutQuartierNestedInput>;
}

@InputType()
export class QuartiersUncheckedUpdateWithoutPropertiesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class QuartiersUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    communeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUncheckedUpdateManyWithoutQuartierNestedInput, {nullable:true})
    @Type(() => PropertiesUncheckedUpdateManyWithoutQuartierNestedInput)
    Properties?: InstanceType<typeof PropertiesUncheckedUpdateManyWithoutQuartierNestedInput>;
}

@InputType()
export class QuartiersUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class QuartiersUpdateManyWithWhereWithoutCommunesInput {
    @Field(() => QuartiersScalarWhereInput, {nullable:false})
    @Type(() => QuartiersScalarWhereInput)
    where!: InstanceType<typeof QuartiersScalarWhereInput>;
    @Field(() => QuartiersUpdateManyMutationInput, {nullable:false})
    @Type(() => QuartiersUpdateManyMutationInput)
    data!: InstanceType<typeof QuartiersUpdateManyMutationInput>;
}

@InputType()
export class QuartiersUpdateManyWithoutCommunesNestedInput {
    @Field(() => [QuartiersCreateWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create?: Array<QuartiersCreateWithoutCommunesInput>;
    @Field(() => [QuartiersCreateOrConnectWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutCommunesInput)
    connectOrCreate?: Array<QuartiersCreateOrConnectWithoutCommunesInput>;
    @Field(() => [QuartiersUpsertWithWhereUniqueWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpsertWithWhereUniqueWithoutCommunesInput)
    upsert?: Array<QuartiersUpsertWithWhereUniqueWithoutCommunesInput>;
    @Field(() => QuartiersCreateManyCommunesInputEnvelope, {nullable:true})
    @Type(() => QuartiersCreateManyCommunesInputEnvelope)
    createMany?: InstanceType<typeof QuartiersCreateManyCommunesInputEnvelope>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersWhereUniqueInput], {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>>;
    @Field(() => [QuartiersUpdateWithWhereUniqueWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpdateWithWhereUniqueWithoutCommunesInput)
    update?: Array<QuartiersUpdateWithWhereUniqueWithoutCommunesInput>;
    @Field(() => [QuartiersUpdateManyWithWhereWithoutCommunesInput], {nullable:true})
    @Type(() => QuartiersUpdateManyWithWhereWithoutCommunesInput)
    updateMany?: Array<QuartiersUpdateManyWithWhereWithoutCommunesInput>;
    @Field(() => [QuartiersScalarWhereInput], {nullable:true})
    @Type(() => QuartiersScalarWhereInput)
    deleteMany?: Array<QuartiersScalarWhereInput>;
}

@InputType()
export class QuartiersUpdateOneRequiredWithoutPropertiesNestedInput {
    @Field(() => QuartiersCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersCreateWithoutPropertiesInput)
    create?: InstanceType<typeof QuartiersCreateWithoutPropertiesInput>;
    @Field(() => QuartiersCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: InstanceType<typeof QuartiersCreateOrConnectWithoutPropertiesInput>;
    @Field(() => QuartiersUpsertWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersUpsertWithoutPropertiesInput)
    upsert?: InstanceType<typeof QuartiersUpsertWithoutPropertiesInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:true})
    @Type(() => QuartiersWhereUniqueInput)
    connect?: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersUpdateToOneWithWhereWithoutPropertiesInput, {nullable:true})
    @Type(() => QuartiersUpdateToOneWithWhereWithoutPropertiesInput)
    update?: InstanceType<typeof QuartiersUpdateToOneWithWhereWithoutPropertiesInput>;
}

@InputType()
export class QuartiersUpdateToOneWithWhereWithoutPropertiesInput {
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
    @Field(() => QuartiersUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersUpdateWithoutPropertiesInput)
    data!: InstanceType<typeof QuartiersUpdateWithoutPropertiesInput>;
}

@InputType()
export class QuartiersUpdateWithWhereUniqueWithoutCommunesInput {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersUpdateWithoutCommunesInput, {nullable:false})
    @Type(() => QuartiersUpdateWithoutCommunesInput)
    data!: InstanceType<typeof QuartiersUpdateWithoutCommunesInput>;
}

@InputType()
export class QuartiersUpdateWithoutCommunesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PropertiesUpdateManyWithoutQuartierNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateManyWithoutQuartierNestedInput)
    Properties?: InstanceType<typeof PropertiesUpdateManyWithoutQuartierNestedInput>;
}

@InputType()
export class QuartiersUpdateWithoutPropertiesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommunesUpdateOneRequiredWithoutQuartiersNestedInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesUpdateOneRequiredWithoutQuartiersNestedInput>;
}

@InputType()
export class QuartiersUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idQuartier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommunesUpdateOneRequiredWithoutQuartiersNestedInput, {nullable:true})
    Communes?: InstanceType<typeof CommunesUpdateOneRequiredWithoutQuartiersNestedInput>;
    @Field(() => PropertiesUpdateManyWithoutQuartierNestedInput, {nullable:true})
    @Type(() => PropertiesUpdateManyWithoutQuartierNestedInput)
    Properties?: InstanceType<typeof PropertiesUpdateManyWithoutQuartierNestedInput>;
}

@InputType()
export class QuartiersUpsertWithWhereUniqueWithoutCommunesInput {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersUpdateWithoutCommunesInput, {nullable:false})
    @Type(() => QuartiersUpdateWithoutCommunesInput)
    update!: InstanceType<typeof QuartiersUpdateWithoutCommunesInput>;
    @Field(() => QuartiersCreateWithoutCommunesInput, {nullable:false})
    @Type(() => QuartiersCreateWithoutCommunesInput)
    create!: InstanceType<typeof QuartiersCreateWithoutCommunesInput>;
}

@InputType()
export class QuartiersUpsertWithoutPropertiesInput {
    @Field(() => QuartiersUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersUpdateWithoutPropertiesInput)
    update!: InstanceType<typeof QuartiersUpdateWithoutPropertiesInput>;
    @Field(() => QuartiersCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => QuartiersCreateWithoutPropertiesInput)
    create!: InstanceType<typeof QuartiersCreateWithoutPropertiesInput>;
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
}

@InputType()
export class QuartiersWhereUniqueInput {
    @Field(() => String, {nullable:true})
    idQuartier?: string;
    @Field(() => [QuartiersWhereInput], {nullable:true})
    AND?: Array<QuartiersWhereInput>;
    @Field(() => [QuartiersWhereInput], {nullable:true})
    OR?: Array<QuartiersWhereInput>;
    @Field(() => [QuartiersWhereInput], {nullable:true})
    NOT?: Array<QuartiersWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    quartierName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CommunesRelationFilter, {nullable:true})
    Communes?: InstanceType<typeof CommunesRelationFilter>;
    @Field(() => PropertiesListRelationFilter, {nullable:true})
    @Type(() => PropertiesListRelationFilter)
    Properties?: InstanceType<typeof PropertiesListRelationFilter>;
}

@InputType()
export class QuartiersWhereInput {
    @Field(() => [QuartiersWhereInput], {nullable:true})
    AND?: Array<QuartiersWhereInput>;
    @Field(() => [QuartiersWhereInput], {nullable:true})
    OR?: Array<QuartiersWhereInput>;
    @Field(() => [QuartiersWhereInput], {nullable:true})
    NOT?: Array<QuartiersWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    idQuartier?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    quartierDescription?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    communeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => CommunesRelationFilter, {nullable:true})
    Communes?: InstanceType<typeof CommunesRelationFilter>;
    @Field(() => PropertiesListRelationFilter, {nullable:true})
    @Type(() => PropertiesListRelationFilter)
    Properties?: InstanceType<typeof PropertiesListRelationFilter>;
}

@ObjectType()
export class Quartiers {
    @Field(() => ID, {nullable:false})
    idQuartier!: string;
    @Field(() => String, {nullable:false})
    quartierName!: string;
    @Field(() => String, {nullable:false})
    quartierDescription!: string;
    @Field(() => String, {nullable:false})
    communeId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Communes, {nullable:false})
    Communes?: InstanceType<typeof Communes>;
    @Field(() => [Properties], {nullable:true})
    Properties?: Array<Properties>;
    @Field(() => QuartiersCount, {nullable:false})
    _count?: InstanceType<typeof QuartiersCount>;
}

@ArgsType()
export class UpdateManyQuartiersArgs {
    @Field(() => QuartiersUpdateManyMutationInput, {nullable:false})
    @Type(() => QuartiersUpdateManyMutationInput)
    data!: InstanceType<typeof QuartiersUpdateManyMutationInput>;
    @Field(() => QuartiersWhereInput, {nullable:true})
    @Type(() => QuartiersWhereInput)
    where?: InstanceType<typeof QuartiersWhereInput>;
}

@ArgsType()
export class UpdateOneQuartiersArgs {
    @Field(() => QuartiersUpdateInput, {nullable:false})
    @Type(() => QuartiersUpdateInput)
    data!: InstanceType<typeof QuartiersUpdateInput>;
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
}

@ArgsType()
export class UpsertOneQuartiersArgs {
    @Field(() => QuartiersWhereUniqueInput, {nullable:false})
    @Type(() => QuartiersWhereUniqueInput)
    where!: Prisma.AtLeast<QuartiersWhereUniqueInput, 'idQuartier'>;
    @Field(() => QuartiersCreateInput, {nullable:false})
    @Type(() => QuartiersCreateInput)
    create!: InstanceType<typeof QuartiersCreateInput>;
    @Field(() => QuartiersUpdateInput, {nullable:false})
    @Type(() => QuartiersUpdateInput)
    update!: InstanceType<typeof QuartiersUpdateInput>;
}

@ObjectType()
export class AggregateUsers {
    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UsersCountAggregate>;
    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UsersMinAggregate>;
    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UsersMaxAggregate>;
}

@ArgsType()
export class CreateManyUsersArgs {
    @Field(() => [UsersCreateManyInput], {nullable:false})
    @Type(() => UsersCreateManyInput)
    data!: Array<UsersCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUsersArgs {
    @Field(() => UsersCreateInput, {nullable:false})
    @Type(() => UsersCreateInput)
    data!: InstanceType<typeof UsersCreateInput>;
}

@ArgsType()
export class DeleteManyUsersArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
}

@ArgsType()
export class DeleteOneUsersArgs {
    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
}

@ArgsType()
export class FindFirstUsersOrThrowArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;
    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUsersArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;
    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindManyUsersArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;
    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUsersOrThrowArgs {
    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
}

@ArgsType()
export class FindUniqueUsersArgs {
    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
}

@ArgsType()
export class UpdateManyUsersArgs {
    @Field(() => UsersUpdateManyMutationInput, {nullable:false})
    @Type(() => UsersUpdateManyMutationInput)
    data!: InstanceType<typeof UsersUpdateManyMutationInput>;
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
}

@ArgsType()
export class UpdateOneUsersArgs {
    @Field(() => UsersUpdateInput, {nullable:false})
    @Type(() => UsersUpdateInput)
    data!: InstanceType<typeof UsersUpdateInput>;
    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
}

@ArgsType()
export class UpsertOneUsersArgs {
    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
    @Field(() => UsersCreateInput, {nullable:false})
    @Type(() => UsersCreateInput)
    create!: InstanceType<typeof UsersCreateInput>;
    @Field(() => UsersUpdateInput, {nullable:false})
    @Type(() => UsersUpdateInput)
    update!: InstanceType<typeof UsersUpdateInput>;
}

@ArgsType()
export class UsersAggregateArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;
    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UsersWhereUniqueInput, 'phoneNumber'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UsersCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UsersCountAggregateInput>;
    @Field(() => UsersMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UsersMinAggregateInput>;
    @Field(() => UsersMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@InputType()
export class UsersCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    fullName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: true;
    @Field(() => Boolean, {nullable:true})
    userType?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UsersCountAggregate {
    @Field(() => Int, {nullable:false})
    phoneNumber!: number;
    @Field(() => Int, {nullable:false})
    fullName!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    isPhoneVerified!: number;
    @Field(() => Int, {nullable:false})
    userType!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UsersCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPhoneVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersCreateManyInput {
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    fullName!: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;
    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UsersCreateInput {
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    fullName!: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;
    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class UsersGroupByArgs {
    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: InstanceType<typeof UsersWhereInput>;
    @Field(() => [UsersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithAggregationInput>;
    @Field(() => [UsersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsersScalarFieldEnum>;
    @Field(() => UsersScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UsersScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UsersCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UsersCountAggregateInput>;
    @Field(() => UsersMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UsersMinAggregateInput>;
    @Field(() => UsersMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@ObjectType()
export class UsersGroupBy {
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    fullName!: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:false})
    isPhoneVerified!: boolean;
    @Field(() => UserType, {nullable:false})
    userType!: keyof typeof UserType;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UsersCountAggregate>;
    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UsersMinAggregate>;
    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UsersMaxAggregate>;
}

@InputType()
export class UsersMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    fullName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: true;
    @Field(() => Boolean, {nullable:true})
    userType?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UsersMaxAggregate {
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => String, {nullable:true})
    fullName?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;
    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UsersMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPhoneVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;
    @Field(() => Boolean, {nullable:true})
    fullName?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: true;
    @Field(() => Boolean, {nullable:true})
    userType?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UsersMinAggregate {
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => String, {nullable:true})
    fullName?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;
    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UsersMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPhoneVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    email?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPhoneVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UsersCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UsersCountOrderByAggregateInput>;
    @Field(() => UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UsersMaxOrderByAggregateInput>;
    @Field(() => UsersMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UsersMinOrderByAggregateInput>;
}

@InputType()
export class UsersOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    email?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isPhoneVerified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userType?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersScalarWhereWithAggregatesInput {
    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsersScalarWhereWithAggregatesInput>;
    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsersScalarWhereWithAggregatesInput>;
    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsersScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fullName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => EnumUserTypeWithAggregatesFilter, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UsersUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    fullName!: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    isPhoneVerified?: boolean;
    @Field(() => UserType, {nullable:true})
    userType?: keyof typeof UserType;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UsersUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserTypeFieldUpdateOperationsInput, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserTypeFieldUpdateOperationsInput, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserTypeFieldUpdateOperationsInput, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => EnumUserTypeFieldUpdateOperationsInput, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersWhereUniqueInput {
    @Field(() => String, {nullable:true})
    phoneNumber?: string;
    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;
    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;
    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    fullName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => EnumUserTypeFilter, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UsersWhereInput {
    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;
    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;
    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fullName?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isPhoneVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => EnumUserTypeFilter, {nullable:true})
    userType?: InstanceType<typeof EnumUserTypeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Users {
    @Field(() => ID, {nullable:false})
    phoneNumber!: string;
    @Field(() => String, {nullable:false})
    fullName!: string;
    @Field(() => String, {nullable:true})
    email!: string | null;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPhoneVerified!: boolean;
    @Field(() => UserType, {nullable:false,defaultValue:'CLIENT'})
    userType!: keyof typeof UserType;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
