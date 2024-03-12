import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  CreateOneUsersArgs,
  DeleteOneUsersArgs,
  FindManyUsersArgs,
  FindUniqueUsersArgs,
  Users,
} from '../types/@generated';
import { LoginResponse } from '../types/AuthTypes';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [Users], { name: 'users' })
  findAll(@Args() findManyArgs: FindManyUsersArgs) {
    return this.usersService.findAll(findManyArgs);
  }

  @Query(() => Users, { name: 'user' })
  findOne(@Args() findOneArgs: FindUniqueUsersArgs) {
    return this.usersService.findOne(findOneArgs);
  }

  @Mutation(() => LoginResponse)
  loginUser(
    @Args({ name: 'phoneNumber', type: () => String, nullable: false })
    phoneNumber: string,
    @Args({ name: 'password', type: () => String, nullable: false })
    password: string,
  ) {
    return this.usersService.loginUser(phoneNumber, password);
  }

  @Mutation(() => Users)
  removeUser(@Args() deleteOneArgs: DeleteOneUsersArgs) {
    return this.usersService.remove(deleteOneArgs);
  }

  @Mutation(() => Users)
  registerUser(@Args() { data }: CreateOneUsersArgs) {
    const {
      phoneNumber,
      password,
      isPhoneVerified,
      email,
      userType,
      fullName,
    } = data;
    return this.usersService.registerUser({
      phoneNumber,
      password,
      fullName,
      isPhoneVerified,
      email,
      userType,
    });
  }
}
