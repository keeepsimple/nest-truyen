import { Injectable } from '@nestjs/common';
import { toSlug } from 'src/common/slug-helper';
import { PrismaService } from 'src/database/prisma.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { SearchChapterDto } from './dto/search-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Injectable()
export class ChapterService {
  constructor(private prismaService: PrismaService) {}
  
  async create(createChapterDto: CreateChapterDto) {
    const slug = toSlug(createChapterDto.title);
    const chapter = await this.prismaService.chapter.create({
      data: {
        ...createChapterDto,
        slug,
      },
    });

    await this.prismaService.chapterDetail.create({
      data: {
        content: createChapterDto.details.content,
        images: JSON.stringify(createChapterDto.details.images),
        chapterId: chapter.id,
      },
    });
    return chapter;
  }

  async findAll(searchChapterDto: SearchChapterDto) {
    return await this.prismaService.comic.findMany({
      skip: searchChapterDto.skip,
      take: searchChapterDto.take,
      where: {
        title: {
          contains: searchChapterDto.keyword,
        },
        isDeleted: false,
        slug: {
          contains: searchChapterDto.slug,
        }
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.chapter.findFirst({
      where:{
        id: id
      }
    })
  }

  update(id: string, updateChapterDto: UpdateChapterDto) {
    return `This action updates a #${id} chapter`;
  }

  remove(id: string) {
    return `This action removes a #${id} chapter`;
  }
}
