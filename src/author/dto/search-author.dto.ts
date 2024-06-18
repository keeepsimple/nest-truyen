import { ApiProperty } from '@nestjs/swagger';
import { SearchDto } from 'src/common/search.dto';

export class SearchAuthorDto extends SearchDto {
  @ApiProperty({ required: false })
  comicIds?: string[];
}
