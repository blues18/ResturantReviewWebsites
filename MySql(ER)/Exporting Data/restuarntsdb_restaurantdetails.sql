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
-- Table structure for table `restaurantdetails`
--

DROP TABLE IF EXISTS `restaurantdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantdetails` (
  `RestaurantID` int NOT NULL AUTO_INCREMENT,
  `RestaurantTitle` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Ratings` float DEFAULT NULL,
  `RestaurantImage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RestaurantDescription` text COLLATE utf8mb4_unicode_ci,
  `Hyperlink_of_Restaurant` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EthnicRestaurant` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RestaurantAddress` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `OpeningHourRestaurant` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RestaurantFoodPictures` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RestaurantFoodDiscription` text COLLATE utf8mb4_unicode_ci,
  `RestaurantFoodPrice` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`RestaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantdetails`
--

LOCK TABLES `restaurantdetails` WRITE;
/*!40000 ALTER TABLE `restaurantdetails` DISABLE KEYS */;
INSERT INTO `restaurantdetails` VALUES (1,'SWENSEN',4.5,'none','swensen offers the best quaility food and the best service','http://swensen','Western','compassOne #b1-122','09:00am to 21:00pm Monday-Sunday',' images','baked chess',12.00),(2,'Soup Resturant',4.7,'none','Soup Resturant offer high quality dishes based on the long chinese culture food ','http://SoupResturant','Chinese','CompassOne #03-223','09:00am to 21:00pm Monday-Sunday','Images','the sumswen chicken dish',24.00),(3,'ichiban',4.9,'none','Offers best japanese food from japan has mnay wonderfully sushi and bento availble','http://ichiban ','Japanese','CompassOne #01-451','10:00am to 22:00pm Monday-Sunday','images','tamago sushi',2.40),(4,'alston',4.3,'none','Westen food with delicous grill chicken and beef ','hhtp://alston','Western','hougang mall #02-974','10;00am to 21:45pm Monday to Sunday','Image ','grill chicken',12.90),(5,'BurgerKing',4.8,'none','Best westen buger enough to fill your hunger all day','http;//burgerking','Western','CompassOne #b1-22','09:00am to 22:00pm Monday to Sunday','Images','whooper burger',9.90),(6,'Jonior',3.8,'none','Best chicken steak','hhtp;//jonior','Chinese','hougang mall #05-22','09:00am to 22:00pm Monday to Sunday','Images','chicken steak',12.90);
/*!40000 ALTER TABLE `restaurantdetails` ENABLE KEYS */;
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
