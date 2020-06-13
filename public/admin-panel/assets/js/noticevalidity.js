	//notice1
function validity()
{
	var om=prompt("Enter the month mentioned on the notice"); //validity month mentioned
	var oy=prompt("{Enter the year mentioned on the notice"); //validity year
	var od=prompt("Enter the day menttioned on the notice");//validity day
	var cm=prompt("Now, Enter the current month");
	var cd=prompt("Now, Enter the current day");
	var cy=prompt("Now, Enter the current year");
	if(validityyear>cy)
	{
		publish
	}
	else if(validityyear<cy)
	{
		unpublish
	}
	else if(validityyear==cy)
	{
	if(validitymonth<cm)
		{
			unpublish
		}
		else if(validitymonth>cm)
		{
			publish
		}
		else if(validitymonth==cm)
		{
			if(validitydate<cd)
			{
				unpublish
			}
			else if(validitydate>=cd)
			{
				publish
			}
		}

}
}