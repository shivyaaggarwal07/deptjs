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
    var stuName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var category = document.getElementById("category")
    var minority = document.getElementById("minority")
    var income = document.getElementById("income")
    var residence = document.getElementById("residence")
    var concession = document.getElementById("concession")
    if(stuName.value===""){
        alert("Please Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Please Enter your Roll No."); return;
    }
    if(income.value===""){
        alert("Please upload your Income Certificate"); return;
    }
    if(residence.value===""){
        alert("Please upload your Residence Certificate"); return;
    }
    var formData={
        "Minority":minority,
        "Income":income.value,
        "Residence":residence.value,
        "Concession":concession
    }
    firebase.database().ref('gndu-amritsar/student' + rollNo.value + '/documents').set(formData).then(function(){
        alert("You have succesfully applied for scholarship.");
        document.getElementById("submit").disabled=true;
    })
}    


