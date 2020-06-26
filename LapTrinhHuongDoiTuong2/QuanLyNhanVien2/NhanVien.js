class NhanVien {
    constructor(ten, ngaySinh, diaChi, luong, chucVu) {
        this.ten = ten;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }

    setTen(ten) {
        this.ten = ten;
    }

    getTen() {
        return this.ten;
    }

    setNgaySinh(ngaySinh) {
        this.ngaySinh = ngaySinh
    }

    getNgaySinh() {
        return this.ngaySinh;
    }

    setDiaChi(diaChi) {
        this.diaChi = diaChi;
    }

    getDiaChi() {
        return this.diaChi;
    }

    setLuong(luong) {
        this.luong = luong;
    }

    getLuong() {
        return this.luong;
    }

    setChuVu(chucVu) {
        this.chucVu = chucVu;
    }

    getChucVu() {
        return this.chucVu;
    }

    toString() {
        let thongTin = "1.Tên: " + this.getTen() +
            "\n2.Ngày sinh: " + this.getNgaySinh() +
            "\n3.Địa chỉ: " + this.getDiaChi() +
            "\n4.Lương: " + this.getLuong() +
            "\n5.Chức vụ: " + this.getChucVu() + "\n";
        return thongTin;
    }
}
