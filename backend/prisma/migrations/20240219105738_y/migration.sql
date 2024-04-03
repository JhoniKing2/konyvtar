-- DropForeignKey
ALTER TABLE `kolcsonzott` DROP FOREIGN KEY `Kolcsonzott_kcs_id_fkey`;

-- DropIndex
DROP INDEX `Keses_kcs_id_fkey` ON `keses`;

-- DropIndex
DROP INDEX `Keses_kny_id_fkey` ON `keses`;
