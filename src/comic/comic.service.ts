import { Injectable } from '@nestjs/common';
import { toSlug } from 'src/common/slug-helper';
import { PrismaService } from 'src/database/prisma.service';
import { CreateComicDto } from './dto/create-comic.dto';
import { SearchComicDto } from './dto/search-comic.dto';

@Injectable()
export class ComicService {
  constructor(private prismaService: PrismaService) {}

  async upsert(createComicDto: CreateComicDto) {
    const slug = toSlug(createComicDto.title);
    const comic = await this.prismaService.comic.upsert({
      where: { slug: slug },
      update: { ...createComicDto, slug: slug },
      create: { ...createComicDto, slug: slug },
    });

    return comic;
  }

  async findAll(searchComicDto: SearchComicDto) {
    return await this.prismaService.comic.findMany({
      skip: searchComicDto.skip,
      take: searchComicDto.take,
      where: {
        title: {
          contains: searchComicDto.keyword,
        },
        isDeleted: false,
        slug: {
          contains: searchComicDto.slug,
        },
        category: {
          some: {
            id: {
              in: searchComicDto.categoryIds,
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.comic.findFirst({
      where: { id: id },
      include: { category: true },
    });
  }

  async remove(id: string) {
    return await this.prismaService.comic.softDelete({ id: id });
  }
}
