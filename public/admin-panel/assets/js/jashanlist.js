function myfunction()
{
	var data={};
var selectevent = document.getElementById("event").value;
var name=document.getElementById("iname");
var rollno = document.getElementById("irollno");
var clas = document.getElementById("iclass");
// if(selectevent.selectedIndex="0")
// {
// 	alert("Kindly select an event");
// 	return;
// }
if(selectevent.selectedIndex="1")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/dance/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="2")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/painting/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="3")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/quiz/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="4")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/acting').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="5")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/cultural/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="6")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/singing/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
if(selectevent.selectedIndex="7")
{
	var data={};
	var selectevent = document.getElementById("event").value;
	var name=document.getElementById("iname");
	var rollno = document.getElementById("irollno");
	var clas = document.getElementById("iclass");
	firebase.database().ref().child('gndu-amritsar/jashan/literary/2017CSC1048').once('value',function(snapshot){
		data=snapshot.val();
		name.value=data.name;
		rollno.value=data.rollno;
		clas.value=data.clas;
	})
}
}