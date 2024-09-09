function rstpass(){
    var rstpass = document.getElementById("rst").value;
  if (rstpass == "13579") {
    localStorage.clear();
    window.location.href="/"
  } else {
    alert("Wrong odd number")
  }
}

const time = new Date().toISOString().slice(0, 10); 
function backup() {
    let newtem = localStorage.getItem("teamdata"); 
    if (newtem) {  
        const blink = document.createElement("a");
        blink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(newtem); 
        blink.download = `Backupdate-${time}.json`;  
        document.body.appendChild(blink);
        blink.click(); 
        document.body.removeChild(blink);  
    } else {
        console.log("No data found in localStorage!");
    }
}
