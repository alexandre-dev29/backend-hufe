import { Injectable } from '@nestjs/common';
import { LoginResponse } from '../types/AuthTypes';
import {
  DeleteOneUsersArgs,
  FindManyUsersArgs,
  FindUniqueUsersArgs,
  UpdateOneUsersArgs,
  Users,
  UserType,
} from '../types/@generated';
import { GraphQLError } from 'graphql/error';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../utilities/prisma.service';
import { UtilityService } from '../utilities/utilities.service';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private utilityService: UtilityService,
  ) {}

  async findAll(findArguments: FindManyUsersArgs) {
    const value = await this.prismaService.users.findMany({ ...findArguments });
    return value.map((value1) => {
      return { ...value1, password: '' };
    });
  }

  findOne(findFirstArgs: FindUniqueUsersArgs) {
    return this.prismaService.users.findUnique(findFirstArgs);
  }

  update(updateOne: UpdateOneUsersArgs) {
    return this.prismaService.users.update(updateOne);
  }

  remove(deleteOne: DeleteOneUsersArgs) {
    return this.prismaService.users.delete(deleteOne);
  }

  // auth-layout Methods

  async registerUser({
    phoneNumber,
    password,
    fullName,
    isPhoneVerified,
    email,
    userType,
  }: Partial<Users>): Promise<Omit<Users, 'password'> | GraphQLError> {
    const userFounded = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (userFounded) {
      return new GraphQLError('This user already exist in the system');
    }

    const encryptedPassword = await bcrypt
      .hash(password, 10)
      .then((value) => value);

    try {
      const responseInsert = await this.prismaService.users.create({
        data: {
          phoneNumber: phoneNumber,
          password: encryptedPassword,
          fullName: fullName,
          email: email,
          userType: userType,
          isPhoneVerified: isPhoneVerified,
        },
      });

      return { ...responseInsert, password: '' } as Users;
    } catch (e) {
      return new GraphQLError(
        'An Error occur while registering please try again later',
      );
    }
  }

  async loginUser(
    phoneNumber: string,
    password: string,
  ): Promise<LoginResponse | GraphQLError> {
    const user = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { refresh_token, access_token } =
        await this.utilityService.getTokens({
          id: user.phoneNumber,
          isSuperAdmin: user.userType == UserType.ADMIN,
          phoneNumber: phoneNumber,
          roles: [user.userType] as Array<UserType>,
          fullName: user.fullName,
        });

      return {
        access_token,
        refresh_token,
        user: {
          phoneNumber: user.phoneNumber,
          userType: user.userType,
          isPhoneVerified: user.isPhoneVerified,
          fullName: user.fullName,
          email: user.email,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError(
        'The phone number or password is invalid please try again',
      );
    }
  }
}
