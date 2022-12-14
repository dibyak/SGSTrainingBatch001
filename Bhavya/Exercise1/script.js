let newFields = false
function addNew() {
    newFields = true
    const tr = document.getElementById('addMoreInputs')
    const td = document.createElement('td');

    var l1 = document.createElement("label");
    l1.setAttribute("for", "New1");
    l1.textContent = "New1";
    td.appendChild(l1);

    var i1 = document.createElement("input");
    i1.setAttribute("type", "text");
    i1.setAttribute("name", "New1");
    i1.required = "true"
    td.appendChild(i1);


    var l2 = document.createElement("label");
    l2.setAttribute("for", "New2");
    l2.textContent = "New2";
    td.appendChild(l2);

    var i2 = document.createElement("input");
    i2.setAttribute("type", "text");
    i2.setAttribute("name", "New2");
    i2.required = "true"
    td.appendChild(i2);


    var l3 = document.createElement("label");
    l3.setAttribute("for", "New3");
    l3.textContent = "New3";
    td.appendChild(l3);


    var i3 = document.createElement("input");
    i3.setAttribute("type", "text");
    i3.setAttribute("name", "New3");
    i3.required = "true"
    td.appendChild(i3);


    var l4 = document.createElement("label");
    l4.setAttribute("for", "New4");
    l4.textContent = "New4";
    td.appendChild(l4);


    var i4 = document.createElement("input");
    i4.setAttribute("type", "text");
    i4.setAttribute("name", "New4");
    i4.required = "true"
    td.appendChild(i4);
    
    tr.appendChild(td);
    // const box = document.getElementById('addMoreInputs');
    // box.parentNode.insertBefore(tr, box);
    document.getElementById("add").disabled = true
}


function Sub(e){
    e.preventDefault();
    // alert(e.target.Firstname.value);
    document.getElementById("add").disabled = true
    document.getElementById("downloadcsv").disabled = false

    const outputHeader = document.getElementById('outputHeader');
    if (!outputHeader.hasChildNodes()){
        const th1 = document.createElement('th')
        th1.textContent = "Firstname"
        const th2 = document.createElement('th')
        th2.textContent = "Lastname"
        const th3 = document.createElement('th')
        th3.textContent = "Age"
        const th4 = document.createElement('th')
        th4.textContent = "Gender"
        let th5 = ""
        let th6 = ""
        let th7 = ""
        let th8 = ""
        if (newFields){
            th5 = document.createElement('th')
            th5.textContent = "New1"
            th6 = document.createElement('th')
            th6.textContent = "New2"
            th7 = document.createElement('th')
            th7.textContent = "New3"
            th8 = document.createElement('th')
            th8.textContent = "New4"
        }
        outputHeader.appendChild(th1)
        outputHeader.appendChild(th2)
        outputHeader.appendChild(th3)
        outputHeader.appendChild(th4)
        if (newFields){
            outputHeader.appendChild(th5)
            outputHeader.appendChild(th6)
            outputHeader.appendChild(th7)
            outputHeader.appendChild(th8)
        }
    }
    
    const outputRow = document.createElement('tr')

    const Firstname = e.target.Firstname.value
    const Lastname = e.target.Lastname.value
    const Age = e.target.Age.value
    const Gender = e.target.Gender.value
    let New1 = ""
    let New2 = ""
    let New3 = ""
    let New4 = ""
    if (newFields){
    New1 = e.target.New1.value
    New2 = e.target.New2.value
    New3 = e.target.New3.value
    New4 = e.target.New4.value
    }

    const td1 = document.createElement("td")
    td1.textContent = Firstname
    const td2 = document.createElement("td")
    td2.textContent = Lastname
    const td3 = document.createElement("td")
    td3.textContent = Age
    const td4 = document.createElement("td")
    td4.textContent = Gender
    let td5 = "";
    let td6 = "";
    let td7 = "";
    let td8 = "";
    if (newFields){
        td5 = document.createElement("td")
        td5.textContent = New1
        td6 = document.createElement("td")
        td6.textContent = New2
        td7 = document.createElement("td")
        td7.textContent = New3
        td8 = document.createElement("td")
        td8.textContent = New4
    }

    outputRow.appendChild(td1)
    outputRow.appendChild(td2)
    outputRow.appendChild(td3)
    outputRow.appendChild(td4)
    if (newFields){
        outputRow.appendChild(td5)
        outputRow.appendChild(td6)
        outputRow.appendChild(td7)
        outputRow.appendChild(td8)
    }
    outputHeader.parentNode.appendChild(outputRow)
}

function downloadCsv(){
    let header = []
    let rows = []
    let row = []

    const outputHeader = document.getElementById('outputHeader').childNodes;
    outputHeader.forEach(h => {
        header.push(h.textContent)
    })
    // console.log(header)

    for (tr of document.getElementById('outputHeader').parentNode.children){
        if (tr.id !== "outputHeader"){
            tr.childNodes.forEach(val => {
                row.push(val.textContent)
            })
            rows.push(row)
            row = []
        }
    }
    // console.log(rows)
    exportCsv(header,rows,",","formData")
}

const exportCsv = (arrayHeader, arrayData, delimiter, fileName) => {
    let header = arrayHeader.join(delimiter) + '\n';
    let csv = header;
    arrayData.forEach( array => {
        csv += array.join(delimiter)+"\n";
    });

    let csvData = new Blob([csv], { type: 'text/csv' });  
    let csvUrl = URL.createObjectURL(csvData);

    let hiddenElement = document.createElement('a');
    hiddenElement.href = csvUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = fileName + '.csv';
    hiddenElement.click();
}
