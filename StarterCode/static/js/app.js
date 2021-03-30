// from data.js
var tableData = data;

// create a double forEach statement to append the data into a table
function buildTable(data) {
    d3.select("tbody").html("");
    data.forEach((incident) => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(incident).forEach((value) => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        });
    })
}

// run the function over the dataset
buildTable(tableData);


//create function for field search 
function clickFilter() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterDateTime = tableData;
    if (date) {
        filterDateTime = filterDateTime.filter((row) => row.datetime === date);
    }
    appendTable(filterDateTime);
}

d3.selectAll("#filter-btn").on("click", clickFilter);

