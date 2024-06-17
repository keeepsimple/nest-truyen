import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Prisma middleware for auto-generating slugs
prisma.$use(async (params, next) => {
  // Check if the operation is create or update on Category or Comic
  if (
    (params.model === 'Category' || params.model === 'Comic') &&
    (params.action === 'create' || params.action === 'update')
  ) {
    if (params.args.data.name) {
      // Generate slug from name
      const slug = toSlug(params.args.data.name);
      // Add or update the slug in the data
      params.args.data.slug = slug;
    }
  }

  // Continue the operation
  return next(params);
});

export { prisma };
