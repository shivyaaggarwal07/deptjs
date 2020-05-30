function load(){
        
        var rollNo = document.getElementById("rollno");
        var stuName = document.getElementById("stuname");
        var stuClass = document.getElementById("class");

        stuName.value = localStorage.getItem('name');
        rollNo.value = localStorage.getItem('rollNo');  
        stuClass.value = localStorage.getItem('class');
           
}
function disableControls(){
    document.getElementById("rollno").disabled=true;
    document.getElementById("stuname").disabled=true;
    document.getElementById("class").disabled=true;
};




function validate(){
    var gamesArray=[];
    var stuName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var dob = document.getElementById("dob")
    var gender = document.getElementById("gender")
    var mobNo = document.getElementById("mobno")
    var emailID = document.getElementById("emailID")
    var game1 = document.getElementById("game1")
    var game2 = document.getElementById("game2")
    var game3 = document.getElementById("game3")
    var game4 = document.getElementById("game4")
    var game5 = document.getElementById("game5")
    var game6 = document.getElementById("game6")
    var game7 = document.getElementById("game7")
    var game8 = document.getElementById("game8")
    var game9 = document.getElementById("game9")
    var formData={
        "name":stuName.value,
        "rollno":rollNo.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
        // "game":gamesArray.value
    }
    if(stuName.value===""){
        alert("Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Enter your Roll No"); return;
    }
    if(dob.value===""){
        alert("Enter your Date Of Birth"); return;
    }
    if(mobNo.value===""){
        alert("Enter your Mobile No"); return;
    }
    if(emailID.value===""){
        alert("Enter your Email-ID"); return;
    }
    if(game1.checked==false && game2.checked==false && game3.checked==false && game4.checked==false && game5.checked==false && game6.checked==false && game7.checked==false && game8.checked==false && game9.checked==false){
        alert("Please select atleast one game"); return;
    }
    if(game1.checked==true)
    {
        gamesArray.push("Cricket")
    firebase.database().ref('gndu-amritsar/student/miscellaneous/' + game1.value + '/' + rollNo.value).push(formData).then(function(){
        alert("You have succesfully applied for sports.");
        document.getElementById("submit").disabled=true;
    })
    }
     if(game2.checked==true)
    {
        gamesArray.push("Badminton")
    }
    if(game3.checked==true)
    {
        gamesArray.push("Table Tennis")
    }
    if(game4.checked==true)
    {
        gamesArray.push("Lawn Tennis")
    }
     if(game5.checked==true)
    {
        gamesArray.push("Handball")
    }
    if(game6.checked==true)
    {
        gamesArray.push("Basketball")
    }
    if(game7.checked==true)
    {
        gamesArray.push("Football")
    }
    if(game8.checked==true)
    {
        gamesArray.push("Carrom")
    }
    if(game1.checked==true)
    {
        gamesArray.push("Hockey")
    }
}

