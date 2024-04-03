-- CreateTable
CREATE TABLE `Kolcsonzo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `jelszo` VARCHAR(191) NOT NULL,
    `elsolatogatas` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lakcim` VARCHAR(191) NOT NULL,
    `telszam` INTEGER NOT NULL,
    `kesesek` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Konyvek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cim` VARCHAR(191) NOT NULL,
    `iro` VARCHAR(191) NOT NULL,
    `kategoria` VARCHAR(191) NOT NULL,
    `kiadasDatuma` VARCHAR(191) NOT NULL,
    `kcs_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kolcsonzott` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hatarido` DATETIME(3) NOT NULL,
    `kcs_id` INTEGER NOT NULL,
    `kny_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Keses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kcs_id` INTEGER NOT NULL,
    `kny_id` INTEGER NOT NULL,
    `kcsn_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Konyvek` ADD CONSTRAINT `Konyvek_kcs_id_fkey` FOREIGN KEY (`kcs_id`) REFERENCES `Kolcsonzo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kolcsonzott` ADD CONSTRAINT `Kolcsonzott_kcs_id_fkey` FOREIGN KEY (`kcs_id`) REFERENCES `Kolcsonzo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kolcsonzott` ADD CONSTRAINT `Kolcsonzott_kny_id_fkey` FOREIGN KEY (`kny_id`) REFERENCES `Konyvek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Keses` ADD CONSTRAINT `Keses_kcs_id_fkey` FOREIGN KEY (`kcs_id`) REFERENCES `Kolcsonzo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Keses` ADD CONSTRAINT `Keses_kny_id_fkey` FOREIGN KEY (`kny_id`) REFERENCES `Konyvek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Keses` ADD CONSTRAINT `Keses_kcsn_id_fkey` FOREIGN KEY (`kcsn_id`) REFERENCES `Kolcsonzott`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
