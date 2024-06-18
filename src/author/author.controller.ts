import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Author } from '@prisma/client';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { SearchAuthorDto } from './dto/search-author.dto';

@ApiTags('author')
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return await this.authorService.upsert(createAuthorDto);
  }

  @Get()
  async findAll(@Param() searchAuthorDto: SearchAuthorDto): Promise<Author[]> {
    return await this.authorService.findAll(searchAuthorDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Author> {
    return await this.authorService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.authorService.remove(id);
  }
}
