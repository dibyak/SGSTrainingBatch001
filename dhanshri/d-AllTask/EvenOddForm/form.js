
$(document).ready(function () {
  $("#b1").click(function () {
    $("#div1").slideToggle("slow");
  });
});
//     function () {
$(document).ready(function () {
  $("#b2").click(function () {
    $("#table1").hide("hide");
  });
  $("#b2").click(function () {
    $("#table1").show("show");
  });
});

let counter = 1;
function addmore() {
    let parent = document.getElementById("div1");

    //for adding line breaks
    const element = document.querySelector('div');
    const lineBreak = document.createElement('br');
    element.appendChild(lineBreak);

    const element1 = document.querySelector('div');
    const lineBreak1 = document.createElement('br');
    element1.appendChild(lineBreak1);

    //creating elements for fname
    let n = document.createElement("label");
    n.innerHTML = " Firstname : ";
    parent.appendChild(n);

    let a = document.createElement("input");
    a.setAttribute("type", "text");
    a.setAttribute("id", "fname" + counter);
    parent.appendChild(a);

    //creating elements for lname
    let m = document.createElement("label");
    m.innerHTML = " Lastname : ";
    parent.appendChild(m);

    let b = document.createElement("input");
    b.setAttribute("type", "text");
    b.setAttribute("id", "lname" + counter);
    parent.appendChild(b);

    counter++;

}
let parentTable = document.getElementById("table1");
let temp_counter = 0;
function submit() {
    for (let i = temp_counter; i < counter; i++) {
        let x = document.getElementById("fname" + i);
        let y = document.getElementById("lname" + i);
        // console.log("hi");
        //console.log(x.value + " " + y.value );
        let td1 = document.createElement("td");
        td1.innerHTML = x.value;
        let td2 = document.createElement("td");
        td2.innerHTML = y.value;
        let trr = document.createElement("tr");

        trr.appendChild(td1);
        trr.appendChild(td2);
        parentTable.appendChild(trr);
    }
    temp_counter = counter - 1;

}


