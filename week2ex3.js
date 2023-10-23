class Sinhvien {
    constructor(name) {
        this.name = name;
    }

    hoc(subject) {
        console.log(`${this.name} is studying ${subject}`);
    }
}

// Sử dụng
const sinhvien = new Sinhvien('Dang Minh Thien');
sinhvien.hoc('Nodejs');
