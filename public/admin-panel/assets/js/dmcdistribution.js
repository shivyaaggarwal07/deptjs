var one = document.getElementById("first");
var two = document.getElementById("second");
var three = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");


function show(id)
{
	var element = document.getElementById(id);
	document.addEventListener('DOMContentLoaded', function(){
	// var checkbox = document.querySelector('input[type="checkbox"]');
	element.addEventListener('change',function(){
		if(element.checked == true)
		{
			alert("DMC TAKEN BY THE STUDENT ");
		}
		else
		{
			alert("Student has not taken its dmc");
		}
	})
})
}