function extract(id) {
    // const text = document.getElementById(id).textContent;
    // const regexp = /\(([A-Za-z ]+)\)/gm;
    // const matches = text.match(regexp).map(e => {
    //     let parr = /([A-Za-z ]+)/gm;
    //     e = e.match(parr);
    //     return `${e}`;
    // });

    // document.getElementById('content').textContent = matches.join('; ');


    const text = document.getElementById(id).textContent;
    const regexp = /\((.+?)\)/gm;

    let result = [];
    let match = regexp.exec(text);
    while (match != null) {
        result.push(match[1]);
        match = regexp.exec(text);
    }
    return result.join('; ');
}
