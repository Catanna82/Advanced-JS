function addDestination() {

    const inputData = document.getElementsByClassName('inputData');
    const city = inputData[0].value;
    const country = inputData[1].value;
    if (!city || !country) {
        return;
    }
    let counter = {
        Summer: document.getElementById('summer'),
        Autumn: document.getElementById('autumn'),
        Winter: document.getElementById('winter'),
        Spring: document.getElementById('spring')
    }

    const seasonData = document.getElementById('seasons');
    const season = seasonData.options[seasonData.selectedIndex].text;
    const destinationList = document.getElementById('destinations').children[1];

    +counter[season].value++;

    let tdDataCountry = e('td', `${city}, ${country}`);
    let tdDataSeason = e('td', `${season}`);
    let trData = e('tr', tdDataCountry);
    trData.appendChild(tdDataSeason);
    destinationList.appendChild(trData);

    inputData[0].value = '';
    inputData[1].value = '';
    function e(type, content) {
        const result = document.createElement(type);
        if (typeof content == 'string') {
            result.textContent = content;
        } else {
            result.appendChild(content);
        }
        return result;
    }
}