import { ApiProperty } from '@nestjs/swagger';
import { PagedDto } from './paged.dto';

export class SearchDto extends PagedDto {
  @ApiProperty({ required: false })
  keyword?: string;

  @ApiProperty({ required: false })
  slug?: string;
}
