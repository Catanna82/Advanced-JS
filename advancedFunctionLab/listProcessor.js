function solution(input) {
    let str = [];
    for (const el of input) {
        let [command, string] = el.split(' ');
        if (command === 'add') {
            add(string);
        } else if (command === 'remove'){
            remove(string);
        } else if (command === 'print') {
            print();
        }
    }

    function add(strToAppend) {
        str.push(strToAppend);
    };
    function remove(n) {
        str = str.filter((v) => {
           return v !== n;
        })
    };
    function print() {
        console.log(str.join(','));
    };
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);

