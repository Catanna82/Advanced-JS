function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}