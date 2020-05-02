let arrlistCustomer = new Array();
function mainMenu() {
    let select = prompt("" +
        "1.Add New Customer.\n" +
        "2.Display Information Customer.\n" +
        "3.Display total pay of customer.\n" +
        "4.Edit Information Customer.\n" +
        "5.Delete Customer.\n" +
        "6.Exit.\n");
    switch (select) {
        case "1":
            addNewCustomer();
            mainMenu();
            break;
        case "2":
            displayCustomer();
            mainMenu();
            break;
        case "3":
            displayTotalPayCustommer();
            mainMenu();
            break;
        case "4":
            editInformationCustomer();
            mainMenu();
            break;
        case "5":
            deleteCustommer();
            mainMenu();
            break;
        case "6":
            break;
        default:
            mainMenu();
    }
}

function addNewCustomer() {
    let custommer =new Custommer();
    let checkStatus=false;
    custommer.setName(prompt("1.Enter new name custommer"));
    do {
        checkStatus=true;
        custommer.setIdCard(prompt("2.Enter ID Card custommer"));
        if (/[\d]{9}/.test(custommer.getIdCard())){
            checkStatus=false
        }
    }while(checkStatus);
    //////////////////////////////////////////////////////////

    do {
        checkStatus=true;
        custommer.setBirthDay(prompt("3.Enter Birthday custommer"));
        let patt=/([0][1-9]|[1-2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/([1-2][\d]{3})/;
        if (patt.test(custommer.getBirthDay())) {
            checkStatus=false
        }
    }while(checkStatus);

    do {
        checkStatus=true;
        custommer.setEmail(prompt("4.Enter Email custommer"));
        let patt=/[\w]+@[a-z]+\.[a-z]+/;
        if (patt.test(custommer.getEmail())) {
            checkStatus=false
        }
    }while(checkStatus);

    custommer.setAddress(prompt("5.Enter address custommer"));
    custommer.setTypeCustommer(prompt("6.Enter type custommer"));

    do {
        checkStatus=true;
        custommer.setDiscount(prompt("7.Enter Discount custommer"));
        let patt=/^[\d]+$/;
        if (patt.test(custommer.getDiscount())) {
            checkStatus=false
        }
    }while(checkStatus);

    do {
        checkStatus=true;
        custommer.setAccompanying(prompt("8.Enter the mumber of accompanying"));
        let patt=/^[\d]+$/;
        if (patt.test(custommer.getAccompanying())) {
            checkStatus=false
        }
    }while(checkStatus);

    do {
        checkStatus=true;
        custommer.setRentDays(prompt("9.Enter rent days custommer"));
        let patt=/^[\d]+$/;
        if (patt.test(custommer.getRentDays())) {
            checkStatus=false
        }
    }while(checkStatus);

    custommer.setTypeService(prompt("10..Enter type service custommer"));
    custommer.setTypeRoom(prompt("11.Enter type room custommer rent"));
    ////////////////////////////////////////////////////////////////////

    let infoCustomer = [];
    infoCustomer[0] = custommer.getName();
    infoCustomer[1]=custommer.getIdCard();
    infoCustomer[2]= custommer.getBirthDay();
    infoCustomer[3]= custommer.getEmail();
    infoCustomer[4]=custommer.getAddress();
    infoCustomer[5]=custommer.getTypeCustommer();
    infoCustomer[6]= custommer.getDiscount();
    infoCustomer[7]=custommer.getAccompanying();
    infoCustomer[8]= custommer.getRentDays();
    infoCustomer[9]=custommer.getTypeService();
    infoCustomer[10]= custommer.getTypeRoom();
    infoCustomer[11]= custommer.payMoney();
    arrlistCustomer.push(infoCustomer);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function displayCustomer() {
    let str="";
    for (let i=0;i<arrlistCustomer.length;i++)
        str += i+1 +".Name: "+arrlistCustomer[i][0]+", IdCard: "+arrlistCustomer[i][1]+"\n"
    let selection = prompt("Select a Customer that you want show\n"+ str + (arrlistCustomer.length+ 1) + ".Back" );

    if (selection>0&&selection<arrlistCustomer.length+1){
        dislayInfomationCustomer(selection,arrlistCustomer);
    }else if (selection==arrlistCustomer.length+1) {
        mainMenu();
    }else {
        alert("You chossed failed");
        displayCustomer();
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function infomationCustomer(i,arr) {

    let string= "1.Name         : " + arr[i-1][0]  + "\n"+
                "2.ID Card      : " + arr[i-1][1] +"\n" +
                "3.Birthday     : " + arr[i-1][2] + "\n"+
                "4.Email        : " + arr[i-1][3] + "\n"+
                "5.Address       : " + arr[i-1][4]+ "\n"+
                "6.Type Customer: " + arr[i-1][5]+"\n"+
                "7.Discount     : " + arr[i-1][6]+ "\n"+
                "8.Acompanning  : " + arr[i-1][7]+ "\n"+
                "9.Renting day  : " + arr[i-1][8]+ "\n"+
                "10.Type Service : " + arr[i-1][9]+"\n"+
                "11.Type Room    : " + arr[i-1][10]+ "\n" +
                "12. Total Pay   : " + arr[i-1][11];
    return string;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function dislayInfomationCustomer(i,arr) {
    alert(infomationCustomer(i,arr));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function displayTotalPayCustommer() {
    let str="";
    for (let i=0;i<arrlistCustomer.length;i++){
        str += i+1 +".Name: "+arrlistCustomer[i][0]+", IdCard: "+arrlistCustomer[i][1]+"\n";
    }

    let selection = prompt("Select a Customer that you want to pay Money\n"+ str + (arrlistCustomer.length+ 1) + ".Back" );

    if (selection>0&&selection<arrlistCustomer.length+1){
        alert("Total pay of "+ arrlistCustomer[selection-1][0]+" is "+arrlistCustomer[selection-1][11]);
        displayTotalPayCustommer();
    }else if (selection==arrlistCustomer.length+1) {
        mainMenu();
    }else {
        alert("You chossed failed");
        displayCustomer();
    }
}
// / /////////////////////////////////////////////////////////////////////////////////////////////////////
function editInformationCustomer() {
    let str="";
    for (let i=0;i<arrlistCustomer.length;i++)
        str += i+1 +".Name: "+arrlistCustomer[i][0]+", IdCard: "+arrlistCustomer[i][1]+"\n"
    let select1 = prompt("Select a Customer that you want Edit \n"+ str + (arrlistCustomer.length+ 1) + ".Back" );

    if (select1>0&&select1<=arrlistCustomer.length){
        let select2= prompt("Select a property that you want to edit \n"+infomationCustomer(select1,arrlistCustomer));
        switch (select2) {
            case "1":name=prompt("Edit Name of Custommer");
                arrlistCustomer[select1-1][0]=name;
                break;
            case "2":idCard=prompt("Edit ID Card of Custommer");
                arrlistCustomer[select1-1][1]=idCard;
                break;
            case "3":birthDay=prompt("Edit Birthday of Custommer");
                arrlistCustomer[select1-1][2]=birthDay;
                break;
            case "4":email=prompt("Edit Email of Custommer ");
                arrlistCustomer[select1-1][3]=email;
                break;
            case "5":address=prompt("Edit Address of Custommer ");
                arrlistCustomer[select1-1][4]=address;
                break;
            case "6":typeCustomer=prompt("Edit Customer of Custommer");
                arrlistCustomer[select1-1][5]=typeCustomer;
                break;
            case "7":discount=prompt("Edit Discount of Custommer");
                arrlistCustomer[select1-1][6]=discount;
                break;
            case "8":accompanying=prompt("Edit the mumber accompanying of Custommer");
                arrlistCustomer[select1-1][7]=accompanying;
                break;
            case "9":rentDays=prompt("Edit renting day of Custommer");
                arrlistCustomer[select1-1][8]=rentDays;
                break;
            case "10":typeService=prompt("Edit Type Service of Custommer");
                arrlistCustomer[select1-1][9]=typeService;
                break;
            case "11":typeRoom=prompt("Edit Room");
                arrlistCustomer[select1-1][10]=typeRoom;
                break;
            default:
                editInformationCustomer();
        }
        mainMenu();
    }else if (select1==arrlistCustomer.length+1) {  //////////////////tao cho select BACK
        mainMenu();
    }else {
        alert("You chossed failed");
        editInformationCustomer();
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function deleteCustommer() {
    let str="";
    for (let i=0;i<arrlistCustomer.length;i++)
        str += i+1 +".Name: "+arrlistCustomer[i][0]+", IdCard: "+arrlistCustomer[i][1]+"\n"
    let select1 = prompt("Select a Customer that you want to delete:\n"+ str + (arrlistCustomer.length+ 1) + ".Back Main Menu" );
    if (select1>0&&select1<=arrlistCustomer.length){
        let select2=prompt("Do you want to delete Customer"+arrlistCustomer[select1-1][0]+"\n1.YES\n2.NO");
        ////"
        if (select2==1){
            arrlistCustomer.splice((select1-1),1);
            mainMenu();
        }else if (select2==2) {
            mainMenu();
        }else{
            alert("You do not Confirm.Please try again.");
            deleteCustommer();
        }
    }else if (select1==((arrlistCustomer.length+1))) {
        mainMenu();
    }else{
        alert("You chossed failed")
        mainMenu();
    }

}