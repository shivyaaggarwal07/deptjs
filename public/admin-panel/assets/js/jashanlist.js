var name=document.getElementById("iname");
var rollno = document.getElementById("irollno");
var clas = document.getElementById("iclass");
// var option = select.options[select.selectedIndex];
// if(option.id =="bhangra")
// {
// 	document.getElementById("iname").value = option.text;
// }
// select.onchange=function()
// {
// // name.value=select.value;
// }
function myfunction()
{
var select = document.getElementById("event").value;
	var data={};
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