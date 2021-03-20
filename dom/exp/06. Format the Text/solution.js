function solve() {
  const text = document.getElementById('input').value.split('.').filter(e => e !== '')
  const textP = document.getElementById('output');

  for (let i = 0; i < text.length; i += 3) {
    let arr = [];
    text[i] && arr.push(text[i]);
    text[i + 1] && arr.push(text[i + 1]);
    text[i + 2] && arr.push(text[i + 2]);
    // for (let y = 0; y < 3; y++) {
    //   if (text[i + y]) {
    //     arr.push(text[i + y]);
    //   }
    // };
    let paragraph = arr.join('. ') + '.';
    textP.innerHTML += `<p>${paragraph}</p>`;
  };
};
