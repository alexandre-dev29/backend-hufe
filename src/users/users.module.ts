import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from '../utilities/prisma.service';
import { UtilityService } from '../utilities/utilities.service';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from '../types/AuthTypes';

@Module({
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    UtilityService,
    JwtService,
    LoginResponse,
  ],
})
export class UsersModule {}
