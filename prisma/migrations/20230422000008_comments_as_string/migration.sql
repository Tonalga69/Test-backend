/*
  Warnings:

  - You are about to drop the `comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_taksid_fkey`;

-- AlterTable
ALTER TABLE `task` ADD COLUMN `comments` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `comments`;
