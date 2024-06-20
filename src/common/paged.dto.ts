import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PagedDto {
  @ApiProperty({ required: false })
  @IsNumber()
  skip: number = 0;

  @ApiProperty({ required: false })
  @IsNumber()
  take: number = 10;

  @ApiProperty({ required: false })
  sort: string;
}
