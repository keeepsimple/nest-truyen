import { ApiProperty } from "@nestjs/swagger";
import { Comic } from "@prisma/client";
import { CreateComicDto } from "src/comic/dto/create-comic.dto";

export class CreateCategoryDto {
    @ApiProperty()
    name: string;
    @ApiProperty({required: false})
    description?: string;
    @ApiProperty({required: false})
    comics?: CreateComicDto[];
}
