function validate(){
var batch = document.getElementById("ibatch");
var semester = document.getElementById("isemester");
var rollNo = document.getElementById("irollno");
var name = document.getElementById("iname");
var status = document.getElementById("istatus");

if(batch.value==="")
{
	alert("Kindly Select the batch");
	return;
}
if(semester.value==="")
{
	alert("Kindly Select the semester");
	return;
}
formData ={
    "rollNo" : rollNo.value,
    "name" : name.value,
    "status" : status.value
};
firebase.database().ref('DmcDistribution/' + rollNo.value).set(formData).then(function(){
    alert("You have succesfully enter detail.");
});
}