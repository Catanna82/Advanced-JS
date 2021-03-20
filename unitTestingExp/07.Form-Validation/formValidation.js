function validate() {
    const submitBtn = document.getElementById('submit');
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const checkBox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const divValid = document.getElementById('valid');
    const userRegex = /^([a-zA-Z0-9]){3,20}$/gm;
    const emailRegex = /(.+@(.+)?\.(.+)?)/gm;
    const regexPas = /^(\w{5,15})$/gm;


    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            companyInfo.style.display = ''
        } else {
            companyInfo.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', onClick);
    let isUserNameTrue;
    let isEmailTrue;
    let isPasTrue;
    let isCoPasTrue;
    let isCoNumberTrue = true;

    function onClick(ev) {
        ev.preventDefault();

        isUserNameTrue = checkField(userRegex, userName);
        isEmailTrue = checkField(emailRegex, email);
        isPasTrue = checkField(regexPas, password);

        if (password.value === confirmPassword.value && confirmPassword.value && isPasTrue) {
            confirmPassword.style.border = "none";
            isCoPasTrue = true;
        } else {
            confirmPassword.style.border = "";
            confirmPassword.style.borderColor = "red";
            password.style.border = "";
            password.style.borderColor = "red";
            isCoPasTrue = false;
        };

        if (checkBox.checked) {
            let num = Number(companyNumber.value);
            if (num >= 1000 && num <= 9999) {
                companyNumber.style.border = "none";
            } else {
                companyNumber.style.border = "";
                companyNumber.style.borderColor = "red";
                isCoNumberTrue = false;
            }
        };

        if (isUserNameTrue && isEmailTrue && isPasTrue && isCoPasTrue && isCoNumberTrue) {
            divValid.style.display = "";
        } else {
            divValid.style.display = "none";
        };

    };
    function checkField(regex, el) {
        if (el.value.match(regex)) {
            el.style.border = 'none';
            return true;
        } else {
            el.style.border = '';
            el.style.borderColor = 'red';
            return false;
        }
    };

}
