import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComicService } from './comic.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchComicDto } from './dto/search-comic.dto';
import { Comic } from '@prisma/client';

@ApiTags('comic')
@Controller('comic')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create or edit comic' })
  // create(@Body() createComicDto: CreateComicDto) {
  //   return this.comicService.upsert(createComicDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll(@Param() searchComicDto: SearchComicDto) : Promise<Comic[]> {
    return this.comicService.findAll(searchComicDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get comic by id' })
  findOne(@Param('id') id: string) : Promise<Comic> {
    return this.comicService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete comic by id' })
  remove(@Param('id') id: string) {
    return this.comicService.remove(id, false);
  }
}
