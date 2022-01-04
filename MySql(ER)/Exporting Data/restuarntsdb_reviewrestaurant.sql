-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: restuarntsdb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reviewrestaurant`
--

DROP TABLE IF EXISTS `reviewrestaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviewrestaurant` (
  `ReviewID` int NOT NULL AUTO_INCREMENT,
  `ReviewResturantsID` int DEFAULT NULL,
  `ReviewUserID` int DEFAULT NULL,
  `ReviewTitle` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ReviewRestaurantName` varchar(70) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Ratings` float DEFAULT NULL,
  `RatingPrice` float NOT NULL,
  `RatingFood` float NOT NULL,
  `RatingService` float NOT NULL,
  `ReviewComment` text COLLATE utf8mb4_unicode_ci,
  `ReviewPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ReviewRestuarntHyperLink` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ReviewByUserName` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DatePost` varchar(65) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ReviewID`),
  KEY `RestaurantOwnReviw_idx` (`ReviewResturantsID`),
  KEY `UserName_idx` (`ReviewUserID`),
  CONSTRAINT `RestaurantOwnReviw` FOREIGN KEY (`ReviewResturantsID`) REFERENCES `restaurantdetails` (`RestaurantID`),
  CONSTRAINT `UserName` FOREIGN KEY (`ReviewUserID`) REFERENCES `userprofiledata` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviewrestaurant`
--

LOCK TABLES `reviewrestaurant` WRITE;
/*!40000 ALTER TABLE `reviewrestaurant` DISABLE KEYS */;
INSERT INTO `reviewrestaurant` VALUES (1,1,2,'The food taste horrible','Swensen at compassOne basement 1',1.5,2,2,2.2,'the baked rice taste salty','images','http//Swensen','Food lover','2021-12-15 21:47:37'),(2,1,2,'The food taste horrible','Swensen at compassOne basement 1',1.5,2,2,2.2,'the baked rice taste salty','images','http//Swensen','Food lover','2021-12-15 21:47:52'),(7,NULL,2,'The baked chessy rice is the best',NULL,5,4.6,5,4.5,'The food tsate good so as the price is affordable and the service is great along ;D i would loved to come back again ','image','Optional','Food lover','Tue Dec 21 2021 20:24:54 GMT+0800 (Singapore Standard Time)'),(9,NULL,2,'This Food is so BAD',NULL,2,3.4,2,2.3,'The service is so bad they even give me the wrong food also the price for this is so expensive','image','Optional','Foodlover','Thu Dec 16 2021 17:03:07 GMT+0800 (Singapore Standard Time)'),(10,NULL,2,'This Food is so BAD',NULL,2,3.4,2,2.3,'The service is so bad they even give me the wrong food also the price for this is so expensive','image','Optional','Foodlover','Tue Dec 21 2021 20:23:12 GMT+0800 (Singapore Standard Time)'),(12,NULL,3,'This Food is so BAD',NULL,2,3.4,2,2.3,'The service is so bad they even give me the wrong food also the price for this is so expensive','image','Optional','Foodlover','Sun Dec 26 2021 16:37:38 GMT+0800 (Singapore Standard Time)');
/*!40000 ALTER TABLE `reviewrestaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-31 22:46:12
