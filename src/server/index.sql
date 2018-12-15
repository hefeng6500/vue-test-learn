SET NAMES UTF8; 
DROP DATABASE IF EXISTS vue; 
CREATE DATABASE vue CHARSET = UTF8; 
USE vue; 
CREATE TABLE users( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  username VARCHAR(32), 
  password VARCHAR(32) 
); 
INSERT INTO users VALUES 
(NULL,"yanglong","admin");