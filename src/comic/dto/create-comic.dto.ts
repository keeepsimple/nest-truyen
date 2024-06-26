import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateComicDto {
  @ApiProperty()
  @MaxLength(50)
  @MinLength(3)
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  categoryIds: string[];
}
