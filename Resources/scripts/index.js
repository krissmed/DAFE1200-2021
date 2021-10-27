window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop; // Kopiert fra w3schools

function myFunction() {
<<<<<<< HEAD
  if (window.pageYOffset >= sticky) {   
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
=======
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function isElementvisible() {
    windowTop = window.screenTop
    console.log(windowTop)
}

window.onscroll = function(){isElementvisible()} 
>>>>>>> 1137423d7af21129695b1fd1382f58a28f61e068
