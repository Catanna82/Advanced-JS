function deck(arr) {
    let result = [];
    let isValid = true;
    for (const el of arr) {
        const suit = el.slice(-1);
        const face = el.slice(0, el.length - 1);
        const card = createCard(face, suit);
        if (card.length <= 3) {
            result.push(card);
        } else {
            result = card;
            isValid = false;
            break;
        }
    }

    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suitToString = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if (validFaces.includes(face) === false || Object.keys(suitToString).includes(suit) === false) {
            return `Invalid card: ${face}${suit}`;
        } else {
            return `${face}${suitToString[suit]}`;
        }

    }
    if (isValid) {
        console.log(result.join(' '));
    } else {
        console.log(result);
    }
}


// function printDeckOfCards(cards) {
//     // const makeCard = require('./playingCard')
//     const makeCard = (face, suit) => {
//         const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//         const validSuits = ['S', 'H', 'D', 'C'];
//         if (!validFaces.includes(face))
//             throw new Error("Invalid card face: " + face);
//         if (!validSuits.includes(suit))
//             throw new Error("Invalid card suit: " + suit);
//         let card = {
//             face: face,
//             suit: suit,
//             toString: () => {
//                 let suitToChar = {
//                     'S': "\u2660", // ♠
//                     'H': "\u2665", // ♥
//                     'D': "\u2666", // ♦
//                     'C': "\u2663", // ♣
//                 }
//                 return card.face + suitToChar[card.suit];
//             }
//         };
//         return card;
//     }
//     let deck = [];

//     for (let cardStr of cards) {
//         let face = cardStr.substring(0, cardStr.length-1);
//         let suit = cardStr.substr(cardStr.length-1, 1);
//         try {
//             deck.push(makeCard(face, suit));
//         }
//         catch (err) {
//             console.log(`Invalid card: ${cardStr}`);
//             return;
//         }
//     }
//     console.log(deck.join(' '));
// }
// printDeckOfCards(['AS', '10D', 'KH', '2C']);
// printDeckOfCards(['5S', '3D', 'QD', '1C']);


deck(['3D', 'JC', '2S', '10H', '5X']);
deck(['AS', '10D', 'KH', '2C']);

