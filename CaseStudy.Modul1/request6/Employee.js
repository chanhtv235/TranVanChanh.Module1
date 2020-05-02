function Employee() {
    this.setName = function f(name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setIdCard = function (IdCard) {
        this.IdCad = IdCard;
    };
    this.getIdCard = function () {
        return this.IdCad;
    };
    this.setBirthDay = function (birthday) {
        this.birthDay =birthday;
    };
    this.getBirthDay = function () {
        return this.birthDay;
    };

    this.setEmail = function (email) {
        this.email = email
    };
    this.getEmail = function () {
        return this.email;
    };
    this.setAddress = function (address) {
        this.address = address;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.getPositon = function () {
        return this.position;
    };

    this.getSalary = function () {
        let total=0;
        if(this.getPositon()==="Manager")
            total=500;
        else if (this.getPositon()==="Sale")
            total =300;
        else
            total=200;
        return total;
    };


}
