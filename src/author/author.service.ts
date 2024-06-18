import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { toSlug } from '../common/slug-helper';
import { CreateAuthorDto } from './dto/create-author.dto';
import { SearchAuthorDto } from './dto/search-author.dto';

@Injectable()
export class AuthorService {
  constructor(private prismaService: PrismaService) {}

  async upsert(createAuthorDto: CreateAuthorDto) {
    const slug = toSlug(createAuthorDto.name);
    const author = await this.prismaService.author.upsert({
      where: { slug: slug },
      update: { ...createAuthorDto, slug: slug },
      create: { ...createAuthorDto, slug: slug },
    });

    return author;
  }

  async findAll(searchAuthorDto: SearchAuthorDto) {
    return await this.prismaService.author.findMany({
      skip: searchAuthorDto.skip,
      take: searchAuthorDto.take,
      where: {
        name: {
          contains: searchAuthorDto.keyword,
        },
        slug: {
          contains: searchAuthorDto.slug,
        },
        Comic: {
          some: {
            id: {
              in: searchAuthorDto.comicIds,
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.author.findFirst({
      where: { id: id },
      include: { Comic: true },
    });
  }

  async remove(id: string) {
    return await this.prismaService.author.softDelete({ id: id });
  }
}
