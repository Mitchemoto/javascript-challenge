// from data.js
var tableData = data;

// YOUR CODE HERE!

// individual way to input each row, do cell2 for next 
// var row=d3.select('tbody').append('tr')

// var cell=row.append('td')

// cell.text('1/1/2010')

for (var i=0;i<tableData.length;i++){
	var row=d3.select('tbody').append('tr')
	var cell_1=row.append('td')
	cell_1.text(tableData[i]['datetime'])
	var cell_2=row.append('td')
	cell_2.text(tableData[i]['city'])
	var cell_3=row.append('td')
	cell_3.text(tableData[i]['state'])
	var cell_4=row.append('td')
	cell_4.text(tableData[i]['country'])
	var cell_5=row.append('td')
	cell_5.text(tableData[i]['shape'])
	var cell_6=row.append('td')
	cell_6.text(tableData[i]['durationMinutes'])
	var cell_7=row.append('td')
	cell_7.text(tableData[i]['comments'])
}


var input_date=d3.select('#datetime').property('value')
var button=d3.select('#filter-btn')

button.on('click', function(){console.log(d3.select('#datetime').property('value'))})

console.log(tableData);

// var filteredData=[]

// for (var i=0; i<tableData.length; i++){
// 	if (tableData[i]['datetime']=='1/5/2010')
// }

//below need to be completed. 

var filteredData=tableData.filter((incident)=>function(incident){
		//needs to return true or false
		//so elements at the true index will be pushed to new array 
		return incident['datetime']=='1/5/2010';

})

var filteredData=tableData.filter(function(incident){
	if ('element'){
		return true
	} else {
		return false
	}
})

console.log(filteredData)

// var variable_list=['datetime',
// 				   'city',
// 				   'state',
// 				   'country',
// 				   'shape',
// 				   'durationMinutes',
// 				   'comments']

// var var_list=Object.keys(tableData[0]);


// for (var i=0; i<tableData.length;i++){
// 	 var row=d3.select('tbody').append('tr')
// 	 for (var j=0; j<variable_list.length; i++){
// 	 	var cell=row.append('td')
// 	 	cell.text(tableData[i][variable_list[j]])
// 	 }
// }




