import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ComicController],
  providers: [ComicService],
})
export class ComicModule {}
