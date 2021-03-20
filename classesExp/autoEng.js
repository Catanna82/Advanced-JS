function solve(input) {
    let cars = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, producedCars });
        } else if (cars[carBrand].some(car => car.carModel === carModel)) {
            let targetCar = cars[carBrand].find(car => car.carModel === carModel);
            targetCar.producedCars += producedCars;
        } else {
            cars[carBrand].push({ carModel, producedCars });
        };
    }

    // console.log(cars)
    for (const [brand, car] of Object.entries(cars)) {
        console.log(brand);
        for (const currentCar of Object.values(car)) {
            console.log(`###${currentCar.carModel} -> ${currentCar.producedCars}`);
        }
    }
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
));

// function solve(arr) {
//     let result = arr.map((line) => line.split(' | ')).reduce((storage, cars) => {
//         let [brand, model, quantity] = cars;
//         if (!storage.has(brand)) {
//             storage.set(brand, new Map());
//         }
//         if (!storage.get(brand).has(model)) {
//             storage.get(brand).set(model, 0);
//         }
//         let value = Number(storage.get(brand).get(model));
//         storage.get(brand).set(model, value + Number(quantity));
//         let resultString = [];
//         for ([brand, model] of storage.entries()) {
//             let result = `${brand}\n`;
//             for (let [name, quantity] of model.entries()) {
//                 result += `###${name} -> ${quantity}\n`;
//             }
//             let model = brand.value;
//             resultString.push(result.trim());
//         }
//         return resultString.join('\n');
//     }, new Map());
//     return result;
// }

//     console.log(solve(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// ));