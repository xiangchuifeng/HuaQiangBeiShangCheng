/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : huaqianguser

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-11-26 08:49:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `yonghu`
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `shoujihao` varchar(99) NOT NULL,
  `mima` varchar(99) NOT NULL,
  `regdate` varchar(199) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES ('1', 'asd', '123', '');
INSERT INTO `yonghu` VALUES ('2', 'ddd', '123', '2018-11-19 16:13:48');
INSERT INTO `yonghu` VALUES ('3', 'kkk', '456', '2018-11-19 16:22:04');
INSERT INTO `yonghu` VALUES ('4', 'kkkh', '123', '2018-11-19 16:26:31');
INSERT INTO `yonghu` VALUES ('5', 'fff', '123', '2018-11-19 16:32:43');
INSERT INTO `yonghu` VALUES ('6', 'fff', '123', '2018-11-19 16:32:49');
INSERT INTO `yonghu` VALUES ('7', 'ffff', '123', '2018-11-19 16:42:55');
INSERT INTO `yonghu` VALUES ('8', 'rr', '123', '2018-11-19 16:44:42');
INSERT INTO `yonghu` VALUES ('9', 'kkkh', '123', '2018-11-19 17:41:51');
INSERT INTO `yonghu` VALUES ('10', 'eer', '123', '2018-11-19 19:22:49');
INSERT INTO `yonghu` VALUES ('11', 'weishenmo', '444', '2018-11-19 20:43:49');
INSERT INTO `yonghu` VALUES ('12', 'wangweijie', '123456', '2018-11-22 17:41:02');
