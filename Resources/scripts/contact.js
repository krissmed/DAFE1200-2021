
document.getElementById("submit").addEventListener("click", function () {
    if (kontroll()){
        console.log(kontroll());
        alert("Your message is sent!");

    }
})

function kontroll() {
    let name = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let reason  = document.getElementById("contactReason").value;
    let message = document.getElementById("message").value;

    if (name.length > 0 && email.length > 0 && reason.length > 0 && (message.length - 12) > 0){

        return true;
    }
    else {
        alert("Fill out the form");
        return false;
    }
}