function displaysignbox(){
    var getsign = document.getElementById("sign-in-box");
    getsign.style.height = "100vh";
    getsign.style.transition = "0.5s";
}
function closebox(){
    var getsign = document.getElementById("sign-in-box");
    getsign.style.height = "0vh";
    getsign.style.transition = "0.5s";
}