// Set the date we're counting down to
var countDownDate = new Date("Sept 22, 2023 20:00:00").getTime();

var count = document.querySelector('#count')
var demo = document.querySelector('#demo')
var rsvp = document.querySelector('#rsvp')
var lien = document.querySelector('.lien')


// Update the count down every 1 second
function countdown() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));


  // Display the result in the element with id="count"
  count.innerHTML = days;

  console.log(distance)

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    demo.innerHTML = "ÇA COMMENCE.";
    setTimeout(function () {
      demo.innerHTML = "ÇA COMMENCE..";
      setTimeout(function () {
        demo.innerHTML = "ÇA COMMENCE...";
        setTimeout(function () {
          demo.innerHTML = "en projection";
          rsvp.style.display = 'none';
        }, 1000)
      }, 1000)
    }, 1000)
  }

}


var jourJ = new Date("Sept 22, 2023 00:00:00").getTime();

function jours() {
  var now = new Date().getTime();
  var distanceJ = jourJ - now;
  var joursmanquants = Math.floor(distanceJ / (1000 * 60 * 60 * 24));

  if (joursmanquants < 0) {
    demo.innerHTML = "c'est aujourd'hui!";
    lien.style.display = 'block';
  }

}

countdown()
jours()




// PROGRAMME DISPLAY
var programme = document.querySelector('.programme')
var progText = document.querySelector('#prog')
var progClose = document.querySelector('.close')
var titreProg = document.querySelector('#titreProg')

function activeProgram() {
  if (programme.classList.contains("on")) {
    programme.classList.remove("on")
    programme.style.display = "none";
    progClose.innerHTML = "⟡";
  }
  else {
    programme.classList.add("on")
    progClose.style.opacity = "1";
    programme.style.display = "block";
    progClose.innerHTML = "×";
  }
}

progText.addEventListener("click", activeProgram)
progClose.addEventListener("click", activeProgram)
titreProg.addEventListener("click", activeProgram)


// PROGRAMME ON SCROOLL
window.onscroll = function () {
  scrollShowProgram()
};

function scrollShowProgram() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    progClose.style.opacity = "1";
  }
  else if (programme.classList.contains("on"))  {
    progClose.style.opacity = "1";
  }
  else {
    progClose.style.opacity = "0";
  }
}
