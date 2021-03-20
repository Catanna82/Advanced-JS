function carFactory(parts) {
    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];
        return engines.find(el => el.power >= power)
    };
    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color,
        }
    };
    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);
        return Array(4).fill(wheel, 0, 4);
    }

    return {
        model: parts.model,
        engine: getEngine(parts.power),
        carriage: getCarriage(parts.carriage, parts.color),
        wheels: getWheels(parts.wheelsize)
    }
};


console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));