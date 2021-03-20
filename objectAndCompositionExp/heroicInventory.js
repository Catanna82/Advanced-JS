function heroicInventory(heroesData) {
    let result = [];
    for (let i = 0; i < heroesData.length; i++) {
        let [heroName, heroLevel, items] = heroesData[i].split(' / ');
        const heroes = {};
        heroes.name = heroName;
        heroes.level = Number(heroLevel);
        heroes.items = items ? items.split(', ') : [];
        result.push(heroes);
    }
    return JSON.stringify(result);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]));