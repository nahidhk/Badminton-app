console.log("open Badminton App Js");

function dataset(){
    var logpopup = localStorage.getItem("setbox");
    var loginio = localStorage.getItem("loginbox")
    document.getElementById("popup1").style.display=logpopup; 
    document.getElementById("popup2").style.display=loginio;   
}

function conpass(){
    var okpass = document.getElementById("okpass").value;
    var conpass = document.getElementById("conpass").value;
if (okpass == conpass) {
    document.getElementById("error").style.display="none"; 
    document.getElementById("logbtn").style.display="block";
} else {
    document.getElementById("error").style.display="block";
    document.getElementById("logbtn").style.display="none"; 
}

}
function setpass(){
    var conpass = document.getElementById("conpass").value; 
    localStorage.setItem("password",conpass);
    localStorage.setItem("setbox","none");
    localStorage.setItem("loginbox","block");
    document.getElementById("popup1").style.display="none";
   window.location.href="/"
}
function login(){
    var legel = localStorage.getItem("password");
    var logdata = document.getElementById("login").value;
    if (legel == logdata) {
    document.getElementById("popup2").style.display="none";

    } else {
        
    }
}