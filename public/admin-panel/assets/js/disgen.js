function load(){
    var data={};

    firebase.database().ref('gendata/2017CSC1048').once('value',function(snapshot){
        data=snapshot.val();
        //Populating Data.
        var registrationNo = document.getElementById("iregistrationno");
        var rollNo = document.getElementById("irollno");
        var name = document.getElementById("iname");
        var dclass = document.getElementById("iclass");
        //if(data.registrationNo!=NULL || data.registrationNo!=undefined){
            registrationNo.value=data.registrationNo;
        //}
        //if(data.rollNo!=NULL || data.rollNo!=undefined){
            rollNo.value=data.rollNo;
        //}
        //if(data.name!=NULL || data.name!=undefined){
            name.value=data.name;
        //}
    })
}




function validate(){
var registrationNo = document.getElementById("iregistration");
var rollNo = document.getElementById("irollno");
var name = document.getElementById("iname");
var dclass = document.getElementById("iclass");
var editButton = document.getElementById("iedit");
var viewallButton = document.getElementById("iviewall");

var formData ={
    "registrationNo" : registrationNo.value,
    "rollNo" : rollNo.value,
    "name" : name.value,
    "class" : dclass.value 
};
// firebase.database().ref().child('gendata/2017CSC1048').set(formData).then(function(){
    alert("You have successfully updated student details");
    editButton.disabled=true;
// })
}