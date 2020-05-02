function Custommer() {
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
    this.setTypeCustommer = function (typeCustommer) {
        this.typeCustommer = typeCustommer;
    };
    this.getTypeCustommer = function () {
        return this.typeCustommer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    } ;
    this.getDiscount = function () {
        return this.discount;
    };
    this.setAccompanying = function (accompnaying) {
        this.accompanying = accompnaying;
    };
    this.getAccompanying = function () {
        return this.accompanying;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom =typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.payMoney = function () {
        let total=0;
        if(this.typeService==="Villa")
            total=this.rentDays*500*(100-this.discount)/100;
        else if (this.typeService==="House")
            total =this.rentDays*300*(100-this.discount)/100;
        else
            total=this.rentDays*100*(100-this.discount)/100;
        return total;
    }
   
}
