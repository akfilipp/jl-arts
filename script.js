// NAV HAMBURGER OPEN-CLOSE
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// GALLERY SLIDER
let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed": 400,
    "nav": false,
    controlsContainer: "#controls",
    prevButton : ".previous",
    nextButton : ".next",
    responsive: {
        1600: {
            items: 4,
            gutter: 20
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1
        }
    }
})

// FORM VALIDATION
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





