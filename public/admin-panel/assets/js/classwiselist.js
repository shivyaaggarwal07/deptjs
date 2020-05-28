var batch = document.querySelector("#ibatch");
function validate()
{
	if(batch.checked==true)
	{
		var database=firebase.database();
		var firebaseref=database.ref().child('gndu-amritsar/student/Batch/2017/Active');
		firebaseref.once("value",snap =>{
			console.log(batch.innertext=JSON.stringify(snap.value()));
		});
	}
	else{
		alert("Enter the batch Correctly!");
	}	
}
function valid(){
	if(batch.value)
	{
		var database=firebase.database();
		var firebaseref=database.ref().child('gndu-amritsar/student/Batch/2017/Left');
		firebaseref.once("value",snap =>{
			console.log(batch.innertext=JSON.stringify(snap.value()));
		});
	}
	else
	{
		alert("Enter the batch correctly to get the list of students left");
	}
}
// firebaseref.once("value").then(function(snapshot){
// 	var name=snapshot.child("gndu-amritsar/student/Batch/2017/Left").val();

// })