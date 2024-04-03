/*
  Warnings:

  - Added the required column `elerhetoseg` to the `Konyvek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `konyvek` ADD COLUMN `elerhetoseg` BOOLEAN NOT NULL;
