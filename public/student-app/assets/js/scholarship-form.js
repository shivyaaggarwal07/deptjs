function load(){

        var rollNo = document.getElementById("rollno");
        // var stuName = document.getElementById("stuname");
        var name = document.getElementById("stuname");
        // var stuClass = document.getElementById("class");
        var classs = docuement.getElementById("classs");
        name.value = localStorage.getItem('name');
        rollNo.value = localStorage.getItem('rollNo');  
        // stuClass.value = localStorage.getItem('class');
        classs.value = localStorage.getItem('class')
       
    
}
function disableControls(){
    document.getElementById("rollno").disabled=true;
    document.getElementById("stuname").disabled=true;
    document.getElementById("class").disabled=true;
};


function validate(){
    var name = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var category = document.getElementById("category")
    var category1 = document.getElementById("category1");
    var minority = document.getElementById("minority")
    var income = document.getElementById("income")
    var residence = document.getElementById("residence")
    var concession = document.getElementById("concession")
    var submit = document.getElementById("isubmit")
    if(name.value===""){
        alert("Please Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Please Enter your Roll No."); return;
    }
    if(category.checked==false)
    {
        alert("kindly select category");
        return;
    }
    if(minority.checked==false)
    {
        alert("Kindly select minority");
        return;
    }
    if(income.value === ""){
        alert("Kindly upload your income Certificate"); return;
    }
    if(residence.value===""){
        alert("Kindly upload your residence Certificate"); return;
    }
    if(concession.checked==false)
    {
        alert("Kindly select fee concession");
        return;
    }
//     if(category1.selected==true)
//     {
//         var formData={
//         // "name":stuName.value,
//         // "RollNo":rollNo.value,
//         "documents":{
//         "Minority":minority.value,
//         "category":category.value,
//         "Income Certificate":income.value,
//         "Residence Certificate":residence.value,
//         "Concession":concession.value
//     }
// }
//         firebase.database().ref('gndu-amritsar/student/'+rollNo.value+'/scholarship/').set(formData).then(function(){

//         })
//     }
    var formData={
        // "name":stuName.value,
        // "RollNo":rollNo.value,
        "documents":{
        "Minority":minority.value,
        "category":category.value,
        "Income Certificate":income.value,
        "Residence Certificate":residence.value,
        "Concession":concession.value
    }
}
    firebase.database().ref('gndu-amritsar/student/' + rollNo.value + '/scholarship/').set(formData).then(function(){
        alert("You have succesfully applied for scholarship.");
        document.getElementById("submit").disabled=true;
    })   
    firebase.database().ref('gndu-amritsar/scholarship/' + rollNo.value).set(formData).then(function(){
        // alert("You have succesfully applied for scholarship.");
        // document.getElementById("submit").disabled=true;
    })   
}

