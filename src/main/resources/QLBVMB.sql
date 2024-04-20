CREATE DATABASE QLBVMB;
USE QLBVMB;

CREATE TABLE SANBAY (
	MaSanBay CHAR(10) PRIMARY KEY, 
	TenSanBay VARCHAR(50) NOT NULL,
    DiaChi VARCHAR(50) NOT NULL
);

CREATE TABLE HANGMAYBAYSX (
	MaHMB CHAR(10) PRIMARY KEY,
    TenHMB char(50) NOT NULL
);

CREATE TABLE MAYBAY (
	MaMB CHAR(10) PRIMARY KEY,
    TenMB CHAR(50) NOT NULL,
    MaHMB CHAR(20) NOT NULL,
    SLGhe INT NOT NULL,
    FOREIGN KEY (MaHMB) REFERENCES HANGMAYBAYSX(MaHMB)
);

CREATE TABLE CHUYENBAY (
    MaChuyenBay CHAR(10) PRIMARY KEY,
    MaMB CHAR(10) NOT NULL,
    MaSanBayDi CHAR(10) NOT NULL,
    MaSanBayDen CHAR(10) NOT NULL,
    NgayGioBay DATETIME NOT NULL,
    ThoiGianBay TIME NOT NULL,
    DonGia FLOAT NOT NULL,
    FOREIGN KEY (MaMB) REFERENCES MAYBAY(MaMB),
    FOREIGN KEY (MaSanBayDi) REFERENCES SANBAY(MaSanBay),
    FOREIGN KEY (MaSanBayDen) REFERENCES SANBAY(MaSanBay)
);

CREATE TABLE TRUNGGIAN (
    MaSanBayTG CHAR(10) NOT NULL,
    MaChuyenBay CHAR(10) NOT NULL,
    ThoiGianDung TIME NOT NULL,
    GhiChu VARCHAR(255),
    PRIMARY KEY (MaSanBayTG, MaChuyenBay),
    FOREIGN KEY (MaSanBayTG) REFERENCES SANBAY(MaSanBay),
    FOREIGN KEY (MaChuyenBay) REFERENCES CHUYENBAY(MaChuyenBay)
);

CREATE TABLE HANGVE (
    MaHangVe CHAR(10) PRIMARY KEY,
    TenHangVe VARCHAR(50) NOT NULL,
    TiLeGiaHangVe FLOAT NOT NULL
);

CREATE TABLE CT_HANGVE (
    MaHangVe CHAR(10),
    MaChuyenBay CHAR(10),
    SoLuong INT NOT NULL,
    SoGheDat INT NOT NULL,
    SoGheBan INT NOT NULL,
    SoGHeConLai INT NOT NULL,
    DonGiaHV FLOAT NOT NULL,
    PRIMARY KEY (MaHangVe, MaChuyenBay),
    FOREIGN KEY (MaHangVe) REFERENCES HANGVE(MaHangVe),
    FOREIGN KEY (MaChuyenBay) REFERENCES CHUYENBAY(MaChuyenBay)
);

CREATE TABLE DSGHE (
	SoGhe INT NOT NULL,
    MaMB CHAR(10) NOT NULL,
    MaHangVe CHAR(10) NOT NULL,
    GhiChu VARCHAR(255),
    PRIMARY KEY(SoGhe, MaMB),
    FOREIGN KEY (MaMB) REFERENCES MAYBAY(MaMB),
    FOREIGN KEY (MaHangVe) REFERENCES HANGVE(MaHangVe)
);

CREATE TABLE THAMSO (
	SoSanBayTGToiDa TINYINT NOT NULL,
	TGBayToiThieu TIME NOT NULL,
	TGDungToiThieu TIME NOT NULL,
	TGDungToiDa TIME NOT NULL,
	TGDatVeChamNhat TINYINT NOT NULL,
	TGHuyChamNhat TINYINT NOT NULL
);

CREATE TABLE HANHKHACH (
	MaHK CHAR(15) PRIMARY KEY,
	HoTen VARCHAR(255) NOT NULL,
	DinhDanh VARCHAR(20),
	SoDienThoai VARCHAR(15) NOT NULL,
	Email VARCHAR(255),
	NgaySinh DATETIME NOT NULL
);

CREATE TABLE CT_DATVE (
    MaChuyenBay CHAR(10) NOT NULL,
    MaNguoiDat CHAR(15),
    MaHangVe CHAR(10),
    MaLHK CHAR(10),
    NgayDatVe DATETIME NOT NULL,
    TinhTrang VARCHAR(25) NOT NULL,
    PRIMARY KEY (MaChuyenBay, MaNguoiDat),
    FOREIGN KEY (MaLHK) REFERENCES LOAIHANHKHACH(MaLHK),
    FOREIGN KEY (MaChuyenBay) REFERENCES CHUYENBAY(MaChuyenBay) ON DELETE CASCADE,
    FOREIGN KEY (MaNguoiDat) REFERENCES NGUOIDUNG(MaDangNhap),
    FOREIGN KEY (MaHangVe) REFERENCES HANGVE(MaHangVe)
);

CREATE TABLE LOAIHANHKHACH (
	MaLHK CHAR(10) NOT NULL,
    TenLHK CHAR(10) NOT NULL,
    TiLeLHK FLOAT NOT NULL,
    PRIMARY KEY (MaLHK)
);

CREATE TABLE BANVE (
	MaBanVe CHAR(10),
    MaChuyenBay CHAR(10),
    MaHangVe CHAR(10),
    MaLHK CHAR(10),
    NgayBanVe DATETIME NOT NULL,
    GiaBanVe FLOAT NOT NULL,
    TenKhachHang VARCHAR(150) NOT NULL,
    DinhDanh VARCHAR(20) NOT NULL,
    SoDienThoai VARCHAR(15) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    PRIMARY KEY(DinhDanh, MaChuyenBay),
    FOREIGN KEY (MaLHK) REFERENCES LOAIHANHKHACH(MaLHK),
    FOREIGN KEY (MaChuyenBay) REFERENCES CHUYENBAY(MaChuyenBay),
    FOREIGN KEY (MaHangVe) REFERENCES HANGVE(MaHangVe)
);


-- Thêm vài ví dụ vào bảng SANBAY
INSERT INTO SANBAY (MaSanBay, TenSanBay, DiaChi)
VALUES 
    ('SGN', 'Tân Sơn Nhất', 'Hồ Chí Minh'),
    ('HAN', 'Nội Bài', 'Hà Nội'),
    ('DAD', 'Đà Nẵng', 'Đà Nẵng'),
    ('CXR', 'Cam Ranh', 'Khánh Hòa'),
    ('PQC', 'Phú Quốc', 'Kiên Giang'),
    ('VCA', 'Cần Thơ', 'Cần Thơ');
    

-- Thêm vài ví dụ vào bảng HANGMAYBAYSX
INSERT INTO HANGMAYBAYSX (MaHMB, TenHMB)
VALUES 
    ('Boeing', 'Boeing Company'),
    ('Airbus', 'Airbus SAS'),
    ('Embraer', 'Embraer S.A.'),
    ('Bombardier', 'Bombardier Inc.'),
    ('ATR', 'Avions de Transport Régional'),
    ('Mitsubishi', 'Mitsubishi Aircraft Corporation');
    
-- Thêm vài ví dụ vào bảng MAYBAY
INSERT INTO MAYBAY (MaMB, TenMB, MaHMB, SLGhe)
VALUES 
    ('MB001', 'Boeing 737', 'Boeing', 150),
    ('MB002', 'Airbus A320', 'Airbus', 180),
    ('MB003', 'Embraer 190', 'Embraer', 100),
    ('MB004', 'Bombardier Q400', 'Bombardier', 78),
    ('MB005', 'ATR 72', 'ATR', 70),
    ('MB006', 'Mitsubishi MRJ', 'Mitsubishi', 90);

-- Thêm vài ví dụ vào bảng CHUYENBAY
INSERT INTO CHUYENBAY (MaChuyenBay, MaMB, MaSanBayDi, MaSanBayDen, NgayGioBay, ThoiGianBay, DonGia)
VALUES
    ('CB001', 'MB001', 'SGN', 'HAN', '2024-04-19 08:00:00', '02:00:00', 2000.00),
    ('CB002', 'MB002', 'HAN', 'DAD', '2024-04-19 10:00:00', '01:30:00', 1500.00),
    ('CB003', 'MB003', 'DAD', 'PQC', '2024-04-19 12:00:00', '01:00:00', 1200.00),
    ('CB004', 'MB004', 'PQC', 'CXR', '2024-04-19 14:00:00', '01:15:00', 1000.00),
    ('CB005', 'MB005', 'CXR', 'SGN', '2024-04-19 16:00:00', '01:30:00', 1800.00);

-- Thêm vài ví dụ vào bảng TRUNGGIAN
INSERT INTO TRUNGGIAN (MaSanBayTG, MaChuyenBay, ThoiGianDung, GhiChu)
VALUES 
    ('DAD', 'CB001', '00:30:00', 'Chờ tiếp nhiên liệu'),
    ('VCA', 'CB002', '00:45:00', 'Đón khách'),
    ('CXR', 'CB003', '00:20:00', 'Chuyển hàng hóa'),
    ('HAN', 'CB004', '00:35:00', 'Chờ phi hành đoàn mới'),
    ('SGN', 'CB005', '00:40:00', 'Kiểm tra kỹ thuật');


INSERT INTO HANGVE VALUES ('HANG1', 'Hạng 1', 1.05);
INSERT INTO HANGVE VALUES ('HANG2', 'Hạng 2', 1);

INSERT INTO CT_HANGVE (MaHangVe, MaChuyenBay, SoLuong, SoGheDat, SoGheBan, SoGheConLai, DonGiaHV)
VALUES
    ('HANG1', 'CB001', 100, 30, 20, 50, 2100),
    ('HANG2', 'CB001', 50, 10, 15, 25, 2000);
    
 
DELIMITER $$
CREATE PROCEDURE InsertSeats()
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE j INT DEFAULT 101;

    -- Chèn dữ liệu cho 100 ghế hạng 1
    WHILE i <= 100 DO
        INSERT INTO DSGHE (SoGhe, MaMB, MaHangVe, GhiChu)
        VALUES (i, 'MB001', 'HANG1', '');
        SET i = i + 1;
    END WHILE;

    -- Chèn dữ liệu cho 50 ghế hạng 2
    WHILE j <= 150 DO
        INSERT INTO DSGHE (SoGhe, MaMB, MaHangVe, GhiChu)
        VALUES (j, 'MB001', 'HANG2', '');
        SET j = j + 1;
    END WHILE;
END $$
DELIMITER ;

CALL InsertSeats();