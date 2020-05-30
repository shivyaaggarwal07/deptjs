function validate(){
var pclass = document.getElementById("iclass");
var semester = document.getElementById("isemester");
var rollNo = document.getElementById("irollno");
var message = document.getElementById("imessage");
var sendButton = document.getElementById("isend");

if(pclass.selectedIndex==false)
{
	alert("Kindly select the class");
	return;
}
if(semester.selectedIndex==false)
{
	alert("Kindly select the semester")
	return;
}
if(rollNo.value=="")
{
	alert("Kindly enter the Roll Number")
	return;
}
if(message.value="")
{
	alert("kindly enter the message")
	return;
}
var formData={
    "pclass" : pclass.value,
    "semester" : semester.value,
    "rollNo" : rollNo.value,
    "message" : message.value
};
firebase.database().ref('personalnotice/' + pclass.value).push(formData).then(function(){
    alert("You have succesfully send personal notice.");
});

}