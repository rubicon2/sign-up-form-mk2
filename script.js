const form = document.querySelector(".signup-form");
const createAccountButton = document.querySelector(".create-account-button");

const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordError = document.querySelector("#password+.error-message");
const passwordConfirmError = document.querySelector("#password-confirm+.error-message");

const passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

createAccountButton.addEventListener("click", () => {
    if (form.reportValidity() && checkPassword() && checkPasswordsMatch())
        form.requestSubmit();
});

password.addEventListener("input", () => checkPassword());
password.addEventListener("focusout", () => checkPasswordsMatch());
passwordConfirm.addEventListener("input", () => {
    if (passwordConfirm.value !== "") checkPasswordsMatch()
});

const checkPassword = function() {
    if (password.value != "") {
        let passwordOK = passwordPattern.test(password.value);
        if (passwordOK) {
            passwordError.innerText = "Password is valid!";
            passwordError.classList.add("invisible");
            return true;
        } else {
            passwordError.innerText = "Please use an upper/lowercase letter, a number and at least 8 characters";
            passwordError.classList.remove("invisible");
        }
    } else {
        passwordError.innerText = "Please enter a password";
        passwordError.classList.remove("invisible");
    }
    return false;
}

const checkPasswordsMatch = function() {
    if (password.value === passwordConfirm.value) {
        passwordConfirmError.innerText = "Passwords now match!";
        passwordConfirmError.classList.add("invisible");
        return true;
    } else {
        passwordConfirmError.innerText = "Passwords do not match";
        passwordConfirmError.classList.remove("invisible");
        return false;
    }
}