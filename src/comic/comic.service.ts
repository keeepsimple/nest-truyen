import { Injectable } from '@nestjs/common';
import { CreateComicDto } from './dto/create-comic.dto';
import { PrismaService } from 'src/database/prisma.service';
import { SearchComicDto } from './dto/search-comic.dto';

@Injectable()
export class ComicService {
  constructor(private prismaService: PrismaService) {}

  // upsert(createComicDto: CreateComicDto) {
  //   const slug = toSlug(createComicDto.title);
  //   const comic = this.prismaService.comic.upsert({
  //     where: { slug: slug },
  //     update: createComicDto,
  //     create: { ...createComicDto, slug: slug },
  //   });

  //   return comic;
  // }

  findAll(searchComicDto: SearchComicDto) {
    return this.prismaService.comic.findMany({
      skip: searchComicDto.skip,
      take: searchComicDto.take,
      where: {
        title: {
          contains: searchComicDto.title,
        },
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

  findOne(id: string) {
    return this.prismaService.comic.findFirst({
      where: { id: id },
      include: { category: true }
    });
  }

  remove(id: string, isHardDelete: boolean) {
    if (isHardDelete) {
      return this.prismaService.comic.delete({
        where: { id: id },
      });
    } else {
      return this.prismaService.comic.update({
        where: { id: id },
        data: { isDeleted: true },
      });
    }
  }
}