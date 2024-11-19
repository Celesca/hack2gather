/*
  Warnings:

  - You are about to drop the column `DOB` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `confirm_password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `education_level` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `skill` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` 
    DROP COLUMN `DOB`,
    DROP COLUMN `confirm_password`,
    DROP COLUMN `department`,
    DROP COLUMN `education_level`,
    DROP COLUMN `experience`,
    DROP COLUMN `skill`,
    ADD COLUMN `fieldOfStudy` VARCHAR(191) NULL,
    MODIFY `rating` DOUBLE NOT NULL DEFAULT 0,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

ALTER TABLE `user` 
    DROP COLUMN `fieldOfStudy`,
    ADD COLUMN `confirm_password` VARCHAR(191) NOT NULL AFTER `password`,
    ADD COLUMN `education_level` VARCHAR(191) NOT NULL AFTER `degree`;
    
