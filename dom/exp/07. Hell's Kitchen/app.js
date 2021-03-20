function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   const bestRestaurantP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p')

   function onClick() {
      const arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];
         let averageSalary = 0;
         for (let worker of workersArr) {
            let [name, salary] = worker.split(' ');
            workers.push({
               name,
               salary: Number(salary)
            })
         };
         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         };
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
         let bestSalary = workers[0].salary;
         averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });
      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name,
               worker: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            };
         }
         bestRestaurantSalary = restaurants[name].averageSalary
      }
      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let workersResult = bestRestaurant.worker.map(worker => {
         return `Name: ${worker.name} With Salary: ${worker.salary}`
      })
      workersP.textContent = workersResult.join(' ');
   }
}
