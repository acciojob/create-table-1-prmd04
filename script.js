let table = document.getElementById("sampleTable");
function insert_Row() {
    let row = document.createElement("tr");
    let data = document.createElement("td");
    let data2 = document.createElement("td");

    data.innerText = `New Cell1`;
    data2.innerText = `New Cell2`;

    row.appendChild(data);
    row.appendChild(data2);

    table.childNodes[1].prepend(row);
}
