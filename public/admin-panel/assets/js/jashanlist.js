function myfunction()
{
	var data={};
var selectevent = document.getElementById("event").value;
var name=document.getElementById("iname");
var rollno = document.getElementById("irollno");
var clas = document.getElementById("iclass");
if(selectevent.selectedIndex="0")
{
	alert("Kindly select an event");
}
	firebase.database().ref().child('jashan/Dance').once('value',function(snapshot){
		data=snapshot.val();
		// var bhangra = document.getElementById("event");
		// 	var name=document.getElementById("iname");
		// 	var rollno = document.getElementById("irollno");
		// 	var clas = document.getElementById("iclass");
			name.value=data.name;
			rollno.value=data.rollno;
			clas.value=data.class;

	})
}