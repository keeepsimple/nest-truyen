import { ApiProperty } from "@nestjs/swagger";
import { Category } from "@prisma/client";
import { CreateCategoryDto } from "src/category/dto/create-category.dto";

export class CreateComicDto {
    @ApiProperty()
    title: string;
    @ApiProperty({required: false})
    description: string;
    @ApiProperty({required: false})
    category: CreateCategoryDto[]
}
