function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';

  let textLowerCase = input.toLowerCase().split(' ');
  if (currentCase === 'Camel Case') {
    result = textLowerCase.reduce((acc, cur, index) => {
      if (index === 0) {
        acc.push(cur);
      } else {
        acc.push(cur[0].toUpperCase().concat(cur.slice(1)));
      }
      return acc;
    }, []).join('');
  } else if (currentCase === 'Pascal Case') {
    result = textLowerCase.reduce((acc, cur, index) => {
      acc.push(cur[0].toUpperCase().concat(cur.slice(1)));
      return acc;
    }, []).join('');
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = `${result}`;
}