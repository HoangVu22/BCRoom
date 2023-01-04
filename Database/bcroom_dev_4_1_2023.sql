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
INSERT INTO `bills` VALUES ('04e5223e-495f-4fcd-b985-05884a8ae277',570000.00,'2023-01-04','2023-01-04 03:44:54','2023-01-04 03:44:54','b71cd5ec-af9e-4aa3-ae8b-e2e28e8483bd',1),('d0e48436-26cd-4039-913f-998fcc91ca8b',600000.00,'2023-01-02','2023-01-02 07:01:34','2023-01-02 07:01:34','46518551-ebbc-403e-a490-e77d32a6b360',1),('e066020e-0b8b-4c69-ac1a-98ea6f16c7be',900000.00,'2022-12-30','2022-12-30 06:41:51','2022-12-30 06:41:51','67511fe3-1697-48b8-96c7-c560a1b8e365',1),('f79d3cf7-da7e-463a-8788-4cdb89d50fdd',1650000.00,'2022-12-30','2022-12-30 06:46:51','2022-12-30 06:46:51','246aa4a8-0a6d-44cc-bcf7-0fdf69927d3e',1);
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
INSERT INTO `bookings` VALUES ('246aa4a8-0a6d-44cc-bcf7-0fdf69927d3e','Huong Son Hotel','2022-12-31','2023-01-04',2,1,'2022-12-30 06:46:51','2022-12-30 06:49:58','d7b28129-7778-46d4-a9a1-54244a31cb70','48d065f2-7d4f-42de-9e9f-31ed171feecb',1,1),('46518551-ebbc-403e-a490-e77d32a6b360','Raon Danang Beach','2023-01-03','2023-01-05',1,1,'2023-01-02 07:01:34','2023-01-02 07:03:48','5bc27742-7106-4577-ac42-a09e5707a1a9','48d065f2-7d4f-42de-9e9f-31ed171feecb',1,1),('67511fe3-1697-48b8-96c7-c560a1b8e365','White Sand Hotel and Apartment','2022-12-31','2023-01-02',2,2,'2022-12-30 06:41:51','2022-12-30 06:43:51','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','48d065f2-7d4f-42de-9e9f-31ed171feecb',1,1),('b71cd5ec-af9e-4aa3-ae8b-e2e28e8483bd','Little Home Hotel','2023-01-05','2023-01-07',1,1,'2023-01-04 03:44:54','2023-01-04 03:47:07','d02f8efd-61f3-440d-887a-0a70b4736114','48d065f2-7d4f-42de-9e9f-31ed171feecb',1,1);
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
INSERT INTO `customers` VALUES ('01704328-104d-4365-a53b-09f84be0f6ae','AdminBcroom','$2b$10$ymlRdBa7O4eFS5Ma51QfmuB1i2q9PQpZ/k91h7qNqGZxbQB2YeW6u','admin22@gmail.com',NULL,'Việt Nam','2023-01-04 04:05:10','2023-01-04 04:09:20','4dbb5cbe-093f-4c5d-af19-5fbe2b05196e',1),('26ae0f7d-1523-45f4-8c15-e6324917fdcc','Nguyễn Văn Tùng','$2b$10$2gwvo5Q5WotjlduiRXE3S.NZT5odUbcANO5ysuWEkbxvevIbnVeU.','tungdn@gmail.com',NULL,'Đà Nẵng','2023-01-02 07:21:28','2023-01-02 07:21:28','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('3cb29804-9995-4cd7-9f13-3e56bc0aeea8','Trí Phan','$2b$10$2lc/IapouWCz3urMI7S0ouhHVPWMR8GGDXf5wTRahQ5jIGA6etPru','damtridt1509@gmail.com',NULL,NULL,'2022-12-30 05:51:28','2022-12-30 05:51:28','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('48d065f2-7d4f-42de-9e9f-31ed171feecb','Hoàng Vũ','$2b$10$ergRh1OUd7b7wkoymQmB2OJFy.3nidsIlKbMl/Cr2oPAzUWFkqH62','hoangvu22062001@gmail.com','0927433814','Đà Nẵng','2022-12-30 03:41:30','2023-01-04 04:21:33','4dbb5cbe-093f-4c5d-af19-5fbe2b05196e',1),('48ff91af-e56c-4792-b0a9-c38eabc4ad61','Vincent Nguyễn','$2b$10$VrLB5hgfj4JFI005gCDXuOjXhHCYVAH/PDlzOfUd2PBqABPULeqqC','abc123@gmail.com',NULL,NULL,'2022-12-30 05:53:30','2022-12-30 05:53:30','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('a19c02c6-cfd9-4fa8-83d6-80b02fe21510','Phong Huỳnh','$2b$10$e6LyBBDBPscNrXlez9DaJek2oYG5a36EyTauHh7.y7bavKSnFzSe.','phonghuynh2591@gmail.com',NULL,NULL,'2022-12-30 05:48:48','2022-12-30 05:48:48','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1),('cc6d087e-dd36-454d-934f-18424538b70f','Hằng Nguyễn','$2b$10$26n29UHbX35rOdw0r42uC.6nrrt4AAFDeeoprRO21XNMs.TqFAQFW','nguyenthuyhang705@gmail.com',NULL,NULL,'2022-12-30 05:54:58','2022-12-30 05:54:58','5eea663f-92d4-4f8d-83a0-8fae233d3c3d',1);
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
INSERT INTO `customerviewedhotels` VALUES ('275bde98-ff37-4c17-a28c-748fac0b8f03','2022-12-30 06:46:37','2022-12-30 06:46:37','48d065f2-7d4f-42de-9e9f-31ed171feecb','3910855a-e491-4b3c-a186-0bfdc0d1bbb2'),('3ee4b200-48a3-433c-b57f-542164b389b1','2022-12-30 04:56:32','2022-12-30 04:56:32','48d065f2-7d4f-42de-9e9f-31ed171feecb','2a5c4e39-5853-4540-b78e-ddd7a62612ea'),('5150f23f-fed1-49a9-bcba-50d2773f5733','2023-01-04 03:55:17','2023-01-04 03:55:17','48d065f2-7d4f-42de-9e9f-31ed171feecb','67fff4cd-03e0-4bae-a8af-0c36cd9208b2'),('adce8d88-10a2-49c5-9cac-638eb80e74a4','2022-12-30 05:35:16','2022-12-30 05:35:16','48d065f2-7d4f-42de-9e9f-31ed171feecb','1dbb523f-eb99-4d85-a8d5-ee3be8c33171'),('b8bcc0d6-346d-4764-9e77-3e3ea1ced76f','2022-12-30 05:26:16','2022-12-30 05:26:16','48d065f2-7d4f-42de-9e9f-31ed171feecb','86fffc72-61ee-42d7-9f9f-5040dadde701'),('bca3f231-acfe-4e99-857e-19699679abe1','2022-12-30 05:06:58','2022-12-30 05:06:58','48d065f2-7d4f-42de-9e9f-31ed171feecb','0a83f065-8397-4757-b027-0be5d880ed05'),('d27d326f-55d8-44f3-9cd0-675eb05441ae','2022-12-30 06:09:58','2022-12-30 06:09:58','48d065f2-7d4f-42de-9e9f-31ed171feecb','8a9dc1b1-dca3-486f-8c12-ec60e4220acb');
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
INSERT INTO `hotels` VALUES ('0a83f065-8397-4757-b027-0be5d880ed05','Dragon Sea Hotel','82 Hà Bổng, Biển Mỹ Khê, Phước Mỹ, Sơn Trà, Việt Nam, Đà Nẵng','2022-12-30 05:06:37','2022-12-30 05:06:58','a19c02c6-cfd9-4fa8-83d6-80b02fe21510',2,'',1,'\nVị trí\nLưu trú tại Dragon Sea Hotel là một lựa chọn đúng đắn khi quý khách đến thăm Phước Mỹ.\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 5,41 km.\nkhách sạn nằm cách Da Nang Railway Station 3,81 km.\nkhách sạn này rất dễ tìm bởi vị trí đắc địa, nằm gần với nhiều tiện ích công cộng.',1),('1dbb523f-eb99-4d85-a8d5-ee3be8c33171','FIVITEL Queen','155-157 Le Quang Dao, Ngu Hanh Son, Việt Nam, Đà Nẵng','2022-12-30 05:34:39','2022-12-30 05:35:16','3cb29804-9995-4cd7-9f13-3e56bc0aeea8',3,'',1,'Tọa lạc ở thành phố Đà Nẵng, Queen\'s Finger Hotel Da Nang có nhà hàng, xe đạp cho khách sử dụng miễn phí, hồ bơi ngoài trời và quầy bar. Trong số các tiện nghi của chỗ nghỉ này có sảnh khách chung, bàn đặt tour và WiFi miễn phí trong toàn bộ khuôn viên. Nơi đây cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ cho khách.\n\nPhòng nghỉ tại Queen\'s Finger Hotel Da Nang được bố trí máy điều hòa, khu vực ghế ngồi, TV truyền hình cáp màn hình phẳng, két an toàn, ấm đun nước và phòng tắm riêng đi kèm vòi sen, dép cùng máy sấy tóc. Một số phòng có ban công trong khi các phòng còn lại nhìn ra biển. Mỗi phòng đều được trang bị ga trải giường và khăn tắm.\n\nChỗ nghỉ phục vụ bữa sáng buffet hằng ngày.\n\nQueen\'s Finger Hotel Da Nang có sân hiên.\n\nKhách sạn nằm cách Bãi biển Mỹ Khê 350 m và Bãi biển Bắc Mỹ An 500 m. Sân bay gần nhất là sân bay quốc tế Đà Nẵng, nằm trong bán kính 6 km từ Queen\'s Finger Hotel Da Nang, và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay với một khoản phụ phí.\n\nCác cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,0 cho kỳ nghỉ dành cho 2 người.',1),('2a5c4e39-5853-4540-b78e-ddd7a62612ea','White Sand Hotel and Apartment','89-91 Võ Văn Kiệt, Phường Phước Mỹ, Phước Mỹ, Sơn Trà,, Việt Nam, Đà Nẵng','2022-12-30 04:55:41','2022-12-30 04:56:32','48ff91af-e56c-4792-b0a9-c38eabc4ad61',3,'0932424250',1,'White Sand Hotel & Apartment là một khách sạn nằm trong khu vực an ninh, toạ lạc tại Phước Mỹ.\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 5,23 km.\nkhách sạn nằm cách Da Nang Railway Station 3,78 km.\nKhông chỉ sở hữu vị trí đắc địa, White Sand Hotel & Apartment còn là một trong những khách sạn nằm cách Cầu sông Hàn chưa đầy 2,29 km và Da Nang Railway Station chưa đầy 3,78 km.',1),('3910855a-e491-4b3c-a186-0bfdc0d1bbb2','Huong Son Hotel','147A CMT8, Phường Khuê Trung, Khuê Trung, Quận Cẩm Lệ, Việt Nam, Đà Nẵng','2022-12-30 06:39:14','2022-12-30 06:46:37','48d065f2-7d4f-42de-9e9f-31ed171feecb',3,'',1,'Huong Son Hotel toạ lạc tại khu vực / thành phố Khuê Trung.\n\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 3,01 km.\n\nkhách sạn nằm cách Da Nang Railway Station 5,9 km.\n\nCó rất nhiều điểm tham quan lân cận như Cầu sông Hàn ở khoảng cách 6,15 km, và Da Nang Railway Station ở khoảng cách 5,9 km.\n\nThông tin về Huong Son Hotel\n\nDành cho những du khách muốn du lịch thoải mái cùng ngân sách tiết kiệm, Huong Son Hotel sẽ là lựa chọn lưu trú hoàn hảo, nơi cung cấp các tiện nghi chất lượng và dịch vụ tuyệt vời.\n\nTừ sự kiện doanh nghiệp đến họp mặt công ty, Huong Son Hotel cung cấp đầy đủ các dịch vụ và tiện nghi đáp ứng mọi nhu cầu của quý khách và đồng nghiệp.\n\nHãy tận hưởng thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi giải trí tại Huong Son Hotel, một khách sạn tuyệt vời phù hợp cho mọi kỳ nghỉ bên người thân.',1),('487098ac-09b6-42ae-8d79-16adc87e8675','Green Đà Nẵng','64 Hoàng Văn Thái, Hòa Khánh Nam, Liên Chiểu, Việt Nam, Đà Nẵng','2022-12-30 06:16:59','2022-12-30 06:16:59','48d065f2-7d4f-42de-9e9f-31ed171feecb',3,'',1,'\nVị trí\nLưu trú tại Green Hotel Danang là một lựa chọn đúng đắn khi quý khách đến thăm Hòa Khánh Nam.\n\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 4,44 km.\n\nkhách sạn nằm cách Da Nang Railway Station 5,75 km.\n\nkhách sạn này rất dễ tìm bởi vị trí đắc địa, nằm gần với nhiều tiện ích công cộng.\n\nThông tin về Green Hotel Danang\n\nGreen Hotel Danang là đề xuất hàng đầu dành cho những tín đồ du lịch \"bụi\" mong muốn được nghỉ tại một khách sạn vừa thoải mái lại hợp túi tiền.\n\nDù quý khách muốn tổ chức một sự kiện hay các dịp kỷ niệm đặc biệt khác, Green Hotel Danang là lựa chọn tuyệt vời cho quý khách với phòng chức năng rộng lớn, được trang bị đầy đủ để sẵn sàng đáp ứng mọi yêu cầu.',0),('67fff4cd-03e0-4bae-a8af-0c36cd9208b2','Nguyễn Hoàng Vũ Vũ','12 Thanh Khê, Việt Nam, Đà Nẵng, Việt Nam, Đà Nẵng','2023-01-04 03:54:56','2023-01-04 03:59:57','48d065f2-7d4f-42de-9e9f-31ed171feecb',2,'0932424250',0,'bac',1),('81f6c8c8-5e1f-4103-89d9-b168e476732f','Val Soleil Hotel','186 Trần Phú, Phước Ninh, Quận Hải Châu, Việt Nam, Đà Nẵng','2022-12-30 05:46:58','2022-12-30 05:46:58','cc6d087e-dd36-454d-934f-18424538b70f',3,'',1,'Tọa lạc tại một vị trí hấp dẫn ở thành phố Đà Nẵng, Val Soleil Hotel cung cấp các phòng máy lạnh, hồ bơi ngoài trời, Wi-Fi miễn phí và trung tâm thể dục. Khách sạn  sao này có sảnh khách chung và dịch vụ phòng. Khách sạn có sân hiên và tầm nhìn ra quang cảnh thành phố, đồng thời du khách có thể thưởng thức bữa ăn tại nhà hàng hoặc đồ uống tại quầy bar.\n\nPhòng nghỉ tại khách sạn được trang bị bàn làm việc, TV màn hình phẳng, phòng tắm riêng, bộ khăn trải giường và khăn tắm. Tất cả các phòng đều có két an toàn và một số phòng nhìn ra quang cảnh núi non. Các phòng sẽ cung cấp cho khách tủ quần áo và ấm đun nước.\n\nDu khách có thể thưởng thức bữa sáng tự chọn, gọi món hoặc kiểu lục địa tại khách sạn.\n\nDu khách có thể tận dụng trung tâm dịch vụ doanh nhân hoặc thư giãn trong quán bar bán đồ ăn nhanh. Đội ngũ nhân viên thông thạo tiếng Anh và tiếng Việt tại quầy lễ tân sẽ sẵn lòng cung cấp cho du khách những lời khuyên hữu ích về khu vực.\n\nCác điểm tham quan nổi tiếng gần Val Soleil Hotel bao gồm Bảo tàng Chăm, Trung tâm thương mại Indochina Riverside và Cầu Sông Hàn. Sân bay gần nhất là Sân bay Quốc tế Đà Nẵng, cách chỗ nghỉ 3 km và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay có tính phí.\n\nCác cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,7 cho kỳ nghỉ hai người.',0),('86fffc72-61ee-42d7-9f9f-5040dadde701','Raon Danang Beach','5-7 An Thuong 32, My An, Ngu Hanh Son, Việt Nam, Đà Nẵng','2022-12-30 05:25:55','2022-12-30 05:26:16','48d065f2-7d4f-42de-9e9f-31ed171feecb',3,'',1,'Tọa lạc tại thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 400 m và Bãi biển Bắc Mỹ An chưa đầy 1 km, Raon Danang Beach cung cấp chỗ nghỉ với sảnh khách chung và WiFi miễn phí trong toàn bộ khuôn viên cũng như chỗ đỗ xe riêng miễn phí cho khách lái xe. Khách sạn 3 sao này có dịch vụ tiền sảnh và bàn đặt tour. Chỗ nghỉ cung cấp dịch vụ lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ cho khách.\n\nTất cả phòng nghỉ tại đây được trang bị máy điều hòa, TV truyền hình vệ tinh màn hình phẳng, tủ lạnh, ấm đun nước, vòi xịt/chậu rửa vệ sinh, dép và tủ để quần áo. Các phòng sử dụng phòng tắm chung với vòi sen. Một số phòng có ban công trong khi các phòng còn lại nhìn ra dòng sông. Mỗi phòng đều có phòng tắm riêng, máy sấy tóc và ga trải giường.\n\nTại khách sạn, du khách có thể thoải mái sử dụng hồ bơi trong nhà.\n\nRaon Danang Beach nằm trong bán kính 3 km từ Cầu khóa Tình yêu và 3,7 km từ Bảo tàng Chăm. Sân bay gần nhất là sân bay quốc tế Đà Nẵng, cách đó 7 km, và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay với một khoản phụ phí.\n\nCác cặp đôi đặc biệt thích địa điểm này — họ cho điểm 9,4 cho kỳ nghỉ dành cho 2 người.',1),('8a9dc1b1-dca3-486f-8c12-ec60e4220acb','Little Home Hotel','74 Lý Thái Tổ, Thạc Gián, Thanh Khê, Việt Nam, Đà Nẵng','2022-12-30 06:09:45','2022-12-30 06:09:58','48d065f2-7d4f-42de-9e9f-31ed171feecb',2,'',1,'Little Home Hotel là một khách sạn nằm trong khu vực an ninh, toạ lạc tại Thạc Gián.\n\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 2,7 km.\n\nkhách sạn nằm cách Da Nang Railway Station 0,59 km.\n\nKhông chỉ sở hữu vị trí đắc địa, Little Home Hotel còn là một trong những khách sạn nằm cách Cầu sông Hàn chưa đầy 1,78 km và Da Nang Railway Station chưa đầy 0,59 km.\n\nThông tin về Little Home Hotel\n\nDành cho những du khách muốn du lịch thoải mái cùng ngân sách tiết kiệm, Little Home Hotel sẽ là lựa chọn lưu trú hoàn hảo, nơi cung cấp các tiện nghi chất lượng và dịch vụ tuyệt vời.\n\nHãy tận hưởng thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi giải trí tại Little Home Hotel, một khách sạn tuyệt vời phù hợp cho mọi kỳ nghỉ bên người thân.\n\nNếu dự định có một kỳ nghỉ dài, thì Little Home Hotel chính là lựa chọn dành cho quý khách. Với đầy đủ tiện nghi với chất lượng dịch vụ tuyệt vời, Little Home Hotel sẽ khiến quý khách cảm thấy thoải mái như đang ở nhà vậy.',1),('edfe62fc-6f39-41de-a397-f8e95cefd91f','Le House Hotel and Studio','134 Lê Văn Thịnh, Hòa Minh, Liên Chiểu, Việt Nam, Đà Nẵng','2022-12-30 06:23:53','2022-12-30 06:23:53','48d065f2-7d4f-42de-9e9f-31ed171feecb',2,'',1,'\nVị trí\nLưu trú tại Le House Hotel and Studio là một lựa chọn đúng đắn khi quý khách đến thăm Hòa Minh.\n\nkhách sạn sở hữu vị trí đắc địa cách sân bay Sân bay quốc tế Đà Nẵng (DAD) 5,23 km.\n\nkhách sạn nằm cách Da Nang Railway Station 4,82 km.\n\nkhách sạn này rất dễ tìm bởi vị trí đắc địa, nằm gần với nhiều tiện ích công cộng.\n\nThông tin về Le House Hotel and Studio\n\nDành cho những du khách muốn du lịch thoải mái cùng ngân sách tiết kiệm, Le House Hotel and Studio sẽ là lựa chọn lưu trú hoàn hảo, nơi cung cấp các tiện nghi chất lượng và dịch vụ tuyệt vời.\n\nTừ sự kiện doanh nghiệp đến họp mặt công ty, Le House Hotel and Studio cung cấp đầy đủ các dịch vụ và tiện nghi đáp ứng mọi nhu cầu của quý khách và đồng nghiệp.\n\nHãy tận hưởng thời gian vui vẻ cùng cả gia đình với hàng loạt tiện nghi giải trí tại Le House Hotel and Studio, một khách sạn tuyệt vời phù hợp cho mọi kỳ nghỉ bên người thân.\n\nNếu dự định có một kỳ nghỉ dài, thì Le House Hotel and Studio chính là lựa chọn dành cho quý khách. Với đầy đủ tiện nghi với chất lượng dịch vụ tuyệt vời, Le House Hotel and Studio sẽ khiến quý khách cảm thấy thoải mái như đang ở nhà vậy.',0);
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
  `reviewId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`imageId`),
  KEY `Images_roomId_foreign_idx` (`roomId`),
  KEY `Images_hotelId_foreign_idx` (`hotelId`),
  KEY `Images_customerId_foreign_idx` (`customerId`),
  KEY `Images_voucherId_foreign_idx` (`voucherId`),
  KEY `Images_reviewId_foreign_idx` (`reviewId`),
  CONSTRAINT `Images_customerId_foreign_idx` FOREIGN KEY (`customerId`) REFERENCES `customers` (`customerId`),
  CONSTRAINT `Images_hotelId_foreign_idx` FOREIGN KEY (`hotelId`) REFERENCES `hotels` (`hotelId`),
  CONSTRAINT `Images_reviewId_foreign_idx` FOREIGN KEY (`reviewId`) REFERENCES `reviews` (`reviewId`),
  CONSTRAINT `Images_roomId_foreign_idx` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`),
  CONSTRAINT `Images_voucherId_foreign_idx` FOREIGN KEY (`voucherId`) REFERENCES `vouchers` (`voucherId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('049455ab-2334-4abd-96b0-11634d97e5e3','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa0091ce9-ca7c-42c3-b0da-976da7e9291d_Val%20Soleil%20Hotel_8.jpg?alt=media&token=a0091ce9-ca7c-42c3-b0da-976da7e9291d','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd',NULL,NULL,NULL,1,'thumbnails/a0091ce9-ca7c-42c3-b0da-976da7e9291d_Val Soleil Hotel_8.jpg',NULL),('083bcfec-3bee-4d38-8601-fdd1c6ec74ed','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe42b72b5-d0bb-4500-ba22-fb59df20e6f1_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_3.jpg?alt=media&token=e42b72b5-d0bb-4500-ba22-fb59df20e6f1','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd',NULL,NULL,NULL,1,'thumbnails/e42b72b5-d0bb-4500-ba22-fb59df20e6f1_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_3.jpg',NULL),('0afe246d-0128-49ef-b6d4-6dcd309b07b2','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2f42bd33-ad4c-471a-b81b-ddf3cbf977ce_Dragon%20Sea%20Hotel_4.jpg?alt=media&token=2f42bd33-ad4c-471a-b81b-ddf3cbf977ce','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/2f42bd33-ad4c-471a-b81b-ddf3cbf977ce_Dragon Sea Hotel_4.jpg',NULL),('0d04bb9d-683d-4ef3-a700-6aa08f6ee7e4','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fbe7dd344-2f3c-45d5-8f75-8b40ed43b12a_Huong%20Son%20Hotel_2.jpg?alt=media&token=be7dd344-2f3c-45d5-8f75-8b40ed43b12a','2022-12-30 06:39:14','2022-12-30 06:39:14',NULL,'3910855a-e491-4b3c-a186-0bfdc0d1bbb2',NULL,NULL,1,'thumbnails/be7dd344-2f3c-45d5-8f75-8b40ed43b12a_Huong Son Hotel_2.jpg',NULL),('0dec61a0-764a-4ed5-b536-a98448121a6f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fb7b614a3-7fbe-4e48-8aa8-7cb52ba949bf_Raon%20Danang%20Beach_4.jpg?alt=media&token=b7b614a3-7fbe-4e48-8aa8-7cb52ba949bf','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9',NULL,NULL,NULL,1,'thumbnails/b7b614a3-7fbe-4e48-8aa8-7cb52ba949bf_Raon Danang Beach_4.jpg',NULL),('1159a823-80a3-4ef1-9552-328359e5de44','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd74063c9-bb45-4215-8f30-61e2b95e190a_Le%20House%20Hotel%20and%20Studio_6.jpg?alt=media&token=d74063c9-bb45-4215-8f30-61e2b95e190a','2022-12-30 06:23:53','2022-12-30 06:23:53',NULL,'edfe62fc-6f39-41de-a397-f8e95cefd91f',NULL,NULL,1,'thumbnails/d74063c9-bb45-4215-8f30-61e2b95e190a_Le House Hotel and Studio_6.jpg',NULL),('1181b172-5b1b-4e81-822f-72b1985ecd3e','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/avatars%2Fc3d0d3a7-e45a-4fea-a8e0-4ec1caafa2d1_h2.jpg?alt=media&token=c3d0d3a7-e45a-4fea-a8e0-4ec1caafa2d1','2022-12-30 03:42:17','2022-12-30 03:42:17',NULL,NULL,'48d065f2-7d4f-42de-9e9f-31ed171feecb',NULL,1,'avatars/c3d0d3a7-e45a-4fea-a8e0-4ec1caafa2d1_h2.jpg',NULL),('16bc4cb1-21c4-4062-a5f6-c6e5cff56584','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Faf1bca1f-ef44-4c3f-8aa3-1848ea746ac1_Le%20House%20Hotel%20and%20Studio_3.jpg?alt=media&token=af1bca1f-ef44-4c3f-8aa3-1848ea746ac1','2022-12-30 06:23:53','2022-12-30 06:23:53',NULL,'edfe62fc-6f39-41de-a397-f8e95cefd91f',NULL,NULL,1,'thumbnails/af1bca1f-ef44-4c3f-8aa3-1848ea746ac1_Le House Hotel and Studio_3.jpg',NULL),('1bcfc6dc-d52d-4a90-99e4-8baadebeea2d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F863512bf-85f8-4859-aa44-10d449323fe9_Le%20House%20Hotel%20and%20Studio_2.jpg?alt=media&token=863512bf-85f8-4859-aa44-10d449323fe9','2022-12-30 06:23:53','2022-12-30 06:23:53',NULL,'edfe62fc-6f39-41de-a397-f8e95cefd91f',NULL,NULL,1,'thumbnails/863512bf-85f8-4859-aa44-10d449323fe9_Le House Hotel and Studio_2.jpg',NULL),('1ccb0523-20e8-47cb-b80c-8969cc8198d8','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fcdd7b537-8cbb-4fec-9c85-ceaac795ae96_Le%20House%20Hotel%20and%20Studio_6.jpg?alt=media&token=cdd7b537-8cbb-4fec-9c85-ceaac795ae96','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',NULL,NULL,NULL,1,'thumbnails/cdd7b537-8cbb-4fec-9c85-ceaac795ae96_Le House Hotel and Studio_6.jpg',NULL),('1d331349-8d41-469d-902b-2b4ea613c736','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F02b1f0e7-1395-497d-89f5-8595bbda24af_Raon%20Danang%20Beach_4.jpg?alt=media&token=02b1f0e7-1395-497d-89f5-8595bbda24af','2022-12-30 06:16:59','2022-12-30 06:16:59',NULL,'487098ac-09b6-42ae-8d79-16adc87e8675',NULL,NULL,1,'thumbnails/02b1f0e7-1395-497d-89f5-8595bbda24af_Raon Danang Beach_4.jpg',NULL),('1f7d07f2-a790-49d8-8911-7ddf24a736be','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F310ea225-573f-4da1-8c80-a98ea433ec35_Dragon%20Sea%20Hotel_6.jpg?alt=media&token=310ea225-573f-4da1-8c80-a98ea433ec35','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4',NULL,NULL,NULL,1,'thumbnails/310ea225-573f-4da1-8c80-a98ea433ec35_Dragon Sea Hotel_6.jpg',NULL),('22a9b909-3792-46ea-914e-6fe8dc5f0989','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ffb2aaecd-2aa1-4585-adbf-3d2859bd06a4_Raon%20Danang%20Beach_2.jpg?alt=media&token=fb2aaecd-2aa1-4585-adbf-3d2859bd06a4','2022-12-30 05:25:55','2022-12-30 05:25:55',NULL,'86fffc72-61ee-42d7-9f9f-5040dadde701',NULL,NULL,1,'thumbnails/fb2aaecd-2aa1-4585-adbf-3d2859bd06a4_Raon Danang Beach_2.jpg',NULL),('236f903f-7fc1-474f-b320-3dbca712bac3','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2a3920c6-0beb-47bf-86ef-4109ea665621_Little%20Home%20Hotel_4.jpg?alt=media&token=2a3920c6-0beb-47bf-86ef-4109ea665621','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114',NULL,NULL,NULL,1,'thumbnails/2a3920c6-0beb-47bf-86ef-4109ea665621_Little Home Hotel_4.jpg',NULL),('24692ef5-4a26-4159-b7db-533e7f839288','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ff6a39bc5-9a11-46aa-848c-4e4dbdcb19b1_Huong%20Son%20Hotel_1.jpg?alt=media&token=f6a39bc5-9a11-46aa-848c-4e4dbdcb19b1','2022-12-30 06:39:14','2022-12-30 06:39:14',NULL,'3910855a-e491-4b3c-a186-0bfdc0d1bbb2',NULL,NULL,1,'thumbnails/f6a39bc5-9a11-46aa-848c-4e4dbdcb19b1_Huong Son Hotel_1.jpg',NULL),('272d2437-6bf1-4237-9a41-cc8a9be373c1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe6108969-45a1-4cc6-8bee-ebeda159cfe8_Raon%20Danang%20Beach_9.jpg?alt=media&token=e6108969-45a1-4cc6-8bee-ebeda159cfe8','2022-12-30 05:25:55','2022-12-30 05:25:55',NULL,'86fffc72-61ee-42d7-9f9f-5040dadde701',NULL,NULL,1,'thumbnails/e6108969-45a1-4cc6-8bee-ebeda159cfe8_Raon Danang Beach_9.jpg',NULL),('288bea50-8253-46c0-b31d-e41f82232c36','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd338e3e4-618f-4978-bf0d-880ee7b012c3_FIVITEL%20Queen_5.jpg?alt=media&token=d338e3e4-618f-4978-bf0d-880ee7b012c3','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5',NULL,NULL,NULL,1,'thumbnails/d338e3e4-618f-4978-bf0d-880ee7b012c3_FIVITEL Queen_5.jpg',NULL),('28ce8349-ca24-44a2-b1a6-dbf66afb488d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe8edae42-266e-47af-be68-a9ffd2031c8a_Raon%20Danang%20Beach_6.jpg?alt=media&token=e8edae42-266e-47af-be68-a9ffd2031c8a','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9',NULL,NULL,NULL,1,'thumbnails/e8edae42-266e-47af-be68-a9ffd2031c8a_Raon Danang Beach_6.jpg',NULL),('30af5f1c-a1a8-4675-88bb-6268de50d0af','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F132ce064-c859-4156-9a17-97babb5cc87d_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_3.jpg?alt=media&token=132ce064-c859-4156-9a17-97babb5cc87d','2022-12-30 06:16:59','2022-12-30 06:16:59',NULL,'487098ac-09b6-42ae-8d79-16adc87e8675',NULL,NULL,1,'thumbnails/132ce064-c859-4156-9a17-97babb5cc87d_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_3.jpg',NULL),('324d3bf0-f51a-4b2e-866c-73dfcb20f823','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fce9b5f63-9762-4170-b910-2f9abc688f04_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_4.jpg?alt=media&token=ce9b5f63-9762-4170-b910-2f9abc688f04','2022-12-30 06:16:59','2022-12-30 06:16:59',NULL,'487098ac-09b6-42ae-8d79-16adc87e8675',NULL,NULL,1,'thumbnails/ce9b5f63-9762-4170-b910-2f9abc688f04_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_4.jpg',NULL),('3430002a-d753-4e95-a05f-a7f9ef8a870b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe96c71fb-e349-4c3b-841e-d33c493316ae_Val%20Soleil%20Hotel_6.jpg?alt=media&token=e96c71fb-e349-4c3b-841e-d33c493316ae','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd',NULL,NULL,NULL,1,'thumbnails/e96c71fb-e349-4c3b-841e-d33c493316ae_Val Soleil Hotel_6.jpg',NULL),('3566cb69-d2dd-4b5e-aab3-3e2694507934','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F9245eb38-bef1-4f99-a271-0ea298faa484_Little%20Home%20Hotel_2.jpg?alt=media&token=9245eb38-bef1-4f99-a271-0ea298faa484','2023-01-04 03:56:34','2023-01-04 03:56:34',NULL,'67fff4cd-03e0-4bae-a8af-0c36cd9208b2',NULL,NULL,1,NULL,NULL),('386017b5-a62b-43be-bd75-40e5b1fc0a37','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F292e8e6b-dc09-4c73-8b0a-e669596f5751_Dragon%20Sea%20Hotel_5.jpg?alt=media&token=292e8e6b-dc09-4c73-8b0a-e669596f5751','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114',NULL,NULL,NULL,1,'thumbnails/292e8e6b-dc09-4c73-8b0a-e669596f5751_Dragon Sea Hotel_5.jpg',NULL),('38f2f5f0-291b-4cb7-bd01-ac72cc845b3a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc272cdb2-2fe6-4412-9c37-deee6b821e1b_Le%20House%20Hotel%20and%20Studio_5.jpg?alt=media&token=c272cdb2-2fe6-4412-9c37-deee6b821e1b','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',NULL,NULL,NULL,1,'thumbnails/c272cdb2-2fe6-4412-9c37-deee6b821e1b_Le House Hotel and Studio_5.jpg',NULL),('3bc01827-801c-4678-9ef5-b44cfcd2ac46','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fb58165f0-e8bd-4efd-b3fc-0d7bf4a28a8d_White%20Sand%20Hotel%20%26%20Apartment_1.webp?alt=media&token=b58165f0-e8bd-4efd-b3fc-0d7bf4a28a8d','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',NULL,NULL,NULL,1,'thumbnails/b58165f0-e8bd-4efd-b3fc-0d7bf4a28a8d_White Sand Hotel & Apartment_1.webp',NULL),('3e6d3776-388d-401c-b036-070c675153c7','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa123f641-0196-483f-bc38-e8b31ccd7d03_Val%20Soleil%20Hotel_9.jpg?alt=media&token=a123f641-0196-483f-bc38-e8b31ccd7d03','2022-12-30 05:46:58','2022-12-30 05:46:58',NULL,'81f6c8c8-5e1f-4103-89d9-b168e476732f',NULL,NULL,1,'thumbnails/a123f641-0196-483f-bc38-e8b31ccd7d03_Val Soleil Hotel_9.jpg',NULL),('3fe65c02-421d-43b7-8ccd-8e39585904ec','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F73469fdb-6bd2-4f15-9ba8-3fb466877535_Val%20Soleil%20Hotel_6.jpg?alt=media&token=73469fdb-6bd2-4f15-9ba8-3fb466877535','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',NULL,NULL,NULL,1,'thumbnails/73469fdb-6bd2-4f15-9ba8-3fb466877535_Val Soleil Hotel_6.jpg',NULL),('4092ea20-63e7-49c2-8d47-c43cb7e748c0','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F081f1db0-97d9-4ba0-a126-dcb399380e79_Val%20Soleil%20Hotel_2.jpg?alt=media&token=081f1db0-97d9-4ba0-a126-dcb399380e79','2022-12-30 05:46:58','2022-12-30 05:46:58',NULL,'81f6c8c8-5e1f-4103-89d9-b168e476732f',NULL,NULL,1,'thumbnails/081f1db0-97d9-4ba0-a126-dcb399380e79_Val Soleil Hotel_2.jpg',NULL),('428ec183-8f66-40ff-94a0-d8c74fb84846','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F31788eb1-a9ac-4de6-8c79-44ec2028221e_Little%20Home%20Hotel_2.jpg?alt=media&token=31788eb1-a9ac-4de6-8c79-44ec2028221e','2022-12-30 06:09:45','2022-12-30 06:09:45',NULL,'8a9dc1b1-dca3-486f-8c12-ec60e4220acb',NULL,NULL,1,'thumbnails/31788eb1-a9ac-4de6-8c79-44ec2028221e_Little Home Hotel_2.jpg',NULL),('44b98cc1-94a3-4f7a-9ad4-1de83380e8c9','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F71530c53-1bea-43ad-bcf4-82d95ea044ce_White%20Sand%20Hotel%20%26%20Apartment_2.webp?alt=media&token=71530c53-1bea-43ad-bcf4-82d95ea044ce','2022-12-30 04:55:41','2022-12-30 04:55:41',NULL,'2a5c4e39-5853-4540-b78e-ddd7a62612ea',NULL,NULL,1,'thumbnails/71530c53-1bea-43ad-bcf4-82d95ea044ce_White Sand Hotel & Apartment_2.webp',NULL),('4dcfa1cf-af56-4a5a-8fe6-5f5ffc73c28c','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F742c0dc0-a73d-4fba-b432-5d45befca660_White%20Sand%20Hotel%20%26%20Apartment_4.webp?alt=media&token=742c0dc0-a73d-4fba-b432-5d45befca660','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',NULL,NULL,NULL,1,'thumbnails/742c0dc0-a73d-4fba-b432-5d45befca660_White Sand Hotel & Apartment_4.webp',NULL),('4e71977a-3e01-4e64-9cad-300f6bcc2660','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fceea8bb0-fd9d-4f8f-bc6f-4cbce68be323_Val%20Soleil%20Hotel_3.jpg?alt=media&token=ceea8bb0-fd9d-4f8f-bc6f-4cbce68be323','2022-12-30 05:46:58','2022-12-30 05:46:58',NULL,'81f6c8c8-5e1f-4103-89d9-b168e476732f',NULL,NULL,1,'thumbnails/ceea8bb0-fd9d-4f8f-bc6f-4cbce68be323_Val Soleil Hotel_3.jpg',NULL),('51f50990-27a2-4be1-843e-68b37ebe9469','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F78ca80b1-b594-4df1-bbed-80fd9e276e19_Little%20Home%20Hotel_5.jpg?alt=media&token=78ca80b1-b594-4df1-bbed-80fd9e276e19','2022-12-30 06:09:45','2022-12-30 06:09:45',NULL,'8a9dc1b1-dca3-486f-8c12-ec60e4220acb',NULL,NULL,1,'thumbnails/78ca80b1-b594-4df1-bbed-80fd9e276e19_Little Home Hotel_5.jpg',NULL),('5a6113aa-ce13-4fd2-905a-0a91fc097a33','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe6101a39-0f62-43cb-8166-2cbe2b2995a0_FIVITEL%20Queen_1.jpg?alt=media&token=e6101a39-0f62-43cb-8166-2cbe2b2995a0','2022-12-30 05:34:39','2022-12-30 05:34:39',NULL,'1dbb523f-eb99-4d85-a8d5-ee3be8c33171',NULL,NULL,1,'thumbnails/e6101a39-0f62-43cb-8166-2cbe2b2995a0_FIVITEL Queen_1.jpg',NULL),('5db7d9ca-3acd-4e01-843e-4e790616d301','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fb1b92874-b9b9-42cb-9385-e458baf8856d_FIVITEL%20Queen_4.jpg?alt=media&token=b1b92874-b9b9-42cb-9385-e458baf8856d','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5',NULL,NULL,NULL,1,'thumbnails/b1b92874-b9b9-42cb-9385-e458baf8856d_FIVITEL Queen_4.jpg',NULL),('5e4e1b82-48b9-46b6-9c11-d52f2d00ca55','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ffb031b95-3018-4e02-9594-7585db0cb5b3_Dragon%20Sea%20Hotel_5.jpg?alt=media&token=fb031b95-3018-4e02-9594-7585db0cb5b3','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/fb031b95-3018-4e02-9594-7585db0cb5b3_Dragon Sea Hotel_5.jpg',NULL),('62ae52bb-1c7e-47fb-90cc-a95f4508f8ea','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F08b51ec8-721b-4022-ba5c-47cef0976b61_Le%20House%20Hotel%20and%20Studio_7.jpg?alt=media&token=08b51ec8-721b-4022-ba5c-47cef0976b61','2022-12-30 06:23:53','2022-12-30 06:23:53',NULL,'edfe62fc-6f39-41de-a397-f8e95cefd91f',NULL,NULL,1,'thumbnails/08b51ec8-721b-4022-ba5c-47cef0976b61_Le House Hotel and Studio_7.jpg',NULL),('64e5803c-3d19-49ef-a391-fb1b42899796','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F0ba35eed-c7ac-4631-bbb7-a27873b619f6_Huong%20Son%20Hotel_6.jpg?alt=media&token=0ba35eed-c7ac-4631-bbb7-a27873b619f6','2022-12-30 06:39:14','2022-12-30 06:39:14',NULL,'3910855a-e491-4b3c-a186-0bfdc0d1bbb2',NULL,NULL,1,'thumbnails/0ba35eed-c7ac-4631-bbb7-a27873b619f6_Huong Son Hotel_6.jpg',NULL),('6c9293d9-c3d1-4c2f-bcea-c2b145e62eec','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ff359238f-6f47-42e3-aec0-d9f36ffa36c7_Le%20House%20Hotel%20and%20Studio_1.webp?alt=media&token=f359238f-6f47-42e3-aec0-d9f36ffa36c7','2022-12-30 06:23:53','2022-12-30 06:23:53',NULL,'edfe62fc-6f39-41de-a397-f8e95cefd91f',NULL,NULL,1,'thumbnails/f359238f-6f47-42e3-aec0-d9f36ffa36c7_Le House Hotel and Studio_1.webp',NULL),('6dd9d5df-ef7e-44f8-bf34-d8b0c16086d1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fe009d83f-15c8-42fe-afc4-dafbc86a1f2b_Little%20Home%20Hotel_6.jpg?alt=media&token=e009d83f-15c8-42fe-afc4-dafbc86a1f2b','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114',NULL,NULL,NULL,1,'thumbnails/e009d83f-15c8-42fe-afc4-dafbc86a1f2b_Little Home Hotel_6.jpg',NULL),('6e65efa1-f563-44f6-934c-3bfd081e6783','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Febdaa717-2e05-42b8-9c97-2cd6d6b51ea7_Dragon%20Sea%20Hotel_4.jpg?alt=media&token=ebdaa717-2e05-42b8-9c97-2cd6d6b51ea7','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4',NULL,NULL,NULL,1,'thumbnails/ebdaa717-2e05-42b8-9c97-2cd6d6b51ea7_Dragon Sea Hotel_4.jpg',NULL),('70c8754e-2542-4cad-976c-814de106c6f7','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fdf83e681-a64f-43d0-a975-c80fb19a6452_Raon%20Danang%20Beach_5.jpg?alt=media&token=df83e681-a64f-43d0-a975-c80fb19a6452','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9',NULL,NULL,NULL,1,'thumbnails/df83e681-a64f-43d0-a975-c80fb19a6452_Raon Danang Beach_5.jpg',NULL),('70d56e63-e9f4-42a2-9a00-d2985e8bb262','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F800ecb25-63f7-4869-b13a-ef529efca7db_White%20Sand%20Hotel%20%26%20Apartment_8.jpg?alt=media&token=800ecb25-63f7-4869-b13a-ef529efca7db','2022-12-30 04:55:41','2022-12-30 04:55:41',NULL,'2a5c4e39-5853-4540-b78e-ddd7a62612ea',NULL,NULL,1,'thumbnails/800ecb25-63f7-4869-b13a-ef529efca7db_White Sand Hotel & Apartment_8.jpg',NULL),('772b0562-07c7-4cff-8f53-4795d23c5596','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F03741558-1585-4b40-ae98-61e5b0cfd106_Dragon%20Sea%20Hotel_3.jpg?alt=media&token=03741558-1585-4b40-ae98-61e5b0cfd106','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/03741558-1585-4b40-ae98-61e5b0cfd106_Dragon Sea Hotel_3.jpg',NULL),('77ae1127-8ea9-4bc1-8dad-e7bb1311bc93','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F695e3c53-1163-497d-9822-5f2d9b40b2cd_FIVITEL%20Queen_6.png?alt=media&token=695e3c53-1163-497d-9822-5f2d9b40b2cd','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5',NULL,NULL,NULL,1,'thumbnails/695e3c53-1163-497d-9822-5f2d9b40b2cd_FIVITEL Queen_6.png',NULL),('787e6a7f-4e64-4d71-901b-c4e39a4cc8f9','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F577ffe0b-bebf-4ed6-9809-a963496284c8_White%20Sand%20Hotel%20%26%20Apartment_2.webp?alt=media&token=577ffe0b-bebf-4ed6-9809-a963496284c8','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',NULL,NULL,NULL,1,'thumbnails/577ffe0b-bebf-4ed6-9809-a963496284c8_White Sand Hotel & Apartment_2.webp',NULL),('8449c26b-a3f6-4834-b9ab-dcf58c41b4ce','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F89d6cf48-9f30-4f1e-a2fe-b6412f16abc0_Raon%20Danang%20Beach_8.jpg?alt=media&token=89d6cf48-9f30-4f1e-a2fe-b6412f16abc0','2022-12-30 05:25:55','2022-12-30 05:25:55',NULL,'86fffc72-61ee-42d7-9f9f-5040dadde701',NULL,NULL,1,'thumbnails/89d6cf48-9f30-4f1e-a2fe-b6412f16abc0_Raon Danang Beach_8.jpg',NULL),('8656304b-acd8-46a6-98c0-edcc147d274d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F8dc987e7-4ff8-4589-bb40-99d741a6e316_FIVITEL%20Queen_5.jpg?alt=media&token=8dc987e7-4ff8-4589-bb40-99d741a6e316','2022-12-30 05:34:39','2022-12-30 05:34:39',NULL,'1dbb523f-eb99-4d85-a8d5-ee3be8c33171',NULL,NULL,1,'thumbnails/8dc987e7-4ff8-4589-bb40-99d741a6e316_FIVITEL Queen_5.jpg',NULL),('8807c6e6-e0ef-4645-89d3-0828719521fa','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fbdb53346-c848-4eea-88db-6054bbd9c5e0_Dragon%20Sea%20Hotel_3.jpg?alt=media&token=bdb53346-c848-4eea-88db-6054bbd9c5e0','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4',NULL,NULL,NULL,1,'thumbnails/bdb53346-c848-4eea-88db-6054bbd9c5e0_Dragon Sea Hotel_3.jpg',NULL),('908464a4-f29c-4878-a1c5-2f2926af05c8','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd140c218-c8d1-4798-85db-85a469078b40_Val%20Soleil%20Hotel_1.jpg?alt=media&token=d140c218-c8d1-4798-85db-85a469078b40','2022-12-30 05:46:58','2022-12-30 05:46:58',NULL,'81f6c8c8-5e1f-4103-89d9-b168e476732f',NULL,NULL,1,'thumbnails/d140c218-c8d1-4798-85db-85a469078b40_Val Soleil Hotel_1.jpg',NULL),('90fc0abb-18bb-4b00-9d49-f3a0c6554431','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa493b744-e462-481c-ab9d-0d5ceef9e770_Little%20Home%20Hotel_1.jpg?alt=media&token=a493b744-e462-481c-ab9d-0d5ceef9e770','2023-01-04 03:56:34','2023-01-04 03:56:34',NULL,'67fff4cd-03e0-4bae-a8af-0c36cd9208b2',NULL,NULL,1,NULL,NULL),('920a0e9a-ede9-48b2-a09a-d351ed5189cf','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa493b744-e462-481c-ab9d-0d5ceef9e770_Little%20Home%20Hotel_1.jpg?alt=media&token=a493b744-e462-481c-ab9d-0d5ceef9e770','2023-01-04 03:56:34','2023-01-04 03:56:34',NULL,'67fff4cd-03e0-4bae-a8af-0c36cd9208b2',NULL,NULL,1,NULL,NULL),('932f1a63-959b-4de4-96b1-25546fcc27f0','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ff8a9c787-0c6f-4168-ba0b-4ea2c5731eb4_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_4.jpg?alt=media&token=f8a9c787-0c6f-4168-ba0b-4ea2c5731eb4','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd',NULL,NULL,NULL,1,'thumbnails/f8a9c787-0c6f-4168-ba0b-4ea2c5731eb4_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_4.jpg',NULL),('94b65a55-2f0c-499b-adb2-a1a7973c5df2','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2c5b71d1-5e18-4540-adcc-d0801e9fe9f9_Val%20Soleil%20Hotel_8.jpg?alt=media&token=2c5b71d1-5e18-4540-adcc-d0801e9fe9f9','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',NULL,NULL,NULL,1,'thumbnails/2c5b71d1-5e18-4540-adcc-d0801e9fe9f9_Val Soleil Hotel_8.jpg',NULL),('9b18bfce-58b4-4c30-9395-f7c9052fabfe','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Faf3d280f-febb-4a3b-9446-5b5eccea2608_Raon%20Danang%20Beach_7.jpg?alt=media&token=af3d280f-febb-4a3b-9446-5b5eccea2608','2022-12-30 05:25:55','2022-12-30 05:25:55',NULL,'86fffc72-61ee-42d7-9f9f-5040dadde701',NULL,NULL,1,'thumbnails/af3d280f-febb-4a3b-9446-5b5eccea2608_Raon Danang Beach_7.jpg',NULL),('a35692f2-bc7a-4c10-b651-a87ba6cfc1a5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd45da796-d1ee-4e16-b127-51b5ddaf62ec_Dragon%20Sea%20Hotel_2.jpg?alt=media&token=d45da796-d1ee-4e16-b127-51b5ddaf62ec','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/d45da796-d1ee-4e16-b127-51b5ddaf62ec_Dragon Sea Hotel_2.jpg',NULL),('a7654183-7ac2-4b41-a1e8-cdfc62b622ad','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F9245eb38-bef1-4f99-a271-0ea298faa484_Little%20Home%20Hotel_2.jpg?alt=media&token=9245eb38-bef1-4f99-a271-0ea298faa484','2023-01-04 03:56:34','2023-01-04 03:56:34',NULL,'67fff4cd-03e0-4bae-a8af-0c36cd9208b2',NULL,NULL,1,NULL,NULL),('a7f8349f-a513-4fed-8ea9-18e03f02f807','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6a77837a-8830-4587-8cd8-9b27b2905f79_Dragon%20Sea%20Hotel_5.jpg?alt=media&token=6a77837a-8830-4587-8cd8-9b27b2905f79','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4',NULL,NULL,NULL,1,'thumbnails/6a77837a-8830-4587-8cd8-9b27b2905f79_Dragon Sea Hotel_5.jpg',NULL),('a938c0b8-53b0-48b7-b7cf-bdbb4ec3195a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F0c4ef921-de69-4a8f-9522-d2e957fb6a0e_Raon%20Danang%20Beach_1.jpg?alt=media&token=0c4ef921-de69-4a8f-9522-d2e957fb6a0e','2022-12-30 05:25:55','2022-12-30 05:25:55',NULL,'86fffc72-61ee-42d7-9f9f-5040dadde701',NULL,NULL,1,'thumbnails/0c4ef921-de69-4a8f-9522-d2e957fb6a0e_Raon Danang Beach_1.jpg',NULL),('a96cbf61-2b22-4f63-95b2-7305b3eafda2','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F60e81689-948f-4f5f-9baa-e386a4b3d796_Huong%20Son%20Hotel_4.jpg?alt=media&token=60e81689-948f-4f5f-9baa-e386a4b3d796','2022-12-30 06:39:15','2022-12-30 06:39:15','d7b28129-7778-46d4-a9a1-54244a31cb70',NULL,NULL,NULL,1,'thumbnails/60e81689-948f-4f5f-9baa-e386a4b3d796_Huong Son Hotel_4.jpg',NULL),('aaa0f8c8-01ac-4a4a-b832-6354c364aff0','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2503b167-3c95-4b16-a173-5fb3f57d38c1_Val%20Soleil%20Hotel_7.jpg?alt=media&token=2503b167-3c95-4b16-a173-5fb3f57d38c1','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',NULL,NULL,NULL,1,'thumbnails/2503b167-3c95-4b16-a173-5fb3f57d38c1_Val Soleil Hotel_7.jpg',NULL),('ad211b1c-9110-4574-8f63-1b6f6391e6d6','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F5a68c007-e902-40fc-80fa-055e6b5414ba_FIVITEL%20Queen_3.jpg?alt=media&token=5a68c007-e902-40fc-80fa-055e6b5414ba','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5',NULL,NULL,NULL,1,'thumbnails/5a68c007-e902-40fc-80fa-055e6b5414ba_FIVITEL Queen_3.jpg',NULL),('ae071259-0399-405d-90d2-807786f0d4a5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F57a11366-6c4c-46fa-ae1c-1ab8ba13aa93_Little%20Home%20Hotel_6.jpg?alt=media&token=57a11366-6c4c-46fa-ae1c-1ab8ba13aa93','2022-12-30 06:09:45','2022-12-30 06:09:45',NULL,'8a9dc1b1-dca3-486f-8c12-ec60e4220acb',NULL,NULL,1,'thumbnails/57a11366-6c4c-46fa-ae1c-1ab8ba13aa93_Little Home Hotel_6.jpg',NULL),('b3820800-72b0-497f-b8a5-1b2745b3a4df','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6e7a71ec-d9dc-47bf-8338-5f728d00fa8d_FIVITEL%20Queen_8.png?alt=media&token=6e7a71ec-d9dc-47bf-8338-5f728d00fa8d','2022-12-30 05:34:39','2022-12-30 05:34:39',NULL,'1dbb523f-eb99-4d85-a8d5-ee3be8c33171',NULL,NULL,1,'thumbnails/6e7a71ec-d9dc-47bf-8338-5f728d00fa8d_FIVITEL Queen_8.png',NULL),('b4b1c901-aa20-44a4-a410-2bd263c59461','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fde0ed53f-6dd7-4c10-bc77-1d373a4ddef0_Raon%20Danang%20Beach_3.jpg?alt=media&token=de0ed53f-6dd7-4c10-bc77-1d373a4ddef0','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9',NULL,NULL,NULL,1,'thumbnails/de0ed53f-6dd7-4c10-bc77-1d373a4ddef0_Raon Danang Beach_3.jpg',NULL),('b5d9c3b2-e9f9-4c77-b3c7-5005b9a7aea1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa6edd2fc-6f94-409a-a99b-d308faf33453_Huong%20Son%20Hotel_5.jpg?alt=media&token=a6edd2fc-6f94-409a-a99b-d308faf33453','2022-12-30 06:39:14','2022-12-30 06:39:14',NULL,'3910855a-e491-4b3c-a186-0bfdc0d1bbb2',NULL,NULL,1,'thumbnails/a6edd2fc-6f94-409a-a99b-d308faf33453_Huong Son Hotel_5.jpg',NULL),('b7254471-21af-47e3-b756-2640b1659807','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd0e3e822-49b9-42bc-98e2-1a0718dfd523_Little%20Home%20Hotel_1.jpg?alt=media&token=d0e3e822-49b9-42bc-98e2-1a0718dfd523','2022-12-30 06:09:45','2022-12-30 06:09:45',NULL,'8a9dc1b1-dca3-486f-8c12-ec60e4220acb',NULL,NULL,1,'thumbnails/d0e3e822-49b9-42bc-98e2-1a0718dfd523_Little Home Hotel_1.jpg',NULL),('b84e85ca-4c9a-4fa5-98bf-560518451132','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F82ed0acf-8017-4f52-94be-c48881b41d94_Val%20Soleil%20Hotel_9.jpg?alt=media&token=82ed0acf-8017-4f52-94be-c48881b41d94','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',NULL,NULL,NULL,1,'thumbnails/82ed0acf-8017-4f52-94be-c48881b41d94_Val Soleil Hotel_9.jpg',NULL),('baed24b7-5fc4-40f4-9856-b551d77645ae','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fa015c2bb-3161-4238-ab32-badf4802e0ac_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_2.jpg?alt=media&token=a015c2bb-3161-4238-ab32-badf4802e0ac','2022-12-30 06:16:59','2022-12-30 06:16:59',NULL,'487098ac-09b6-42ae-8d79-16adc87e8675',NULL,NULL,1,'thumbnails/a015c2bb-3161-4238-ab32-badf4802e0ac_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_2.jpg',NULL),('bdfa4da3-3e2d-432d-a20e-64a6ef647a53','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fc70a3fec-c679-42be-8102-858ff418fcfa_Val%20Soleil%20Hotel_5.jpg?alt=media&token=c70a3fec-c679-42be-8102-858ff418fcfa','2022-12-30 05:46:58','2022-12-30 05:46:58',NULL,'81f6c8c8-5e1f-4103-89d9-b168e476732f',NULL,NULL,1,'thumbnails/c70a3fec-c679-42be-8102-858ff418fcfa_Val Soleil Hotel_5.jpg',NULL),('bf0e82eb-22e4-424c-a1fe-900a77585a2f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2f991231-f4e5-4b53-ab6e-2460f441a3fe_Huong%20Son%20Hotel_3.jpg?alt=media&token=2f991231-f4e5-4b53-ab6e-2460f441a3fe','2022-12-30 06:39:15','2022-12-30 06:39:15','d7b28129-7778-46d4-a9a1-54244a31cb70',NULL,NULL,NULL,1,'thumbnails/2f991231-f4e5-4b53-ab6e-2460f441a3fe_Huong Son Hotel_3.jpg',NULL),('c153922c-69dd-4fb9-a2ed-aece2a3256ed','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fcfa86116-a932-43ef-89a0-dadd48270373_White%20Sand%20Hotel%20%26%20Apartment_1.webp?alt=media&token=cfa86116-a932-43ef-89a0-dadd48270373','2022-12-30 06:44:56','2022-12-30 06:44:56',NULL,NULL,NULL,NULL,1,'thumbnails/cfa86116-a932-43ef-89a0-dadd48270373_White Sand Hotel & Apartment_1.webp','b8210e87-12b9-4c16-9daf-ee59ee4b3ee6'),('c17c5144-2f15-4163-89af-1ca92a33302d','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fafbebfeb-ce79-4155-934f-6bf75d7a37ee_White%20Sand%20Hotel%20%26%20Apartment_6.1.jpg?alt=media&token=afbebfeb-ce79-4155-934f-6bf75d7a37ee','2022-12-30 04:55:41','2022-12-30 04:55:41',NULL,'2a5c4e39-5853-4540-b78e-ddd7a62612ea',NULL,NULL,1,'thumbnails/afbebfeb-ce79-4155-934f-6bf75d7a37ee_White Sand Hotel & Apartment_6.1.jpg',NULL),('c647da41-951e-4c9d-934f-a065c4699536','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F0aee787f-88c4-4fe5-9643-65e8a84478c8_FIVITEL%20Queen_2.jpg?alt=media&token=0aee787f-88c4-4fe5-9643-65e8a84478c8','2022-12-30 05:34:39','2022-12-30 05:34:39',NULL,'1dbb523f-eb99-4d85-a8d5-ee3be8c33171',NULL,NULL,1,'thumbnails/0aee787f-88c4-4fe5-9643-65e8a84478c8_FIVITEL Queen_2.jpg',NULL),('c7f74437-38d3-43ee-9c40-f727d9913e7b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2ad31b8d-8dac-40ed-a5d2-a9cfa655b553_White%20Sand%20Hotel%20%26%20Apartment_7.jpg?alt=media&token=2ad31b8d-8dac-40ed-a5d2-a9cfa655b553','2022-12-30 04:55:41','2022-12-30 04:55:41',NULL,'2a5c4e39-5853-4540-b78e-ddd7a62612ea',NULL,NULL,1,'thumbnails/2ad31b8d-8dac-40ed-a5d2-a9cfa655b553_White Sand Hotel & Apartment_7.jpg',NULL),('c9f65739-b80f-44f7-ab8f-9998fad17773','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6de0e593-704c-4c01-832f-4fba9b0f9875_Little%20Home%20Hotel_2.jpg?alt=media&token=6de0e593-704c-4c01-832f-4fba9b0f9875','2023-01-04 03:57:58','2023-01-04 03:57:58','cc3b8c21-575b-4eb8-85b0-bc8466e47105',NULL,NULL,NULL,1,'thumbnails/6de0e593-704c-4c01-832f-4fba9b0f9875_Little Home Hotel_2.jpg',NULL),('cca67347-4684-4e6c-98d8-debf026d88e1','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F55130175-f4d6-49b2-803b-44843987f660_Dragon%20Sea%20Hotel_6.jpg?alt=media&token=55130175-f4d6-49b2-803b-44843987f660','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/55130175-f4d6-49b2-803b-44843987f660_Dragon Sea Hotel_6.jpg',NULL),('d4b65dcb-95b3-4efe-a9ec-be7121427abc','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ffd2757be-0946-4b91-8212-3da223c0c8dd_Little%20Home%20Hotel_2.jpg?alt=media&token=fd2757be-0946-4b91-8212-3da223c0c8dd','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec',NULL,NULL,NULL,1,'thumbnails/fd2757be-0946-4b91-8212-3da223c0c8dd_Little Home Hotel_2.jpg',NULL),('d620e193-83d5-42f7-ad6d-664fae5f1202','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Fd1bb7b26-f852-47ab-abe8-4795e0b5593c_White%20Sand%20Hotel%20%26%20Apartment_3.webp?alt=media&token=d1bb7b26-f852-47ab-abe8-4795e0b5593c','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',NULL,NULL,NULL,1,'thumbnails/d1bb7b26-f852-47ab-abe8-4795e0b5593c_White Sand Hotel & Apartment_3.webp',NULL),('d6bf75cf-6eb4-4b75-a6d3-e04cfccf472f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F9b75e96b-bea8-454d-b514-3f4984f37f14_White%20Sand%20Hotel%20%26%20Apartment_1.webp?alt=media&token=9b75e96b-bea8-454d-b514-3f4984f37f14','2022-12-30 04:55:41','2022-12-30 04:55:41',NULL,'2a5c4e39-5853-4540-b78e-ddd7a62612ea',NULL,NULL,1,'thumbnails/9b75e96b-bea8-454d-b514-3f4984f37f14_White Sand Hotel & Apartment_1.webp',NULL),('da16415d-f39d-4cb2-8dcf-13d0653d9b4a','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F7bd3e40f-3560-4842-b977-3048af6dcd76_Huong%20Son%20Hotel_6.jpg?alt=media&token=7bd3e40f-3560-4842-b977-3048af6dcd76','2022-12-30 06:39:15','2022-12-30 06:39:15','d7b28129-7778-46d4-a9a1-54244a31cb70',NULL,NULL,NULL,1,'thumbnails/7bd3e40f-3560-4842-b977-3048af6dcd76_Huong Son Hotel_6.jpg',NULL),('df32755f-dd7c-478d-b522-334c1f787240','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Feb2a9d28-d431-4536-8b2e-5b60eedad6b0_Dragon%20Sea%20Hotel_1.jpg?alt=media&token=eb2a9d28-d431-4536-8b2e-5b60eedad6b0','2022-12-30 05:06:37','2022-12-30 05:06:37',NULL,'0a83f065-8397-4757-b027-0be5d880ed05',NULL,NULL,1,'thumbnails/eb2a9d28-d431-4536-8b2e-5b60eedad6b0_Dragon Sea Hotel_1.jpg',NULL),('e63928b7-b9c8-4f53-86da-b9970bcce40f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F377c77a4-95c6-4ad9-9e98-8959d64fd89c_Dragon%20Sea%20Hotel_2.jpg?alt=media&token=377c77a4-95c6-4ad9-9e98-8959d64fd89c','2023-01-02 08:24:29','2023-01-02 08:24:29',NULL,NULL,NULL,NULL,1,'thumbnails/377c77a4-95c6-4ad9-9e98-8959d64fd89c_Dragon Sea Hotel_2.jpg','9e3f5a87-56b0-445d-aad3-2cf62d03d0b5'),('eb4517ec-2e01-4a6d-9994-48d228d10b2b','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F207c7c6c-16e4-4ee3-8636-fc0d1a82be7f_Huong%20Son%20Hotel_3.jpg?alt=media&token=207c7c6c-16e4-4ee3-8636-fc0d1a82be7f','2022-12-30 06:39:14','2022-12-30 06:39:14',NULL,'3910855a-e491-4b3c-a186-0bfdc0d1bbb2',NULL,NULL,1,'thumbnails/207c7c6c-16e4-4ee3-8636-fc0d1a82be7f_Huong Son Hotel_3.jpg',NULL),('ed1e2ce7-cff6-47a7-ad49-01ca26e931c6','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6bc4ba2a-3c63-4b9a-b6ce-beaecb80f3db_Le%20House%20Hotel%20and%20Studio_4.jpg?alt=media&token=6bc4ba2a-3c63-4b9a-b6ce-beaecb80f3db','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',NULL,NULL,NULL,1,'thumbnails/6bc4ba2a-3c63-4b9a-b6ce-beaecb80f3db_Le House Hotel and Studio_4.jpg',NULL),('edb90ac9-bb7e-4cc4-815a-847b9beacde5','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F6e3ff84c-803d-456d-ad93-ade67ca9a272_Kh%C3%83%C2%A1ch%20s%C3%A1%C2%BA%C2%A1n%20Green%20%C3%84%C2%90%C3%83%C2%A0%20N%C3%A1%C2%BA%C2%B5ng_1.jpg?alt=media&token=6e3ff84c-803d-456d-ad93-ade67ca9a272','2022-12-30 06:16:59','2022-12-30 06:16:59',NULL,'487098ac-09b6-42ae-8d79-16adc87e8675',NULL,NULL,1,'thumbnails/6e3ff84c-803d-456d-ad93-ade67ca9a272_KhÃ¡ch sáº¡n Green ÄÃ  Náºµng_1.jpg',NULL),('eec1ef54-fe19-4a47-977d-83890372d701','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F4438cd43-1b46-4c74-b130-486c09add3be_Le%20House%20Hotel%20and%20Studio_3.jpg?alt=media&token=4438cd43-1b46-4c74-b130-486c09add3be','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',NULL,NULL,NULL,1,'thumbnails/4438cd43-1b46-4c74-b130-486c09add3be_Le House Hotel and Studio_3.jpg',NULL),('f3f3cc37-8ec8-4863-b0d4-b6a88712bb1c','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F231199eb-40f4-4eb2-86bb-9c1b9b98b32b_FIVITEL%20Queen_3.jpg?alt=media&token=231199eb-40f4-4eb2-86bb-9c1b9b98b32b','2022-12-30 05:34:39','2022-12-30 05:34:39',NULL,'1dbb523f-eb99-4d85-a8d5-ee3be8c33171',NULL,NULL,1,'thumbnails/231199eb-40f4-4eb2-86bb-9c1b9b98b32b_FIVITEL Queen_3.jpg',NULL),('f3ffa6ea-221a-4f7c-91e1-6a8906c20839','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F2500e571-cec0-4f40-87cc-04b4f6086037_Huong%20Son%20Hotel_5.jpg?alt=media&token=2500e571-cec0-4f40-87cc-04b4f6086037','2022-12-30 06:39:15','2022-12-30 06:39:15','d7b28129-7778-46d4-a9a1-54244a31cb70',NULL,NULL,NULL,1,'thumbnails/2500e571-cec0-4f40-87cc-04b4f6086037_Huong Son Hotel_5.jpg',NULL),('fb116f82-a177-4993-8e7a-047cd4740a7f','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2Ffb54e138-7913-47e3-b63d-2d4a9b65bccd_Little%20Home%20Hotel_3.jpg?alt=media&token=fb54e138-7913-47e3-b63d-2d4a9b65bccd','2022-12-30 06:09:45','2022-12-30 06:09:45',NULL,'8a9dc1b1-dca3-486f-8c12-ec60e4220acb',NULL,NULL,1,'thumbnails/fb54e138-7913-47e3-b63d-2d4a9b65bccd_Little Home Hotel_3.jpg',NULL),('fc377dc0-fc7b-4d92-a596-6527aa1a63b3','https://firebasestorage.googleapis.com/v0/b/bcroom-11df2.appspot.com/o/thumbnails%2F51188b97-2b40-439c-8d53-a15011f3d456_Little%20Home%20Hotel_5.jpg?alt=media&token=51188b97-2b40-439c-8d53-a15011f3d456','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114',NULL,NULL,NULL,1,'thumbnails/51188b97-2b40-439c-8d53-a15011f3d456_Little Home Hotel_5.jpg',NULL);
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
INSERT INTO `policies` VALUES ('2484bca5-eb8a-4be5-bb78-db5e35be06a9','1','2','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec',1),('3150161c-4007-4ed3-96ee-79027863f622','1','2','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',1),('66b95eff-eac2-4785-8a29-da33b8bda992','1','2','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5',1),('6ca58387-75eb-4e8e-a946-1e590d332c6b','1','3','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',1),('6ec4760c-5274-4af3-9c13-bbb9c6b0adce','1','2','2022-12-30 06:39:15','2022-12-30 06:39:15','d7b28129-7778-46d4-a9a1-54244a31cb70',1),('a51e25d6-0957-4fae-a451-c00885de9a01','2','3','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4',1),('b1709fce-4518-4c76-93c8-3f109708a8b7','1','3','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd',1),('e184d50c-238e-4a80-8248-7c0a00215a7d','1','2','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9',1),('e356512f-4b70-4a30-9dad-761b78efa1d8','1','2','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',1),('e42484b4-3898-4c4c-b262-12883a328ece','1','2','2023-01-04 03:57:58','2023-01-04 03:57:58','cc3b8c21-575b-4eb8-85b0-bc8466e47105',1),('f388a546-9ee0-4620-b5d2-1163c03e1a11','1','2','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114',1);
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
INSERT INTO `reviews` VALUES ('9e3f5a87-56b0-445d-aad3-2cf62d03d0b5',5,'chất lượng, phù hợp với giá tiền','2023-01-02 08:24:29','2023-01-02 08:24:29','48d065f2-7d4f-42de-9e9f-31ed171feecb','86fffc72-61ee-42d7-9f9f-5040dadde701',1),('b8210e87-12b9-4c16-9daf-ee59ee4b3ee6',5,'tốt, sạch sẽ','2022-12-30 06:44:56','2022-12-30 06:44:56','48d065f2-7d4f-42de-9e9f-31ed171feecb','2a5c4e39-5853-4540-b78e-ddd7a62612ea',1);
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
INSERT INTO `roomrelatedservices` VALUES ('1021b21a-5301-41c8-b420-01d560c4a319','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','cc728ede-bc50-49b1-a449-e089a7886b8c'),('11a2941b-7cc8-429a-99b2-9a2176bc6823','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('11ae8a0d-2265-46bd-8ac5-158a3ba6f39b','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('12d0ed56-142e-4b67-98e5-cf10bf4e5346','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('1610e263-a3e8-415a-8894-a55c0b99ea90','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('2739f76f-66d5-4793-84a7-0d0235512296','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','cc728ede-bc50-49b1-a449-e089a7886b8c'),('33102121-0753-4214-993e-11bcbb7cad0d','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','06c2632d-db48-4429-be12-0cacc601d982'),('3ec1b567-3c44-45ce-8d97-a34cb1e3c493','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('41a74880-35a4-45f6-a565-8669ba40a418','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','944f926b-6272-4584-be98-2142e080372a'),('434f94d5-83b8-42c2-8d04-ce15814e2420','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('4cd1aa8f-c7f3-4477-ba84-332481c5c9a7','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('4de158a4-cf47-4961-b1a7-6658a341054a','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec','6b04673c-b676-435e-8790-8cdd61da713b'),('537a8848-f010-4c62-b1d8-c9b729c8aef5','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','06c2632d-db48-4429-be12-0cacc601d982'),('54aae007-9557-4204-9da8-f1b0212b66d2','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('56e211ac-0187-4a25-955c-2c39d7a6bdbe','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','6b04673c-b676-435e-8790-8cdd61da713b'),('571985fb-d243-4ff5-83f4-40858039a2b1','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('5c7654d4-5c92-4920-90c9-86b273161ed2','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','06c2632d-db48-4429-be12-0cacc601d982'),('623b8f70-e0cc-463c-8ef2-0654b8b8713d','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','6b04673c-b676-435e-8790-8cdd61da713b'),('6424b146-61ec-4ea8-b6d4-1e3ee753295a','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('652ecdc3-5191-4872-a08a-523f63bab104','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','3e9563d5-9df6-490e-b30c-d7022a907b6c'),('686a3184-d2e2-4641-9252-d74e4112361d','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('6e5483f4-73dc-4538-8d72-cdf7afd04222','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('6fdaa6ad-89ac-44c7-886a-4e2bda5685d7','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('7228afb6-8c31-4641-9000-c2a900dd357e','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('74e2021f-84ef-4bec-aa0d-d7a19d51c189','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('75555603-b146-45a7-b979-bbe2c228c060','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('756aed54-151f-4bc9-a337-06ebf681caa1','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('75ebca30-0eda-4237-911d-a4ca922030a9','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('778b0456-022a-41c9-83cc-f9e74c9f0cde','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('77919c7b-3c77-4d52-a1d4-cb1cd3799137','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('77e940c1-d006-4f38-a7a7-fca06db7f6db','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','6b04673c-b676-435e-8790-8cdd61da713b'),('78d96815-deee-4cdc-8944-665b8be42508','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('7b27829c-c509-4979-8593-cf8ad0415305','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('7e95290a-367b-44b3-a0d1-ba24a8c7f731','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('818e5aa2-23e5-4c7d-90d4-f34adbf5d684','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','cc728ede-bc50-49b1-a449-e089a7886b8c'),('8384c7c9-9606-48b5-a3e9-d0fb33913a58','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('83edf58a-7d30-4f31-a2cb-0dd552c7257e','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('84be51ce-784b-4162-b31a-f65b1691e64c','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','cc728ede-bc50-49b1-a449-e089a7886b8c'),('910f8a7d-8e2e-454b-81cf-b131171b88fa','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','cc728ede-bc50-49b1-a449-e089a7886b8c'),('926b7cca-29a1-44a4-9913-2c47969e958f','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('94a384b9-73f8-4dd2-9a16-6ce47235450f','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('95a1fd52-30f6-40ad-9c0b-389a8a333a4e','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('96ad9a34-584d-4fe1-8e19-b0cc34ae9b9d','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('9906cbef-b8d8-43f3-b896-375f76e45c0b','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','cc728ede-bc50-49b1-a449-e089a7886b8c'),('9a19da20-5f55-4acd-bbbb-2c868130567f','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','e49a5076-1bb2-4a92-af9d-c136678e6a7e'),('9a1b51cf-eadd-40f9-af1d-af8f432fccc1','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','6b04673c-b676-435e-8790-8cdd61da713b'),('9f146a23-83e7-46d0-9fab-ff429420a82c','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','06c2632d-db48-4429-be12-0cacc601d982'),('a03a4df6-2280-4c95-9991-38aef59c5efc','2023-01-04 03:57:58','2023-01-04 03:57:58','cc3b8c21-575b-4eb8-85b0-bc8466e47105','06c2632d-db48-4429-be12-0cacc601d982'),('a362f5fe-dc2b-4587-af38-ef18df4c6b36','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('a591893d-8af8-4509-b658-787e3e000ec7','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('a6bfd9d4-c5a4-49b8-bacd-271f970e1196','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','cc728ede-bc50-49b1-a449-e089a7886b8c'),('ac2634cb-d1ab-43ee-a5dc-6688cc3277f4','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','6b04673c-b676-435e-8790-8cdd61da713b'),('ac72521e-5b3f-486c-adbf-c3f82d4a844a','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('af0a50b3-6159-43de-9841-e47bdf9b35ce','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','6b04673c-b676-435e-8790-8cdd61da713b'),('b4630c50-73bc-46ad-8365-1661ea0e8da3','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','944f926b-6272-4584-be98-2142e080372a'),('b468c4fb-93ce-4545-8e94-5c3b28b168b0','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','6b04673c-b676-435e-8790-8cdd61da713b'),('bbdc2741-c488-4934-ad5a-8177448ab070','2022-12-30 04:55:41','2022-12-30 04:55:41','4d31bcc2-a9d1-43d2-a39d-0311d7264fb6','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('c07ac721-1d2d-4a58-9428-35338fb9093b','2023-01-04 03:54:56','2023-01-04 03:54:56','c956f619-3682-4365-8369-cdd3d62f48ec','06c2632d-db48-4429-be12-0cacc601d982'),('c354dd2a-2326-4a37-8cf2-a2ffcd485fdd','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','e49a5076-1bb2-4a92-af9d-c136678e6a7e'),('c37d116b-32db-4c34-8080-d19656dc8dc8','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('c5a55e6f-93de-4106-9c37-f789e71e4949','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','ec1fc328-a2fc-40c7-a9af-fedfe5c5a246'),('cc60e197-f21a-4bcd-9fc4-98ccedbe06ba','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('ce1eccfd-5cf0-4081-8286-72b7a5c4285a','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','a99061bf-f2a1-4a69-ad8a-17b9d48cdae7'),('ce938f2e-aa3b-41e7-aa7e-caa522434b1c','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('cf22824d-112c-446b-99fb-7b888ca86c1a','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','944f926b-6272-4584-be98-2142e080372a'),('d074198f-858f-4457-8d8d-e3e9e123486a','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('d7e5be88-ea4f-4a86-bcde-c598bb02e9c1','2023-01-04 03:57:58','2023-01-04 03:57:58','cc3b8c21-575b-4eb8-85b0-bc8466e47105','14014c8e-a778-4f4b-b0c8-c802c80b6c8c'),('d99e085f-4edc-4f24-ad99-9dd6c642ad1f','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','cc728ede-bc50-49b1-a449-e089a7886b8c'),('e9f25233-d47c-4985-b79f-1b112010c1cb','2022-12-30 05:46:58','2022-12-30 05:46:58','76dce0a7-9b33-4dda-a608-0e6e2ad88ff4','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('eb482977-978d-475e-bd4e-7a14eda35e58','2022-12-30 06:39:14','2022-12-30 06:39:14','d7b28129-7778-46d4-a9a1-54244a31cb70','2e1d8cc0-338e-4d71-90fd-259a15f052f6'),('ebf56c6d-6a63-46b1-86e7-9657254228ce','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('ef95feb3-c453-42bf-98a0-4074cca711d8','2022-12-30 06:16:59','2022-12-30 06:16:59','f7f902bc-98db-4ebb-8c74-43387b7bf2dd','3e9563d5-9df6-490e-b30c-d7022a907b6c'),('f0c762dc-f18d-403d-b14d-620f3948120f','2022-12-30 05:25:55','2022-12-30 05:25:55','5bc27742-7106-4577-ac42-a09e5707a1a9','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('f381fda2-4cbe-4d64-8181-c9941992247f','2022-12-30 06:09:45','2022-12-30 06:09:45','d02f8efd-61f3-440d-887a-0a70b4736114','944f926b-6272-4584-be98-2142e080372a'),('f4dffa45-4695-4276-b432-f07b9b8362b6','2022-12-30 05:34:39','2022-12-30 05:34:39','14e3ea41-ea86-4909-9019-a815074f34e5','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b'),('f7a22473-8beb-45aa-9cda-7ebee574ebd0','2022-12-30 06:23:53','2022-12-30 06:23:53','7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e','c3d11e3e-3c1d-44c8-b9b4-e930e6c77163'),('fab7f143-5265-4d86-beea-28dba5b24172','2022-12-30 05:06:37','2022-12-30 05:06:37','ea0a8f04-f917-4817-9996-46e74dd930e4','5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b');
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
INSERT INTO `rooms` VALUES ('14e3ea41-ea86-4909-9019-a815074f34e5',NULL,1,330000.00,2,2,'2022-12-30 05:34:39','2022-12-30 05:34:39','1dbb523f-eb99-4d85-a8d5-ee3be8c33171','05cd248b-37ee-4523-9c9b-fe3b7656102b','02',0),('4d31bcc2-a9d1-43d2-a39d-0311d7264fb6',NULL,1,300000.00,2,2,'2022-12-30 04:55:41','2022-12-30 06:41:51','2a5c4e39-5853-4540-b78e-ddd7a62612ea','0b8a2a03-2bae-421d-be67-a4320cc285b1','01',1),('5bc27742-7106-4577-ac42-a09e5707a1a9',NULL,1,200000.00,1,1,'2022-12-30 05:25:55','2023-01-02 07:01:34','86fffc72-61ee-42d7-9f9f-5040dadde701','b4fdfaac-e996-4555-8ff6-c1328d071f47','01',1),('76dce0a7-9b33-4dda-a608-0e6e2ad88ff4',NULL,1,250000.00,2,1,'2022-12-30 05:46:58','2022-12-30 05:46:58','81f6c8c8-5e1f-4103-89d9-b168e476732f','6df0aab3-0ef6-4232-af35-b515fb90759b','01',0),('7ef20cf1-af4c-4abc-97c4-9657a9fdbb2e',NULL,1,200000.00,2,3,'2022-12-30 06:23:53','2022-12-30 06:23:53','edfe62fc-6f39-41de-a397-f8e95cefd91f','40743aa5-3dd2-4208-a23b-7e893f3fe6fa','02',0),('c956f619-3682-4365-8369-cdd3d62f48ec',NULL,0,200000.00,2,2,'2023-01-04 03:54:56','2023-01-04 03:59:57','67fff4cd-03e0-4bae-a8af-0c36cd9208b2','40743aa5-3dd2-4208-a23b-7e893f3fe6fa','001',0),('cc3b8c21-575b-4eb8-85b0-bc8466e47105',NULL,0,220000.00,1,1,'2023-01-04 03:57:58','2023-01-04 03:59:57','67fff4cd-03e0-4bae-a8af-0c36cd9208b2','0b8a2a03-2bae-421d-be67-a4320cc285b1','002',0),('d02f8efd-61f3-440d-887a-0a70b4736114',NULL,1,190000.00,1,1,'2022-12-30 06:09:45','2023-01-04 03:44:54','8a9dc1b1-dca3-486f-8c12-ec60e4220acb','2dd163b1-0051-4d1b-8096-82e29b51f08d','01',1),('d7b28129-7778-46d4-a9a1-54244a31cb70',NULL,1,330000.00,2,1,'2022-12-30 06:39:14','2022-12-30 06:46:51','3910855a-e491-4b3c-a186-0bfdc0d1bbb2','0b8a2a03-2bae-421d-be67-a4320cc285b1','01',1),('ea0a8f04-f917-4817-9996-46e74dd930e4',NULL,1,250000.00,2,2,'2022-12-30 05:06:37','2022-12-30 05:06:37','0a83f065-8397-4757-b027-0be5d880ed05','40743aa5-3dd2-4208-a23b-7e893f3fe6fa','02',0),('f7f902bc-98db-4ebb-8c74-43387b7bf2dd',NULL,1,260000.00,1,1,'2022-12-30 06:16:59','2022-12-30 06:16:59','487098ac-09b6-42ae-8d79-16adc87e8675','b4fdfaac-e996-4555-8ff6-c1328d071f47','01',0);
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
INSERT INTO `services` VALUES ('06c2632d-db48-4429-be12-0cacc601d982','Điện thoại bàn','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('14014c8e-a778-4f4b-b0c8-c802c80b6c8c','Bàn làm việc','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('2e1d8cc0-338e-4d71-90fd-259a15f052f6','Tủ lạnh','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('3e9563d5-9df6-490e-b30c-d7022a907b6c','Wifi','2022-11-16 04:21:29','2022-11-16 04:21:29',90000.00),('5b1e808e-0bb9-48e1-8d2c-24e1cc6d843b','Đồng hồ báo thức','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('6b04673c-b676-435e-8790-8cdd61da713b','Dọn phòng','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('944f926b-6272-4584-be98-2142e080372a','Bồn tắm spa','2022-11-16 04:20:29','2022-11-16 04:20:29',90000.00),('a99061bf-f2a1-4a69-ad8a-17b9d48cdae7','Tivi','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('c3d11e3e-3c1d-44c8-b9b4-e930e6c77163','Màn che ánh sáng','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('cc728ede-bc50-49b1-a449-e089a7886b8c','Tủ quần áo','2022-11-16 04:18:55','2022-11-16 04:18:55',2000.00),('e49a5076-1bb2-4a92-af9d-c136678e6a7e','Điều hòa không khí','2022-11-16 04:17:17','2022-11-16 04:17:17',40000.00),('ec1fc328-a2fc-40c7-a9af-fedfe5c5a246','Bồn tắm','2022-11-16 04:18:55','2022-11-16 04:18:55',5000.00);
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
INSERT INTO `transactions` VALUES ('1e68a0e6-1875-4f06-a8bb-0de0ef990e62',570000.00,'NCB','VNP13920397','ATM','Thanh+to%C3%A1n+%C4%91%E1%BA%B7t+ph%C3%B2ng','20230104104653','00','6YJ7K9AM','13920397','00','100100','2023-01-04 03:47:06','2023-01-04 03:47:07','b71cd5ec-af9e-4aa3-ae8b-e2e28e8483bd','48d065f2-7d4f-42de-9e9f-31ed171feecb'),('5e67ce29-ff20-48f3-9f91-cb974d867236',600000.00,'NCB','VNP13919390','ATM','thanh+to%C3%A1n+ks+abc','20230102140339','00','6YJ7K9AM','13919390','00','140118','2023-01-02 07:03:47','2023-01-02 07:03:48','46518551-ebbc-403e-a490-e77d32a6b360','48d065f2-7d4f-42de-9e9f-31ed171feecb'),('61db5ece-a635-4a32-8005-bedfa395c87a',1650000.00,'NCB','VNP13918705','ATM','thanh+to%C3%A1n','20221230134932','00','6YJ7K9AM','13918705','00','131245','2022-12-30 06:49:58','2022-12-30 06:49:58','246aa4a8-0a6d-44cc-bcf7-0fdf69927d3e','48d065f2-7d4f-42de-9e9f-31ed171feecb'),('7f2917e6-2468-4f85-a2e9-251f225b2699',900000.00,'NCB','VNP13918701','ATM','thanh+to%C3%A1n','20221230134341','00','6YJ7K9AM','13918701','00','131202','2022-12-30 06:43:50','2022-12-30 06:43:51','67511fe3-1697-48b8-96c7-c560a1b8e365','48d065f2-7d4f-42de-9e9f-31ed171feecb');
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

-- Dump completed on 2023-01-04 11:41:24
