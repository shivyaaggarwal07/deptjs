function validate(){
var pclass = document.getElementById("iclass");
var semester = document.getElementById("isemester");
var rollNo = document.getElementById("irollno");
var message = document.getElementById("imessage");
var sendButton = document.getElementById("isend");

if(pclass.value=="")
{
	alert("Kindly select the class");
	return;
}
else if(semester.value=="")
{
	alert("Kindly select the semester")
	// return;
}
else if(rollNo.value=="")
{
	alert("Kindly enter the Roll Number")
	return;
}
else if(message.value=="")
{
	alert("kindly enter the message")
	return;
}
else {
var formData={
    "class" : pclass.value,
    "semester" : semester.value,
    "rollNo" : rollNo.value,
    "message" : message.value
};
// postData(formData,pclass.value,semester.value,rollNo.value,message.value);
}

// function postData(formData,classs,semester,rollNo,message){
firebase.database().ref().child('gndu-amritsar/personalnotice/' +pclass.value+'/'+rollNo.value).push(formData).then(function(){
    alert("You have succesfully send personal notice.");
});
}