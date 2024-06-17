import { ApiProperty } from "@nestjs/swagger";

export class PagedDto {
    @ApiProperty({ required: false })
    skip: number = 0;
    @ApiProperty({ required: false })
    take: number = 10;
}