/*
  Warnings:

  - You are about to drop the column `kcs_id` on the `konyvek` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `konyvek` DROP FOREIGN KEY `Konyvek_kcs_id_fkey`;

-- DropIndex
DROP INDEX `Kolcsonzott_kcs_id_fkey` ON `kolcsonzott`;

-- AlterTable
ALTER TABLE `kolcsonzott` MODIFY `Visszahozatal` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `konyvek` DROP COLUMN `kcs_id`;

-- AddForeignKey
ALTER TABLE `Kolcsonzott` ADD CONSTRAINT `Kolcsonzott_kcs_id_fkey` FOREIGN KEY (`kcs_id`) REFERENCES `Kolcsonzo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
