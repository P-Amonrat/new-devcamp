-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 17, 2022 at 03:30 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `store`
--

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `ISBN` varchar(13) NOT NULL,
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `amount` int(255) NOT NULL,
  `orderdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`ISBN`, `id`, `price`, `amount`, `orderdate`) VALUES
('9783598215766', 5, 289, 0, '2022-05-13 07:28:28'),
('9783598215919', 4, 199, 25, '2022-05-13 07:28:28'),
('9783598215933', 1, 250, 10, '2022-05-13 07:28:28'),
('9783598215957', 2, 352, 20, '2022-05-13 07:28:28'),
('9783598215995', 3, 157, 30, '2022-05-13 07:28:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`ISBN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


Homework 15.3
- select * from Book where bookname like '%mar%'
- select * from Book where bookname like '%o%' limit 2
- SELECT SUM(amount) FROM order;
- SELECT SUM(price) FROM order;

