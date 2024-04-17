function showCars(Car) {
    console.log("make: ", Car.make);
    console.log("model: ", Car.model);
    console.log("year: ", Car.year);
}
var myCar = {
    make: "toyota",
    model: "prado",
    year: 2000
};
showCars(myCar);
