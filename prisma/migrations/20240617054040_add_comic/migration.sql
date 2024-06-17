-- CreateTable
CREATE TABLE "Comic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Comic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToComic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToComic_AB_unique" ON "_CategoryToComic"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToComic_B_index" ON "_CategoryToComic"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToComic" ADD CONSTRAINT "_CategoryToComic_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToComic" ADD CONSTRAINT "_CategoryToComic_B_fkey" FOREIGN KEY ("B") REFERENCES "Comic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
