import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
