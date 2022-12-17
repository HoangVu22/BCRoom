-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: bcroom_dev
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `billId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `totalPrice` decimal(15,2) DEFAULT NULL,
  `billDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bookingId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`billId`),
  KEY `Bills_bookingId_foreign_idx` (`bookingId`),
  CONSTRAINT `Bills_bookingId_foreign_idx` FOREIGN KEY (`bookingId`) REFERENCES `bookings` (`bookingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES ('150ba592-3a2e-4f81-a290-056dd3f07061',600000.00,'2022-12-17','2022-12-17 02:32:02','2022-12-17 02:34:57','5b0e37dc-cca5-4cb9-943d-f02cc33cce2e',0),('15985336-79fc-4d4a-9157-5766f0d89ae1',600000.00,'2022-12-16','2022-12-16 15:50:04','2022-12-16 15:50:36','1fdf5e61-5568-4cb3-be67-7ee23530012a',0),('1fc61988-2768-40ee-9183-39c284018a6c',400000.00,'2022-12-16','2022-12-16 15:56:31','2022-12-16 15:58:50','44a52bb4-41ad-4f09-b18a-eda75f6a636d',0),('2c430d3f-1ea5-46d6-b026-fe7f9f054788',600000.00,'2022-12-17','2022-12-16 18:02:04','2022-12-16 18:04:30','392fb05c-99fd-4003-afaa-466ac11bc43d',0),('a05770e0-955c-4934-bca3-0f63e964949b',300000.00,'2022-12-16','2022-12-16 15:17:09','2022-12-17 07:27:28','967b222d-22e4-4c73-af42-5992f6630550',0);
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `bookingId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `hotelName` varchar(255) DEFAULT NULL,
  `dateFrom` date DEFAULT NULL,
  `dateTo` date DEFAULT NULL,
  `adultNumber` int DEFAULT NULL,
  `kidNumber` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `isPaid` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`bookingId`),
  KEY `Bookings_roomId_foreign_idx` (`roomId`),
  KEY `Bookings_customerId_foreign_idx` (`customerId`),
  CONSTRAINT `Bookings_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`),
  CONSTRAINT `Bookings_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES ('1fdf5e61-5568-4cb3-be67-7ee23530012a','Raon Apartment and Hotel','2022-12-19','2022-12-21',2,1,'2022-12-16 15:50:04','2022-12-16 15:50:36','29f38493-6e7b-4191-8f91-b827ce66cd5d','45f3d75f-1171-46f3-a6af-d53d14afed18',0,0),('392fb05c-99fd-4003-afaa-466ac11bc43d','Raon Apartment and Hotel','2022-12-19','2022-12-21',2,2,'2022-12-16 18:02:04','2022-12-16 18:04:30','c1efad74-9216-49cf-875e-460243a05054','45f3d75f-1171-46f3-a6af-d53d14afed18',0,1),('44a52bb4-41ad-4f09-b18a-eda75f6a636d','Raon Apartment and Hotel','2022-12-19','2022-12-20',2,1,'2022-12-16 15:56:31','2022-12-16 15:58:50','29f38493-6e7b-4191-8f91-b827ce66cd5d','45f3d75f-1171-46f3-a6af-d53d14afed18',0,1),('5b0e37dc-cca5-4cb9-943d-f02cc33cce2e','Raon Apartment and Hotel','2022-12-18','2022-12-20',2,1,'2022-12-17 02:32:02','2022-12-17 02:34:57','29f38493-6e7b-4191-8f91-b827ce66cd5d','45f3d75f-1171-46f3-a6af-d53d14afed18',0,1),('967b222d-22e4-4c73-af42-5992f6630550','Golden Rose Hotel','2022-12-17','2022-12-19',2,2,'2022-12-16 15:17:09','2022-12-17 07:27:28','0397bfeb-305e-4e85-a203-d7f2b5e332d8','45f3d75f-1171-46f3-a6af-d53d14afed18',0,1);
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`customerId`),
  UNIQUE KEY `email` (`email`),
  KEY `Customers_roleId_foreign_idx` (`roleId`),
  CONSTRAINT `Customers_roleId_foreign_idx` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('09fe9367-31da-4351-9963-deae1f2fd0ac','Viet Anh Le','$2b$10$fCU2gJ/.MckcCb5CP8RgjeBBMhql/ITxob6ynfLfBA0tt4OGFTdd2','anhkun123456@gmail.com',NULL,'Quang Tri, Vietnam','2022-12-16 15:42:28','2022-12-17 06:28:45','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('45f3d75f-1171-46f3-a6af-d53d14afed18','Nguyễn Hoàng Vũ','$2b$10$VERg5goYI2PXpVyuaDar/u66gtGTf07atOT3iHXi17F7/aYcvmucO','hoangvu22062001@gmail.com','0932424250','Đà Nẵng','2022-12-16 15:05:07','2022-12-16 15:33:17','4dbb5cbe-093f-4c5d-af19-5fbe2b05196e',1);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerviewedhotels`
--

DROP TABLE IF EXISTS `customerviewedhotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerviewedhotels` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CustomerViewedHotels_customerId_foreign_idx` (`customerId`),
  KEY `CustomerViewedHotels_hotelId_foreign_idx` (`hotelId`),
  CONSTRAINT `CustomerViewedHotels_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`),
  CONSTRAINT `CustomerViewedHotels_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `hotels` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerviewedhotels`
--

LOCK TABLES `customerviewedhotels` WRITE;
/*!40000 ALTER TABLE `customerviewedhotels` DISABLE KEYS */;
INSERT INTO `customerviewedhotels` VALUES ('42290453-b68f-4d6a-a43f-24931d08b219','2022-12-17 02:43:36','2022-12-17 02:43:36','45f3d75f-1171-46f3-a6af-d53d14afed18','4cd741c7-a20f-4442-a575-d01e5d194152'),('54e79185-1856-4d58-9d91-6a51472c099f','2022-12-16 15:16:11','2022-12-16 15:16:11','45f3d75f-1171-46f3-a6af-d53d14afed18','260434a5-afb7-4291-9ec5-35f277f84c0c'),('77d591b8-673a-464d-8231-424105678ebd','2022-12-16 15:23:51','2022-12-16 15:23:51','45f3d75f-1171-46f3-a6af-d53d14afed18','11975b87-60c6-44ff-866e-326160688614'),('7f9070eb-fd6b-40b9-bad5-3688aa14582a','2022-12-16 15:29:45','2022-12-16 15:29:45','45f3d75f-1171-46f3-a6af-d53d14afed18','9fe37e01-13e9-496d-9e8e-9bab7cd8534c'),('b4365493-1178-4f35-9b1b-78b49310fdac','2022-12-16 16:06:57','2022-12-16 16:06:57','45f3d75f-1171-46f3-a6af-d53d14afed18','64d6fa8a-e6e8-4172-8e5d-11e73173c88c'),('d198d32f-8670-4cef-b215-5bc724ab3467','2022-12-16 15:29:16','2022-12-16 15:29:16','45f3d75f-1171-46f3-a6af-d53d14afed18','b1db4ba6-dbe4-4335-85bc-9aecc4d37343');
/*!40000 ALTER TABLE `customerviewedhotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `hotelName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `starNumber` int DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `description` text,
  `viewNumber` int DEFAULT '0',
  PRIMARY KEY (`hotelId`),
  KEY `Hotels_customerId_foreign_idx` (`customerId`),
  CONSTRAINT `Hotels_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES ('11975b87-60c6-44ff-866e-326160688614','Raon Apartment and Hotel','97A Hoàng Bích Sơn, Ngũ Hành Sơn, Việt Nam, Đà Nẵng','2022-12-16 15:22:50','2022-12-16 15:23:51','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'0932424250',1,NULL,1),('260434a5-afb7-4291-9ec5-35f277f84c0c','Golden Rose Hotel','56 Loseby Phường An Hải Bắc, Quận Sơn Trà, Việt Nam, Đà Nẵng','2022-12-16 15:15:54','2022-12-17 07:27:28','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'0932424250',0,NULL,1),('4cd741c7-a20f-4442-a575-d01e5d194152','Sofia Suite Hotel & Spa Danang','09 Lê Quang Đạo-Sơn Trà-Đà Nẵng, Việt Nam, Đà Nẵng','2022-12-17 02:39:02','2022-12-17 07:26:52','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'0932424250',0,NULL,1),('582ca3e8-898b-4c23-8b09-6bcf7b848604','Nguyen Gia Hotel','12 Thanh Khê, Việt Nam, Đà Nẵng','2022-12-16 15:32:17','2022-12-16 15:32:17','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'2225252525',1,NULL,0),('64d6fa8a-e6e8-4172-8e5d-11e73173c88c','Calix Hotel','171-173 Vo Van Kiet, An Hai Dong Ward, Liên Chiểu, Việt Nam, Đà Nẵng','2022-12-16 15:35:25','2022-12-16 16:06:57','45f3d75f-1171-46f3-a6af-d53d14afed18',2,'343434344',1,NULL,1),('9fe37e01-13e9-496d-9e8e-9bab7cd8534c','Raon Danang Beach','5-7 An Thuong 32, My An Ward, Ngu Hanh Son District, Việt Nam, Đà Nẵng','2022-12-16 15:27:10','2022-12-16 15:29:45','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'123456789',1,NULL,1),('b1db4ba6-dbe4-4335-85bc-9aecc4d37343','Tan Phuong Nam Hotel & Apartment','494 Duong 2 Thang 9, Hoa Cuong Nam, Hai Chau, Việt Nam, Đà Nẵng','2022-12-16 15:29:01','2022-12-16 15:29:16','45f3d75f-1171-46f3-a6af-d53d14afed18',3,'0932424250',1,NULL,1);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `imageId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `url` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `voucherId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `imageName` text,
  PRIMARY KEY (`imageId`),
  KEY `Images_roomId_foreign_idx` (`roomId`),
  KEY `Images_hotelId_foreign_idx` (`hotelId`),
  KEY `Images_customerId_foreign_idx` (`customerId`),
  KEY `Images_voucherId_foreign_idx` (`voucherId`),
  CONSTRAINT `Images_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`),
  CONSTRAINT `Images_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `hotels` (`hotelId`),
  CONSTRAINT `Images_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`),
  CONSTRAINT `Images_voucherId_foreign_idx` FOREIGN KEY (`voucherId`) REFERENCES `vouchers` (`voucherId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('0d029b29-db82-40c2-86f7-2265da09723d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc851946a-5fa1-43eb-81d8-eb595a478564_7.jpg?alt=media&token=c851946a-5fa1-43eb-81d8-eb595a478564','2022-12-16 15:22:50','2022-12-16 15:22:50',NULL,'11975b87-60c6-44ff-866e-326160688614',NULL,NULL,1,'thumbnails/c851946a-5fa1-43eb-81d8-eb595a478564_7.jpg'),('17feacdf-0aed-413c-9586-caa8e429623c','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4ad5e24a-299c-42c0-a4b4-8bf8cf27c4aa_3.jpg?alt=media&token=4ad5e24a-299c-42c0-a4b4-8bf8cf27c4aa','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('1e5303ab-f20a-4bf3-a5a5-6120424ff010','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F720bfaae-430e-4803-bda1-61c878e4dfd0_1.jpg?alt=media&token=720bfaae-430e-4803-bda1-61c878e4dfd0','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1',NULL,NULL,NULL,1,'thumbnails/720bfaae-430e-4803-bda1-61c878e4dfd0_1.jpg'),('1f907f86-d318-429d-adc0-c529b1f6070a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F63f23a86-32a6-42b0-bc1a-a42e341bde74_3.jpg?alt=media&token=63f23a86-32a6-42b0-bc1a-a42e341bde74','2022-12-16 15:27:10','2022-12-16 15:27:10',NULL,'9fe37e01-13e9-496d-9e8e-9bab7cd8534c',NULL,NULL,1,'thumbnails/63f23a86-32a6-42b0-bc1a-a42e341bde74_3.jpg'),('29dbf311-af04-4639-bdd7-9309e08f8e8b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F988743b8-55a3-4624-b8a6-1102095449ce_3.jpg?alt=media&token=988743b8-55a3-4624-b8a6-1102095449ce','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8',NULL,NULL,NULL,1,'thumbnails/988743b8-55a3-4624-b8a6-1102095449ce_3.jpg'),('2b2a4923-2f13-4605-a824-199136caa330','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc1eee086-ef90-4295-bc9f-9625648b24c4_5.jpg?alt=media&token=c1eee086-ef90-4295-bc9f-9625648b24c4','2022-12-16 15:22:50','2022-12-16 15:22:50',NULL,'11975b87-60c6-44ff-866e-326160688614',NULL,NULL,1,'thumbnails/c1eee086-ef90-4295-bc9f-9625648b24c4_5.jpg'),('2b920813-e16a-48b4-9e6a-24afcd1939e1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F5d05e753-f032-4ca1-a735-028d8436e346_4.jpg?alt=media&token=5d05e753-f032-4ca1-a735-028d8436e346','2022-12-16 15:15:54','2022-12-16 15:15:54',NULL,'260434a5-afb7-4291-9ec5-35f277f84c0c',NULL,NULL,1,'thumbnails/5d05e753-f032-4ca1-a735-028d8436e346_4.jpg'),('3d707a65-ebd2-476a-a9da-28c9219d5e76','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe524b565-0ad1-4542-979a-6902620bab58_2.jpg?alt=media&token=e524b565-0ad1-4542-979a-6902620bab58','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1',NULL,NULL,NULL,1,'thumbnails/e524b565-0ad1-4542-979a-6902620bab58_2.jpg'),('3e60b7eb-e5c0-4c8a-b0f6-bc8f47fbb58c','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F007e3d73-db39-4da2-98cf-ed2bbc81fe85_1.jpg?alt=media&token=007e3d73-db39-4da2-98cf-ed2bbc81fe85','2022-12-16 15:35:25','2022-12-16 15:35:25',NULL,'64d6fa8a-e6e8-4172-8e5d-11e73173c88c',NULL,NULL,1,'thumbnails/007e3d73-db39-4da2-98cf-ed2bbc81fe85_1.jpg'),('3fade031-e492-4c83-ba83-c8919856bebc','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe529340f-bd4a-4692-bfd5-f26e5a97775d_1.jpg?alt=media&token=e529340f-bd4a-4692-bfd5-f26e5a97775d','2022-12-17 02:39:02','2022-12-17 02:39:02',NULL,'4cd741c7-a20f-4442-a575-d01e5d194152',NULL,NULL,1,'thumbnails/e529340f-bd4a-4692-bfd5-f26e5a97775d_1.jpg'),('41687ca2-c1b1-4149-a032-5daa6f6dc172','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F22ab682c-5ff5-4b98-bb3e-f984db8ef9f6_2.jpg?alt=media&token=22ab682c-5ff5-4b98-bb3e-f984db8ef9f6','2022-12-16 15:27:10','2022-12-16 15:27:10',NULL,'9fe37e01-13e9-496d-9e8e-9bab7cd8534c',NULL,NULL,1,'thumbnails/22ab682c-5ff5-4b98-bb3e-f984db8ef9f6_2.jpg'),('4e345c5c-f7b6-4a45-9f38-8a4dd48bce22','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe0337ff8-fb7b-4bcb-b873-5ef6b89c3d00_2.jpg?alt=media&token=e0337ff8-fb7b-4bcb-b873-5ef6b89c3d00','2022-12-17 02:39:02','2022-12-17 02:39:02',NULL,'4cd741c7-a20f-4442-a575-d01e5d194152',NULL,NULL,1,'thumbnails/e0337ff8-fb7b-4bcb-b873-5ef6b89c3d00_2.jpg'),('4e421218-1b42-42e7-9d26-3dfcde6f4ec6','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Feeda53c4-0357-4206-859b-38d963ddc930_2.jpg?alt=media&token=eeda53c4-0357-4206-859b-38d963ddc930','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf',NULL,NULL,NULL,1,'thumbnails/eeda53c4-0357-4206-859b-38d963ddc930_2.jpg'),('5911b285-e7b6-4acc-b7d1-6e64214a457d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F1dc4f99f-683c-43a3-8cc2-5728d02eae1b_3.jpg?alt=media&token=1dc4f99f-683c-43a3-8cc2-5728d02eae1b','2022-12-17 02:39:02','2022-12-17 02:39:02',NULL,'4cd741c7-a20f-4442-a575-d01e5d194152',NULL,NULL,1,'thumbnails/1dc4f99f-683c-43a3-8cc2-5728d02eae1b_3.jpg'),('599262d4-42f3-4c46-9769-a9343c306cc7','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd3c32412-de17-41d3-9c52-2491ba42c150_1.jpg?alt=media&token=d3c32412-de17-41d3-9c52-2491ba42c150','2022-12-16 15:32:17','2022-12-16 15:32:17',NULL,'582ca3e8-898b-4c23-8b09-6bcf7b848604',NULL,NULL,1,'thumbnails/d3c32412-de17-41d3-9c52-2491ba42c150_1.jpg'),('5aec8a31-3692-48fa-a468-581cea7396c4','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F0b13cff2-7265-4ee0-9c3c-047cfad431f6_1.jpg?alt=media&token=0b13cff2-7265-4ee0-9c3c-047cfad431f6','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b',NULL,NULL,NULL,1,'thumbnails/0b13cff2-7265-4ee0-9c3c-047cfad431f6_1.jpg'),('5bcce9a5-7514-4fe8-96f8-4672bf74de4a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fdb3bbac4-fb7d-45ad-9a50-8b0ee2817f1c_6.jpg?alt=media&token=db3bbac4-fb7d-45ad-9a50-8b0ee2817f1c','2022-12-16 15:22:50','2022-12-16 15:22:50',NULL,'11975b87-60c6-44ff-866e-326160688614',NULL,NULL,1,'thumbnails/db3bbac4-fb7d-45ad-9a50-8b0ee2817f1c_6.jpg'),('5de6837a-efcc-4f81-b191-eb4d1ed57ba5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fdba5cc59-12bf-4547-ac39-ca34c435be1d_4.jpg?alt=media&token=dba5cc59-12bf-4547-ac39-ca34c435be1d','2022-12-16 15:29:01','2022-12-16 15:29:01',NULL,'b1db4ba6-dbe4-4335-85bc-9aecc4d37343',NULL,NULL,1,'thumbnails/dba5cc59-12bf-4547-ac39-ca34c435be1d_4.jpg'),('69b7684a-734e-4647-a23f-1351df6bc8d1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F320a981a-f5b5-4cc2-8de0-5d3090dc00a1_1.jpg?alt=media&token=320a981a-f5b5-4cc2-8de0-5d3090dc00a1','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('69c4df14-b3d4-4edd-8a0b-d1ae913b5803','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F897fcee6-e5db-49f8-9a74-a3babd3bf3c2_3.jpg?alt=media&token=897fcee6-e5db-49f8-9a74-a3babd3bf3c2','2022-12-16 15:29:01','2022-12-16 15:29:01',NULL,'b1db4ba6-dbe4-4335-85bc-9aecc4d37343',NULL,NULL,1,'thumbnails/897fcee6-e5db-49f8-9a74-a3babd3bf3c2_3.jpg'),('6f7defbc-5f85-4dd9-8165-e58ea72dcc8b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2f0cccdc-f7ed-4fdf-b606-e2e64490b665_6.jpg?alt=media&token=2f0cccdc-f7ed-4fdf-b606-e2e64490b665','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf',NULL,NULL,NULL,1,'thumbnails/2f0cccdc-f7ed-4fdf-b606-e2e64490b665_6.jpg'),('706b9b35-ea05-4ba5-9933-178218f7fe86','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa4d02651-2f88-4599-8b24-927e84c4ccd6_1.jpg?alt=media&token=a4d02651-2f88-4599-8b24-927e84c4ccd6','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df',NULL,NULL,NULL,1,'thumbnails/a4d02651-2f88-4599-8b24-927e84c4ccd6_1.jpg'),('70cf5ec6-d5c4-4c69-925c-8d1fe6db4e8f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F88a09686-b436-4b94-a817-103a1cb6f1c1_3.jpg?alt=media&token=88a09686-b436-4b94-a817-103a1cb6f1c1','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1',NULL,NULL,NULL,1,'thumbnails/88a09686-b436-4b94-a817-103a1cb6f1c1_3.jpg'),('7258c9ba-0356-4e6c-9f15-561c55fb7fa7','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd771c470-2e23-4918-a89a-5823850c4624_4.jpg?alt=media&token=d771c470-2e23-4918-a89a-5823850c4624','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc',NULL,NULL,NULL,1,'thumbnails/d771c470-2e23-4918-a89a-5823850c4624_4.jpg'),('738c05b5-59ea-4cbd-80d3-fbb972d82cd4','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fbbe88255-8655-4157-a610-3842a003ff52_1.jpg?alt=media&token=bbe88255-8655-4157-a610-3842a003ff52','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf',NULL,NULL,NULL,1,'thumbnails/bbe88255-8655-4157-a610-3842a003ff52_1.jpg'),('759bc3b1-3041-4c31-83fb-f853ae0bfd1c','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F47d0e643-fd02-4d27-85e9-08b50f07c7e4_2.jpg?alt=media&token=47d0e643-fd02-4d27-85e9-08b50f07c7e4','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc',NULL,NULL,NULL,1,'thumbnails/47d0e643-fd02-4d27-85e9-08b50f07c7e4_2.jpg'),('76ebdd63-a998-45ad-968e-4c9e79985a44','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F814d1b7b-39d3-4c5c-9f69-e21bf06ae3db_1.jpg?alt=media&token=814d1b7b-39d3-4c5c-9f69-e21bf06ae3db','2022-12-16 15:29:01','2022-12-16 15:29:01',NULL,'b1db4ba6-dbe4-4335-85bc-9aecc4d37343',NULL,NULL,1,'thumbnails/814d1b7b-39d3-4c5c-9f69-e21bf06ae3db_1.jpg'),('776481ac-7e6b-46a2-aed2-64f9e9ae0420','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F320a981a-f5b5-4cc2-8de0-5d3090dc00a1_1.jpg?alt=media&token=320a981a-f5b5-4cc2-8de0-5d3090dc00a1','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('7beeaf7a-dd8b-4890-a5f8-e9c52b9b8e36','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fbc9757d3-13d1-4403-9f8d-892a751cf95d_4.jpg?alt=media&token=bc9757d3-13d1-4403-9f8d-892a751cf95d','2022-12-17 02:39:02','2022-12-17 02:39:02',NULL,'4cd741c7-a20f-4442-a575-d01e5d194152',NULL,NULL,1,'thumbnails/bc9757d3-13d1-4403-9f8d-892a751cf95d_4.jpg'),('82e16b63-0894-4fec-a391-10b615e92378','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F0ad85e4b-7fb8-4261-80b9-3de615a7902a_3.jpg?alt=media&token=0ad85e4b-7fb8-4261-80b9-3de615a7902a','2022-12-16 15:15:54','2022-12-16 15:15:54',NULL,'260434a5-afb7-4291-9ec5-35f277f84c0c',NULL,NULL,1,'thumbnails/0ad85e4b-7fb8-4261-80b9-3de615a7902a_3.jpg'),('86d16a2f-d98e-453f-8cea-bd0a04c5f488','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F43521314-bff3-43fd-8546-6ce5ad5aa9b6_6.jpg?alt=media&token=43521314-bff3-43fd-8546-6ce5ad5aa9b6','2022-12-16 15:27:10','2022-12-16 15:27:10',NULL,'9fe37e01-13e9-496d-9e8e-9bab7cd8534c',NULL,NULL,1,'thumbnails/43521314-bff3-43fd-8546-6ce5ad5aa9b6_6.jpg'),('8777b66a-9396-462c-9fcd-d5e646c9df3e','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F19002e93-df6a-4d79-8d24-bffd0bcc0b8c_3.jpg?alt=media&token=19002e93-df6a-4d79-8d24-bffd0bcc0b8c','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc',NULL,NULL,NULL,1,'thumbnails/19002e93-df6a-4d79-8d24-bffd0bcc0b8c_3.jpg'),('8c95a55e-4187-4a2b-9c9f-3101204e1c67','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F624c34b4-5b60-4c5b-b2b2-4c1c656c3b81_3.jpg?alt=media&token=624c34b4-5b60-4c5b-b2b2-4c1c656c3b81','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b',NULL,NULL,NULL,1,'thumbnails/624c34b4-5b60-4c5b-b2b2-4c1c656c3b81_3.jpg'),('93000fb6-0ce5-4301-8167-4d6e9dd7fbb7','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc7f24310-6928-4579-b2b8-829213fa4ed0_1.jpg?alt=media&token=c7f24310-6928-4579-b2b8-829213fa4ed0','2022-12-16 15:15:54','2022-12-16 15:15:54',NULL,'260434a5-afb7-4291-9ec5-35f277f84c0c',NULL,NULL,1,'thumbnails/c7f24310-6928-4579-b2b8-829213fa4ed0_1.jpg'),('9475e80d-9661-441e-8db2-31d2bf02af64','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc7de95d4-d61e-4d69-8e52-4aa9a8e1c11d_2.jpg?alt=media&token=c7de95d4-d61e-4d69-8e52-4aa9a8e1c11d','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054',NULL,NULL,NULL,1,'thumbnails/c7de95d4-d61e-4d69-8e52-4aa9a8e1c11d_2.jpg'),('9f0cb1e1-78c2-48cb-b448-effac58f248b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ffed51461-acff-41cd-a3ee-0e2e46886edb_2.jpg?alt=media&token=fed51461-acff-41cd-a3ee-0e2e46886edb','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b',NULL,NULL,NULL,1,'thumbnails/fed51461-acff-41cd-a3ee-0e2e46886edb_2.jpg'),('a8581698-3a42-4382-a259-a210b816e1c6','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/avatars%2Fb21c73b2-dab4-4dc2-a015-2062aab25d9f_2.jpg?alt=media&token=b21c73b2-dab4-4dc2-a015-2062aab25d9f','2022-12-16 15:08:52','2022-12-16 15:08:52',NULL,NULL,'45f3d75f-1171-46f3-a6af-d53d14afed18',NULL,1,'avatars/b21c73b2-dab4-4dc2-a015-2062aab25d9f_2.jpg'),('b4ccd9b4-4f2d-47fb-87cb-fb12b3bd70a4','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F82849819-4633-458f-843e-b531aefe104a_2.jpg?alt=media&token=82849819-4633-458f-843e-b531aefe104a','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('b59175b5-631d-4963-a26a-e75ea2682370','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6dfaf9af-b9f5-4999-be77-8020d2c34f65_3.jpg?alt=media&token=6dfaf9af-b9f5-4999-be77-8020d2c34f65','2022-12-16 15:32:17','2022-12-16 15:32:17',NULL,'582ca3e8-898b-4c23-8b09-6bcf7b848604',NULL,NULL,1,'thumbnails/6dfaf9af-b9f5-4999-be77-8020d2c34f65_3.jpg'),('b6e1abba-80ee-4876-a3fb-bdb9826b79b4','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2ee7b923-0ffb-464f-be5b-4e3b09fb8fcd_3.jpg?alt=media&token=2ee7b923-0ffb-464f-be5b-4e3b09fb8fcd','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df',NULL,NULL,NULL,1,'thumbnails/2ee7b923-0ffb-464f-be5b-4e3b09fb8fcd_3.jpg'),('b99dd83d-ce87-4a6b-9962-32efd12d7ee2','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fb3f2adc0-4426-41ff-a1c4-767c99b78c0a_5.jpg?alt=media&token=b3f2adc0-4426-41ff-a1c4-767c99b78c0a','2022-12-16 15:29:01','2022-12-16 15:29:01',NULL,'b1db4ba6-dbe4-4335-85bc-9aecc4d37343',NULL,NULL,1,'thumbnails/b3f2adc0-4426-41ff-a1c4-767c99b78c0a_5.jpg'),('b9e747b3-a163-49e1-832d-33b23d6bd9c1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4927c62f-8acb-4435-9d6f-e43bd38cb222_1.jpg?alt=media&token=4927c62f-8acb-4435-9d6f-e43bd38cb222','2022-12-16 15:22:50','2022-12-16 15:22:50',NULL,'11975b87-60c6-44ff-866e-326160688614',NULL,NULL,1,'thumbnails/4927c62f-8acb-4435-9d6f-e43bd38cb222_1.jpg'),('baf28324-35e3-4036-85ef-0616ddce672f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4decc565-ed28-4b96-a412-69bb5e424e9a_2.jpg?alt=media&token=4decc565-ed28-4b96-a412-69bb5e424e9a','2022-12-16 15:15:54','2022-12-16 15:15:54',NULL,'260434a5-afb7-4291-9ec5-35f277f84c0c',NULL,NULL,1,'thumbnails/4decc565-ed28-4b96-a412-69bb5e424e9a_2.jpg'),('c085d0e7-02b5-41e1-9fe2-2d69aef313fd','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fde170dc8-da9a-4343-bd46-1706c38eb964_5.jpg?alt=media&token=de170dc8-da9a-4343-bd46-1706c38eb964','2022-12-16 15:15:54','2022-12-16 15:15:54',NULL,'260434a5-afb7-4291-9ec5-35f277f84c0c',NULL,NULL,1,'thumbnails/de170dc8-da9a-4343-bd46-1706c38eb964_5.jpg'),('c1b5a7ad-e1c5-41f9-b330-5644bad3138b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2fac8d05-8732-4352-a53a-7e1e7d0bf538_2.jpg?alt=media&token=2fac8d05-8732-4352-a53a-7e1e7d0bf538','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8',NULL,NULL,NULL,1,'thumbnails/2fac8d05-8732-4352-a53a-7e1e7d0bf538_2.jpg'),('c562608c-6a43-4c8a-823d-3ef117e9a6dc','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F9844130c-9181-4e3b-9c4d-bb3b20ceace7_4.jpg?alt=media&token=9844130c-9181-4e3b-9c4d-bb3b20ceace7','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054',NULL,NULL,NULL,1,'thumbnails/9844130c-9181-4e3b-9c4d-bb3b20ceace7_4.jpg'),('cc975d75-73c6-438e-8d7f-a1945d9f2329','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F61ac2799-709c-4aed-888a-beb4e9021d53_4.jpg?alt=media&token=61ac2799-709c-4aed-888a-beb4e9021d53','2022-12-16 15:27:10','2022-12-16 15:27:10',NULL,'9fe37e01-13e9-496d-9e8e-9bab7cd8534c',NULL,NULL,1,'thumbnails/61ac2799-709c-4aed-888a-beb4e9021d53_4.jpg'),('cd64e671-eebe-4e3d-b2d4-97c9f8972c6e','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F57ebf9ec-c614-432b-b2a1-55edb2f520a0_2.jpg?alt=media&token=57ebf9ec-c614-432b-b2a1-55edb2f520a0','2022-12-16 15:35:25','2022-12-16 15:35:25',NULL,'64d6fa8a-e6e8-4172-8e5d-11e73173c88c',NULL,NULL,1,'thumbnails/57ebf9ec-c614-432b-b2a1-55edb2f520a0_2.jpg'),('cdc2e110-f5ed-4ac0-ac7c-216ce0238341','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fca373a92-563f-4308-ac81-61c23fe4012a_7.jpg?alt=media&token=ca373a92-563f-4308-ac81-61c23fe4012a','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054',NULL,NULL,NULL,1,'thumbnails/ca373a92-563f-4308-ac81-61c23fe4012a_7.jpg'),('d196df08-2466-4e36-a726-0e7771fbd32b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4ad5e24a-299c-42c0-a4b4-8bf8cf27c4aa_3.jpg?alt=media&token=4ad5e24a-299c-42c0-a4b4-8bf8cf27c4aa','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('d9486d2d-a891-46ac-8525-d08dc699fb72','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa7818f5f-284b-477c-a8f4-783de8240304_2.jpg?alt=media&token=a7818f5f-284b-477c-a8f4-783de8240304','2022-12-16 15:32:17','2022-12-16 15:32:17',NULL,'582ca3e8-898b-4c23-8b09-6bcf7b848604',NULL,NULL,1,'thumbnails/a7818f5f-284b-477c-a8f4-783de8240304_2.jpg'),('e95ce1a9-1563-4474-b2a7-7a6dc14818c5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fbd7a56d7-804d-403e-8913-b775ab197e87_2.jpg?alt=media&token=bd7a56d7-804d-403e-8913-b775ab197e87','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df',NULL,NULL,NULL,1,'thumbnails/bd7a56d7-804d-403e-8913-b775ab197e87_2.jpg'),('f3fcd792-a18a-4d37-95c3-0f3a5d919a0a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F39320455-f040-4a12-b591-7ddca0e3863b_7.jpg?alt=media&token=39320455-f040-4a12-b591-7ddca0e3863b','2022-12-16 15:35:25','2022-12-16 15:35:25',NULL,'64d6fa8a-e6e8-4172-8e5d-11e73173c88c',NULL,NULL,1,'thumbnails/39320455-f040-4a12-b591-7ddca0e3863b_7.jpg'),('f8e7e5d6-cc4f-41cc-baa9-f3fd3e0119af','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F82849819-4633-458f-843e-b531aefe104a_2.jpg?alt=media&token=82849819-4633-458f-843e-b531aefe104a','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,NULL,NULL,1,NULL),('f9152cdf-b3d5-491e-84f4-66d7999ee95b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fb44e2a54-9c41-4379-8e1c-215e172dee19_4.jpg?alt=media&token=b44e2a54-9c41-4379-8e1c-215e172dee19','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8',NULL,NULL,NULL,1,'thumbnails/b44e2a54-9c41-4379-8e1c-215e172dee19_4.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policies`
--

DROP TABLE IF EXISTS `policies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policies` (
  `policyId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `expireTime` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`policyId`),
  KEY `Policies_roomId_foreign_idx` (`roomId`),
  CONSTRAINT `Policies_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policies`
--

LOCK TABLES `policies` WRITE;
/*!40000 ALTER TABLE `policies` DISABLE KEYS */;
INSERT INTO `policies` VALUES ('3ef6ff61-33f1-4e37-b380-7174db768f43','1','2','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df',1),('52626b52-726d-4276-bb76-c4c7102db5a5','1','2','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1',1),('5fe3a199-f842-4ef7-8996-408fc27f665e','1','2','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc',1),('6942ccc7-9d86-4ddc-b497-cc8e33a74db0','1','2','2022-12-16 15:37:09','2022-12-16 15:37:09','29f38493-6e7b-4191-8f91-b827ce66cd5d',1),('b2d2186b-1aaf-49cd-a465-17c25b10a1b9','1','2','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8',1),('b8180364-fe6c-4605-ad0c-e45080063607','1','2','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf',1),('c0ae79f2-b7ef-41d4-b699-da95c29e1415','1','2','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b',1),('e74ae305-d9a9-4e7b-a95b-0080d433f140','1','2','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054',1);
/*!40000 ALTER TABLE `policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `reviewId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `starNumber` int DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`reviewId`),
  KEY `Reviews_customerId_foreign_idx` (`customerId`),
  KEY `Reviews_hotelId_foreign_idx` (`hotelId`),
  CONSTRAINT `Reviews_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`),
  CONSTRAINT `Reviews_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `hotels` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES ('0b086b0a-e48e-455e-ba94-49d02ffac9a0',4,'good','2022-12-17 02:35:45','2022-12-17 02:35:45','45f3d75f-1171-46f3-a6af-d53d14afed18','11975b87-60c6-44ff-866e-326160688614',1),('776ebb44-297e-4187-ab2a-331f57c61a4a',5,'chất lượng','2022-12-16 15:48:13','2022-12-16 15:48:13','45f3d75f-1171-46f3-a6af-d53d14afed18','11975b87-60c6-44ff-866e-326160688614',1),('ff18099d-e183-4775-9166-c2749087f957',4,'tốt','2022-12-16 15:16:46','2022-12-16 15:16:46','45f3d75f-1171-46f3-a6af-d53d14afed18','260434a5-afb7-4291-9ec5-35f277f84c0c',1);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `roleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `roleName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES ('4dbb5cbe-093f-4c5d-af19-5fbe2b05196e','admin','2022-11-13 15:23:25','2022-11-13 15:23:25'),('5eea663f-92d4-4f8d-83a0-8fae233d3c3d','customer','2022-11-13 15:23:46','2022-11-13 15:23:46');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomrelatedservices`
--

DROP TABLE IF EXISTS `roomrelatedservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roomrelatedservices` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `serviceId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `RoomRelatedServices_roomId_foreign_idx` (`roomId`),
  KEY `RoomRelatedServices_serviceId_foreign_idx` (`serviceId`),
  CONSTRAINT `RoomRelatedServices_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`),
  CONSTRAINT `RoomRelatedServices_serviceId_foreign_idx` FOREIGN KEY (`serviceId`) REFERENCES `services` (`serviceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomrelatedservices`
--

LOCK TABLES `roomrelatedservices` WRITE;
/*!40000 ALTER TABLE `roomrelatedservices` DISABLE KEYS */;
INSERT INTO `roomrelatedservices` VALUES ('02385607-107e-4537-b64a-6afbf52f60df','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf','944f926b-6272-4584-be98-2142e080372a'),('1a413cf0-fb93-4727-a55e-7e1f486256f4','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1','944f926b-6272-4584-be98-2142e080372a'),('1a6c7a8d-1ca5-4f41-ab90-2d658f6d7d28','2022-12-17 07:30:02','2022-12-17 07:30:02','29f38493-6e7b-4191-8f91-b827ce66cd5d','3e9563d5-9df6-490e-b30c-d7022a907b6c'),('21114356-3775-4867-975a-db1394ec3430','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('26c6000f-effe-4c48-b247-4b3e6c8aab3b','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf','3e9563d5-9df6-490e-b30c-d7022a907b6c'),('3ca3a817-df00-43af-8776-e1332e83d0da','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8','944f926b-6272-4584-be98-2142e080372a'),('4ff609d9-093d-4877-ac80-744c8215199f','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('589a8755-3bf6-4be2-9c01-5c7f189dea1b','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('5c1d8d6a-3e2c-46cc-ac5f-bd9e0526309e','2022-12-16 15:29:01','2022-12-16 15:29:01','de008149-e5a7-489e-b66b-30bbd287de0b','e49a5076-1bb2-4a92-af9d-c136678e6a7e'),('6c6df531-695b-48dd-ab38-277e35ea7f8f','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054','944f926b-6272-4584-be98-2142e080372a'),('7232bd8b-d44a-4f9f-b81f-c45e298ca711','2022-12-16 15:35:25','2022-12-16 15:35:25','0c7f540f-f6cb-4baa-ad78-a8beb203d2cf','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('a1c5d80b-4e43-4817-bf8d-320a0db787cc','2022-12-16 15:32:17','2022-12-16 15:32:17','418dd25f-6f5c-431a-a39e-4a294ec756c1','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('b9e0c869-f2b8-45ff-95eb-dd1532e16200','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('bfa46f1b-c246-489c-ac61-6d0af7ed62d4','2022-12-16 15:22:50','2022-12-16 15:22:50','c1efad74-9216-49cf-875e-460243a05054','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('c8dd9446-b4fb-42fa-9e53-8df63bc52704','2022-12-16 15:27:10','2022-12-16 15:27:10','ac80d945-ba2c-4ca8-b97e-4c15597695df','944f926b-6272-4584-be98-2142e080372a'),('da706581-262c-4118-b8f6-23653488b52b','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8','e49a5076-1bb2-4a92-af9d-c136678e6a7e'),('dd3b290a-41ea-4d7a-acd5-4d24b2b6a43c','2022-12-16 15:15:54','2022-12-16 15:15:54','0397bfeb-305e-4e85-a203-d7f2b5e332d8','3e9563d5-9df6-490e-b30c-d7022a907b6c'),('f672e8a3-787f-4ef6-927b-172ec753b93e','2022-12-17 02:39:02','2022-12-17 02:39:02','87feb64d-1ee8-4887-aaf0-72f68cdff2fc','944f926b-6272-4584-be98-2142e080372a');
/*!40000 ALTER TABLE `roomrelatedservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `price` decimal(15,2) DEFAULT NULL,
  `adultNumber` int DEFAULT NULL,
  `kidNumber` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `typeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `roomNumber` varchar(255) DEFAULT NULL,
  `isBooking` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`roomId`),
  KEY `Rooms_hotelId_foreign_idx` (`hotelId`),
  KEY `Rooms_typeId_foreign_idx` (`typeId`),
  CONSTRAINT `Rooms_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `hotels` (`hotelId`),
  CONSTRAINT `Rooms_typeId_foreign_idx` FOREIGN KEY (`typeId`) REFERENCES `roomtypes` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES ('0397bfeb-305e-4e85-a203-d7f2b5e332d8',NULL,0,100000.00,2,2,'2022-12-16 15:15:54','2022-12-17 07:27:28','260434a5-afb7-4291-9ec5-35f277f84c0c','0b8a2a03-2bae-421d-be67-a4320cc285b1','01',1),('0c7f540f-f6cb-4baa-ad78-a8beb203d2cf',NULL,1,200000.00,2,2,'2022-12-16 15:35:25','2022-12-16 15:35:25','64d6fa8a-e6e8-4172-8e5d-11e73173c88c','05cd248b-37ee-4523-9c9b-fe3b7656102b','01',0),('29f38493-6e7b-4191-8f91-b827ce66cd5d',NULL,1,200000.00,2,1,'2022-12-16 15:37:09','2022-12-17 07:30:02','11975b87-60c6-44ff-866e-326160688614','0b8a2a03-2bae-421d-be67-a4320cc285b1','02',0),('418dd25f-6f5c-431a-a39e-4a294ec756c1',NULL,1,200000.00,2,1,'2022-12-16 15:32:17','2022-12-16 15:32:17','582ca3e8-898b-4c23-8b09-6bcf7b848604','6df0aab3-0ef6-4232-af35-b515fb90759b','01',0),('87feb64d-1ee8-4887-aaf0-72f68cdff2fc',NULL,0,200000.00,2,2,'2022-12-17 02:39:02','2022-12-17 07:26:52','4cd741c7-a20f-4442-a575-d01e5d194152','0b8a2a03-2bae-421d-be67-a4320cc285b1','010',0),('ac80d945-ba2c-4ca8-b97e-4c15597695df',NULL,1,300000.00,1,1,'2022-12-16 15:27:10','2022-12-16 15:27:10','9fe37e01-13e9-496d-9e8e-9bab7cd8534c','b4fdfaac-e996-4555-8ff6-c1328d071f47','02',0),('c1efad74-9216-49cf-875e-460243a05054',NULL,1,200000.00,2,3,'2022-12-16 15:22:50','2022-12-16 18:04:30','11975b87-60c6-44ff-866e-326160688614','40743aa5-3dd2-4208-a23b-7e893f3fe6fa','01',0),('de008149-e5a7-489e-b66b-30bbd287de0b',NULL,1,150000.00,1,0,'2022-12-16 15:29:01','2022-12-16 15:29:01','b1db4ba6-dbe4-4335-85bc-9aecc4d37343','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roomtypes`
--

DROP TABLE IF EXISTS `roomtypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roomtypes` (
  `typeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `typeName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roomtypes`
--

LOCK TABLES `roomtypes` WRITE;
/*!40000 ALTER TABLE `roomtypes` DISABLE KEYS */;
INSERT INTO `roomtypes` VALUES ('05cd248b-37ee-4523-9c9b-fe3b7656102b','Phòng 4 người','2022-11-16 09:11:20','2022-11-16 09:11:20'),('0b8a2a03-2bae-421d-be67-a4320cc285b1','Phòng giường đôi','2022-11-16 09:11:20','2022-11-16 09:11:20'),('2dd163b1-0051-4d1b-8096-82e29b51f08d','Phòng đơn','2022-11-16 09:11:20','2022-11-16 09:11:20'),('40743aa5-3dd2-4208-a23b-7e893f3fe6fa','Phòng gia đình','2022-11-16 09:11:20','2022-11-16 09:11:20'),('6df0aab3-0ef6-4232-af35-b515fb90759b','Phòng 3 người','2022-11-16 09:11:20','2022-11-16 09:11:20'),('b4fdfaac-e996-4555-8ff6-c1328d071f47','Phòng 2 giường đơn','2022-11-16 09:11:20','2022-11-16 09:11:20');
/*!40000 ALTER TABLE `roomtypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221109173310-create-customer.js'),('20221110031219-create-hotel.js'),('20221110031824-create-role.js'),('20221110032057-create-room.js'),('20221110034042-create-room-type.js'),('20221110034222-create-image.js'),('20221110035626-create-review.js'),('20221110040258-create-booking.js'),('20221110055143-create-booking-detail.js'),('20221110055456-create-service.js'),('20221110055708-create-bill.js'),('20221111053618-create-room-related-service.js'),('20221113024530-create-policy.js'),('20221124175654-create-voucher.js'),('20221202042705-create-customer-viewed-hotel.js'),('20221209112806-create-transaction.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `serviceId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `serviceName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fee` decimal(7,2) DEFAULT NULL,
  PRIMARY KEY (`serviceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES ('06da8849-426e-49d7-aa1d-7a6879d260f3','Tủ lạnh','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('368754ed-56f3-4d4d-b92c-280b0233a233','Tủ quần áo/Tủ để đồ','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('3e9563d5-9df6-490e-b30c-d7022a907b6c','Tivi','2022-11-16 04:21:29','2022-11-16 04:21:29',90000.00),('46b54ace-0a6f-4463-9fa1-2e809db3e12f','Phòng cách âm','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('58d70acb-7427-4e59-8a2e-1cd798db3db8','Dọn phòng','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('907009f7-253f-498d-9b2b-1e7963aa277c','Ban công riêng','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('944f926b-6272-4584-be98-2142e080372a','Bồn tắm spa','2022-11-16 04:20:29','2022-11-16 04:20:29',90000.00),('9d355978-561f-4330-ba29-af910ec44f9c','Màn che ánh sáng','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('9de9b483-dc8a-40c3-bdbd-4271b0b3547c','Đồ dùng nhà tắm miễn phí','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('e49a5076-1bb2-4a92-af9d-c136678e6a7e','Bàn làm việc','2022-11-16 04:17:17','2022-11-16 04:17:17',40000.00),('ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','Bồn tắm','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00),('ef0328cc-8ef5-474e-afa2-db441063ca3e','Két sắt','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transactionId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `bankCode` varchar(255) NOT NULL,
  `bankTranNo` varchar(255) NOT NULL,
  `cardType` varchar(255) NOT NULL,
  `orderInfo` text NOT NULL,
  `payDate` varchar(255) NOT NULL,
  `responseCode` varchar(255) DEFAULT NULL,
  `tmnCode` varchar(255) NOT NULL,
  `transactionNo` varchar(255) DEFAULT NULL,
  `transactionStatus` varchar(255) DEFAULT NULL,
  `txnRef` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bookingId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`transactionId`),
  KEY `Transactions_bookingId_foreign_idx` (`bookingId`),
  KEY `Transactions_customerId_foreign_idx` (`customerId`),
  CONSTRAINT `Transactions_bookingId_foreign_idx` FOREIGN KEY (`bookingId`) REFERENCES `bookings` (`bookingId`),
  CONSTRAINT `Transactions_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES ('378b94c8-d7c7-4a7c-9706-ed45b2d6108b',400000.00,'NCB','VNP13906793','ATM','Thanh+To%C3%A1n','20221216225703','00','6YJ7K9AM','13906793','00','221243','2022-12-16 15:57:08','2022-12-16 15:57:08','44a52bb4-41ad-4f09-b18a-eda75f6a636d','45f3d75f-1171-46f3-a6af-d53d14afed18'),('475dd978-e4a6-421c-8eea-e24764162ba4',300000.00,'NCB','VNP13906772','ATM','Thanh+To%C3%A1n','20221216221803','00','6YJ7K9AM','13906772','00','221231','2022-12-16 15:18:08','2022-12-16 15:18:08','967b222d-22e4-4c73-af42-5992f6630550','45f3d75f-1171-46f3-a6af-d53d14afed18'),('ab6f2c04-ee0a-4fad-9add-468d8b406d92',600000.00,'NCB','VNP13906927','ATM','thanh+toans','20221217093340','00','6YJ7K9AM','13906927','00','091210','2022-12-17 02:33:45','2022-12-17 02:33:45','5b0e37dc-cca5-4cb9-943d-f02cc33cce2e','45f3d75f-1171-46f3-a6af-d53d14afed18'),('c3b7a91e-fbe8-4342-8b80-e7eda939934e',600000.00,'NCB','VNP13906843','ATM','Thanh+To%C3%A1n+Ph%C3%B2ng+','20221217010242','00','6YJ7K9AM','13906843','00','011223','2022-12-16 18:02:48','2022-12-16 18:02:49','392fb05c-99fd-4003-afaa-466ac11bc43d','45f3d75f-1171-46f3-a6af-d53d14afed18');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vouchers`
--

DROP TABLE IF EXISTS `vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vouchers` (
  `voucherId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `voucherName` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isUsed` tinyint(1) DEFAULT '0',
  `expireDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`voucherId`),
  KEY `Vouchers_customerId_foreign_idx` (`customerId`),
  CONSTRAINT `Vouchers_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vouchers`
--

LOCK TABLES `vouchers` WRITE;
/*!40000 ALTER TABLE `vouchers` DISABLE KEYS */;
/*!40000 ALTER TABLE `vouchers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17 15:43:13
