window.onload = function() {
    var sifre = document.getElementById("sifre");
    var sifretkr = document.getElementById("sifretkr");
    var submitBt = document.getElementsByName("submit")[0];
    
    submitBt.disabled = true;
    
    sifre.addEventListener("keyup", checkPasswordMatch);
    sifretkr.addEventListener("keyup", checkPasswordMatch);
};

function checkPasswordMatch(){
    var sifre = document.getElementById("sifre");
    var sifretkr = document.getElementById("sifretkr");
    var submitBt = document.getElementsByName("submit")[0];
    var message = document.getElementById("message");
    
    if (sifre.value != sifretkr.value)
        message.style.visibility = "visible";
    else{
        message.style.visibility = "hidden";
        submitBt.disabled = false;    
    }
}
