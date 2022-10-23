// FORM VALIDATION PRACTICE
const email = document.getElementById("email");
const msgForm = document.getElementById("send-msg");
const emailErrMsg = document.getElementById("email-err");

email.addEventListener ('input', function(e) {
    const regexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const currentValue = e.target.value;
    const valid = regexEmail.test(currentValue); 

    if (valid) {
        emailErrMsg.style.display = 'none'
    }
    else {
        emailErrMsg.style.display = 'block'
    }
});

