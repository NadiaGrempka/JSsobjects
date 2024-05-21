function Auto(year, carMileage, startPrice, endPrice){
    this.year = year;
    this.carMileage = carMileage;
    this.startPrice = startPrice;
    this.endPrice = endPrice;

    this.addPrice = function () {
        this.startPrice += 1000;
        console.log(this.startPrice);
    }

    this.subtracktPrice = function (){
        for (let i = 0; i < this.year; i++){
            this.endPrice -= 1000;
        }
        console.log(this.endPrice);
    }

    this.subYear = function (){
        const carYear = new Date().getFullYear() - this.year;
        this.endPrice -= carYear*1000;
    }

    this.lowerEndPrice = function (){
        this.endPrice = this.startPrice;
        this.subYear();
        this.subtracktPrice();
    }

    this.update = function (newMileage, newYear) {
        this.carMileage = newMileage;
        this.year = newYear;
        this.lowerEndPrice();
    }
}

const cars = [];

function addCar(auto){
    if(auto.endPrice > 10000){
        cars.push(auto);
    }
}

function addYear(){
    cars.forEach(auto => {
        auto.year += 1;
        auto.lowerEndPrice();
    });
}


function run(){
    let sam = new Auto(5, 8484848, 100, 50000);
    sam.addPrice();
    sam.subtracktPrice();
    sam.subYear();
    sam.lowerEndPrice();
    sam.update();
}

const sam1 = new Auto(6,545454,777,1111);
const sam2 = new Auto(8,765434567876,222,67777);
const sam3 = new Auto(20,56778,555,776767);

addCar(sam1, sam3);

console.log("Tablica na początku:");
console.log(cars);
addYear();
console.log("Tablica po zwiekszeniu roku: ");
console.log(cars);
