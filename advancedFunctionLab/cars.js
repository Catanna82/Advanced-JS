function cars(arr) {
    let carObj = {};

    for (const line of arr) {
        let [command, name, param1, param2] = line.split(' ');
        switch (command) {
            case 'create':
                create(name, param1 && param2);
                break;
            case 'set':
                set(name, param1, param2);
                break;
            case 'print':
                print(name)
                break;
        }
    }
    function print(name) {
        console.log(recursive(name).join(', '));
    }
    function set(name, key, value) {
        if (carObj[name]) {
            carObj[name][key] = value;
        } else {
            carObj[name] = { [key]: value };
        }
    }
    function create(name, parentName) {
        if (parentName) {
            carObj[name] = { inherit: parentName };
        } else {
            carObj[name] = {};
        }
    }
    function recursive(name, props = []) {
        for (const key in carObj[name]) {
            if (key !== 'inherit') {
                props.push(`${key}:${carObj[name][key]}`);
            }
        }
        if (carObj[name].inherit) {
            return recursive(carObj[name].inherit, props);
        } else {
            return props;
        }
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

// function solve(arr) {
//     let objects = {}
//     for (let line of arr) {
//         [command, name, ...other] = line.split(' ')
//         if (command == 'set') {
//             set(name, other[0], other[1])
//         } else if (command == 'print') {
//             print(name)
//         }
//         else if (command == 'create' && other.length == 0) {
//             create(name)
//         } else {
//             inherit(name, other[1])
//         }
//     }
//     function create(createName) {
//         objects[createName] = { arr: [] }
//     }
//     function inherit(createName, inheritName) {
//         create(createName)
//         objects[createName]['inherit'] = inheritName
//     }
//     function set(setName, k, v) {
//         for (let key of Object.keys(objects)) {
//             if (key == setName) {
//                 objects[setName]['arr'].push(`${k}:${v}`)
//             }
//         }
//     }
//     function print(printName) {
//         let printArr = []
//         for ([k, v] of Object.entries(objects[printName])) {
//             if (k != 'inherit') {
//                 printArr.push(v)
//             }
//         }
//         let inheritedArr = recursiveSearch(printName)
//         if (printArr[0] == false) {
//             console.log(inheritedArr.join(', '))
//         } else {
//             if (inheritedArr.length > 0) {
//                 printArr.push([...inheritedArr])
//             }
//             console.log(printArr.join(', '))
//         }
//     }

//     function recursiveSearch(name, resultArr = []) {
//         if ('inherit' in objects[name]) {
//             let newName = objects[name]['inherit']
//             resultArr.push([...objects[newName]['arr']])
//             return recursiveSearch(newName, resultArr)
//         } else {
//             return resultArr
//         }
//     }

// }