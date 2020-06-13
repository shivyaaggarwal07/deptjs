function load() {
    var data = {};
    var rollNo = document.getElementById("rollno");
    var stuName = document.getElementById("stuname");
    stuName.value = localStorage.getItem('name');
    rollNo.value = localStorage.getItem('rollNo');
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value).once('value', function (snapshot) {
        data = snapshot.val();

        //Populating Data.
        var regNo = document.getElementById("regno");

        var fatherName = document.getElementById("fathername");
        var motherName = document.getElementById("mothername");

        //if(data.registrationNumber!=NULL || data.registrationNumber!=undefined){
        // regNo.value = data.registrationNumber;
        //}
        //if(data.personalDetail.fatherName!=NULL || data.personalDetail.fatherName!=undefined){
        fatherName.value = data.personalDetail.fatherName;
        //}
        //if(data.personalDetail.mothername!=NULL || data.personalDetail.mothername!=undefined){
        motherName.value = data.personalDetail.motherName;
        //}

    })
}

function disableControls() {
    document.getElementById("submitPersonal").disabled = true;
    document.getElementById("resetPersonal").disabled = true;
    document.getElementById("submitParents").disabled = true;
    document.getElementById("resetParents").disabled = true;
    document.getElementById("submitQualification").disabled = true;
    document.getElementById("resetQualification").disabled = true;
    document.getElementById("regno").disabled = true;
    document.getElementById("rollno").disabled = true;
    document.getElementById("stuname").disabled = true;
    document.getElementById("picture").disabled = true;
    document.getElementById("rank").disabled = true;
    document.getElementById("dob").disabled = true;
    document.getElementById("category").disabled = true;
    document.getElementById("gender").disabled = true;
    document.getElementById("father_name").disabled = true;
    document.getElementById("mother_name").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("mobile_no").disabled = true;
    document.getElementById("email_id").disabled = true;
    document.getElementById("board10").disabled = true;
    document.getElementById("pass10").disabled = true;
    document.getElementById("marks10").disabled = true;
    document.getElementById("percent10").disabled = true;
    document.getElementById("division10").disabled = true;
    document.getElementById("board12").disabled = true;
    document.getElementById("pass12").disabled = true;
    document.getElementById("marks12").disabled = true;
    document.getElementById("percent12").disabled = true;
    document.getElementById("division12").disabled = true;
    document.getElementById("boardgrad").disabled = true;
    document.getElementById("passgrad").disabled = true;
    document.getElementById("marksgrad").disabled = true;
    document.getElementById("percentgrad").disabled = true;
    document.getElementById("divisiongrad").disabled = true;


};

function editPersonal() {
    document.getElementById("submitPersonal").disabled = false;
    document.getElementById("resetPersonal").disabled = false;
    document.getElementById("editPersonal").disabled = true;
    document.getElementById("dob").disabled = false;
    document.getElementById("category").disabled = false;
    document.getElementById("gender").disabled = false;
    document.getElementById("picture").disabled = false;
}
function editParents() {
    document.getElementById("submitParents").disabled = false;
    document.getElementById("resetParents").disabled = false;
    document.getElementById("editParents").disabled = true;
    document.getElementById("father_name").disabled = false;
    document.getElementById("mother_name").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("mobile_no").disabled = false;
    document.getElementById("email_id").disabled = false;
}
function editQualification() {
    document.getElementById("submitQualification").disabled = false;
    document.getElementById("resetQualification").disabled = false;
    document.getElementById("editQualification").disabled = true;
    document.getElementById("board10").disabled = false;
    document.getElementById("pass10").disabled = false;
    document.getElementById("marks10").disabled = false;
    document.getElementById("percent10").disabled = false;
    document.getElementById("division10").disabled = false;
    document.getElementById("board12").disabled = false;
    document.getElementById("pass12").disabled = false;
    document.getElementById("marks12").disabled = false;
    document.getElementById("percent12").disabled = false;
    document.getElementById("division12").disabled = false;
    document.getElementById("boardgrad").disabled = false;
    document.getElementById("passgrad").disabled = false;
    document.getElementById("marksgrad").disabled = false;
    document.getElementById("percentgrad").disabled = false;
    document.getElementById("divisiongrad").disabled = false;
}

function validatePersonal() {
    var regNo = document.getElementById("regno").disabled = true;
    var rollNo = document.getElementById("rollno").disabled = true;

    var stuName = document.getElementById("stuname").disabled = true;

    var dob = document.getElementById("dob")
    if (dob.value === "") {
        alert("Please enter your Date of Birth"); return;
    }
}
function validateParents() {
    var category = document.getElementById("category");
    var gender = document.getElementById("gender");
    var fatherName = document.getElementById("father_name");
    var motherName = document.getElementById("mother_name");
    var address = document.getElementById("address");
    if (address.value === "") {
        alert("Please enter your address"); return;
    }
    var mobNo = document.getElementById("mobile_no")
    if (mobNo.value === "") {
        alert("Please enter your Mobile number"); return;
    }
    var emailID = document.getElementById("email_id")
    if (emailID.value === "") {
        alert("Please enter your E-mail ID"); return;
    }
}
function validateQualification() {
    var board_10 = document.getElementById("board10");
    if (board_10.value === "") {
        alert("Please enter your 10th Board"); return;
    }
    var passingYear_10 = document.getElementById("pass10");
    if (passingYear_10.value === "") {
        alert("Please enter your 10th Passing Year"); return;
    }
    var marks_10 = document.getElementById("marks10");
    if (marks_10.value === "") {
        alert("Please enter your 10th aggregate marks"); return;
    }
    var percentage_10 = document.getElementById("percent10");
    if (percentage_10.value === "") {
        alert("Please enter your 10th Percent"); return;
    }
    var division_10 = document.getElementById("division10");
    if (division_10.value === "") {
        alert("Please enter your 10th Division"); return;
    }
    var board_12 = document.getElementById("board12");
    if (board_12.value === "") {
        alert("Please enter your 12th Board"); return;
    }
    var passingYear_12 = document.getElementById("pass12");
    if (passingYear_12.value === "") {
        alert("Please enter your 12th Passing Year"); return;
    }
    var marks_12 = document.getElementById("marks12");
    if (marks_12.value === "") {
        alert("Please enter your 12th Marks"); return;
    }
    var percentage_12 = document.getElementById("percent12");
    if (percentage_12.value === "") {
        alert("Please enter your 12th"); return;
    }
    var division_12 = document.getElementById("division12");
    if (division_12.value === "") {
        alert("Please enter your 12th Division"); return;
    }
    var board_grad = document.getElementById("boardgrad");
    if (board_grad.value === "") {
        alert("Please enter your Graduation University"); return;
    }
    var passingYear_grad = document.getElementById("passgrad");
    if (passingYear_grad.value === "") {
        alert("Please enter your Graduation Passing Year"); return;
    }
    var marks_grad = document.getElementById("marksgrad");
    if (marks_grad.value === "") {
        alert("Please enter your Graduation Marks"); return;
    }
    var percentage_grad = document.getElementById("percentgrad");
    if (percentage_grad.value === "") {
        alert("Please enter your Graduation Percentage/CGPA"); return;
    }
    var division_grad = document.getElementById("divisiongrad");
    if (division_grad.value === "") {
        alert("Please enter your Graduation Division"); return;
    }
    var formDataPersonal = {
        "university Rank": uniRank.value,
        "Date Of Birth": dob.value
    };

    var formDataParents = {
        "Address": address.value,
        "Mobile Number": mobNo.value,
        "E-mail ID": emailID.value
    };

    var formDataQualifications = {
        "10th Details": {
            "Board": board_10.value,
            "Passing Year": passingYear_10.value,
            "Marks": marks_10.value,
            "Percentage": percentage_10.value,
            "Division": division_10.value
        },
        "12th Details":{
            "Board": board_12.value,
            "Passing Year": passingYear_12.value,
            "Marks": marks_12.value,
            "Percentage": percentage_12.value,
            "Division": division_12.value
        },
        "Graduation Details":{
            "Board": board_grad.value,
            "Passing Year": passingYear_grad.value,
            "Marks": marks_grad.value,
            "Percentage": percentage_grad.value,
            "Division": division_grad.value
        } 
        
    };
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/personalDetail').set(formDataPersonal).then(function () {
        alert("Your personal detail has been submitted.");
        document.getElementById("submitPersonal").disabled = true;
        document.getElementById("resetPersonal").disabled = true;
        document.getElementById("editPersonal").disabled = false;
    });
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/personalDetail').set(formDataParents).then(function () {
        alert("Your Guardian details have been updated.");
        document.getElementById("submitParents").disabled = true;
        document.getElementById("resetParents").disabled = true;
        document.getElementById("editParents").disabled = false;
    });
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/personalDetail').set(formDataQualifications).then(function () {
        alert("Your Academic details have been updated.");
        document.getElementById("submitQualification").disabled = true;
        document.getElementById("resetQualifications").disabled = true;
        document.getElementById("editQualifications").disabled = false;
    });
}