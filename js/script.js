console.log("open Badminton App Js");

// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'আপনি কি নিশ্চিত যে আপনি পৃষ্ঠাটি পুনরায় লোড করতে চান?';
// });

// Declare all variables at the start
var logpopup = localStorage.getItem("setbox");
var loginio = localStorage.getItem("loginbox");

// login system

// ! Onload event
function dataset() { 
    document.getElementById("popup1").style.display = logpopup;
    document.getElementById("popup2").style.display = loginio;
    document.getElementById("pointteam1").value = savedTeam1point;
}
function conpass() {
    var okpass = document.getElementById("okpass").value;
    var conpass = document.getElementById("conpass").value;
    if (okpass == conpass) {
        document.getElementById("error").style.display = "none";
        document.getElementById("logbtn").style.display = "block";
        document.getElementById("conpass").style.border = "2px solid green";
        document.getElementById("okpass").style.border = "2px solid green";
    } else {
        document.getElementById("error").style.display = "block";
        document.getElementById("logbtn").style.display = "none";
        document.getElementById("conpass").style.border = "2px solid red";
        document.getElementById("okpass").style.border = "2px solid red";
    }
}

function setpass() {
    var conpass = document.getElementById("conpass").value;
    localStorage.setItem("password", conpass);
    localStorage.setItem("setbox", "none");
    localStorage.setItem("loginbox", "block");
    document.getElementById("popup1").style.display = "none";
    window.location.href = "/";
}

function oninti() {
    document.getElementById("rong").innerHTML = "";
    var legel = localStorage.getItem("password");
    var logdata = document.getElementById("login").value;
    if (legel == logdata) {
        logindat();
    }
}

function logindat() {
    var legel = localStorage.getItem("password");
    var logdata = document.getElementById("login").value;
    if (legel == logdata) {
        document.getElementById("popup2").style.display = "none";
        document.getElementById("vold").style.display = "block";
        document.getElementById("rox").style.display = "flex";
        document.getElementById("teamname1").value = viweteamname1;
    } else {
        document.getElementById("rong").innerHTML = "error Password!";
    }
}

//  Date system
function formatDate12Hour(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().padStart(2, '0');
    return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
}
const now = new Date();

function dateobject(){
   document.querySelector(".date").innerHTML=formatDate12Hour(now);
}
dateobject();