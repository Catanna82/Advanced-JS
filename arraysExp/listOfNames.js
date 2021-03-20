function listOfNames(list) {
    let sorted = list
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => {
        return `${index +1}.${name}`
    });
    return sorted.join('\n');
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));