function rstpass(){
    var rstpass = document.getElementById("rst").value;
  if (rstpass == "13579") {
    localStorage.clear();
    window.location.href="/"
  } else {
    alert("Wrong odd number")
  }
}