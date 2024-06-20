import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Comic } from '@prisma/client';
import { ComicService } from './comic.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { SearchComicDto } from './dto/search-comic.dto';

@ApiTags('comic')
@Controller('comic')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @Post()
  @ApiOperation({ summary: 'Create or edit comic' })
  async create(@Body() createComicDto: CreateComicDto) {
    return await this.comicService.upsert(createComicDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  async findAll(@Param() searchComicDto: SearchComicDto): Promise<Comic[]> {
    return await this.comicService.findAll(searchComicDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get comic by id' })
  async findOne(@Param('id') id: string): Promise<Comic | null> {
    return await this.comicService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete comic by id' })
  async remove(@Param('id') id: string) {
    return await this.comicService.remove(id);
  }
}
