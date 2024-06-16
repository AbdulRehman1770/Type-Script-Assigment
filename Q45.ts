type Car = {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
    let car: Car = {
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