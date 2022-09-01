console.log("The XMLHttpRequest Object");

function f1() {
    //creating an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();
    //callback function
    xhttp.onload = function() {
    document.getElementById("demo").innerHTML =  this.responseText;
}
    //send a request
    xhttp.open("GET","XML.txt");
    xhttp.send();
}