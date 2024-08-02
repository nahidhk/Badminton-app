console.log("open Badminton App Js");

// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'আপনি কি নিশ্চিত যে আপনি পৃষ্ঠাটি পুনরায় লোড করতে চান?';
// });

// Declare all variables at the start
var viweteamname1 = localStorage.getItem("teamname1");
var theteam1 = localStorage.getItem("viweteamname1");
let oder1 = localStorage.getItem("teamname1");
let savedTeam1point = localStorage.getItem(oder1);
var logpopup = localStorage.getItem("setbox");
var loginio = localStorage.getItem("loginbox");
let point = 0;

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

function teamname1(){
    const teamname1 = document.getElementById("teamname1").value;
    localStorage.setItem("teamname1", teamname1);
}

function pointpls1(){
    point += 1;
    document.getElementById("pointteam1").value = point;
    var point1 = document.getElementById("pointteam1").value;
    const teamname1 = document.getElementById("teamname1").value;
    localStorage.setItem(teamname1, point1);
    winteam1();
}
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
dateobject()

function winteam1(){
    var okok1 = parseInt(document.getElementById("pointteam1").value, 10);
    if (okok1 === 21) {
        document.getElementById("pointteam1").value = "WIN";
        document.getElementById("win").style.display="block";
        document.querySelector(".wintext").innerHTML= viweteamname1;
    } else {
     
    }
}
