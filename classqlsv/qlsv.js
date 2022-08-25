class Student{
    name;
    msv;
    date;
    email;
    phone;
    address;
    gender;
    constructor(name,msv,date,email,phone,address,gender) {
        this.name = name;
        this.msv = msv;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender= gender;
    }
    getName(){
        return this.name;
    }
    getMsv(){
        return this.msv;
    }
    getDate(){
        return this.date;
    }
    getEmail(){
        return this.email;
    }
    getPhone(){
        return this.phone
    }
    getAddress(){
        return this.address;
    }
    getGender(){
        return this.gender;
    }
    setName(name){
        this.name = name;
    }
    setMsv(msv){
        this.msv = msv;
    }
    setDate(date){
        this.date = date;
    }
    setEmail(email){
        this.email = email;
    }
    setPhone(phone){
        this.phone = phone;
    }
    setAddress(address){
        this.address = address;
    }
    setGender(gender){
        this.gender = gender;
    }
}
class StudentManager {
    constructor(arr) {

    }
}