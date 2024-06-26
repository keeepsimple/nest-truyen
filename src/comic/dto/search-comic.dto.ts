import { ApiProperty } from '@nestjs/swagger';
import { SearchDto } from 'src/common/search.dto';

export class SearchComicDto extends SearchDto {
  @ApiProperty({ required: false })
  categoryIds?: string[];
}
