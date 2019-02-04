/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : huaqianguser

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-11-26 08:49:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `huaqiangshangpin`
-- ----------------------------
DROP TABLE IF EXISTS `huaqiangshangpin`;
CREATE TABLE `huaqiangshangpin` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(199) NOT NULL,
  `title` varchar(199) NOT NULL,
  `price` float(99,2) unsigned NOT NULL,
  `delprice` float(99,2) NOT NULL,
  `urls` varchar(800) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of huaqiangshangpin
-- ----------------------------
INSERT INTO `huaqiangshangpin` VALUES ('1', 'http://img16.hqbcdn.com/product/58/39/5839c7752b63d0f5d495e4fdcdc31662.340.jpg', 'OPPO R17 2500万美颜拍照 6.4英寸水滴屏 光感屏幕指纹全网通双卡双待手机 6G+128G 霓光紫', '2999.00', '3199.00', 'http://img16.hqbcdn.com/product/58/39/5839c7752b63d0f5d495e4fdcdc31662.340.jpg,http://img6.hqbcdn.com/product/0e/a1/0ea168582064a6c0a23298a93a04a107.340.jpg,http://img16.hqbcdn.com/product/2d/c2/2dc299af76bc9de2ce93c17d4eecf1cb.340.jpg,http://img16.hqbcdn.com/product/58/39/5839c7752b63d0f5d495e4fdcdc31662.340.jpg,http://img6.hqbcdn.com/product/0e/a1/0ea168582064a6c0a23298a93a04a107.340.jpg,http://img16.hqbcdn.com/product/2d/c2/2dc299af76bc9de2ce93c17d4eecf1cb.340.jpg');
INSERT INTO `huaqiangshangpin` VALUES ('2', 'http://img6.hqbcdn.com/product/0e/a1/0ea168582064a6c0a23298a93a04a107.340.jpg', 'Meizu/魅族 16th Plus 全面屏手机 全网通移动联通电信4G手机 双卡双待手机 8GB+128GB 极光蓝', '4099.00', '4199.00', 'http://img6.hqbcdn.com/product/0e/a1/0ea168582064a6c0a23298a93a04a107.340.jpg,http://img10.hqbcdn.com/product/20/2d/202db9d3881237ee572af10f33a1b58d.340.png,http://img7.hqbcdn.com/product/de/55/de553ee252fa4d57cc1c22793957f4cb.340.jpg');
INSERT INTO `huaqiangshangpin` VALUES ('3', 'http://img16.hqbcdn.com/product/2d/c2/2dc299af76bc9de2ce93c17d4eecf1cb.340.jpg', 'Apple/苹果 iPhone XR 移动联通电信4G手机 双卡双待手机 64GB 珊瑚色', '5999.00', '6499.00', '');
INSERT INTO `huaqiangshangpin` VALUES ('4', 'http://img15.hqbcdn.com/product/84/26/8426dfbb94d53b68feff89eb910fa7e4.340.jpg', 'Samsung/三星 S9 HK 移动联通电信全网通 双卡双待海淘手机 4GB+64GB 夕雾紫', '4250.00', '4999.00', '');
INSERT INTO `huaqiangshangpin` VALUES ('5', 'http://img2.hqbcdn.com/product/27/e4/27e4756ed3cd4d848ad5e1a183fb69b1.340.jpg', '博疆 S9迷你折叠无人机 航拍drone折叠四轴飞行器 白色航拍版', '159.00', '178.00', 'http://img2.hqbcdn.com/product/27/e4/27e4756ed3cd4d848ad5e1a183fb69b1.340.jpg,http://img12.hqbcdn.com/product/ec/8c/ec8cfd6e098b91bb068cc7030ba98f34.340.jpg');
INSERT INTO `huaqiangshangpin` VALUES ('6', 'http://img13.hqbcdn.com/product/ae/f4/aef419c24b63505e54f9255cc03df53e.340.jpg', 'JBL GO 2 音乐金砖二代 蓝牙音箱 低音炮 户外便携音响 迷你小音箱 可免提通话 防水设计 夜空黑', '249.00', '289.00', '');
INSERT INTO `huaqiangshangpin` VALUES ('7', 'http://img13.hqbcdn.com/product/a1/12/a11244f4e1ae443e21c0a3834cd3fb96.340.jpg', 'egogo 果汁日记榨汁杯 电动搅拌果汁杯 粉色', '128.00', '168.00', '');
INSERT INTO `huaqiangshangpin` VALUES ('8', 'http://img4.hqbcdn.com/product/c5/16/c516797f7c87eb1cedbb97d4d11d81f8.340.jpg', 'Divoom Tivoo像素蓝牙音箱 复古电视造型无线迷你插卡智能时钟小音响便携低音炮 白色', '316.00', '399.00', 'http://img4.hqbcdn.com/product/c5/16/c516797f7c87eb1cedbb97d4d11d81f8.340.jpg,http://img1.hqbcdn.com/product/b7/29/b7292634ebbcba913b99f013197eaf78.340.jpg,http://img13.hqbcdn.com/product/ae/f4/aef419c24b63505e54f9255cc03df53e.340.jpg');
INSERT INTO `huaqiangshangpin` VALUES ('9', 'http://img9.hqbcdn.com/product/85/e4/85e44824f354f2c3b9f69fbcad25115e.340.jpg', 'WANLE 游戏手机壳 怀旧俄罗斯方块 网红抖音神器 iPhone7/8 白', '29.00', '49.00', '');
INSERT INTO `huaqiangshangpin` VALUES ('10', 'http://img13.hqbcdn.com/product/65/1f/651f3a5fcc8ff5863a2eec86f19c451a.340.jpg', 'MI/小米 小米 8 全面屏游戏智能手机 全网通4G 双卡双待手机 6GB+128GB 白色', '2599.00', '3199.00', '');
