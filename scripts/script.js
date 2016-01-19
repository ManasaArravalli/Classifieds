
var data = [
{ "subject":"<html><strong>Electronics </strong></html>" , "codeNo":" - Dell Laptop <html><sub>by manasareddy</sub></html>" },
{ "subject":"<html><strong>Electronics</strong></html>", "codeNo":" - Ipad Air <sub>by manasareddy</sub>" },
{ "subject":"<html><strong>Others</strong></html>", "codeNo":" - Maruthi swift new model <sub>by manasareddy</sub>" },
{ "subject":"<html><strong>Others</strong></html>", "codeNo":" - Nikon D 90 <sub>by manasareddy</sub>" },
{ "subject":"<html><strong>Others</strong></html>", "codeNo":" - IPhone 5s <sub>by manasareddy</sub>" }
];
var table = document.getElementById('table');
data.forEach(function(object) {
	var tr = document.createElement('tr');
	tr.innerHTML = '<td>' + object.subject + '</td>' +
	'<td>' + object.codeNo + '</td>';
	table.appendChild(tr);
});

var specificClassifiedData = [
{
	"classifiedHeading":"Dell Laptop",
	"classifiedCategory":"Electronics",
	"classifiedDesc":"Used for 5months .Everything is working fine.Please re-visit the pictures for more clarity.",
	"classifiedNegotiable":"1",
	"classifiedPrice":"15000",
	"empemail":"manasa@techaspect.com",
	"classifiedFirstImg":"1962015124822-1.jpg",
	"classifiedImgs":["1962015124822-1.jpg","1962015124822-2.jpg"]
}
];
var laptop = document.getElementById('laptop');
specificClassifiedData.forEach(function(object) {
	var dell = document.createElement('dell');
	dell.innerHTML = '<td>' + object.classifiedHeading + '</td>' +
	'<td>' + object.classifiedCategory + 
	'<td>' + object.classifiedDesc + '</td>';
	laptop.appendChild(dell);
});