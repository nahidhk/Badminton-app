console.log("open Badminton App Js");

// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'আপনি কি নিশ্চিত যে আপনি পৃষ্ঠাটি পুনরায় লোড করতে চান?';
// });

// Declare all variables at the start
var logpopup = localStorage.getItem("setbox");
var loginio = localStorage.getItem("loginbox");
var loaddataroxix = sessionStorage.getItem("teamsetbox");
const loadteamname01 = sessionStorage.getItem("steamname1");
const loadteamname02 = sessionStorage.getItem("steamname2");
let point = 0;
var win = document.getElementById("win");
var point1 = document.getElementById("point1").value;
var point2 = document.getElementById("point2").value;


// login system
// ! Onload event
function dataset() {
    document.getElementById("popup1").style.display = logpopup;
    document.getElementById("popup2").style.display = loginio;


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
        if (loaddataroxix == "none") {
            document.getElementById("roxix").style.display = "none";
            document.getElementById("apikey").style.display = "flex";
            document.getElementById("view1").innerHTML = loadteamname01;
            document.getElementById("view2").innerHTML = loadteamname02;
        } else {
            document.getElementById("roxix").style.display = "block";
        }

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
function dateshow() {
    document.getElementById("date1").innerHTML = formatDate12Hour(now);
    document.getElementById("date2").innerHTML = formatDate12Hour(now);
}
dateshow();
function setteam() {
    // show point box
    document.getElementById("apikey").style.display = "flex";
    document.getElementById("roxix").style.display = "none";
    //  !The Set Server 
    sessionStorage.setItem("steamname1", teamname1);
    sessionStorage.setItem("steamname2", teamname2);
    document.getElementById("view1").innerHTML = teamname1;
    document.getElementById("view2").innerHTML = teamname2;
    sessionStorage.setItem('teamsetbox', "none");
}
function error() {
    alert("This Function is not set this App please call the developer");
}
function pointpls1() {
    point += 1;
    var pointset = document.getElementById("point1");
    pointset.value = point;
    if (point1 == 20) {
        pointset.value = "WIN";
        win.style.display = "block";
        document.getElementById("wintext").innerHTML = loadteamname01;
        document.getElementById("winname").innerHTML = loadteamname01;
        document.getElementById("teamshow1").innerHTML=loadteamname01;
        document.getElementById("teamshow2").innerHTML=loadteamname02;
    }
}
function pointpls2() {
    point += 1;
    var pointset = document.getElementById("point2");
    pointset.value = point;
    if (point2 == 20) {
        pointset.value = "WIN";
        win.style.display = "block";
        document.getElementById("wintext").innerHTML = loadteamname02;
        document.getElementById("winname").innerHTML = loadteamname02;
        document.getElementById("teamshow2").innerHTML=loadteamname01;
        document.getElementById("teamshow1").innerHTML=loadteamname02;
    }
}

function winteam1(){
    // create a json file 

    const json = `[{
    "team1":"${loadteamname01}",
    "team2":"${loadteamname02}",
    "win":"${loadteamname01}",
    "date":"${formatDate12Hour(now)}",
    "team1allpoint":"",
    "team2allpoint":""
}]`
}
