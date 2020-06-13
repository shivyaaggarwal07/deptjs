// var edit = document.querySelector("#iedit"); this gives an error 
var publish = document.getElementsByClassName("ipublish");
var unpublish = document.getElementsByClassName("iunpublish");
var valid = document.querySelector("ivalid");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img1 = document.querySelector("#img1");
var img2 = document.getElementById("img2");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 =document.getElementById("img12");
// var container = document.getElementById("cont");

var element;

function show(id)
{
	element = document.getElementById(id);
	element.classList.remove("edittoggle");
	alert("Notice is published");
}
function showing(){
	img1.classList.remove("edittoggle");
	alert("Notice is published");
}
function third(){
	img2.classList.remove("edittoggle");
	img3.classList.remove("edittoggle");
	img5.classList.remove("edittoggle");
	img6.classList.remove("edittoggle");
	img7.classList.remove("edittoggle");
	img8.classList.remove("edittoggle");
	img9.classList.remove("edittoggle");
	img10.classList.remove("edittoggle");
	img11.classList.remove("edittoggle");
	img12.classList.remove("edittoggle");
}
function hide(id)
{
	element = document.getElementById(id);
	element.classList.add("edittoggle");
	alert("Notice is unpublished");
}
function hiding()
{
	img1.classList.add("edittoggle");
	alert("Notice is unpublished");
}
function thirdd(){
	img2.classList.add("edittoggle");
	img3.classList.add("edittoggle");
	img5.classList.add("edittoggle");
	img6.classList.add("edittoggle");
	img7.classList.add("edittoggle");
	img8.classList.add("edittoggle");
	img9.classList.add("edittoggle");
	img10.classList.add("edittoggle");
	img11.classList.add("edittoggle");
	img12.classList.add("edittoggle");
}
// });
// }
// function unpublishh()
// {
// unpublish.onclick= function(){
            // imgthird.classList.add(".edittoggle");
       // }
// }
function validity()
{
	var om=prompt("Enter the month mentioned on the notice"); //validity month mentioned
	var oy=prompt("Enter the year mentioned on the notice"); //validity year
	var od=prompt("Enter the day mentioned on the notice");//validity day
	var cm=prompt("Now, Enter the current month");
	var cd=prompt("Now, Enter the current day");
	var cy=prompt("Now, Enter the current year");
	if(oy>cy)
	{
		alert("Still Valid");
		publishh();
	}
	else if(oy<cy)
	{
		alert("Validity is over");
		var ask = alert("If want to change the validity then type yes else no");
		if(ask!=="yes"||ask==="no")
		{
			alert("Validity is closed");
			valid.innerHTML="Closed";
			unpublishh();
		}
		else
		{
			var newvalid = prompt("Enter New Validity for the Notice");
			valid.innerHTML= newvalid;
			publishh();
	    }
	} 
	else if(oy===cy)
	{
	if(om<cm)
		{
			alert("Notice is Not Valid");
			var ask = prompt("If want to change the validity then type yes else no");
			if(ask!=="yes"||ask==="no")
			{
				alert("Validity is closed");
				valid.innerHTML="Closed";
				unpublishh();
			}
			else
			{
				var newvalid = prompt("Enter New Validity for the Notice");
				valid.innerHTML= newvalid;
				publishh();
	    	}
		}
		else if(om>cm)
		{
			alert("Still Valid");
			publishh();
		}
		else if(om===cm)
		{
			if(od<cd)
			{
			alert("Notice is Not Valid");
			var ask = prompt("If you want to change the validity then type yes else no");
			if(ask!=="yes"||ask==="no")
			{
				alert("Validity is closed");
				valid.innerHTML="Closed";
				unpublishh();
			}
			else
			{
				var newvalid = prompt("Enter New Validity for the Notice");
				valid.innerHTML= newvalid;
				publishh();
	    	}
			}
			else if(od>=cd)
			{
				alert("Still Valid");
				publishh();
			}
		}

}
}