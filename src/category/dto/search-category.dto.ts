import { ApiProperty } from '@nestjs/swagger';
import { SearchDto } from 'src/common/search.dto';

export class SearchCategoryDto extends SearchDto {
  @ApiProperty({ required: false })
  comicIds?: string[];
}
