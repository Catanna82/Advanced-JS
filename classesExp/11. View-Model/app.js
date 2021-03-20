class Textbox {
    constructor(selector, regexp) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regexp;
    }

    get elements() {
        return this._elements;
    }

    set value(value) {
        this._value = value;
        Array.from(this._elements).forEach(x => x.value = this._value);
    }

    get value() {
        return this._value;
    }

    isValid() {
        if (this.value.match(this._invalidSymbols)) {
            return true;
        } else {
            return false;
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.querySelector(".textbox");
// let inputs = $('.textbox');
inputs.oninput = function () { console.log(textbox.value); };
inputs.on('input',function(){console.log(textbox.value);});
