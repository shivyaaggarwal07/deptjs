function validate() {
    var registrationNo = document.getElementById("iregistrationno");
    var rollNo = document.getElementById("irollno");
    var name = document.getElementById("iname");
    var gender = document.getElementById("igender");
    var category = document.getElementById("icategory");
    var fatherName = document.getElementById("ifathername");
    var motherName = document.getElementById("imothername");
    var address = document.getElementById("iaddress");
    var mobileNo = document.getElementById("imobileno");
    var city = document.getElementById("icity");
    var medium = document.getElementById("imedium");
    var examCenter = document.getElementById("iexamcenter");
    var examCode = document.getElementById("iexamcode");
    var universityBoard = document.getElementById("iuniversityboard");
    var passingYear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
    var subjectName = document.getElementById("isubjectname");
    var subjectCode = document.getElementById("isubjectcode");
    var date = document.getElementById("idate");
    var place = document.getElementById("iplace");
    var studentSign = document.getElementById("istudentsign");
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
    if(examCenter.value==="")
    {
        alert("please enter examcenter");
        return;
    }
    if(examCode.value==="")
    {
        alert("please enter examcode");
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
    if(subjectCode.value==="")
    {
        alert("please enter subjectcode");
        return;
    }
    if(subjectName.value==="")
    {
        alert("please enter subjectname");
        return;
    }
    if(date.value==="")
    {
        alert("please enter date");
        return;
    }
    if(place.value==="")
    {
        alert("please enter place");
        return;
    }
    if(studentSign.value==="")
    {
        alert("please enter signature");
        return;
    }
    var formData = {
                     "registrationNo" : registrationNo.value,
                     "rollNo" : rollNo.value,
                     "name" : name.value,
                     "fatherName" : fatherName.value,
                     "motherName" : motherName.value,
                     "address" : address.value,
                     "mobileNo" : mobileNo.value,
                     "city" : city.value,
                     "medium" : medium.value,
                     "examCenter" : examCenter.value,
                     "examCode" : examCode.value,
                     "universityBoard" : universityBoard.value,
                     "passingYear" : passingYear.value,
                     "marks" : marks.value,
                     "percentage" : percentage.value,
                     "division" : division.value,
                     "subjectName" :subjectName.value,
                     "subjectCode" : subjectCode.value,
                     "date" : date.value,
                     "place" : place.value,
                     "studentSign" : studentSign.value
    };

}