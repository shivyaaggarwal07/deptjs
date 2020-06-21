var one = document.getElementById("first");
var two = document.getElementById("second");
var three = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");


function show(id,rollNo)
{
	var element = document.getElementById(id);
	
	if(element.checked == true)
	{
		alert("DMC TAKEN BY THE STUDENT : " + rollNo);
	}
	else
	{
		alert("Student has not taken its dmc");
	}
}
