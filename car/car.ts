interface Car{
    make: string;
    model: string;
    year: number

}

function showCars(Car: Car): void {
console.log("make: ", Car.make);
console.log("model: ", Car.model);
console.log("year: ", Car.year);
}

const myCar : Car ={
    make: "toyota",
    model:"prado",
    year: 2000
}
showCars(myCar)