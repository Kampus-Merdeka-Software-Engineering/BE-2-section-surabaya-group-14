-- CreateTable
CREATE TABLE `Hotel` (
    `hotel_id` INTEGER NOT NULL AUTO_INCREMENT,
    `hotel_name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `facilities` VARCHAR(191) NULL,

    UNIQUE INDEX `Hotel_hotel_name_key`(`hotel_name`),
    PRIMARY KEY (`hotel_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `room_id` INTEGER NOT NULL AUTO_INCREMENT,
    `room_type` VARCHAR(50) NOT NULL,
    `room_price` DOUBLE NOT NULL,
    `available` BOOLEAN NOT NULL,

    UNIQUE INDEX `Room_room_type_key`(`room_type`),
    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `contact_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fullname` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(16) NOT NULL,
    `message` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `Contact_fullname_email_key`(`fullname`, `email`),
    PRIMARY KEY (`contact_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `reservation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customer_name` VARCHAR(50) NOT NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `customer_description` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `Reservation_customer_name_key`(`customer_name`),
    PRIMARY KEY (`reservation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
