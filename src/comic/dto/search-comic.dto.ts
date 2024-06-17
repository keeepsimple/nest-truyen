import { ApiProperty } from "@nestjs/swagger";
import { PagedDto } from "src/common/paged.dto";

export class SearchComicDto extends PagedDto{
    @ApiProperty({ required: false })
    title?: string;
    @ApiProperty({ required: false })
    slug?: string;
    @ApiProperty({ required: false })
    categoryIds?: string[];
}