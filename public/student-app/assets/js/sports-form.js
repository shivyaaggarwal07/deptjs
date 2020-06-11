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
    // var formData={
    //     "name":stuName.value,
    //     "rollno":rollNo.value,
    //     "gender":gender.value,
    //     "mobNo":mobNo.value,
    //     "emailID":emailID.value,
    //     // "game":gamesArray.value
    // }
    if(stuName.value===""){
        alert("Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Enter your Roll No"); return;
    }
    if(dob.value===""){
        alert("Enter your Date Of Birth"); return;
    }
    if(gender.checked==false)
    {
        alert("Kindely select your gender");
        return;
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
        // gamesArray.push("Cricket")
        game1='Cricket';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game1).set(game1).then(function(){
        var formData={
        "name":stuName.value,
        // "rollno":rollNo.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
        // alert("You have succesfully applied for sports.");
        // document.getElementById("submit").disabled=true;
        firebase.database().ref('gndu-amritsar/miscellaneous/'+game1+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game1);
        });
    });
    }
     if(game2.checked==true)
    {
        // gamesArray.push("Badminton")
         game2='Badminton';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game2).set(game2).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game2+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game2);
        });
    })
    }
    if(game3.checked==true)
    {
        // gamesArray.push("Table Tennis")
        game3='Table Tennis';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game3).set(game3).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game3+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game3);
        });
    })
    }
    if(game4.checked==true)
    {
        // gamesArray.push("Lawn Tennis")
        game4='Lawn Tennis';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game4).set(game4).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game4+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game4);
        });
    })
    }
     if(game5.checked==true)
    {
        // gamesArray.push("Handball")
        game5='Handball';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game5).set(game5).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game5+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game5);
        });
    })
    }
    if(game6.checked==true)
    {
        // gamesArray.push("Basketball")
        game6='Basketball';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game6).set(game6).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game6+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game6);
        });
    })
    }
    if(game7.checked==true)
    {
        // gamesArray.push("Football")
        game7='Football';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game7).set(game7).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game7+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game7);
        });
    })
    }
    if(game8.checked==true)
    {
        // gamesArray.push("Carrom")
        game8='Carrom';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game8).set(game8).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game8+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game8);
        });
    })
    }
    if(game9.checked==true)
    {
        // gamesArray.push("Hockey")
        game9='Badminton';
        firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/miscellaneous/'+game9).set(game9).then(function(){
        var formData={
        "name":stuName.value,
        "gender":gender.value,
        "mobNo":mobNo.value,
        "emailID":emailID.value,
    }
    firebase.database().ref('gndu-amritsar/miscellaneous/'+game9+'/'+rollNo.value).set(formData).then(function(){
            alert("You have successfully applied for sports:" + game9);
        });
    })
            }
}

