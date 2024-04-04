-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 04. 12:47
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `konyvtar`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `keses`
--

CREATE TABLE `keses` (
  `id` int(11) NOT NULL,
  `kcs_id` int(11) NOT NULL,
  `kny_id` int(11) NOT NULL,
  `kcsn_id` int(11) NOT NULL,
  `kesesDij` int(11) NOT NULL,
  `kesettNapok` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kolcsonzo`
--

CREATE TABLE `kolcsonzo` (
  `id` int(11) NOT NULL,
  `nev` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `jelszo` varchar(191) NOT NULL,
  `elsolatogatas` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `lakcim` varchar(191) NOT NULL,
  `telszam` varchar(191) NOT NULL,
  `kesesek` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `kolcsonzo`
--

INSERT INTO `kolcsonzo` (`id`, `nev`, `email`, `jelszo`, `elsolatogatas`, `lakcim`, `telszam`, `kesesek`) VALUES
(1, 'béla', 'béla562@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$oAEX1c3/xiLuZPFFGdUoAA$hAeSj4if6C2gnVsW8CYzWtf7Voj2BrLeI36I4mYbpfg', '2024-03-06 09:53:39.831', 'noutca 21', '06409483237', NULL),
(2, 'Jani', 'dezsijanos@taszi.hu', '$argon2id$v=19$m=65536,t=3,p=4$k0XG1tU+YAy9LIC8zE3Q6w$6MYj9Chz0En2hicCNPhFqZYW+sJUWTJwpiWNSr6q00w', '2024-03-22 10:48:20.718', 'nemmondom u.68', '062093856791', NULL),
(3, 'géza', 'valahol@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Z2/I3jvG8upld8vqGzLCDA$sww+tjMEDqgYtjHXayL9pyAcMe3YNF1u1rtV+9TnSOM', '2024-03-26 11:43:55.082', 'valahol 31', '032424145', NULL),
(4, 'Harag Csaba', 'csabesz978@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$L7pkSDEF0T+m2hHEsT/+Tg$5keEsYS6iq9HjqrZYajiOYRnNAUb8Og5GarGDNUBgPQ', '2024-04-04 09:31:13.096', 'Dobozi út 67', '06206579842', NULL),
(5, 'Kovács Péter', 'petya36@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$axMvzFMLYvbMKjRa8cp6lg$FIxut5pyNA2xV+C9cjmdSSUY7O0lhnyX2LbDpvTle/Y', '2024-04-04 09:51:19.933', 'Békési út 17', '06204569134', NULL),
(7, 'Lepel Sándor', 'sanya756@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ZBiEJhyhyY1rRGZxEXS2BQ$PdHc0msa5nPmSitvl9DMTdoAEPBOcIDF7wmjAVu509o', '2024-04-04 09:58:08.329', 'Dombi Lajos u.54', '06209546782', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kolcsonzott`
--

CREATE TABLE `kolcsonzott` (
  `id` int(11) NOT NULL,
  `hatarido` datetime(3) NOT NULL,
  `kcs_id` int(11) NOT NULL,
  `kny_id` int(11) NOT NULL,
  `Visszahozatal` datetime(3) DEFAULT NULL,
  `kivitel` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `konyvek`
--

CREATE TABLE `konyvek` (
  `id` int(11) NOT NULL,
  `cim` varchar(191) NOT NULL,
  `iro` varchar(191) NOT NULL,
  `kategoria` varchar(191) NOT NULL,
  `kiadasDatuma` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `konyvek`
--

INSERT INTO `konyvek` (`id`, `cim`, `iro`, `kategoria`, `kiadasDatuma`) VALUES
(42, 'A kőszívű ember fiai', 'Jókai Mór', 'regény', '1869-01-01'),
(44, 'Az arany ember', 'Jókai Mór', 'regény', '1872-01-01'),
(45, 'Egy magyar nábob', 'Jókai Mór', 'regény', '1894-01-01'),
(46, 'A Pál utcai fiúk', 'Molnár Ferenc', 'regény', '1906-01-01'),
(47, 'Légy jó mindhalálig', 'Móricz Zsigmond', 'regény', '1932-01-01'),
(48, 'Forró mezők', 'Móricz Zsigmond', 'regény', '1939-01-01'),
(49, 'Édes Anna', 'Kosztolányi Dezső', 'regény', '1926-01-01'),
(50, 'Aranysárkány', 'Kosztolányi Dezső', 'regény', '1925-01-01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('08825df9-ab6b-4363-9db5-833fca2e4a2b', '1caf96b30f7f35dcfedb34d505a836b1154c7a08ec3a23f8810aa1cafcba0d29', '2024-03-06 09:00:00.969', '20240306090000_y', NULL, NULL, '2024-03-06 09:00:00.908', 1),
('0d5bab73-cb14-4133-af6e-973f88e52dec', 'b5ba6214c65d4c0a2f992e23c465df1ecf137805ce8d55b10964f4014362103a', '2024-03-06 09:51:44.847', '20240306095144_y', NULL, NULL, '2024-03-06 09:51:44.825', 1),
('13e954ad-bf18-4e03-88fd-da15282f4668', '16241102d5853a3a405b1ab6e15690fed83b8f1325763d63e7e23264eae48271', '2024-02-19 10:57:38.239', '20240219105738_y', NULL, NULL, '2024-02-19 10:57:38.219', 1),
('23ddeadc-e7b0-40fb-9783-ddf3130d08bc', '5e747515ef3b2b0d6c6d3ade0d978f3c10fb9610ce7e900ef748ff603641118c', '2024-02-19 09:10:09.941', '20240219091009_', NULL, NULL, '2024-02-19 09:10:09.839', 1),
('35025679-5bb6-4fc9-b7e8-dc9b569fe2e5', '19f59ddee6f26428dc09b25da2551fe7f70e52db91b94c08133a7eaefb197844', '2024-03-06 10:57:33.035', '20240306105733_y', NULL, NULL, '2024-03-06 10:57:33.016', 1),
('45b56856-3036-4f5b-879d-6b98a82f3b03', '94cf8e5e77941323ce85f23434d9112ec8eed97ad02f44fa36868fd1bb112ec4', '2024-03-06 10:47:11.359', '20240306104639_y', NULL, NULL, '2024-03-06 10:47:11.346', 1),
('798cc89f-0917-46fb-b54b-854ba706c21d', 'a520d3be9882ec1a6bb863540fb55de4102a3b2eed720f2aa35939ff86af2743', '2024-03-06 09:53:32.712', '20240306095332_y', NULL, NULL, '2024-03-06 09:53:32.686', 1),
('7b4b41b4-6dc8-45fe-aa6d-a9cdbc4fe190', '21ca9e171e6f11ed30ee9e1ae672bf339bd483d873a421976999b92db2343cf5', '2024-02-15 07:08:43.813', '20240215070843_yes', NULL, NULL, '2024-02-15 07:08:43.635', 1),
('f40af643-2e9d-4a40-a8f3-2f56aec14af9', 'a43b083cc8197f46ad19538661101358922f2f7e890c4739f3d642b9412032a2', '2024-03-06 10:56:21.481', '20240306105621_y', NULL, NULL, '2024-03-06 10:56:21.474', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `keses`
--
ALTER TABLE `keses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Keses_kcsn_id_fkey` (`kcsn_id`);

--
-- A tábla indexei `kolcsonzo`
--
ALTER TABLE `kolcsonzo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Kolcsonzo_email_key` (`email`);

--
-- A tábla indexei `kolcsonzott`
--
ALTER TABLE `kolcsonzott`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Kolcsonzott_kny_id_fkey` (`kny_id`),
  ADD KEY `Kolcsonzott_kcs_id_fkey` (`kcs_id`);

--
-- A tábla indexei `konyvek`
--
ALTER TABLE `konyvek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `keses`
--
ALTER TABLE `keses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `kolcsonzo`
--
ALTER TABLE `kolcsonzo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `kolcsonzott`
--
ALTER TABLE `kolcsonzott`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT a táblához `konyvek`
--
ALTER TABLE `konyvek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `keses`
--
ALTER TABLE `keses`
  ADD CONSTRAINT `Keses_kcsn_id_fkey` FOREIGN KEY (`kcsn_id`) REFERENCES `kolcsonzott` (`id`) ON UPDATE CASCADE;

--
-- Megkötések a táblához `kolcsonzott`
--
ALTER TABLE `kolcsonzott`
  ADD CONSTRAINT `Kolcsonzott_kcs_id_fkey` FOREIGN KEY (`kcs_id`) REFERENCES `kolcsonzo` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Kolcsonzott_kny_id_fkey` FOREIGN KEY (`kny_id`) REFERENCES `konyvek` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
