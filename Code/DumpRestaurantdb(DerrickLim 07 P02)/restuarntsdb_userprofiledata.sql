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
-- Table structure for table `userprofiledata`
--

DROP TABLE IF EXISTS `userprofiledata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userprofiledata` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `FirstName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LastName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gender` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PhoneNumber` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PassWord` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UserProfilePictures` varchar(140) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UserDescription` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `UserWallpaper` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName_UNIQUE` (`UserName`),
  UNIQUE KEY `PassWord_UNIQUE` (`PassWord`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprofiledata`
--

LOCK TABLES `userprofiledata` WRITE;
/*!40000 ALTER TABLE `userprofiledata` DISABLE KEYS */;
INSERT INTO `userprofiledata` VALUES (2,'crazy bou','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','testing password','https//image','Hi there','https//image/si'),(3,'fun guy','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','hytsghe','https//image','',''),(6,'lansir','daniel','lim','male','ponggol road ave 5 blk 223 #05-764','98567332','daniel@gmail.com','password','https//image','Hi there','https//image/s'),(8,'timesfood','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','hisghte','https//image','Hi there','https//image/s'),(11,'Orion','Glenn','Yeoh','male','ponggol road ave 5 blk 223 #05-764','98567332','GlennYeoh@gmail.com','kjsudtv','https//image',NULL,NULL),(14,'orion2','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','$2b$10$Zo8axCUHgXyjIVzT5zk13.HNHNgDy2k6yvoGWNoJ.c7ekh4VYX80u','https//image',NULL,NULL),(15,'orion4','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','thanksgiving3','https//image',NULL,NULL),(17,'orion5','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','$2b$10$bgUsJTkc2lTwfXu/Xj8UHuv0qBgqBOjPw3kUJU48OPPXaeUtswe0C','https//image',NULL,NULL),(18,'hellos1','james','bond','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','$2b$10$0tr4opVIlQNmW./cxeyvDu6UfuwUDVWfpui/cMTxQr0FVAY/rBEqy','https//image','Hi there','https//image/si'),(19,'Blue','Derrick','Lim','male','ponggol road ave 5 blk 223 #05-764','98567332','james34@gmail.com','$2b$10$Iw7aUYDWVQenLx5LJlGDXONzIZHuOnsTz7ozXk/DC0M/6FPi5CNse','f23495d35de14c383e8d76664e3139f2d07f4808',NULL,NULL);
/*!40000 ALTER TABLE `userprofiledata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-09 10:13:07
