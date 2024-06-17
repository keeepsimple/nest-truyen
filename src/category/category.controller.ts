import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from '@prisma/client';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create or edit category' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.upsert(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll(@Param() searchCategoryDto: SearchCategoryDto): Promise<Category[]>{
    return this.categoryService.findAll(searchCategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  findOne(@Param('id') id: string) : Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category by id' })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id, false);
  }
}
