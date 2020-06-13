function validate() {
    var name = document.getElementById("iname");
    var rollNo = document.getElementById("irollno");
    var sclass = document.getElementById("iclass");
    var category = document.getElementById("icategory");
    var maniority = document.getElementById("imaniority");
    var incomeCertificate = document.getElementById("iincome");
    var residenceCertificate = document.getElementById("iresidence");
    var feeConcession = document.getElementById("ifee");
    var submitButton = document.getElementById("isubmit");
    var cancelButton = document.getElementById("icancle");

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
    if(sclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(incomeCertificate.value==="")
    {
        alert("please attach income certificate");
        return;
    }
    if(residenceCertificate.value==="")
    {
        alert("please attach residence certificate");
        return;
    }
    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "sclass" : sclass.value,
                    "incomeCertificate" : incomeCertificate.value,
                    "residenceCertificate" : residenceCertificate.value,
    };
    firebase.database().ref('gndu-amritsar/Scholarship/' + rollNo.value).set(formData).then(function(){
            alert("You have successfully filled the Scholarship Form! You will get the response of the application soon.");
            cancelButton.disabled=true;
    });
}
function reset()
{
    var name = document.getElementById("iname");
    var rollNo = document.getElementById("irollno");
    var sclass = document.getElementById("iclass");
    var incomeCertificate = document.getElementById("iincome");
    var residenceCertificate = document.getElementById("iresidence");


    name.value="";
    rollNo.value="";
    sclass.value="";
    incomeCertificate="";
    residenceCertificate="";
}