"use strict";
function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["hasSunroof", true]);
console.log(myCar);
