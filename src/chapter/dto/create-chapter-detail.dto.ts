import { ApiProperty } from '@nestjs/swagger';


export class CreateChapterDetailDto {
    @ApiProperty({ required: false })
    content?: string;

    @ApiProperty({ required: false })
    images: string[];
}
