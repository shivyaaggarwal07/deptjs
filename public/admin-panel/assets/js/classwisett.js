var checkbox=document.querySelector("#fyicchecked");
var text=document.querySelector("#fyicselected");
var tyc = document.querySelector("#tycchecked");
var tyc1=document.querySelector("#tycselected");
var bgtext = document.getElementById("bgtext");
var textplace = document.getElementById("textplace");
var table = document.getElementById("htmltable");
var table1 = document.getElementById("tyctable");
function checking()
{
	var slots = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5"]
	if(checkbox.checked == true)
	{
		text.style.display="block";
		table.style.display="block";
		var classTimeTable={};
		var database=firebase.database();
		var firebaseref=database.ref().child('gndu-amritsar/timeTable/MCA-(FYIC)/Semester1');
		firebaseref.once("value", function(snapshot){
			classTimeTable=snapshot.val();
		}).then(function(){
		if (classTimeTable!=null || classTimeTable != undefined){
			let row = "<tr><td><label>" + slots[0] + "</label></td><td><label>" + classTimeTable.Monday.Slot1 + "</label></td><td><label>" + classTimeTable.Tuesday.Slot1 + "</label></td><td><label>"
	+ classTimeTable.Wednesday.Slot1  + "</label></td><td><label>"		+ classTimeTable.Thursday.Slot1 + "</label></td><td><label>"  +classTimeTable.Friday.Slot1 + "</label></td></tr>";
			
			$('#htmltable').append(row);
			let row1 = "<tr><td><label>" + slots[1] + "</label></td><td><label>" + classTimeTable.Monday.Slot2 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot2 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot2 + "</label></td><td><label>" + classTimeTable.Thursday.Slot2 + "</label></td><td><label>" + classTimeTable.Friday.Slot2 + "</label></td></tr>";
$("#htmltable").append(row1);	
let row2 = "<tr><td><label>" + slots[2] + "</label></td><td><label>" + classTimeTable.Monday.Slot3 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot3 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot3 + "</label></td><td><label>" + classTimeTable.Thursday.Slot3 + "</label></td><td><label>" + classTimeTable.Friday.Slot3 + "</label></td></tr>";
$("#htmltable").append(row2);	
let row3 = "<tr><td><label>" + slots[3] + "</label></td><td><label>" + classTimeTable.Monday.Slot4 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot4 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot4 + "</label></td><td><label>" + classTimeTable.Thursday.Slot4 + "</label></td><td><label>" + classTimeTable.Friday.Slot4 + "</label></td></tr>";
$("#htmltable").append(row3);	
let row4 = "<tr><td><label>" + slots[4] + "</label></td><td><label>" + classTimeTable.Monday.Slot5 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot5 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot5 + "</label></td><td><label>" + classTimeTable.Thursday.Slot5 + "</label></td><td><label>" + classTimeTable.Friday.Slot5 + "</label></td></tr>";
$("#htmltable").append(row4);	
let row5 = "<tr><td><label>" + slots[5] + "</label></td><td><label>" + classTimeTable.Monday.Slot6 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot6 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot6 + "</label></td><td><label>" + classTimeTable.Thursday.Slot6 + "</label></td><td><label>" + classTimeTable.Friday.Slot6 + "</label></td></tr>";
$("#htmltable").append(row5);	
let row6 = "<tr><td><label>" + slots[6] + "</label></td><td><label>" + classTimeTable.Monday.Slot7 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot7 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot7 + "</label></td><td><label>" + classTimeTable.Thursday.Slot7 + "</label></td><td><label>" + classTimeTable.Friday.Slot7 + "</label></td></tr>";
$("#htmltable").append(row6);	
let row7 = "<tr><td><label>" + slots[7] + "</label></td><td><label>" + classTimeTable.Monday.Slot8 + "</td></label><td><label>" + classTimeTable.Tuesday.Slot8 + "</label></td><td><label>" 
+ classTimeTable.Wednesday.Slot8 + "</label></td><td><label>" + classTimeTable.Thursday.Slot8 + "</label></td><td><label>" + classTimeTable.Friday.Slot8 + "</label></td></tr>";
$("#htmltable").append(row7);
		// alert("Time Table for MCA(fyic)");
		}
		else{
			alert ("No timetable found for selected class.")
		}
		});

	}
}
	function checkit(){
	var slots = ["9-10", "10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5"]
	 if(tyc.checked == true)
	{
		tyc1.style.display="block";
		table1.style.display="block";
		var tyctimetable={};

		var database=firebase.database();
		firebaseref=database.ref().child('gndu-amritsar/timeTable/MCA-(TYC)/2015-2018/Semester1');
		firebaseref.once("value",function(snapshot){
			tyctimetable=snapshot.val();
		}).then(function(){
			if(tyctimetable != null || tyctimetable != undefined){
				let row = "<tr><td><label>" + slots[0] + "</label></td><td><label>" + tyctimetable.Monday.Slot1 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot1 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot1 + "</label></td><td><label>" + tyctimetable.Thursday.Slot1 + "</label></td><td><label>" + tyctimetable.Friday.Slot1 + "</label></td></tr>"
				$("#tyctable").append(row);
				let row1 = "<tr><td><label>" + slots[1] + "</label></td><td><label>" + tyctimetable.Monday.Slot2 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot2 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot2 + "</label></td><td><label>" + tyctimetable.Thursday.Slot2 + "</label></td><td><label>" + tyctimetable.Friday.Slot2 + "</label></td></tr>"
				$("#tyctable").append(row1);
				let row2 = "<tr><td><label>" + slots[2] + "</label></td><td><label>" + tyctimetable.Monday.Slot3 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot3 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot3 + "</label></td><td><label>" + tyctimetable.Thursday.Slot3 + "</label></td><td><label>" + tyctimetable.Friday.Slot3 + "</label></td></tr>"
				$("#tyctable").append(row2);
				let row3 = "<tr><td><label>" + slots[3] + "</label></td><td><label>" + tyctimetable.Monday.Slot4 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot4 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot4 + "</label></td><td><label>" + tyctimetable.Thursday.Slot4 + "</label></td><td><label>" + tyctimetable.Friday.Slot4 + "</label></td></tr>"
				$("#tyctable").append(row3);
				let row4 = "<tr><td><label>" + slots[4] + "</label></td><td><label>" + tyctimetable.Monday.Slot5 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot5 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot5 + "</label></td><td><label>" + tyctimetable.Thursday.Slot5 + "</label></td><td><label>" + tyctimetable.Friday.Slot5 + "</label></td></tr>"
				$("#tyctable").append(row4);
				let row5 = "<tr><td><label>" + slots[5] + "</label></td><td><label>" + tyctimetable.Monday.Slot6 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot6 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot6 + "</label></td><td><label>" + tyctimetable.Thursday.Slot6 + "</label></td><td><label>" + tyctimetable.Friday.Slot6 + "</label></td></tr>"
				$("#tyctable").append(row5);
				let row6 = "<tr><td><label>" + slots[6] + "</label></td><td><label>" + tyctimetable.Monday.Slot7 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot7 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot7 + "</label></td><td><label>" + tyctimetable.Thursday.Slot7 + "</label></td><td><label>" + tyctimetable.Friday.Slot7 + "</label></td></tr>"
				$("#tyctable").append(row6);
				let row7 = "<tr><td><label>" + slots[7] + "</label></td><td><label>" + tyctimetable.Monday.Slot8 + "</label></td><td><label>" + tyctimetable.Tuesday.Slot8 + "</label></td><td><label>"
				+ tyctimetable.Wednesday.Slot8 + "</label></td><td><label>" + tyctimetable.Thursday.Slot8 + "</label></td><td><label>" + tyctimetable.Friday.Slot8 + "</label></td></tr>"
				$("#tyctable").append(row7);
			}
	else
	{
		alert("No timetable found for selected class");
	}
		});
	}
 }
        