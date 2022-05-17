-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 13, 2022 at 07:45 AM
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
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `ISBN` varchar(13) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`ISBN`, `bookname`, `price`, `date`) VALUES
('9783598215766', 'His Toy', 289, '2022-05-13 07:06:39'),
('9783598215919', 'The Mars Room', 199, '2022-05-13 07:06:39'),
('9783598215933', 'The Marquis and I\r\n', 250, '2022-05-13 07:06:39'),
('9783598215957', 'Blood on the Tongue', 352, '2022-05-13 07:06:39'),
('9783598215995', 'A Higher Loyalty\r\n', 157, '2022-05-13 07:06:39');

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`id`, `firstname`, `lastname`, `age`, `date`) VALUES
(1, 'Noah', 'Armstrong', 34, '2022-05-13 06:47:34'),
(2, 'Leslie', 'Ellis', 24, '2022-05-13 06:47:34'),
(3, 'Sandra', 'Hoffman\r\n', 35, '2022-05-13 06:49:37'),
(4, 'Cameron', 'Meyer', 19, '2022-05-13 06:49:37'),
(5, 'Cameron', 'Moore\r\n', 27, '2022-05-13 06:49:37');

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
('9783598215766', 5, 289, 15, '2022-05-13 07:28:28'),
('9783598215919', 4, 199, 25, '2022-05-13 07:28:28'),
('9783598215933', 1, 250, 10, '2022-05-13 07:28:28'),
('9783598215957', 2, 352, 20, '2022-05-13 07:28:28'),
('9783598215995', 3, 157, 30, '2022-05-13 07:28:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`ISBN`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`ISBN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
