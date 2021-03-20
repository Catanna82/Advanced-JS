function solve() {
    const addBtn = document.getElementById('add');
    const open = document.getElementsByClassName('orange')[0].parentNode.parentNode.children[1];
    const inProgress = document.getElementsByClassName('yellow')[0].parentNode.parentNode.children[1];
    const complete = document.getElementsByClassName('green')[0].parentNode.parentNode.children[1];

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const task = document.getElementById('task').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        if (task && description && date) {
            let h3Element = e('h3', task);
            let article = e('article', h3Element);
            let pDescription = e('p', `Description: ${description}`);
            article.appendChild(pDescription);
            let pDate = e('p', `Due Date: ${date}`);
            article.appendChild(pDate);

            let btnFinish = e('button', 'Finish');
            btnFinish.classList.add('orange');
            btnFinish.addEventListener('click', (ev) => {
                ev.preventDefault();
                complete.appendChild(ev.target.parentNode.parentNode);
                ev.target.parentNode.remove();
            })
            let btnStart = e('button', 'Start');
            btnStart.classList.add('green')
            btnStart.addEventListener('click', (ev) => {
                ev.preventDefault();
                inProgress.appendChild(ev.target.parentNode.parentNode);
                ev.target.parentNode.appendChild(btnFinish);
                ev.target.remove();
            })
            let btnDelete = e('button', 'Delete');
            btnDelete.classList.add('red');
            btnDelete.addEventListener('click', (ev) => {
                ev.preventDefault();
                ev.target.parentNode.parentNode.remove();
            })
            let divElement = e('div', btnStart);
            divElement.appendChild(btnDelete);
            divElement.classList.add('flex');

            article.appendChild(divElement);
            open.appendChild(article);

        }
        function e(type, content) {
            const result = document.createElement(type);
            if (typeof content == 'string') {
                result.textContent = content;
            } else {
                result.appendChild(content);
            }
            return result;
        }
    })
}