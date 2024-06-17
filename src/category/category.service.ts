import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/database/prisma.service';
import { SearchCategoryDto } from './dto/search-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  upsert(createCategoryDto: CreateCategoryDto) {
    const slug = toSlug(createCategoryDto.name);
    const category = this.prismaService.category.upsert({
      where: { slug: slug },
      update: createCategoryDto,
      create: {...createCategoryDto, slug: slug},
    });

    return category;
  }

  findAll(searchCategoryDto: SearchCategoryDto) {
    return this.prismaService.category.findMany({
      skip: searchCategoryDto.skip,
      take: searchCategoryDto.take,
      where: {
        name: {
          contains: searchCategoryDto.name,
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

  findOne(id: string) {
    return this.prismaService.category.findFirst({
      where: { id: id },
      include: { Comic: true }
    });
  }

  remove(id: string, isHardDelete: boolean) {
    if (isHardDelete) {
      return this.prismaService.category.delete({
        where: { id: id },
      });
    } else {
      return this.prismaService.category.update({
        where: { id: id },
        data: { isDeleted: true },
      });
    }
  }
}
