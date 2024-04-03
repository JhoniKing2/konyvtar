/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Kolcsonzo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kesesDij` to the `Keses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kesettNapok` to the `Keses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Visszahozatal` to the `Kolcsonzott` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `keses` DROP FOREIGN KEY `Keses_kcs_id_fkey`;

-- DropForeignKey
ALTER TABLE `keses` DROP FOREIGN KEY `Keses_kny_id_fkey`;

-- AlterTable
ALTER TABLE `keses` ADD COLUMN `kesesDij` INTEGER NOT NULL,
    ADD COLUMN `kesettNapok` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `kolcsonzott` ADD COLUMN `Visszahozatal` DATETIME(3) NOT NULL,
    ADD COLUMN `kivitel` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Kolcsonzo_email_key` ON `Kolcsonzo`(`email`);
