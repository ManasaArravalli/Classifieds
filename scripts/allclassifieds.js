/**************Js file where the device information is being displayed on the webpage upon click event****************/
var specificClassifiedData = [
{
	"classifiedHeading":"Dell Laptop",
	"classifiedCategory":"Electronics",
	"empemail":"manasa@techaspect.com"
}
];
var first = document.getElementById('first');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ 
	'<td><div>' + object.classifiedHeading + '</div></td>'+ '<html><sub> ' + object.empemail + '</sub></span></html>' ;
	first.appendChild(dell);
});

var specificClassifiedData = [
{
	"classifiedHeading":"Ipad Air",
	"classifiedCategory":"Electronics",
	"empemail":"manasa@techaspect.com"
}
];
var second = document.getElementById('second');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ 
	'<td><div>' + object.classifiedHeading + '</div></td>'+ '<html><sub> ' + object.empemail + '</sub></span></html>' ;
	second.appendChild(dell);
});

var specificClassifiedData = [
{
	"classifiedHeading":"Maruthi swift new model",
	"classifiedCategory":"Others",
	"empemail":"manasa@techaspect.com"
}
];
var third = document.getElementById('third');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ 
	'<td><div>' + object.classifiedHeading + '</div></td>'+ '<html><sub> ' + object.empemail + '</sub></span></html>' ;
	third.appendChild(dell);
});

var specificClassifiedData = [
{
	"classifiedHeading":"Nikon D 90",
	"classifiedCategory":"Others",
	"empemail":"manasa@techaspect.com"
}
];
var four = document.getElementById('four');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ 
	'<td><div>' + object.classifiedHeading + '</div></td>'+ '<html><sub> ' + object.empemail + '</sub></span></html>' ;
	four.appendChild(dell);
});
var specificClassifiedData = [
{
	"classifiedHeading":"Iphone 5s",
	"classifiedCategory":"Electronics",
	"empemail":"manasa@techaspect.com"
}
];
var five = document.getElementById('five');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ 
	'<td><div>' + object.classifiedHeading + '</div></td>'+ '<html><sub> ' + object.empemail + '</sub></span></html>' ;
	five.appendChild(dell);
});