// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(ufoReport) {
 console.log(ufoReport);
 var row = tbody.append("tr");
 Object.entries(ufoReport).forEach(function([key, value]) {
   console.log(value);
   var cell = tbody.append("td");
   cell.text(value);
 });
});

let element = document.getElementById('$searchBtn');
console.log(element);

//Handle Functions 
// Disallow refresh
function handleSearchButtonClick(){
    // Disallow refresh
    d3.event.preventDefault();
        if (filterDate != "") {
            filteredData = filteredData.filter(function (date) {
            var dataDate = date.datetime;
            return dataDate === filterDate;
        });
    
    }
    
    if (filterCity != "") {
        filteredData = filteredData.filter(function (city) {
        var dataCity = city.city;
        return dataCity === filterCity;
    });
    }
    
    if (filterState != "") {
        filteredData = filteredData.filter(function (state) {
            var dataState = state.state;
            return dataState === filterState;
        });
    }
    
    if (filterCountry != "") {
        filteredData = filteredData.filter(function (country) {
            var dataCountry = country.country;
            return dataCountry === filterCountry;
        });
    }
    
    if (filterShape != "") {
        filteredData = filteredData.filter(function (shape) {
            var dataShape = shape.shape;
            return dataShape === filterShape;
        });
    }
    
    renderTable();
    }

function tableCreate(data) {
    
    var tbl = document.createElement('table');

    for (var i = 0; i < data.length; i++) {
    
        var tr = document.createElement('tr'); 
        var keys = Object.keys(data[i]);
    
        keys.forEach(function(k) {
            var td = document.createElement('td'); 
            td.appendChild(document.createTextNode(data[i][k]));
            tr.appendChild(td);
        });

        tbl.appendChild(tr);
    }

    document.body.appendChild(tbl);
}


tableCreate(data);