/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DOB` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `First_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User_ID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `DOB` DATETIME(3) NOT NULL,
    ADD COLUMN `Description` VARCHAR(191) NULL,
    ADD COLUMN `Education` VARCHAR(191) NULL,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `First_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL,
    ADD COLUMN `Rating` INTEGER NOT NULL,
    ADD COLUMN `School_University` VARCHAR(191) NULL,
    ADD COLUMN `User_ID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`User_ID`);

-- DropTable
DROP TABLE `Post`;

-- CreateTable
CREATE TABLE `Skill_Type` (
    `Skill_Type_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Category_Skill` VARCHAR(191) NOT NULL,
    `Certification` VARCHAR(191) NULL,
    `Skill_Detail` VARCHAR(191) NULL,
    `Skill_Level` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Skill_Type_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `User_ID` INTEGER NOT NULL,
    `Skill_ID` INTEGER NOT NULL,

    PRIMARY KEY (`User_ID`, `Skill_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Experience` (
    `Experience_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Detail` VARCHAR(191) NOT NULL,
    `Company_Name` VARCHAR(191) NULL,
    `Start_Date` DATETIME(3) NOT NULL,
    `End_Date` DATETIME(3) NOT NULL,
    `Experience_Type` VARCHAR(191) NOT NULL,
    `Location` VARCHAR(191) NULL,
    `Certification` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Experience_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Experience` (
    `User_ID` INTEGER NOT NULL,
    `Experience_ID` INTEGER NOT NULL,

    PRIMARY KEY (`User_ID`, `Experience_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `Notification_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Notification_detail` VARCHAR(191) NOT NULL,
    `Notification_Status` BOOLEAN NOT NULL,

    PRIMARY KEY (`Notification_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Notification` (
    `User_ID` INTEGER NOT NULL,
    `Notification_ID` INTEGER NOT NULL,

    PRIMARY KEY (`User_ID`, `Notification_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal` (
    `Personal_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Personal_type` VARCHAR(191) NOT NULL,
    `Personal_type_detail` VARCHAR(191) NULL,

    PRIMARY KEY (`Personal_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hackathon` (
    `Hackathon_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Hackathon_Name` VARCHAR(191) NOT NULL,
    `Poster` VARCHAR(191) NULL,
    `Detail` VARCHAR(191) NOT NULL,
    `Start_recruiting` DATETIME(3) NOT NULL,
    `End_recruiting` DATETIME(3) NOT NULL,
    `End_event` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Hackathon_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `Review_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Detail` VARCHAR(191) NOT NULL,
    `Status_review` BOOLEAN NOT NULL,
    `Hackathon_ID` INTEGER NOT NULL,

    PRIMARY KEY (`Review_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Swipe` (
    `Swipe_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Swiper_ID` INTEGER NOT NULL,
    `Swipee_ID` INTEGER NOT NULL,
    `Swipe_Type` BOOLEAN NOT NULL,

    PRIMARY KEY (`Swipe_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Match` (
    `Match_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `User_AID` INTEGER NOT NULL,
    `User_BID` INTEGER NOT NULL,
    `Match_Datetime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Match_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `Team_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Team_Name` VARCHAR(191) NOT NULL,
    `User_ID` INTEGER NOT NULL,
    `Review_ID` INTEGER NOT NULL,

    PRIMARY KEY (`Team_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_Email_key` ON `User`(`Email`);

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_Skill_ID_fkey` FOREIGN KEY (`Skill_ID`) REFERENCES `Skill_Type`(`Skill_Type_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Experience` ADD CONSTRAINT `User_Experience_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Experience` ADD CONSTRAINT `User_Experience_Experience_ID_fkey` FOREIGN KEY (`Experience_ID`) REFERENCES `Experience`(`Experience_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Notification` ADD CONSTRAINT `User_Notification_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Notification` ADD CONSTRAINT `User_Notification_Notification_ID_fkey` FOREIGN KEY (`Notification_ID`) REFERENCES `Notification`(`Notification_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_Hackathon_ID_fkey` FOREIGN KEY (`Hackathon_ID`) REFERENCES `Hackathon`(`Hackathon_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Swipe` ADD CONSTRAINT `Swipe_Swiper_ID_fkey` FOREIGN KEY (`Swiper_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Swipe` ADD CONSTRAINT `Swipe_Swipee_ID_fkey` FOREIGN KEY (`Swipee_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_User_AID_fkey` FOREIGN KEY (`User_AID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Match` ADD CONSTRAINT `Match_User_BID_fkey` FOREIGN KEY (`User_BID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_User_ID_fkey` FOREIGN KEY (`User_ID`) REFERENCES `User`(`User_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_Review_ID_fkey` FOREIGN KEY (`Review_ID`) REFERENCES `Review`(`Review_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
