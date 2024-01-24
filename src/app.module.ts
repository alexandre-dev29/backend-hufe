import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusDriver,
  MercuriusDriverConfig,
  MercuriusPlugin,
} from '@nestjs/mercurius';
import mercuriusCache, { MercuriusCacheOptions } from 'mercurius-cache';
import Redis from 'ioredis';
import { UtilitiesModule } from './utilities/utilities.module';
import { PropertiesModule } from './properties/properties.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
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
    UtilitiesModule,
    PropertiesModule,
    TypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
