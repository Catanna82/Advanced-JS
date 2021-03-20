function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            return this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            return this.treasury -= Math.ceil(this.treasury * percent / 100);
        },
    };
};
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
