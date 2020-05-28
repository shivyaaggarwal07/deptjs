var checkbox=document.querySelector("#fyicchecked");
var text=document.querySelector("#fyicselected");
var tyc = document.querySelector("#tycchecked");
var tyc1=document.querySelector("#tycselected");
var bgtext = document.getElementById("bgtext");
// fyic.addEventlistener("click",function(){
// 	fyic1.style.color="yellow";
// });
// fyic.addEventlistener("change",function(){
// 	for(var i=0;i<fyic1.length;i++)
// 	{
// 	this.style.display="none";
// 	}
// });
// const dbref=firebase.database().ref().child('gndu-amritsar/student/bgtext');
// dbref.on("value",snap => gndu-amritsar.student.bgtext.innerText = snap.val());

function checking()
{
	if(checkbox.checked == true)
	{
		text.style.display="block";
		var database=firebase.database();
		var firebaseref=database.ref().child('gndu-amritsar/timeTable/MCA-(FYIC)/Semester1');
		firebaseref.once("value", snap =>{
		console.log(checkbox.innerText=snap.val());
	});
	}
	else{
			text.style.display="none";
	}
	if(tyc.checked == true)
	{
		tyc1.style.display="block";
		var database=firebase.database();
		firebaseref=database.ref().child('gndu-amritsar/timeTable/MCA-(TYC)');
		firebaseref.once("value",snap =>{
		tyc.innerText=JSON.stringify(snap.val());
		});
	}
	else
	{
		tyc1.style.display="none";
	}
	//retrieve the data from the firebase
	// var database=firebase.database();
	// var firebaseref=database.ref().child('gndu-amritsar/timeTable/MCA-(FYIC)');
	// firebaseref.once("value", snap =>{
	// 	console.log(checkbox.innerText=JSON.stringify(snap.val()));
	// });

// 	}).then(function(){
// 		alert("Here is your timeTable");
// 	});
 }
        