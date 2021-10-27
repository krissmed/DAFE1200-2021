window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop; // Kopiert fra w3schools

function myFunction() {
  if (window.pageYOffset >= sticky) {   
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}