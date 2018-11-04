/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost
 Source Database       : VueUsers

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : utf-8

 Date: 11/04/2018 10:23:44 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(250) NOT NULL AUTO_INCREMENT,
  `title` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `add_time` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `zhaiyao` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `click` int(250) DEFAULT NULL,
  `img_url` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `sell_price` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `market_price` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `stock_quantity` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(9999) CHARACTER SET utf8 DEFAULT NULL,
  `goods_no` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `goods_copy`
-- ----------------------------
DROP TABLE IF EXISTS `goods_copy`;
CREATE TABLE `goods_copy` (
  `id` int(250) NOT NULL AUTO_INCREMENT,
  `title` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `add_time` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `zhaiyao` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `click` int(250) DEFAULT NULL,
  `img_url` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `sell_price` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `market_price` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `stock_quantity` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(9999) CHARACTER SET utf8 DEFAULT NULL,
  `goods_no` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `images`
-- ----------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(250) DEFAULT NULL,
  `img_url` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `zhaiyao` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `px` bigint(255) NOT NULL AUTO_INCREMENT,
  `click` int(250) DEFAULT NULL,
  `add_time` varchar(999) DEFAULT NULL,
  `content` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`px`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `imgcategory`
-- ----------------------------
DROP TABLE IF EXISTS `imgcategory`;
CREATE TABLE `imgcategory` (
  `id` int(255) DEFAULT NULL,
  `title` varchar(999) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `lunbotu`
-- ----------------------------
DROP TABLE IF EXISTS `lunbotu`;
CREATE TABLE `lunbotu` (
  `url` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `img` varchar(200) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `sltapi`
-- ----------------------------
DROP TABLE IF EXISTS `sltapi`;
CREATE TABLE `sltapi` (
  `id` int(250) DEFAULT NULL,
  `src` varchar(999) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `splbt`
-- ----------------------------
DROP TABLE IF EXISTS `splbt`;
CREATE TABLE `splbt` (
  `id` int(11) DEFAULT NULL,
  `src` varchar(9999) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `xwpl`
-- ----------------------------
DROP TABLE IF EXISTS `xwpl`;
CREATE TABLE `xwpl` (
  `id` int(250) DEFAULT NULL,
  `user_name` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(999) CHARACTER SET utf8 DEFAULT NULL,
  `add_time` varchar(999) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `xwzx`
-- ----------------------------
DROP TABLE IF EXISTS `xwzx`;
CREATE TABLE `xwzx` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `add_time` varchar(50) CHARACTER SET utf8 NOT NULL,
  `click` int(255) NOT NULL,
  `img_url` varchar(999) CHARACTER SET utf8 NOT NULL,
  `content` varchar(9999) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
