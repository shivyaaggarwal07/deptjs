// function validate(){
// var batch = document.getElementById("ibatch");
// var semester = document.getElementById("isemester");
// var rollNo = document.getElementById("irollno1");
// var name = document.getElementById("iname1");
// var status = document.getElementById("istatus1");

// if(batch.value==="")
// {
// 	alert("Kindly Select the batch");
// 	return;
// }
// if(semester.value==="")
// {
// 	alert("Kindly Select the semester");
// 	return;
// }
// formData ={
//     "rollNo" : rollNo.value,
//     "name" : name.value,
//     // "status" : status.value
// };
// firebase.database().ref('gndu-amritsar/DmcDistribution' + rollNo.value).set(formData).then(function(){
//     alert("You have succesfully enter detail.");
// });
// }
// function show(id)
// {
	// var element = document.getElementById(id);
document.addEventListener('DOMContentLoaded', function(){
	var checkbox = document.querySelector('input[type="checkbox"]');
	checkbox.addEventListener('change',function(){
		if(checkbox.checked)
		{
			alert("DMC TAKEN BY THE STUDENT ");

		}
		else
		{
			alert("Student has not taken its dmc");
		}
	})
})
// }