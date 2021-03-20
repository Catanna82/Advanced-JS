function solve() {
   function e(type, content) {
      const result = document.createElement(type);
      if (typeof content == 'string') {
         result.textContent = content;
      } else {
         result.appendChild(content);
      }
      return result;
   }
   const createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      let creator = document.getElementById('creator').value;
      let title = document.getElementById('title').value;
      let category = document.getElementById('category').value;
      let content = document.getElementById('content').value;

      const section = document.querySelector('main').children[0];

      const h1 = e('h1', title);
      const p1 = e('p', `Category:`);
      p1.appendChild(e('strong', category));

      const p2 = e('p', `Creator:`);;
      p2.appendChild(e('strong', creator));
      const p3 = e('p', content);;

      const deleteBtn = e('button', 'Delete');
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', (ele) => {
         ele.preventDefault();
         ele.target.parentNode.parentNode.remove();
      })

      const archiveBtn = e('button', 'Archive');
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.addEventListener('click', (el) => {
         el.preventDefault();
         const arh = document.querySelector('ol');
         let title = el.target.parentNode.parentNode.children[0].textContent;
         const li = e('li', title);
         arh.appendChild(li);
         el.target.parentNode.parentNode.remove();
         Array.from(arh.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(c => arh.appendChild(c));
      })

      const divElement = e('div', deleteBtn);
      divElement.appendChild(archiveBtn);
      divElement.classList.add('buttons');

      const article = e('article', h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(divElement);
      section.appendChild(article);
   })
}
