function extractText() {
    const list = document.querySelectorAll('li');
    let result = [];
    for (let el of list) {
        result.push(el.textContent);
    }
    document.getElementById('result').textContent = `${result.join('\n')}`;
}