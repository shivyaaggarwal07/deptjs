function validate(){
var pclass = document.getElementById("iclass");
var semester = document.getElementById("isemester");
var rollNo = document.getElementById("irollno");
var message = document.getElementById("imessage");
var sendButton = document.getElementById("isend");

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