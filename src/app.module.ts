import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusDriver,
  MercuriusDriverConfig,
  MercuriusPlugin,
} from '@nestjs/mercurius';
import mercuriusCache, { MercuriusCacheOptions } from 'mercurius-cache';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { UtilitiesModule } from './utilities/utilities.module';
import { PropertiesModule } from './properties/properties.module';
import { TypesModule } from './types/types.module';
import { CaslModule } from 'nest-casl';
import { UserType } from './types/@generated';
import { UserSecurity } from './types/user.security';
import { SecurityModule } from './security/security.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './security/jwt.strategy';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
      plugins: [
        {
          plugin: mercuriusCache,
          options: {
            all: false,
            ttl: 480,

            policy: {
              Query: {
                properties: {
                  references: (
                    { source, args, context, info },
                    key,
                    result,
                  ) => {
                    if (!result) {
                      return;
                    }

                    const references = result.map((property) => {
                      return `property:${property.idProperty}`;
                    });
                    references.push('properties');
                    return references;
                  },
                },
                property: {
                  references: (
                    { source, args, context, info },
                    key,
                    result,
                  ) => {
                    if (!result) {
                      return;
                    }
                    return [`property:${result.idProperty}`];
                  },
                },
                users: {
                  references: (
                    { source, args, context, info },
                    key,
                    result,
                  ) => {
                    if (!result) {
                      return;
                    }
                    const references = result.map(
                      (user) => `user:${user.phoneNumber}`,
                    );
                    references.push('users');
                    return references;
                  },
                },
                user: {
                  key({ self, arg, info, ctx, fields }) {
                    return `${arg.phoneNumber}`;
                  },
                  references: (
                    { source, args, context, info },
                    key,
                    result,
                  ) => {
                    if (!result) {
                      return;
                    }
                    return [`user:${result.phoneNumber}`];
                  },
                },
              },
              Mutation: {
                updateProperty: {
                  // invalidate the user and cascade invalidate user pages and groups involving it
                  invalidate: (self, arg, ctx, info, result) => {
                    return [`properties`];
                  },
                },
              },
            },
            storage: {
              type: 'redis',
              options: {
                client: new Redis({
                  host: process.env.REDIS_HOST,
                  username: process.env.REDIS_USER,
                  password: process.env.REDIS_PASSWORD,
                  name: process.env.REDIS_DB,
                }),
              },
            },
          } as MercuriusCacheOptions,
        } as MercuriusPlugin<MercuriusCacheOptions>,
      ],
    }),
    CaslModule.forRoot<UserType, UserSecurity>({
      superuserRole: UserType.ADMIN,
      getUserFromRequest: (request) => request.user,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET_JWT_ACCESS_KEY'),
      }),
      inject: [ConfigService],
    }),
    UtilitiesModule,
    PropertiesModule,
    TypesModule,
    SecurityModule,
    UsersModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
