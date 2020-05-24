function validate() {
    var registrationNo = document.getElementById("iregistrationno");
    var rollNo = document.getElementById("irollno");
    var name = document.getElementById("iname");
    var dateofBirth = document.getElementById("idob");
    var gender = document.getElementById("igender");
    var category = document.getElementById("icategory");
    var fatherName = document.getElementById("ifathername");
    var fatherOccupation = document.getElementById("ifatheroccupation");
    var motherName = document.getElementById("imothername");
    var motheroOccupation = document.getElementById("imotheroccupation");
    var address = document.getElementById("iaddress");
    var mobileNo = document.getElementById("imobileno");
    var emailId = document.getElementById("iemailid");
    var universityBoard = document.getElementById("iuniversityboard");
    var passingYear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
    var campusyouStudy = document.getElementById("icys");
    var anypendingBacklogorgap = document.getElementById("iresion");
    var radioButton = document.getElementById("iradio");
    var ncsId = document.getElementById("incsid");
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
    if(fatherOccupation.value==="")
    {
        alert("please enter fatheroccupation");
        return;
    }
    if(motherName.value==="")
    {
        alert("please enter mothername");
        return;
    }
    if(motherOccupation.value==="")
    {
        alert("please enter motheroccupation");
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
    if(campusyouStudy.value==="")
    {
        alert("please enter campus you study");
        return;
    }
    if(anypendingBacklogorgap.value==="")
    {
        alert("please enter any pending backlog or gap");
        return;
    }
    if(ncsId.value==="")
    {
        alert("please enter ncsid");
        return;
    }

     var formData = {
                        "registrationNo" : registrationNo.value,
                        "rollNo" : rollNo.value,
                        "name" : name.value,
                        "dateofBirth" : dateofBirth.value,
                        "fatherName" : fatherName.value,
                        "fatherOccupation" : fatherOccupation.value,
                        "motherName" : motherName.value,
                        "motherOccupation" : motherOccupation.value,
                        "address" : address.value,
                        "mobileNo" : mobileNo.value,
                        "emailId" : emailId.value,
                        "universityBoard" : universityBoard.value,
                        "passingYear" : passingYear.value,
                        "marks" : marks.value,
                        "percentage" : percentage.value,
                        "division" : division.value,
                        "campusyouStudy" : campusyouStudy.value,
                        "anypendingBacklogorgap" : anypendingBacklogorgap.value,
                        "ncsId" : ncsId.value,
     };
}