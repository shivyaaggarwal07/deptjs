function load(){
    var data={};
    var rollNo = document.getElementById("rollno");
    var stuName = document.getElementById("stuname");

    stuName.value = localStorage.getItem('name');
    rollNo.value = localStorage.getItem('rollNo');
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value).once('value',function(snapshot){
        data=snapshot.val();

        //Populating Data.
        var regNo = document.getElementById("regno");
        
        var fatherName = document.getElementById("fathername");
        var motherName = document.getElementById("mothername");
    
        //if(data.registrationNumber!=NULL || data.registrationNumber!=undefined){
            regNo.value=data.registrationNumber;
        //}
        //if(data.personalDetail.fatherName!=NULL || data.personalDetail.fatherName!=undefined){
            fatherName.value=data.personalDetail.fatherName;
        //}
       //if(data.personalDetail.mothername!=NULL || data.personalDetail.mothername!=undefined){
            motherName.value=data.personalDetail.motherName;
       //}
        
    })
}
function disableControls(){
    document.getElementById("rollno").disabled=true;
    document.getElementById("stuname").disabled=true;
    document.getElementById("regno").disabled=true;
    document.getElementById("mothername").disabled=true;
    document.getElementById("fathername").disabled=true;

};

function validate(){
    var regNo = document.getElementById("regno");
    var rollNo = document.getElementById("rollno");
    var stuName = document.getElementById("stuname");
    var gender = document.getElementById("gender");
    var category = document.getElementById("category");
    var fatherName = document.getElementById("fathername");
    var motherName = document.getElementById("mothername");
    var address = document.getElementById("address");
    var mobNo = document.getElementById("mobno");
    var town = document.getElementById("town");
    var medium = document.getElementById("medium");
    var examCenter = document.getElementById("examcenter");
    var examCode = document.getElementById("examcode");
    var subjectName1 = document.getElementById("subjectName1");
    var subjectCode1 = document.getElementById("subjectCode1");
    var subjectName2 = document.getElementById("subjectName2");
    var subjectCode2 = document.getElementById("subjectCode2");
    var subjectName3 = document.getElementById("subjectName3");
    var subjectCode3 = document.getElementById("subjectCode3");
    var subjectName4 = document.getElementById("subjectName4");
    var subjectCode4 = document.getElementById("subjectCode4");
    var subjectName5 = document.getElementById("subjectName5");
    var subjectCode5 = document.getElementById("subjectCode5");
    if(regNo.value===""){
        alert("Enter Registration number."); return;
    }
    if(rollNo.value===""){
        alert("Enter Roll No."); return;
    }
    if(stuName.value===""){
        alert("Enter your name"); return;
    }
    if(fatherName.value===""){
        alert("Enter your Father's Name"); return;
    }
    if(motherName.value===""){
        alert("Enter your Mother's Name"); return;
    }
    if(address.value===""){
        alert("Enter your Address"); return;
    }
    if(mobNo.value===""){
        alert("Enter your Phone Number"); return;
    }
    if(examCenter.value===""){
        alert("Enter your Exam Center"); return;
    }
    if(examCode.value===""){
        alert("Enter the Exam Code"); return;
    }
    if(subjectName1.value==="" || subjectName2.value==="" || subjectName3.value==="" || subjectName4.value==="" || subjectName5.value===""){
        alert("Enter the name of all the Subjects."); return;
    }
    if(subjectCode1.value==="" || subjectCode2.value==="" || subjectCode3.value==="" || subjectCode4.value==="" || subjectCode5.value===""){
        alert("Enter the codes of all the subjects."); return;
    }
    var formData={
        "Town":town.value,
        "Exam Medium":medium.value,
        "Exam Center":examCenter.value,
        "Exam Code":examCode.value,
        "Subject Name 1":subjectName1.value,
        "Subject Code 1":subjectCode1.value,
        "Subject Name 2":subjectName2.value,
        "Subject Code 2":subjectCode2.value,
        "Subject Name 3":subjectName3.value,
        "Subject Code 3":subjectCode3.value,
        "Subject Name 4":subjectName4.value,
        "Subject Code 4":subjectCode4.value,
        "Subject Name 5":subjectName5.value,
        "Subject Code 5":subjectCode5.value
    }
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/examinationDetails/').set(formData).then(function(){
        alert("You have succesfully filled the examination form.");
        document.getElementById("submit").disabled=true;
    })
}

