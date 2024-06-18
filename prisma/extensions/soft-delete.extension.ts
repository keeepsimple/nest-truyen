import { Prisma } from '@prisma/client';

const softDelete = async function <M, A>(
  this: M,
  where: Prisma.Args<M, 'update'>['where'],
): Promise<Prisma.Result<M, A, 'update'>> {
  const context = Prisma.getExtensionContext(this);
  const result = (context as any).update({
    where,
    data: {
      deletedAt: new Date(),
      isDeleted: true,
    },
  });
  return result;
};

export default Prisma.defineExtension({
  name: 'prisma-extension-soft-delete',
  model: {
    $allModels: {
      softDelete,
    },
  },
  query: {
    $allModels: {
      findMany({ model, args, query }) {
        if (!args) {
          args = {};
        }
        if (!args.where) {
          args.where = {};
        }
        if (args.where.isDeleted === undefined) {
          args.where.isDeleted = false;
        }
        return query(args);
      },
      findFirst({ model, args, query }) {
        if (!args) {
          args = {};
        }
        if (!args.where) {
          args.where = {};
        }
        if (args.where.isDeleted === undefined) {
          args.where.isDeleted = false;
        }
        return query(args);
      },
    },
  },
});
