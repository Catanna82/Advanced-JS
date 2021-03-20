function townToJSON(params) {
    let prop = params.shift();
    let result = []
    for (let el of params) {
        let [town, latitude, longitude] = el.split('|').filter(x => x !== '').map(x => x.trim());
        let towns = {
            'Town': town,
            'Latitude': Number(Number(latitude).toFixed(2)),
            'Longitude': Number(Number(longitude).toFixed(2)),
        }
        result.push(towns)
    }

    // let data = params.map(row => row.split('|').filter(x => x !== '').map(x => x.trim()));
    // let properties = data.shift();
    // let result = [];

    // data.forEach(row => {
    //     let town = {
    //         [properties[0]]: row[0],
    //         [properties[1]]: Number(Number(row[1]).toFixed(2)),
    //         [properties[2]]: Number(Number(row[2]).toFixed(2)),
    //     };
    //     result.push(town);
    // });
    return JSON.stringify(result);

};

console.log(townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

// function townToJSON(params) {
//     let [columns, ...table] = params.map(splitLine);
//     function isEmpty(x) {
//         return x !== ' ';
//     }
//     function convertIfNum(x) {
//         return isNaN(x) ? x : Number(Number(x).toFixed(2))
//     }
//     function splitLine(params) {
//         return params.split('|').filter(isEmpty).map(x => x.trim()).map(convertIfNum);
//     }

//     return JSON.stringify(table.map(entry => {
//         return columns.reduce((acc, curr, index) => {
//             acc[curr] = entry[index];
//             return acc;
//         }, {})
//     }));
// }

// console.log(townToJSON(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// ));