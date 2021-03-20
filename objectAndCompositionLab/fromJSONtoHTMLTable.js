function fromJSONToHTMLTable(input) {
 
    let symbolsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&#39;'
    };

    function escapeSymbols(text) {
        return text
            .split("&").join(symbolsToReplace["&"])
            .split("<").join(symbolsToReplace["<"])
            .split(">").join(symbolsToReplace[">"])
            .split("\"").join(symbolsToReplace["\""])
            .split("\'").join(symbolsToReplace["'"])
    }

    let table = []
    table.push('<table>')

    let parsedObject = JSON.parse(input)
    let objectProperties = Object.keys(parsedObject[0])

    function aggregateTableHeading(properties) {
        return properties
            .map(p => `<th>${p}</th>`)
            .reduce((a, b) => {
                a.push(b)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    table.push(aggregateTableHeading(objectProperties))

    function aggregateTableRow(obj) {

        return Object.keys(obj)
            .reduce((a, b) => {
                a.push(`<td>${isNaN(obj[b]) ? escapeSymbols(obj[b]) : obj[b]}</td>`)
                return a;
            }, ['  <tr>'])
            .join('')
            + '</tr>'
    }

    parsedObject
        .map(o => aggregateTableRow(o))
        .forEach(r => table.push(r))
    table.push('</table>')

    return table.join('\n');

}
console.log(fromJSONToHTMLTable([{ "Name": "Stamat", "Score": 5.5 }, { "Name": "Rumen", "Score": 6 }]));
// fromJSONToHTMLTable([{ "Name": "Pesho", "Score": 4, "Grade": "8" }, { "Name": "Gosho", "Score": 5, "Grade": "8" }, { "Name": "Angel", "Score": 5.5, "Grade": "10" }]);