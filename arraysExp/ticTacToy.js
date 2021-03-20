function ticTacToy(data) {
    let dashBoard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]]
    let player = 'X';
    let count = 1;
    let winner = {
        r0: 0,
        r1: 0,
        r2: 0,
        c0: 0,
        c1: 0,
        c2: 0,
        d1: 0,//main
        d2: 0//secondary
    }
    //X = 1; O = -1;
    let isFull = 0;
    for (let i = 0; i < data.length; i++) {
        let [row, column] = data[i].split(' ');
        if (dashBoard[row][column] === false) {
            dashBoard[row][column] = player;
            isFull++;
            winner[`r${row}`] += count;
            winner[`c${column}`] += count;
            if (row === column) {
                winner.d1 += count;
            }
            if (Number(row) + Number(column) === 2){
                winner.d2 += count;
            }
            let result;
            Object.values(winner).forEach(w => {
                if (w === 3) {
                    result = `Player X wins!`;
                } else if (w === -3) {
                    result = `Player O wins!`;
                }
            });
            if (result) {
                console.log(result);
                break;
            } else if (isFull === 9) {
                console.log('The game ended! Nobody wins :(');
                break;
            }
            player = player === 'X' ? 'O' : 'X';
            count = player === 'X' ? 1 : -1;
        } else if (dashBoard[row][column] !== false) {
            console.log('This place is already taken. Please choose another!');
        }
    }
    return dashBoard.reduce((acc, curr) => {
        acc.push(curr.join('\t'));
        return acc;
    }, []).join('\n')
}

console.log(ticTacToy([
    "0 -1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]));
// console.log(ticTacToy([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"
// ]));
// console.log(ticTacToy([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"
// ]));