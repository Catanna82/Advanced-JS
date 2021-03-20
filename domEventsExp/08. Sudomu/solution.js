function solve() {
    const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
    const quickBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];
    quickBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const checkData = (data, size) => {
            return data.reduce((acc, curr) => {
                const rowCheck = curr.sort().reduce((a, c, i) => {
                    if (c === i + 1) {
                        a++;
                    }
                    return a;
                }, 0)
                if (rowCheck === size) {
                    acc++
                }
                return acc;
            }, 0);
        };
        let checksPassed = 0; // rows, columns, (??) sub-squares
        let checksNeeded = 2; // rows, columns
        let field = rows.map(v => {
            return Array.from(v.children).map(cv => {
                return Number(cv.children[0].value);
            })
        });
        const size = field.length;
        const columns = field.reduce((acc, curr, i) => {
            for (let j = 0; j < size; j++) {
                acc[j].push(curr[j]);
            }
            return acc;
        }, (new Array(size).fill(1).map(v => [])))
        // rows check
        if (checkData(field, size) === size) {
            checksPassed++
        }
        // columns check
        debugger;
        if (checkData(columns, size) === size) {
            checksPassed++
        }
        const sqrtSize = Math.sqrt(field.length);
        if (sqrtSize === parseInt(sqrtSize)) {
            checksNeeded++; // (??) sub-squares
            // TODO: sub-squares check
        }

        if (checksPassed === checksNeeded) {
            // success
        } else {
            // failure
        }
    })
    
}