import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello() {
    var list = await this.prisma.comic.findMany({
      select: {
        id: true,
        title: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return list;
  }

  async getHello2() {
    return await this.prisma.comic.create({
      data: {
        title: 'Test Comic',
        category: {
          connectOrCreate: {
            where: { slug: 'test-cate-with-comic' },
            create: {
              name: 'Test Category with Comic 1',
              slug: toSlug('Test Category with Comic'),
            },
          },
        },
      },
    });
  }
}
