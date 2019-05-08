var pElement = document.getElementById("p-tag");

function changeCSS() {
	pElement.style.border = "3px solid red"
}

pElement.addEventListener("mouseover", changeCSS);



var hElement = document.getElementById("h3");

function popUp() {
	alert("Go to bottom of page to see how to stay connected with Queen.");
}

hElement.addEventListener("click", popUp);




$(document).ready(function(){

$("#fund").click(function(){

var newImage = "<img src='http://www.mercuryphoenixtrust.com/images/logo_header2.png'>";

$(".div1").append(newImage);

});

});
