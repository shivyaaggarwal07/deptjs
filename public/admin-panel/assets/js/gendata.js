function validate() {
    var registrationNo = document.getElementById("iregistrationno");
    var rollNo = document.getElementById("irollno");
    var universityRank = document.getElementById("iuniversityrank");
    var category = document.getElementById("icategory");
    var name = document.getElementById("iname");
    var gender = document.getElementById("igender");
    var dateofBirth = document.getElementById("idob");
    var fatherName = document.getElementById("ifathername");
    var motherName = document.getElementById("imothername");
    var address = document.getElementById("iaddress");
    var mobileNo = document.getElementById("imobileno");
    var emailId = document.getElementById("iemailid");
    var universityBoard = document.getElementById("iuniversityboard");
    var passingYear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    if(registrationNo.value==="")
    {
        alert("please enter registration no");
        return;
    }
    if(rollNo.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(universityRank.value==="")
    {
        alert("please enter universityrank");
        return;
    }
    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(dateofBirth.value==="")
    {
        alert("please enter date of birth");
        return;
    }
    if(fatherName.value==="")
    {
        alert("please enter fathername");
        return;
    }
    if(motherName.value==="")
    {
        alert("please enter mothername");
        return;
    }
    if(address.value==="")
    {
        alert("please enter address");
        return;
    }
    if(mobileNo.value==="")
    {
        alert("please enter mobile no");
        return;
    }
    if(emailId.value==="")
    {
        alert("please enter email id");
        return;
    }
    if(universityBoard.value==="")
    {
        alert("please enter university board");
        return;
    }
    if(passingYear.value==="")
    {
        alert("please enter passingyear");
        return;
    }
    if(marks.value==="")
    {
        alert("please enter marks");
        return;
    }
    if(percentage.value==="")
    {
        alert("please enter percentage");
        return;
    }
    if(division.value==="")
    {
        alert("please enter division");
        return;
    }
    var formData = {
                    "registrationNo" : registrationNo.value,
                     "rollNo" : rollNo.value,
                     "universityRank" : universityRank.value,
                     "name" : name.value,
                     "dateofBirth" : dateofBirth.value,
                     "fatherName" : fatherName.value,
                     "motherName" : motherName.value,
                     "address" : address.value,
                     "mobileNo" : mobileNo.value,
                     "emailId" : emailId.value,
                     "universityBoard" : universityBoard.value,
                     "passingYear" : passingYear.value,
                     "marks" : marks.value,
                     "percentage" : percentage.value,
                     "division" : division.value
    };
    firebase.database().ref('gendata/' + rollNo.value).push(formData).then(function(){
        alert("You have succesfully added general data.");
    });
}
