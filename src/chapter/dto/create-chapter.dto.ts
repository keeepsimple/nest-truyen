import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { CreateChapterDetailDto } from './create-chapter-detail.dto';

export class CreateChapterDto {
    @ApiProperty()
    @MinLength(3)
    @MaxLength(100)
    title: string;

    status: boolean;

    @ApiProperty()
    comicId: string;

    @ApiProperty({ type: CreateChapterDetailDto })
    details: CreateChapterDetailDto;
}

