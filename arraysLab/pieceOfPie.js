function pieceOfPie(flavors, startFlavor, endFlavor) {
    let startIndex;
    let endIndex;
    if (flavors.indexOf(startFlavor) !== -1) {
        startIndex = flavors.indexOf(startFlavor);
    }
    if (flavors.indexOf(endFlavor) !== -1) {
        endIndex = flavors.indexOf(endFlavor);
    }

    let result = flavors.slice(startIndex, endIndex + 1);
    return result;
}

// console.log(pieceOfPie(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'
// ));
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));