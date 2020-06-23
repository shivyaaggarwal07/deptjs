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
	// firebase.database().ref().child('gndu-amritsar/jashan/painting').once('value',function(snapshot){
	// 	// data=snapshot.val();
	// 	snapshot.forEach(function(childSnapshot){
	// 	 var childkey = childSnapshot.key;
	// 	 var childData = childSnapshot.val();
	// 	 data.push(childData);
	// 	});
	// 	for(var i=0;i<data.length;i++)
	// 	{

	// 	}
	// 	name.value=data.name[i][0];
		// rollno.value=data.rollno[1][1];
		// clas.value=data.clas[i][2];
	})
	// ele.ref("unfinished_task").once('value',function(snapshot){
                    // snapshot.forEach(function(childSnapshot){
                        // var childkey = childSnapshot.key;
                        // var childData = childkeyldSnapshot.val();
                        //converting objects to array
                        // task_array.push(Object.values(childData));
                    // });
                    // for(var i = 0; i<task_array.length;i++)
                    // {
                        // console.log(task_array[i]);
                        // task_date = task_array[i][0];
                        // task_key = task_array[i][1];
                        // task_title = task_array[i][2];

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