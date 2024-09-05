/*
  Warnings:

  - You are about to drop the column `status` on the `Chapter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "status",
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "ChapterDetail" ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "images" DROP NOT NULL;
