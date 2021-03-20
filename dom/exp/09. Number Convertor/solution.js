function solve() {
    const selectElement = document.querySelector('#selectMenuTo');
    const binaryOption = document.createElement('option');
    const hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    selectElement.add(binaryOption);
    selectElement.add(hexadecimalOption);

    document.querySelector('button').addEventListener('click', (ev) => {

        const decimalNumber = +document.querySelector('#input').value;
        let selectElement = document.querySelector('#selectMenuTo');
        const convertTo = selectElement.options[selectElement.selectedIndex].text;

        let result;

        switch (convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
            default:
                result = '';
                break;
        }

        document.querySelector('#result').value = result;
    })
}