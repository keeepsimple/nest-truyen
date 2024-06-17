import { ApiProperty } from "@nestjs/swagger";
import { PagedDto } from "src/common/paged.dto";

export class SearchCategoryDto extends PagedDto{
    @ApiProperty({ required: false })
    name?: string;
    @ApiProperty({ required: false })
    slug?: string;
    @ApiProperty({ required: false })
    comicIds?: string[];
}