import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { ComicModule } from './comic/comic.module';
import { RedisConfig } from './config/redis.config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CategoryModule,
    DatabaseModule,
    ComicModule,
    AuthorModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisConfig),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
