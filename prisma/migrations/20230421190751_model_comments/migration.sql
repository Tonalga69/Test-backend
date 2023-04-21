/*
  Warnings:

  - Added the required column `taksid` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comletionDate` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comments` ADD COLUMN `taksid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `task` ADD COLUMN `comletionDate` DATETIME(3) NOT NULL,
    ADD COLUMN `responsible` VARCHAR(191) NULL,
    ADD COLUMN `tags` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_taksid_fkey` FOREIGN KEY (`taksid`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
