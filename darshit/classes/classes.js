class Car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar1= new Car("Audi",2020);
let myCar2= new Car("BMW",2021);
function f1() {
document.getElementById("demo").innerHTML = myCar1.name+" "+ myCar1.year +" "+ myCar1.age();

document.getElementById("demo1").innerHTML = myCar2.name+" "+ myCar2.year + " " + myCar2.age();
}