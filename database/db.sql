CREATE TABLE `MaterialReport` (
  `RepoId` INT NOT NULL AUTO_INCREMENT,
  `MaterialId` INT NOT NULL,
  `Material` VARCHAR(45) NULL,
  `Responsable` VARCHAR(45) NULL,
  `Reason` TEXT NULL,
  `TransactionDate` DATE NULL,
  `qty` INT NULL,
  PRIMARY KEY (`RepoId`),
  INDEX `fk_MaterialReport_Material1_idx` (`MaterialId` ASC) VISIBLE,
  CONSTRAINT `fk_MaterialReport_Material1`
    FOREIGN KEY (`MaterialId`)
    REFERENCES `inventory`.`Material` (`MaterialId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE `Provider` (
  `ProviderId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`ProviderId`))
ENGINE = InnoDB;