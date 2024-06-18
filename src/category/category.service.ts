import { Injectable } from '@nestjs/common';
import { toSlug } from 'src/common/slug-helper';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async upsert(createCategoryDto: CreateCategoryDto) {
    const slug = toSlug(createCategoryDto.name);
    const category = await this.prismaService.category.upsert({
      where: { slug: slug },
      update: { ...createCategoryDto, slug: slug },
      create: { ...createCategoryDto, slug: slug },
    });

    return category;
  }

  async findAll(searchCategoryDto: SearchCategoryDto) {
    return await this.prismaService.category.findMany({
      skip: searchCategoryDto.skip,
      take: searchCategoryDto.take,
      where: {
        name: {
          contains: searchCategoryDto.keyword,
        },
        slug: {
          contains: searchCategoryDto.slug,
        },
        Comic: {
          some: {
            id: {
              in: searchCategoryDto.comicIds,
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.category.findFirst({
      where: { id: id },
      include: { Comic: true },
    });
  }

  async remove(id: string) {
    return await this.prismaService.category.softDelete({ id: id });
  }
}
