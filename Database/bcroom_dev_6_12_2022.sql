-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: bcroom_dev
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

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
-- Table structure for table `Bills`
--

DROP TABLE IF EXISTS `Bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bills` (
  `billId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `totalPrice` decimal(15,2) DEFAULT NULL,
  `billDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `bookingId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`billId`),
  KEY `Bills_bookingId_foreign_idx` (`bookingId`),
  CONSTRAINT `Bills_bookingId_foreign_idx` FOREIGN KEY (`bookingId`) REFERENCES `Bookings` (`bookingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bills`
--

LOCK TABLES `Bills` WRITE;
/*!40000 ALTER TABLE `Bills` DISABLE KEYS */;
INSERT INTO `Bills` VALUES ('5cc4bf81-7319-4c76-938f-94eb0390e561',1800000.00,'2022-12-04','2022-12-04 09:56:19','2022-12-04 09:56:19','ee6b23e7-f4bc-4e2b-b869-94b2ec22855d',1),('ed97c33d-1ce9-482c-affe-a02fff2065a5',180000.00,'2022-11-29','2022-11-29 07:27:52','2022-11-29 08:18:47','7c77c6bc-d757-4f90-94fb-b3a06684f95c',1);
/*!40000 ALTER TABLE `Bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bookings`
--

DROP TABLE IF EXISTS `Bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bookings` (
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
  CONSTRAINT `Bookings_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`),
  CONSTRAINT `Bookings_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bookings`
--

LOCK TABLES `Bookings` WRITE;
/*!40000 ALTER TABLE `Bookings` DISABLE KEYS */;
INSERT INTO `Bookings` VALUES ('7c77c6bc-d757-4f90-94fb-b3a06684f95c','Luxury 3','2022-12-19','2022-12-20',1,0,'2022-11-29 07:27:51','2022-12-05 10:16:54','ee36540a-1202-4ae3-a971-5328197a603c','8b8bcc70-2424-460c-88e2-aa53549d52a1',1,0),('ee6b23e7-f4bc-4e2b-b869-94b2ec22855d','Luxury 1','2022-12-05','2022-12-06',1,1,'2022-12-04 09:56:18','2022-12-05 10:21:32','d2955286-9194-45a6-9a51-a379880f595e','8b8bcc70-2424-460c-88e2-aa53549d52a1',1,1);
/*!40000 ALTER TABLE `Bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CustomerViewedHotels`
--

DROP TABLE IF EXISTS `CustomerViewedHotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CustomerViewedHotels` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CustomerViewedHotels_customerId_foreign_idx` (`customerId`),
  KEY `CustomerViewedHotels_hotelId_foreign_idx` (`hotelId`),
  CONSTRAINT `CustomerViewedHotels_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`),
  CONSTRAINT `CustomerViewedHotels_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `Hotels` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CustomerViewedHotels`
--

LOCK TABLES `CustomerViewedHotels` WRITE;
/*!40000 ALTER TABLE `CustomerViewedHotels` DISABLE KEYS */;
INSERT INTO `CustomerViewedHotels` VALUES ('2964ba2a-670f-41eb-983d-188d22548be6','2022-12-04 09:56:00','2022-12-04 09:56:00','8b8bcc70-2424-460c-88e2-aa53549d52a1','07f13232-ae68-4272-ab65-2f23b5ca57ff'),('7da7ec43-c2ef-4064-8880-5cc0f24e630c','2022-12-02 16:15:43','2022-12-02 16:15:43','8b8bcc70-2424-460c-88e2-aa53549d52a1','cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a');
/*!40000 ALTER TABLE `CustomerViewedHotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customers`
--

DROP TABLE IF EXISTS `Customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customers` (
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
  CONSTRAINT `Customers_roleId_foreign_idx` FOREIGN KEY (`roleId`) REFERENCES `Roles` (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customers`
--

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;
INSERT INTO `Customers` VALUES ('0b2d51ce-f128-4173-8384-c1b804f75646','Lê Việt Anh','$2b$10$6./XaRK8.EjZWOmpcVsL2Oj4i/iiJsDtsEFDSQFpna3YKRV8rWlqC','anhkun8@gmail.com',NULL,NULL,'2021-10-20 16:51:17','2022-12-03 08:51:18','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',0),('0bca9987-4995-44c6-b5ca-108e231098dc','Lê Việt Anh','$2b$10$l.DZ7gTuJXbLO0C9xjUwqumLYIM0j.JROHO0T9JWft/ZgUQ1W8g5C','anhkun6@gmail.com',NULL,NULL,'2022-09-20 16:51:06','2022-12-03 04:35:04','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('0e4cf9ac-5511-48f2-bc73-dbfef13310af','Lê Việt Anh','$2b$10$Fb2E4kldiJeEaAIAUjr6y.3BpzEcRq3vwZJSsrJ/TxmM4w0kqaTyy','anhkun7@gmail.com',NULL,NULL,'2022-11-30 16:51:12','2022-11-30 16:51:12','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('3fc57286-d407-4e65-9508-030ea6300f36','Lê Việt Anh','$2b$10$W8c4OMz5tphpR1/.rdjsze7n.FzpVlRVzquYRiYCv2s2ZsG4u.qr2','anhkun@gmail.com',NULL,NULL,'2022-11-30 16:50:14','2022-11-30 16:50:14','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('5eacc80a-b405-41c6-88f5-fa1b3c90f86e','Lê Việt Anh','$2b$10$ASY6gwDQv5WsG0nXZsawDOgjWGYPeIeeypSh56m6WlqyXEy0P80F.','anhkun5@gmail.com',NULL,NULL,'2022-10-30 16:51:00','2022-10-30 16:51:00','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('8b8bcc70-2424-460c-88e2-aa53549d52a1','Lê Việt Anh','$2b$10$OwenHyeiQuUKnXjnNwbNCub9v3BK8wS/QtqxTgUae.IJ6j.WN36w.','anhkun123456@gmail.com','0828030359',NULL,'2022-11-29 07:25:22','2022-12-05 17:04:51','4dbb5cbe-093f-4c5d-af19-5fbe2b05196e',1),('a7957d20-00e0-4cdd-826e-6a166b4415eb','Lê Việt Anh','$2b$10$xQT7pYAj7KlTEN3K6q.P4uMTXLbD0dienTyjz6HvtTwonEcqdd8l6','anhkun3@gmail.com',NULL,NULL,'2022-11-30 16:50:43','2022-11-30 16:50:43','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('d56f6344-4a3f-405c-804c-1017ea03c4c3','Lê Việt Anh','$2b$10$PxmlglPuETHRhAIA7TX52uuMTAwjmxxrDpmMkBi/WGOtE3JcgLmrm','anhkun4@gmail.com',NULL,NULL,'2022-11-30 16:50:55','2022-11-30 16:50:55','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('d97f5752-c3fe-4fc4-8cd9-bf4e9a84f990','Lê Việt Anh','$2b$10$pkSjC5IF0L.OeJeSvTX5suwWPX32G9EAPD0ArW0Kzcrt01UAlPlmq','anhkun1@gmail.com',NULL,NULL,'2022-11-30 16:50:32','2022-11-30 16:50:32','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('fb9ea82c-5d72-49b2-b755-f31b3ce0bd2b','Lê Việt Anh','$2b$10$4UIltkdLLqXTZsYcanjTfeZxFCXGe.kGTkCK6ABl36z7qQ0Nrlme6','anhkun9@gmail.com',NULL,NULL,'2022-11-30 16:51:25','2022-11-30 16:51:25','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('feca2519-84c5-4959-9756-74a15d0897e4','Lê Việt Anh','$2b$10$cYokYosKu3fgzNy7JMxHk.mxcJx4LBDmWA7xUcY2t057oe5l/lR6u','anhkun2@gmail.com',NULL,NULL,'2022-11-30 16:50:38','2022-11-30 16:50:38','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1);
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hotels`
--

DROP TABLE IF EXISTS `Hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hotels` (
  `hotelId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `hotelName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `starNumber` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `description` text,
  `viewNumber` int DEFAULT '0',
  PRIMARY KEY (`hotelId`),
  KEY `Hotels_customerId_foreign_idx` (`customerId`),
  CONSTRAINT `Hotels_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hotels`
--

LOCK TABLES `Hotels` WRITE;
/*!40000 ALTER TABLE `Hotels` DISABLE KEYS */;
INSERT INTO `Hotels` VALUES ('07f13232-ae68-4272-ab65-2f23b5ca57ff','Luxury 1','123 Liên Chiểu, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng','2022-12-01 15:39:48','2022-12-04 09:56:00','8b8bcc70-2424-460c-88e2-aa53549d52a1','123456',4,1,NULL,1),('2374cf29-9586-458a-bd3a-d6fe8b94cf97','Luxury 3','123 Nguyễn Văn Linh, Đà Nẵng','2022-11-29 07:25:37','2022-12-02 16:06:02','8b8bcc70-2424-460c-88e2-aa53549d52a1','123456',5,1,NULL,0),('369abfd7-cb33-4b12-a146-87edb433b821','Luxury 1','123 Nguyễn Văn Linh, Liên Chiểu','2022-12-01 15:34:30','2022-12-02 14:35:20','8b8bcc70-2424-460c-88e2-aa53549d52a1','091122334455',3,1,NULL,0),('8f7fcf2a-adcd-4d08-abf9-56847d815a22','Luxury 2','123 Liên Chiểu, Việt Nam, Đà Nẵng','2022-12-01 15:46:04','2022-12-02 16:06:43','8b8bcc70-2424-460c-88e2-aa53549d52a1','12321312',4,1,NULL,0),('cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a','Luxury 4','123 Nguyễn Văn Linh, Liên Chiểu, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng','2022-12-02 04:00:45','2022-12-03 16:27:42','8b8bcc70-2424-460c-88e2-aa53549d52a1','123456',5,1,'This is updated description',1);
/*!40000 ALTER TABLE `Hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Images` (
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
  CONSTRAINT `Images_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`),
  CONSTRAINT `Images_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `Hotels` (`hotelId`),
  CONSTRAINT `Images_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`roomId`),
  CONSTRAINT `Images_voucherId_foreign_idx` FOREIGN KEY (`voucherId`) REFERENCES `Vouchers` (`voucherId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES ('16890740-98ef-4aae-8a64-b781d228187a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/avatars%2F80c0eb08-99bc-438f-b4d1-493e5af89251_avatar-noeh.png?alt=media&token=80c0eb08-99bc-438f-b4d1-493e5af89251','2022-12-01 16:03:28','2022-12-01 16:03:28',NULL,NULL,'8b8bcc70-2424-460c-88e2-aa53549d52a1',NULL,1,'avatars/80c0eb08-99bc-438f-b4d1-493e5af89251_avatar-noeh.png'),('240ed9dc-2290-4c8e-9654-7f2d47b064d6','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4ab027d3-6087-4162-87a5-806c1baec026_1.png?alt=media&token=4ab027d3-6087-4162-87a5-806c1baec026','2022-12-02 10:38:58','2022-12-02 10:38:58','b47267d9-b872-4e95-b64f-a130cc4ab6f9',NULL,NULL,NULL,1,'thumbnails/4ab027d3-6087-4162-87a5-806c1baec026_1.png'),('3f3221d4-63cb-4789-be61-fe55cd6fd6f5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc191de11-15bc-46d1-a9b0-70b32491b4ef_avatar-noeh.png?alt=media&token=c191de11-15bc-46d1-a9b0-70b32491b4ef','2022-12-03 16:27:42','2022-12-03 16:27:42',NULL,'cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a',NULL,NULL,1,NULL),('8e9592de-ecf4-41d1-ae31-1c34c68620c8','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F5ba9b269-a8b5-47c2-8424-ef3067c5f0a8_0a889809effb9bb64e58f78d14c0a227_tn-removebg-preview.png?alt=media&token=5ba9b269-a8b5-47c2-8424-ef3067c5f0a8','2022-12-03 16:32:45','2022-12-03 16:32:45',NULL,'07f13232-ae68-4272-ab65-2f23b5ca57ff',NULL,NULL,1,NULL),('940b8535-08b8-4775-aa12-4f53e6f10220','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F1e434671-2dda-4acd-9ea8-79373c82a362_avatar-noeh.png?alt=media&token=1e434671-2dda-4acd-9ea8-79373c82a362','2022-12-03 15:43:54','2022-12-03 15:43:54','d2955286-9194-45a6-9a51-a379880f595e',NULL,NULL,NULL,1,'thumbnails/1e434671-2dda-4acd-9ea8-79373c82a362_avatar-noeh.png'),('a0014eb8-d6d5-4a88-af13-a650bb79788a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F1f1cce1e-9356-41b9-9f31-cb72bbd6cf11_noeh-hat.png?alt=media&token=1f1cce1e-9356-41b9-9f31-cb72bbd6cf11','2022-12-01 15:46:05','2022-12-01 15:46:05','7a54abee-0a01-4376-aa25-702c34cf8d27',NULL,NULL,NULL,1,'thumbnails/1f1cce1e-9356-41b9-9f31-cb72bbd6cf11_noeh-hat.png'),('f668c409-1737-493b-8c92-f6fd893dda41','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fca0a71e7-53a0-46e5-830d-32d36f28cdae_avatar-noeh.png?alt=media&token=ca0a71e7-53a0-46e5-830d-32d36f28cdae','2022-12-03 16:32:44','2022-12-03 16:32:44',NULL,'07f13232-ae68-4272-ab65-2f23b5ca57ff',NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Policies`
--

DROP TABLE IF EXISTS `Policies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Policies` (
  `policyId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `expireTime` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`policyId`),
  KEY `Policies_roomId_foreign_idx` (`roomId`),
  CONSTRAINT `Policies_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`roomId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Policies`
--

LOCK TABLES `Policies` WRITE;
/*!40000 ALTER TABLE `Policies` DISABLE KEYS */;
INSERT INTO `Policies` VALUES ('17fcba72-cb5b-4d0b-97af-b005b70f5c6d','Của đêm đầu tiên','1 ngày','2022-12-01 15:34:31','2022-12-01 15:34:31',NULL,1),('23a4facb-c72b-4a24-8706-e55707b89289','1','3','2022-12-01 15:39:49','2022-12-01 15:39:49',NULL,1),('4906359f-05e8-4771-8e95-3b1ef23d6bae','1','2','2022-12-01 15:46:05','2022-12-01 15:46:05',NULL,1),('7a8293f5-e6fd-48b7-a358-f354904a8844','2','2','2022-12-03 15:43:54','2022-12-03 15:43:54','d2955286-9194-45a6-9a51-a379880f595e',1),('96287f4b-0451-412e-80a3-369bc86f0cef','Của đêm đầu tiên','1 ngày','2022-11-29 07:25:39','2022-11-29 07:25:39',NULL,1),('c685eb01-fc64-45f7-be49-a103a8651ebc','Của đêm đầu tiên','1 ngày','2022-12-02 04:01:08','2022-12-02 04:01:08',NULL,1),('d1f0991e-1dcb-40fb-bd01-50b534924cbc','Của đêm đầu tiên','1 ngày','2022-12-02 10:38:58','2022-12-02 10:38:58','b47267d9-b872-4e95-b64f-a130cc4ab6f9',1),('f2d54e4c-056e-492f-87cb-65b73cddea4f','Của đêm đầu tiên','1 ngày','2022-12-02 04:00:46','2022-12-02 04:00:46',NULL,1);
/*!40000 ALTER TABLE `Policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reviews` (
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
  CONSTRAINT `Reviews_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`),
  CONSTRAINT `Reviews_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `Hotels` (`hotelId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Roles` (
  `roleId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `roleName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
INSERT INTO `Roles` VALUES ('4dbb5cbe-093f-4c5d-af19-5fbe2b05196e','admin','2022-11-13 15:23:25','2022-11-13 15:23:25'),('5eea663f-92d4-4f8d-83a0-8fae233d3c3d','customer','2022-11-13 15:23:46','2022-11-13 15:23:46');
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoomRelatedServices`
--

DROP TABLE IF EXISTS `RoomRelatedServices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RoomRelatedServices` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `serviceId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `roomId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `RoomRelatedServices_serviceId_foreign_idx` (`serviceId`),
  KEY `RoomRelatedServices_roomId_foreign_idx` (`roomId`),
  CONSTRAINT `RoomRelatedServices_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `Rooms` (`roomId`),
  CONSTRAINT `RoomRelatedServices_serviceId_foreign_idx` FOREIGN KEY (`serviceId`) REFERENCES `Services` (`serviceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoomRelatedServices`
--

LOCK TABLES `RoomRelatedServices` WRITE;
/*!40000 ALTER TABLE `RoomRelatedServices` DISABLE KEYS */;
INSERT INTO `RoomRelatedServices` VALUES ('0733bc57-ad3d-4ec0-aa80-2c1648f9e35f','2022-12-01 15:34:30','2022-12-01 15:34:30','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','48db7c93-12dd-4252-bc7f-9fd19cb0f354'),('0a1ac755-354f-433e-b1d0-45d94c2dc6e6','2022-12-02 04:00:46','2022-12-02 04:00:46','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','5026354e-2ef0-4fb9-9af5-b2b38eac3e49'),('19b2ca2a-68b2-4ac8-8d54-575e422584ee','2022-12-01 15:39:49','2022-12-01 15:39:49','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','d61a779d-ad43-43b4-b208-05b51b35229b'),('7c8e7537-ca80-47a9-afc8-57e7554a9525','2022-12-02 10:38:58','2022-12-02 10:38:58','3e9563d5-9df6-490e-b30c-d7022a907b6c','b47267d9-b872-4e95-b64f-a130cc4ab6f9'),('8e900786-e367-4a15-b03a-a072126eae7c','2022-12-02 04:01:08','2022-12-02 04:01:08','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','4052edd8-b061-444c-a290-6aa3f6289267'),('9944f8f0-6f61-4c07-b9fa-c0f72937e24e','2022-12-01 15:39:49','2022-12-01 15:39:49','3e9563d5-9df6-490e-b30c-d7022a907b6c','d61a779d-ad43-43b4-b208-05b51b35229b'),('9b0e0dd0-c460-45bc-a7fb-ec6ed360f42c','2022-12-03 15:43:53','2022-12-03 15:43:53','3e9563d5-9df6-490e-b30c-d7022a907b6c','d2955286-9194-45a6-9a51-a379880f595e'),('b49f6a86-3dc2-4583-90c5-81b8139722fe','2022-12-01 15:34:30','2022-12-01 15:34:30','3e9563d5-9df6-490e-b30c-d7022a907b6c','48db7c93-12dd-4252-bc7f-9fd19cb0f354'),('d38ca19e-1e88-4db7-a502-8cbb0c48cc9c','2022-12-02 04:00:46','2022-12-02 04:00:46','3e9563d5-9df6-490e-b30c-d7022a907b6c','5026354e-2ef0-4fb9-9af5-b2b38eac3e49'),('d4db3131-1329-4319-87d1-2efef4061282','2022-12-01 15:46:05','2022-12-01 15:46:05','3e9563d5-9df6-490e-b30c-d7022a907b6c','7a54abee-0a01-4376-aa25-702c34cf8d27'),('ddfa426b-444b-447d-8404-2b1632ffc6a2','2022-12-02 16:33:00','2022-12-02 16:33:00','3e9563d5-9df6-490e-b30c-d7022a907b6c','ee36540a-1202-4ae3-a971-5328197a603c'),('fa87468f-5ea7-42b1-946a-706b732467e8','2022-12-02 10:38:58','2022-12-02 10:38:58','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','b47267d9-b872-4e95-b64f-a130cc4ab6f9'),('feabfd53-179e-4682-8c18-50840d476164','2022-12-02 04:01:08','2022-12-02 04:01:08','3e9563d5-9df6-490e-b30c-d7022a907b6c','4052edd8-b061-444c-a290-6aa3f6289267');
/*!40000 ALTER TABLE `RoomRelatedServices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RoomTypes`
--

DROP TABLE IF EXISTS `RoomTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RoomTypes` (
  `typeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `typeName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RoomTypes`
--

LOCK TABLES `RoomTypes` WRITE;
/*!40000 ALTER TABLE `RoomTypes` DISABLE KEYS */;
INSERT INTO `RoomTypes` VALUES ('05cd248b-37ee-4523-9c9b-fe3b7656102b','Phòng 4 người','2022-11-16 09:11:20','2022-11-16 09:11:20'),('0b8a2a03-2bae-421d-be67-a4320cc285b1','Phòng giường đôi','2022-11-16 09:11:20','2022-11-16 09:11:20'),('2dd163b1-0051-4d1b-8096-82e29b51f08d','Phòng đơn','2022-11-16 09:11:20','2022-11-16 09:11:20'),('40743aa5-3dd2-4208-a23b-7e893f3fe6fa','Phòng gia đình','2022-11-16 09:11:20','2022-11-16 09:11:20'),('6df0aab3-0ef6-4232-af35-b515fb90759b','Phòng 3 người','2022-11-16 09:11:20','2022-11-16 09:11:20'),('b4fdfaac-e996-4555-8ff6-c1328d071f47','Phòng 2 giường đơn','2022-11-16 09:11:20','2022-11-16 09:11:20');
/*!40000 ALTER TABLE `RoomTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rooms`
--

DROP TABLE IF EXISTS `Rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rooms` (
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
  CONSTRAINT `Rooms_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `Hotels` (`hotelId`),
  CONSTRAINT `Rooms_typeId_foreign_idx` FOREIGN KEY (`typeId`) REFERENCES `RoomTypes` (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rooms`
--

LOCK TABLES `Rooms` WRITE;
/*!40000 ALTER TABLE `Rooms` DISABLE KEYS */;
INSERT INTO `Rooms` VALUES ('4052edd8-b061-444c-a290-6aa3f6289267',NULL,1,90000.00,2,1,'2022-12-02 04:01:08','2022-12-02 04:01:08','cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0),('48db7c93-12dd-4252-bc7f-9fd19cb0f354',NULL,1,90000.00,2,1,'2022-12-01 15:34:30','2022-12-01 15:34:30','369abfd7-cb33-4b12-a146-87edb433b821','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0),('5026354e-2ef0-4fb9-9af5-b2b38eac3e49',NULL,1,90000.00,2,1,'2022-12-02 04:00:45','2022-12-02 04:00:45','cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0),('7a54abee-0a01-4376-aa25-702c34cf8d27',NULL,1,100000.00,1,0,'2022-12-01 15:46:04','2022-12-01 15:46:04','8f7fcf2a-adcd-4d08-abf9-56847d815a22','2dd163b1-0051-4d1b-8096-82e29b51f08d','02',0),('b47267d9-b872-4e95-b64f-a130cc4ab6f9',NULL,1,90000.00,2,1,'2022-12-02 10:38:57','2022-12-02 10:38:57','cc8b1f0e-0edb-4d69-a1db-232f6f1fe31a','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0),('d2955286-9194-45a6-9a51-a379880f595e',NULL,1,900000.00,1,1,'2022-12-03 15:43:53','2022-12-04 09:56:19','07f13232-ae68-4272-ab65-2f23b5ca57ff','05cd248b-37ee-4523-9c9b-fe3b7656102b','009',1),('d61a779d-ad43-43b4-b208-05b51b35229b',NULL,1,100000.00,1,0,'2022-12-01 15:39:49','2022-12-01 15:39:49','07f13232-ae68-4272-ab65-2f23b5ca57ff','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',0),('ee36540a-1202-4ae3-a971-5328197a603c','this is description',0,100000.00,1,2,'2022-11-29 07:25:38','2022-12-02 16:33:00','2374cf29-9586-458a-bd3a-d6fe8b94cf97','0b8a2a03-2bae-421d-be67-a4320cc285b1','02',1);
/*!40000 ALTER TABLE `Rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20221109173310-create-customer.js'),('20221110031219-create-hotel.js'),('20221110031824-create-role.js'),('20221110032057-create-room.js'),('20221110034042-create-room-type.js'),('20221110034222-create-image.js'),('20221110035626-create-review.js'),('20221110040258-create-booking.js'),('20221110055143-create-booking-detail.js'),('20221110055456-create-service.js'),('20221110055708-create-bill.js'),('20221111053618-create-room-related-service.js'),('20221113024530-create-policy.js'),('20221124175654-create-voucher.js'),('20221202042705-create-customer-viewed-hotel.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Services`
--

DROP TABLE IF EXISTS `Services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Services` (
  `serviceId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `serviceName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fee` decimal(7,2) DEFAULT NULL,
  PRIMARY KEY (`serviceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Services`
--

LOCK TABLES `Services` WRITE;
/*!40000 ALTER TABLE `Services` DISABLE KEYS */;
INSERT INTO `Services` VALUES ('3e9563d5-9df6-490e-b30c-d7022a907b6c','Wifi','2022-11-16 04:21:29','2022-11-16 04:21:29',90000.00),('944f926b-6272-4584-be98-2142e080372a','Bồn tắm spa','2022-11-16 04:20:29','2022-11-16 04:20:29',90000.00),('e49a5076-1bb2-4a92-af9d-c136678e6a7e','Điều hòa không khí','2022-11-16 04:17:17','2022-11-16 04:17:17',40000.00),('ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','Bồn tắm','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00);
/*!40000 ALTER TABLE `Services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vouchers`
--

DROP TABLE IF EXISTS `Vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Vouchers` (
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
  CONSTRAINT `Vouchers_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `Customers` (`customerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vouchers`
--

LOCK TABLES `Vouchers` WRITE;
/*!40000 ALTER TABLE `Vouchers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Vouchers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-06  0:08:42
