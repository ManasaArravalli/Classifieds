/**************contains json format data and the device information is displayed*****************/
$(function(){
	$("#big-image img:eq(0)").nextAll().hide();
	$(".small-images img").click(function(e){
		var index = $(this).index();
		$("#big-image img").eq(index).show().siblings().hide();
	});
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
	dell.innerHTML = '<html><span><h4><div class="elec">' + object.classifiedCategory+'</div></h4>'+ '<html><sub> ' + object.empemail + '</sub></span></html>'+ 
	'<td>' + object.classifiedHeading + '</td>' +
	'<td>' +'<html><div>'+ 'Price - Rs ' +  object.classifiedPrice + '</td></div></html>'+
	'<td>' + '<html><div>' + ' Is Negotiable - Yes' + '</td></div></html>'+
	'<td>' +'<html><div class="elecdescription">' + object.classifiedDesc +  '</div></html></td>';
	laptop.appendChild(dell);
});
function goBack() {
	window.history.back();
}