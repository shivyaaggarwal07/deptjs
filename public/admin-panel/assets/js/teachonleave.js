
var selectTeacher = document.getElementById("iselectTeacher");
var selectDate = document.getElementById("iselectDate");
var submitButton = document.getElementById("isubmit");

function validate() {
    selectTeacher = document.getElementById("iselectTeacher");
    selectDate = document.getElementById("iselectDate");
    submitButton = document.getElementById("isubmit");
    if(selectTeacher.value=="")
    {
        alert("Select teacher name");
        return;
    }
    else if(selectDate.value=="")
    {
        alert("please select a date");
        return;
    }
    else{
        var formData = {
                    "teacherName" : selectTeacher.value, 
                    // "date" : selectDate.value
                        }; 
    postData(formData,selectDate.value,selectTeacher.value);
    }
}

function postData(formData,date,teacher){ 
           
    firebase.database().ref('gndu-amritsar/teacheronleave/'+date).set(formData).then(function(){
        alert("You have succesfully add teacher on leave detail.");
        window.location.reload();
    });
                      
}