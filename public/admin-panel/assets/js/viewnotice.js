// var edit = document.querySelector("#iedit"); this gives an error 
var publish = document.querySelector(".ipublish");
var unpublish = document.querySelector(".iunpublish");
var valid = document.querySelector("ivalid");
var imgthird = document.querySelector("#img3");
// function publishh()
// {
publish.addEventListener("click" , function(){
	imgthird.classList.add(".edittoggle");
});
// }
// function unpublishh()
// {
unpublish.addEventListener("click" , function(){
            imgthird.classList.remove(".edittoggle");
        });
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