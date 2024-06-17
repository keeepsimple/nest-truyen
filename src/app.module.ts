import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { ComicModule } from './comic/comic.module';

@Module({
  imports: [
    CategoryModule,
    DatabaseModule,
    ComicModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
