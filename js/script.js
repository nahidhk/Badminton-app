console.log("open Badminton App Js");

// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = '?';
// });

// Declare all variables at the start
var logpopup = localStorage.getItem("setbox");
var loginio = localStorage.getItem("loginbox");
var loaddataroxix = sessionStorage.getItem("teamsetbox");
const loadteamname01 = sessionStorage.getItem("steamname1");
const loadteamname02 = sessionStorage.getItem("steamname2");
var pointon1 = 0;
var pointon2 = 0;
var win = document.getElementById("win");



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
    alert('Please Click the "Leave"');
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
    var teamname1 = document.getElementById("team1").value;
    var teamname2 = document.getElementById("team2").value;
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
    const loadteamname01 = sessionStorage.getItem("steamname1");
    const loadteamname02 = sessionStorage.getItem("steamname2");
    pointon1 += 1;
    var pointset = document.getElementById("point1");
    sessionStorage.setItem("addpoint1", pointon1);
    pointset.value = pointon1;
    if (pointon1 == 21) {
        pointset.value = "WIN";
        win.style.display = "block";
        document.getElementById("wintext").innerHTML = loadteamname01;
        document.getElementById("winname").innerHTML = loadteamname01;
        document.getElementById("teamshow1").innerHTML = loadteamname01;
        document.getElementById("teamshow2").innerHTML = loadteamname02;
        document.getElementById("cbtn").innerHTML = `<button onclick="winteam1()" class="btn">Confrom</button>`
        winaudio();
    }
    audioapkclick();
}
function pointpls2() {
    const loadteamname01 = sessionStorage.getItem("steamname1");
    const loadteamname02 = sessionStorage.getItem("steamname2");
    pointon2 += 1;
    var pointset = document.getElementById("point2");
    sessionStorage.setItem("addpoint2", pointon2);
    pointset.value = pointon2;
    if (pointon2 == 21) {
        pointset.value = "WIN";
        win.style.display = "block";
        document.getElementById("wintext").innerHTML = loadteamname02;
        document.getElementById("winname").innerHTML = loadteamname02;
        document.getElementById("teamshow2").innerHTML = loadteamname02;
        document.getElementById("teamshow1").innerHTML = loadteamname01;
        document.getElementById("cbtn").innerHTML = `<button onclick="winteam2()" class="btn">Confrom</button>`
        winaudio();
    }
    audioapkclick();
}

function winteam1() {
    const loadteamname01 = sessionStorage.getItem("steamname1");
    const loadteamname02 = sessionStorage.getItem("steamname2");
    var pointaddteam2 = sessionStorage.getItem("addpoint2");
    var name = loadteamname01 + "VS" + loadteamname02;
    let existingData = JSON.parse(localStorage.getItem("teamdata")) || [];

    const newMatchData = {
        "win": loadteamname01,
        "notwin": loadteamname02,
        "date": formatDate12Hour(now),
        "notwinpoint": pointaddteam2,
        "winpoint": "21"
    };

   
    existingData.push(newMatchData);

    localStorage.setItem("teamdata", JSON.stringify(existingData));

    const jsonString = JSON.stringify(newMatchData);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    sessionStorage.clear()
    window.location.href = "/"
}


function winteam2() {
    const loadteamname01 = sessionStorage.getItem("steamname1");
    const loadteamname02 = sessionStorage.getItem("steamname2");
    var pointaddteam1 = sessionStorage.getItem("addpoint1");
    var name = loadteamname01 + "VS" + loadteamname02;
    let existingData = JSON.parse(localStorage.getItem("teamdata")) || [];
    const newMatchData = {
        "notwin": loadteamname01,
        "win": loadteamname02,
        "date": formatDate12Hour(now),
        "notwinpoint": pointaddteam1,
        "winpoint": "21"
    };
    existingData.push(newMatchData);
    localStorage.setItem("teamdata", JSON.stringify(existingData));
    const jsonString = JSON.stringify(newMatchData);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    sessionStorage.clear()
    window.location.href = "/"
}

function audioapkclick() {
    document.getElementById("aclick").play();
}
function winaudio() {
    document.getElementById("awin").play();
}
function wlcadio() {
    document.getElementById("wlcaudio").play();
}
function teamaudio() {
    document.getElementById("teamaudio").play();
}
function listok() {
    document.getElementById("menuopenai").style.display = "block";
}
function outcls() {
    document.getElementById("menuopenai").style.display = "none";
}

var userdatajson = localStorage.getItem("teamdata");
console.log(userdatajson);
async function displayData() {
    try {
        const data = JSON.parse(userdatajson);
        const dataContainer = document.getElementById('data-container');

        if (!dataContainer) {
            throw new Error("Element with id 'data-container' not found.");
        }

        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <div class="user">
                    <div class="user1">
                        <div>
                            <img src="img/winner.png" alt="" class="winig">
                        </div>
                        <div>
                            <span class='datetext'>${item.date}</span><br>
                            Name: <b style='color:green'>${item.win}</b><br>
                            Point: <b>${item.winpoint}</b>
                        </div>
                    </div>
                    <div class="user2">
                        <div>
                            <img src="img/lose.png" alt="" class="winig">
                        </div>
                        <div>
                            <span class='datetext'>${item.date}</span><br>
                            Name: <b style="color:red">${item.notwin}</</b><br>
                            Point: <b>${item.notwinpoint}</b>
                        </div>
                    </div>
                </div>
            `;
            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Data error', error);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayData();
});


const timeity = new Date().toISOString().slice(0, 10); 
function backup() {
    let newtem = localStorage.getItem("teamdata"); 
    if (newtem) {  
        const blink = document.createElement("a");
        blink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(newtem); 
        blink.download = `Backupdate-${timeity}.json`;  
        document.body.appendChild(blink);
        blink.click(); 
        document.body.removeChild(blink);  
    } else {
        console.log("No data found in localStorage!");
    }
}