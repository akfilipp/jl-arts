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

// RANDOM ART QUOTE from API
const url = "https://api.api-ninjas.com/v1/quotes?category=art";
fetch(url, {
  method: "GET",
  headers: {
    "X-Api-Key": "rQSEbmqnDevCozdsb9R5iQ==fyUuwcPS8BPzTUQ3" // Get key at: https://api-ninjas.com/
  }
})

.then(resp => resp.json())
  .then(function(data) {
    let printQuote = "\"" + data[0].quote + "\"";
    let printAuthor = ' --' + data[0].author
    console.log(data);
    document.querySelector('#quote-text').innerHTML = printQuote;
    document.querySelector('#quote-author').innerHTML = printAuthor;
  })
  .catch(function(error) {
    console.log(error);
  });

//MODALS
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
})


// IMAGE SLIDER
function moveSlides() {
  const slider = document.querySelector(".slider");
  const card = slider.querySelector(".card");
  const leftButton = document.querySelector("#back");
  const rightButton = document.querySelector("#fwd");
  
  const sliderWidth = slider.offsetWidth;
  const cardStyle = card.currentStyle || window.getComputedStyle(card)
  const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
  
  const cardCount = slider.querySelectorAll(".card").length;
  
  
  let offset = 0;
  const maxX = -((cardCount / 3) * sliderWidth + 
                 (cardMarginRight * (cardCount / 3)) - 
                 sliderWidth);
  
  leftButton.addEventListener("click", function() {
    if (offset !== 0) {
      offset += sliderWidth + cardMarginRight;
      slider.style.transform = `translateX(${offset}px)`;
      }
  })

  
  rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
      offset -= sliderWidth + cardMarginRight;
      slider.style.transform = `translateX(${offset}px)`;
    }
  })
}

// window.onload = moveSlides(); 
// window.onresize = moveSlides();

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

// //COUNTER API
// function websiteVisits(response) {
//     document.querySelector("#visits").textContent = response.value;
// }




