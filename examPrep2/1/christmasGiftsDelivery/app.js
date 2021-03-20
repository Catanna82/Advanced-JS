function solution() {
    //TO DO 
    //attach eventListeners to input form
    let [gifts, send, discarded] = document.querySelectorAll('section ul');
    let input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift)
    // create gift elements with buttons
    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        const sendBtn = e('button', 'Send', 'sendButton');
        const discardBtn = e('button', 'Discard', 'discardButton');
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);
        gifts.appendChild(element);
        sendBtn.addEventListener('click', () => sendGift(name, element));
        discardBtn.addEventListener('click', () => discardGift(name, element));

        sortGifts()
    }
    // logic for sending gifts
    function sendGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        send.appendChild(element);
    }
    // logic for discarding gifts
    function discardGift(name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        discarded.appendChild(element);
    }
    // sort gift list
    function sortGifts() {
        Array.from(gifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}