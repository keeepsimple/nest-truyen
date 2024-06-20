import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create or edit category' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.upsert(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  async findAll(
    @Param() searchCategoryDto: SearchCategoryDto,
  ): Promise<Category[]> {
    return await this.categoryService.findAll(searchCategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  async findOne(@Param('id') id: string): Promise<Category | null> {
    return await this.categoryService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category by id' })
  async remove(@Param('id') id: string) {
    return await this.categoryService.remove(id);
  }
}
