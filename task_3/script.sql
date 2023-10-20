/* 
	Для написания данного скрипта использовал реляционный подход для создания схемы базы данных 
    (3 Нормальная форма) 
*/

/* city */
CREATE TABLE city (
    idCity PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL
);

/* workshop (цех) */
CREATE TABLE workshop (
    idWorkshop INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
  	address NVARCHAR(255) NOT NULL,
    idCity INT NOT NULL,
    CONSTRAINT FK_workshop_city FOREIGN KEY (idCity) REFERENCES city(idCity)
);

/* brigade */
CREATE TABLE brigade (
    idBrigade INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL
);

/* shift (смена) */
CREATE TABLE shift (
    idShift INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
  	workStart TIME NOT NULL,
  	workFinish TIME NOT NULL,
  	idBrigade INT NOT NULL,
    CONSTRAINT FK_shift_brigade FOREIGN KEY (idBrigade) REFERENCES brigade(idBrigade)
);

/* worker */
CREATE TABLE worker (
    idWorker INT PRIMARY KEY IDENTITY(1,1),
    lastName NVARCHAR(255) NOT NULL,
    firstName NVARCHAR(255) NOT NULL,
    patronymic NVARCHAR(255),
    dateOfBirth DATE NOT NULL,
    idWorkshop INT NOT NULL,
    idShift INT NOT NULL,
    CONSTRAINT FK_worker_workshop FOREIGN KEY (idWorkshop) REFERENCES workshop(idWorkshop),
    CONSTRAINT FK_worker_shift FOREIGN KEY (idShift) REFERENCES shift(idShift)
);