import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { ComicModule } from './comic/comic.module';
import { CommentModule } from './comment/comment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    DatabaseModule,
    ComicModule,
    AuthorModule,
    ChapterModule,
    CommentModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
