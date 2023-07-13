-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2023 at 09:23 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lion_gate`
--

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

CREATE TABLE `animal` (
  `Animal_ID` int(11) NOT NULL,
  `Animal_Name` varchar(255) DEFAULT NULL,
  `Animal_Type` varchar(255) DEFAULT NULL,
  `Animal_Species` varchar(255) DEFAULT NULL,
  `Animal_Path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `animal`
--

INSERT INTO `animal` (`Animal_ID`, `Animal_Name`, `Animal_Type`, `Animal_Species`, `Animal_Path`) VALUES
(1, 'Monkey', 'Herbivore', 'Chimpanzee', 'http://localhost:3001/photos/monkey.jpg'),
(2, 'Tiger', 'Carnivore', 'Big cat', 'http://localhost:3001/photos/tiger.jpg'),
(3, 'Dolphin', 'Carnivore', 'Odontoceti', 'http://localhost:3001/photos/dolp.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `Booking_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Round_ID` int(11) NOT NULL,
  `Seat_select` varchar(256) NOT NULL,
  `Total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`Booking_ID`, `User_ID`, `Round_ID`, `Seat_select`, `Total_price`) VALUES
(11, 1, 46, '1, 2', 100);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `Room_ID` int(11) NOT NULL,
  `Room_Name` varchar(255) DEFAULT NULL,
  `Capacity` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`Room_ID`, `Room_Name`, `Capacity`, `price`) VALUES
(1, 'Room 1', 20, 40),
(2, 'Room 2', 30, 50),
(3, 'Room 3', 40, 80);

-- --------------------------------------------------------

--
-- Table structure for table `rounds`
--

CREATE TABLE `rounds` (
  `Round_ID` int(11) NOT NULL,
  `Animal_ID` int(11) DEFAULT NULL,
  `Room_ID` int(11) DEFAULT NULL,
  `Showtime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rounds`
--

INSERT INTO `rounds` (`Round_ID`, `Animal_ID`, `Room_ID`, `Showtime`) VALUES
(43, 2, 1, '10:00:00'),
(44, 2, 1, '13:00:00'),
(45, 2, 1, '15:00:00'),
(46, 1, 2, '09:00:00'),
(47, 1, 2, '13:00:00'),
(48, 1, 2, '16:00:00'),
(49, 3, 3, '11:00:00'),
(50, 3, 3, '15:00:00'),
(51, 3, 3, '19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `Seat_ID` int(11) NOT NULL,
  `Round_ID` int(11) DEFAULT NULL,
  `Seat_Name` varchar(255) DEFAULT NULL,
  `isReserved` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`Seat_ID`, `Round_ID`, `Seat_Name`, `isReserved`) VALUES
(591, 43, '1', 0),
(592, 43, '2', 0),
(593, 43, '3', 0),
(594, 43, '4', 0),
(595, 43, '5', 0),
(596, 43, '6', 0),
(597, 43, '7', 0),
(598, 43, '8', 0),
(599, 43, '9', 0),
(600, 43, '10', 0),
(601, 43, '11', 0),
(602, 43, '12', 0),
(603, 43, '13', 0),
(604, 43, '14', 0),
(605, 43, '15', 0),
(606, 43, '16', 0),
(607, 43, '17', 0),
(608, 43, '18', 0),
(609, 43, '19', 0),
(610, 43, '20', 0),
(611, 44, '1', 0),
(612, 44, '2', 0),
(613, 44, '3', 0),
(614, 44, '4', 0),
(615, 44, '5', 0),
(616, 44, '6', 0),
(617, 44, '7', 0),
(618, 44, '8', 0),
(619, 44, '9', 0),
(620, 44, '10', 0),
(621, 44, '11', 0),
(622, 44, '12', 0),
(623, 44, '13', 0),
(624, 44, '14', 0),
(625, 44, '15', 0),
(626, 44, '16', 0),
(627, 44, '17', 0),
(628, 44, '18', 0),
(629, 44, '19', 0),
(630, 44, '20', 0),
(631, 45, '1', 0),
(632, 45, '2', 0),
(633, 45, '3', 0),
(634, 45, '4', 0),
(635, 45, '5', 0),
(636, 45, '6', 0),
(637, 45, '7', 0),
(638, 45, '8', 0),
(639, 45, '9', 0),
(640, 45, '10', 0),
(641, 45, '11', 0),
(642, 45, '12', 0),
(643, 45, '13', 0),
(644, 45, '14', 0),
(645, 45, '15', 0),
(646, 45, '16', 0),
(647, 45, '17', 0),
(648, 45, '18', 0),
(649, 45, '19', 0),
(650, 45, '20', 0),
(651, 46, '1', 1),
(652, 46, '2', 1),
(653, 46, '3', 0),
(654, 46, '4', 0),
(655, 46, '5', 0),
(656, 46, '6', 0),
(657, 46, '7', 0),
(658, 46, '8', 0),
(659, 46, '9', 0),
(660, 46, '10', 0),
(661, 46, '11', 0),
(662, 46, '12', 0),
(663, 46, '13', 0),
(664, 46, '14', 0),
(665, 46, '15', 0),
(666, 46, '16', 0),
(667, 46, '17', 0),
(668, 46, '18', 0),
(669, 46, '19', 0),
(670, 46, '20', 0),
(671, 46, '21', 0),
(672, 46, '22', 0),
(673, 46, '23', 0),
(674, 46, '24', 0),
(675, 46, '25', 0),
(676, 46, '26', 0),
(677, 46, '27', 0),
(678, 46, '28', 0),
(679, 46, '29', 0),
(680, 46, '30', 0),
(681, 47, '1', 0),
(682, 47, '2', 0),
(683, 47, '3', 0),
(684, 47, '4', 0),
(685, 47, '5', 0),
(686, 47, '6', 0),
(687, 47, '7', 0),
(688, 47, '8', 0),
(689, 47, '9', 0),
(690, 47, '10', 0),
(691, 47, '11', 0),
(692, 47, '12', 0),
(693, 47, '13', 0),
(694, 47, '14', 0),
(695, 47, '15', 0),
(696, 47, '16', 0),
(697, 47, '17', 0),
(698, 47, '18', 0),
(699, 47, '19', 0),
(700, 47, '20', 0),
(701, 47, '21', 0),
(702, 47, '22', 0),
(703, 47, '23', 0),
(704, 47, '24', 0),
(705, 47, '25', 0),
(706, 47, '26', 0),
(707, 47, '27', 0),
(708, 47, '28', 0),
(709, 47, '29', 0),
(710, 47, '30', 0),
(711, 48, '1', 0),
(712, 48, '2', 0),
(713, 48, '3', 0),
(714, 48, '4', 0),
(715, 48, '5', 0),
(716, 48, '6', 0),
(717, 48, '7', 0),
(718, 48, '8', 0),
(719, 48, '9', 0),
(720, 48, '10', 0),
(721, 48, '11', 0),
(722, 48, '12', 0),
(723, 48, '13', 0),
(724, 48, '14', 0),
(725, 48, '15', 0),
(726, 48, '16', 0),
(727, 48, '17', 0),
(728, 48, '18', 0),
(729, 48, '19', 0),
(730, 48, '20', 0),
(731, 48, '21', 0),
(732, 48, '22', 0),
(733, 48, '23', 0),
(734, 48, '24', 0),
(735, 48, '25', 0),
(736, 48, '26', 0),
(737, 48, '27', 0),
(738, 48, '28', 0),
(739, 48, '29', 0),
(740, 48, '30', 0),
(741, 49, '1', 0),
(742, 49, '2', 0),
(743, 49, '3', 0),
(744, 49, '4', 0),
(745, 49, '5', 0),
(746, 49, '6', 0),
(747, 49, '7', 0),
(748, 49, '8', 0),
(749, 49, '9', 0),
(750, 49, '10', 0),
(751, 49, '11', 0),
(752, 49, '12', 0),
(753, 49, '13', 0),
(754, 49, '14', 0),
(755, 49, '15', 0),
(756, 49, '16', 0),
(757, 49, '17', 0),
(758, 49, '18', 0),
(759, 49, '19', 0),
(760, 49, '20', 0),
(761, 49, '21', 0),
(762, 49, '22', 0),
(763, 49, '23', 0),
(764, 49, '24', 0),
(765, 49, '25', 0),
(766, 49, '26', 0),
(767, 49, '27', 0),
(768, 49, '28', 0),
(769, 49, '29', 0),
(770, 49, '30', 0),
(771, 49, '31', 0),
(772, 49, '32', 0),
(773, 49, '33', 0),
(774, 49, '34', 0),
(775, 49, '35', 0),
(776, 49, '36', 0),
(777, 49, '37', 0),
(778, 49, '38', 0),
(779, 49, '39', 0),
(780, 49, '40', 0),
(781, 50, '1', 0),
(782, 50, '2', 0),
(783, 50, '3', 0),
(784, 50, '4', 0),
(785, 50, '5', 0),
(786, 50, '6', 0),
(787, 50, '7', 0),
(788, 50, '8', 0),
(789, 50, '9', 0),
(790, 50, '10', 0),
(791, 50, '11', 0),
(792, 50, '12', 0),
(793, 50, '13', 0),
(794, 50, '14', 0),
(795, 50, '15', 0),
(796, 50, '16', 0),
(797, 50, '17', 0),
(798, 50, '18', 0),
(799, 50, '19', 0),
(800, 50, '20', 0),
(801, 50, '21', 0),
(802, 50, '22', 0),
(803, 50, '23', 0),
(804, 50, '24', 0),
(805, 50, '25', 0),
(806, 50, '26', 0),
(807, 50, '27', 0),
(808, 50, '28', 0),
(809, 50, '29', 0),
(810, 50, '30', 0),
(811, 50, '31', 0),
(812, 50, '32', 0),
(813, 50, '33', 0),
(814, 50, '34', 0),
(815, 50, '35', 0),
(816, 50, '36', 0),
(817, 50, '37', 0),
(818, 50, '38', 0),
(819, 50, '39', 0),
(820, 50, '40', 0),
(821, 51, '1', 0),
(822, 51, '2', 0),
(823, 51, '3', 0),
(824, 51, '4', 0),
(825, 51, '5', 0),
(826, 51, '6', 0),
(827, 51, '7', 0),
(828, 51, '8', 0),
(829, 51, '9', 0),
(830, 51, '10', 0),
(831, 51, '11', 0),
(832, 51, '12', 0),
(833, 51, '13', 0),
(834, 51, '14', 0),
(835, 51, '15', 0),
(836, 51, '16', 0),
(837, 51, '17', 0),
(838, 51, '18', 0),
(839, 51, '19', 0),
(840, 51, '20', 0),
(841, 51, '21', 0),
(842, 51, '22', 0),
(843, 51, '23', 0),
(844, 51, '24', 0),
(845, 51, '25', 0),
(846, 51, '26', 0),
(847, 51, '27', 0),
(848, 51, '28', 0),
(849, 51, '29', 0),
(850, 51, '30', 0),
(851, 51, '31', 0),
(852, 51, '32', 0),
(853, 51, '33', 0),
(854, 51, '34', 0),
(855, 51, '35', 0),
(856, 51, '36', 0),
(857, 51, '37', 0),
(858, 51, '38', 0),
(859, 51, '39', 0),
(860, 51, '40', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `users_name` varchar(255) DEFAULT NULL,
  `users_password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `users_name`, `users_password`, `role`) VALUES
(1, 'Mickie', '$2b$10$VqIUX.1AMVfvjrStTcjeyuLPUmKQ.zbpNCJ3IjifLv3rhldoolJaK', '0'),
(2, 'admin', '$2b$10$lNlIe8SGsh.papVaW4gXYODwqhrBReTp/ro3h0oN.bU7Ym01GVlTO', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`Animal_ID`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`Booking_ID`),
  ADD KEY `fk_user` (`User_ID`),
  ADD KEY `fk_round` (`Round_ID`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`Room_ID`);

--
-- Indexes for table `rounds`
--
ALTER TABLE `rounds`
  ADD PRIMARY KEY (`Round_ID`),
  ADD KEY `Animal_ID` (`Animal_ID`),
  ADD KEY `Room_ID` (`Room_ID`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`Seat_ID`),
  ADD KEY `Round_ID` (`Round_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animal`
--
ALTER TABLE `animal`
  MODIFY `Animal_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `Booking_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `Room_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rounds`
--
ALTER TABLE `rounds`
  MODIFY `Round_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `Seat_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=861;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `fk_round` FOREIGN KEY (`Round_ID`) REFERENCES `rounds` (`Round_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`User_ID`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `rounds`
--
ALTER TABLE `rounds`
  ADD CONSTRAINT `rounds_ibfk_1` FOREIGN KEY (`Animal_ID`) REFERENCES `animal` (`Animal_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `rounds_ibfk_2` FOREIGN KEY (`Room_ID`) REFERENCES `rooms` (`Room_ID`) ON DELETE CASCADE;

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`Round_ID`) REFERENCES `rounds` (`Round_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
