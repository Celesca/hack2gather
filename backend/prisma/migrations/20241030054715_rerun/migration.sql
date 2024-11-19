/*
  Warnings:

  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Certification` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Company_Name` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Detail` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `End_Date` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Experience_ID` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Experience_Type` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `Start_Date` on the `Experience` table. All the data in the column will be lost.
  - The primary key for the `Hackathon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Detail` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `End_event` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `End_recruiting` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `Hackathon_ID` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `Hackathon_Name` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `Poster` on the `Hackathon` table. All the data in the column will be lost.
  - You are about to drop the column `Start_recruiting` on the `Hackathon` table. All the data in the column will be lost.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Notification_ID` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `Notification_Status` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `Notification_detail` on the `Notification` table. All the data in the column will be lost.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Detail` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Hackathon_ID` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Review_ID` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Status_review` on the `Review` table. All the data in the column will be lost.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Skill_ID` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `Skill` table. All the data in the column will be lost.
  - The primary key for the `Swipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Swipe_ID` on the `Swipe` table. All the data in the column will be lost.
  - You are about to drop the column `Swipe_Type` on the `Swipe` table. All the data in the column will be lost.
  - You are about to drop the column `Swipee_ID` on the `Swipe` table. All the data in the column will be lost.
  - You are about to drop the column `Swiper_ID` on the `Swipe` table. All the data in the column will be lost.
  - The primary key for the `Team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Review_ID` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `Team_ID` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `Team_Name` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `Team` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `DOB` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Education` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `First_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Last_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `School_University` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Personal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill_Type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Notification` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxTeamSize` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationEnd` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationStart` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Hackathon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `giverId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Swipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isLike` to the `Swipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swipeeId` to the `Swipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swiperId` to the `Swipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hackathonId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Match` DROP FOREIGN KEY `Match_User_AID_fkey`;

-- DropForeignKey
ALTER TABLE `Match` DROP FOREIGN KEY `Match_User_BID_fkey`;

-- DropForeignKey
ALTER TABLE `Review` DROP FOREIGN KEY `Review_Hackathon_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_Skill_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_User_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Swipe` DROP FOREIGN KEY `Swipe_Swipee_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Swipe` DROP FOREIGN KEY `Swipe_Swiper_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_Review_ID_fkey`;

-- DropForeignKey
ALTER TABLE `Team` DROP FOREIGN KEY `Team_User_ID_fkey`;

-- DropForeignKey
ALTER TABLE `User_Experience` DROP FOREIGN KEY `User_Experience_Experience_ID_fkey`;

-- DropForeignKey
ALTER TABLE `User_Experience` DROP FOREIGN KEY `User_Experience_User_ID_fkey`;

-- DropForeignKey
ALTER TABLE `User_Notification` DROP FOREIGN KEY `User_Notification_Notification_ID_fkey`;

-- DropForeignKey
ALTER TABLE `User_Notification` DROP FOREIGN KEY `User_Notification_User_ID_fkey`;

-- DropIndex
DROP INDEX `User_Email_key` ON `User`;

-- AlterTable
ALTER TABLE `Experience` DROP PRIMARY KEY,
    DROP COLUMN `Certification`,
    DROP COLUMN `Company_Name`,
    DROP COLUMN `Detail`,
    DROP COLUMN `End_Date`,
    DROP COLUMN `Experience_ID`,
    DROP COLUMN `Experience_Type`,
    DROP COLUMN `Location`,
    DROP COLUMN `Start_Date`,
    ADD COLUMN `company` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Hackathon` DROP PRIMARY KEY,
    DROP COLUMN `Detail`,
    DROP COLUMN `End_event`,
    DROP COLUMN `End_recruiting`,
    DROP COLUMN `Hackathon_ID`,
    DROP COLUMN `Hackathon_Name`,
    DROP COLUMN `Poster`,
    DROP COLUMN `Start_recruiting`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `maxTeamSize` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `posterUrl` VARCHAR(191) NULL,
    ADD COLUMN `registrationEnd` DATETIME(3) NOT NULL,
    ADD COLUMN `registrationStart` DATETIME(3) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Notification` DROP PRIMARY KEY,
    DROP COLUMN `Notification_ID`,
    DROP COLUMN `Notification_Status`,
    DROP COLUMN `Notification_detail`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `isRead` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Review` DROP PRIMARY KEY,
    DROP COLUMN `Detail`,
    DROP COLUMN `Hackathon_ID`,
    DROP COLUMN `Review_ID`,
    DROP COLUMN `Status_review`,
    ADD COLUMN `comment` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `giverId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `rating` INTEGER NOT NULL,
    ADD COLUMN `receiverId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Skill` DROP PRIMARY KEY,
    DROP COLUMN `Skill_ID`,
    DROP COLUMN `User_ID`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Swipe` DROP PRIMARY KEY,
    DROP COLUMN `Swipe_ID`,
    DROP COLUMN `Swipe_Type`,
    DROP COLUMN `Swipee_ID`,
    DROP COLUMN `Swiper_ID`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `isLike` BOOLEAN NOT NULL,
    ADD COLUMN `swipeeId` INTEGER NOT NULL,
    ADD COLUMN `swiperId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Team` DROP PRIMARY KEY,
    DROP COLUMN `Review_ID`,
    DROP COLUMN `Team_ID`,
    DROP COLUMN `Team_Name`,
    DROP COLUMN `User_ID`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `hackathonId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `isOpen` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `ownerId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `DOB`,
    DROP COLUMN `Description`,
    DROP COLUMN `Education`,
    DROP COLUMN `Email`,
    DROP COLUMN `First_name`,
    DROP COLUMN `Last_name`,
    DROP COLUMN `Password`,
    DROP COLUMN `Rating`,
    DROP COLUMN `School_University`,
    DROP COLUMN `User_ID`,

    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `school` VARCHAR(191) NULL,
    ADD COLUMN `degree` VARCHAR(191) NULL,
    ADD COLUMN `Education_level` VARCHAR(191) NULL,
    
    ADD COLUMN `Experience` VARCHAR(191) NULL,
    ADD COLUMN `rating` DOUBLE NOT NULL DEFAULT 0,

    ADD COLUMN `description` VARCHAR(191) NULL,

    ADD COLUMN `skills` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `confirm_password` VARCHAR(191) NOT NULL,


    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `Match`;

-- DropTable
DROP TABLE `Personal`;

-- DropTable
DROP TABLE `Skill_Type`;

-- DropTable
DROP TABLE `User_Experience`;

-- DropTable
DROP TABLE `User_Notification`;

-- CreateTable
CREATE TABLE `UserSkill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `skillId` INTEGER NOT NULL,
    `level` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserSkill_userId_skillId_key`(`userId`, `skillId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonalPreference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `fieldOfStudy` VARCHAR(191) NULL,

    UNIQUE INDEX `PersonalPreference_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Friendship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user1Id` INTEGER NOT NULL,
    `user2Id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Friendship_user1Id_user2Id_key`(`user1Id`, `user2Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FriendRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `readAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teamId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TeamMember_teamId_userId_key`(`teamId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TeamInvitation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teamId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSkill` ADD CONSTRAINT `UserSkill_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Experience` ADD CONSTRAINT `Experience_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_giverId_fkey` FOREIGN KEY (`giverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonalPreference` ADD CONSTRAINT `PersonalPreference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Swipe` ADD CONSTRAINT `Swipe_swiperId_fkey` FOREIGN KEY (`swiperId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Swipe` ADD CONSTRAINT `Swipe_swipeeId_fkey` FOREIGN KEY (`swipeeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_user1Id_fkey` FOREIGN KEY (`user1Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friendship` ADD CONSTRAINT `Friendship_user2Id_fkey` FOREIGN KEY (`user2Id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_hackathonId_fkey` FOREIGN KEY (`hackathonId`) REFERENCES `Hackathon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD CONSTRAINT `TeamMember_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamMember` ADD CONSTRAINT `TeamMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TeamInvitation` ADD CONSTRAINT `TeamInvitation_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
