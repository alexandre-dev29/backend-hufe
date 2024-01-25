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
            ttl: 120,

            policy: { Query: { properties: true, property: true } },
            storage: {
              type: 'redis',
              options: { client: new Redis() },
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
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
