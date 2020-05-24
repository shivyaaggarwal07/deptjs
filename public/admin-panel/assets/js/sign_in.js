var rollNo = document.getElementById('rollno');
var password = document.getElementById('password');

function signin(){
    if(rollNo.value==="" || rollNo===undefined){
        alert("Please Enter your Roll Number.");
        return false;
    }
    if(password.value==="" || password.value===undefined){
        alert("Please Enter your Password.");
        return false;
    }
    if(rollNo.value==="2015CSB1002" && password.value==="123456"){
        document.location.href = "../../home.html";
        return false;
    }else if(rollno.value!="2015CSB1002"){
        alert("Please enter correct Roll No.");
        return false;
    }else if(password.value!="123456"){
        alert("Please enter correct Password.");
        return false;
    }
    return false;
}