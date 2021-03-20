function sumTable() {
    const rows = document.querySelectorAll('table tr td');
    let sum = 0;
    for (let i = 1; i < rows.length; i += 2) {
        let num = Number(rows[i].textContent);
        sum += num;
    }
    document.getElementById('sum').textContent = `${sum.toFixed(2)}`;
}