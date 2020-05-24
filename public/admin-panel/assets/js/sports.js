function validate() {
    var name = document.getElementById("iname");
    var rollNo = document.getElementById("irollno");
    var spclass = document.getElementById("iclass");
    var dateofBirth = document.getElementById("idob");
    var gender = document.getElementById("igender");
    var mobileNo = document.getElementById("imobileno");
    var emailId = document.getElementById("iemailid");
    var selectGames1 = document.getElementById("i1selectgames");
    var selectGames2 = document.getElementById("i2selectgames");
    var selectGames3 = document.getElementById("i3selectgames");
    var selectGames4 = document.getElementById("i4selectgames");
    var selectGames5 = document.getElementById("i5selectgames");
    var selectGames6 = document.getElementById("i6selectgames");
    var selectGames7 = document.getElementById("i7selectgames");
    var selectGames8 = document.getElementById("i8selectgames");
    var selectGames9 = document.getElementById("i9selectgames");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(rollNo.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(spclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(dateofBirth.value==="")
    {
        alert("please enter date of birth");
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
    if(selectGames1.checked==false && selectGames2.checked==false && selectGames3.checked==false && selectGames4.checked==false && selectGames5.checked==false && selectGames6.checked==false && selectGames7.checked==false && selectGames8.checked==false && selectGames9.checked==false)
    {
        alert("Please select atleast 1 game");
        return;
    }

    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "sclass" : sclass.value,
                    "dateofBirth" : dateofBirth.value,
                    "mobileNo" : mobileNo.value,
                    "emailId" : emailId.value,
                    "games" : selectGames.value,
    };
}