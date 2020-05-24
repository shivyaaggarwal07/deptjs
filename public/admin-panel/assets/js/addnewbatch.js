function validate(){
    var batch = document.getElementById("ibatch");
    var name = document.getElementById("iname");
    var fatherName = document.getElementById("ifathername");
    var motherName = document.getElementById("imothername");
    var rollNo = document.getElementById("irollno");
    var password = document.getElementById("ipassword");
    var registrationNo = document.getElementById("iregistrationno");
    var submitButton = document.getElementById("isubmit");
    var stuClass = document.getElementById("iclass");
    
    var name1 = document.getElementById("iname1");
    var fatherName1 = document.getElementById("ifathername1");
    var motherName1 = document.getElementById("imothername1");
    var rollNo1 = document.getElementById("irollno1");
    var password1 = document.getElementById("ipassword1");
    var registrationNo1 = document.getElementById("iregistrationno1");

    var submitButton = document.getElementById("isubmit");
    var stuClass = document.getElementById("iclass");

    var name2 = document.getElementById("iname2");
    var fatherName2 = document.getElementById("ifathername2");
    var motherName2 = document.getElementById("imothername2");
    var rollNo2 = document.getElementById("irollno2");
    var password2 = document.getElementById("ipassword2");
    var registrationNo2 = document.getElementById("iregistrationno2");

    var name3 = document.getElementById("iname3");
    var fatherName3 = document.getElementById("ifathername3");
    var motherName3 = document.getElementById("imothername3");
    var rollNo3 = document.getElementById("irollno3");
    var password3 = document.getElementById("ipassword3");
    var registrationNo3 = document.getElementById("iregistrationno3");

    var name4 = document.getElementById("iname4");
    var fatherName4 = document.getElementById("ifathername4");
    var motherName4 = document.getElementById("imothername4");
    var rollNo4 = document.getElementById("irollno4");
    var password4 = document.getElementById("ipassword4");
    var registrationNo4 = document.getElementById("iregistrationno4");

    var name5 = document.getElementById("iname5");
    var fatherName5 = document.getElementById("ifathername5");
    var motherName5 = document.getElementById("imothername5");
    var rollNo5 = document.getElementById("irollno5");
    var password5 = document.getElementById("ipassword5");
    var registrationNo5 = document.getElementById("iregistrationno5");
    
    if(name1.value!="NULL" || fatherName1.value!="NULL" || motherName1.value!="NULL" || rollNo1.value!="NULL" || password1.value!="NULL" || registrationNo1.value!="NULL"){   
        var formData={
            "name": name1.value,
            "rollNo": rollNo1.value,
            "password": password1.value,
            "registrationNumber": registrationNo1.value,
            "class": stuClass.value,
            "personalDetail":{
                "fatherName": fatherName1.value,
                "motherName": motherName1.value
            }
        };
        firebase.database().ref('gndu-amritsar/student/' + rollNo1.value).push(formData).then(function(){
            alert("You have succesfully created a new batch.");
        });
    } else {
        if(registrationNo1.value===""){
            alert("Enter the Registration Number for first student."); return;
        }
        if(rollNo1.value===""){
            alert("Enter Roll Number of the first student."); return;
        }
        if(name1.value===""){
            alert("Enter the name of the first student."); return;
        }
        if(fatherName1.value===""){
            alert("Enter the Father's Name of the first student."); return;
        }
        if(motherName1.value===""){
            alert("Enter the Mother's Name of the first student."); return;
        }
        if(password1.value===""){
            alert("Enter the Password of the first student."); return;
        }
        
    }

    /*if(name2.value!="NULL" || fatherName2.value!="NULL" || motherName2.value!="NULL" || rollNo2.value!="NULL" || password2.value!="NULL" || registrationNo2.value!="NULL"){   
        var formData={
            "name": name2.value,
            "rollNo": rollNo2.value,
            "password": password2.value,
            "registrationNumber": registrationNo2.value,
            "class": stuClass.value,
            "personalDetail":{
                "fatherName": fatherName2.value,
                "motherName": motherName2.value
            }
        };
        firebase.database().ref('gndu-amritsar/student/' + rollNo2.value).set(formData).then(function(){
            alert("You have succesfully created a new batch.");
        });
    } else {
        if(registrationNo2.value===""){
            alert("Enter the Registration Number for first student."); return;
        }
        if(rollNo2.value===""){
            alert("Enter Roll Number of the first student."); return;
        }
        if(name2.value===""){
            alert("Enter the name of the first student."); return;
        }
        if(fatherName2.value===""){
            alert("Enter the Father's Name of the first student."); return;
        }
        if(motherName2.value===""){
            alert("Enter the Mother's Name of the first student."); return;
        }
        if(password2.value===""){
            alert("Enter the Password of the first student."); return;
        }
        
    }
    if(name3.value!="NULL" || fatherName3.value!="NULL" || motherName3.value!="NULL" || rollNo3.value!="NULL" || password3.value!="NULL" || registrationNo3.value!="NULL"){   
        var formData={
            "name": name3.value,
            "rollNo": rollNo3.value,
            "password": password3.value,
            "registrationNumber": registrationNo3.value,
            "class": stuClass.value,
            "personalDetail":{
                "fatherName": fatherName3.value,
                "motherName": motherName3.value
            }
        };
        firebase.database().ref('gndu-amritsar/student/' + rollNo3.value).set(formData).then(function(){
            alert("You have succesfully created a new batch.");
        });
    } else {
        if(registrationNo3.value===""){
            alert("Enter the Registration Number for first student."); return;
        }
        if(rollNo3.value===""){
            alert("Enter Roll Number of the first student."); return;
        }
        if(name3.value===""){
            alert("Enter the name of the first student."); return;
        }
        if(fatherName3.value===""){
            alert("Enter the Father's Name of the first student."); return;
        }
        if(motherName3.value===""){
            alert("Enter the Mother's Name of the first student."); return;
        }
        if(password3.value===""){
            alert("Enter the Password of the first student."); return;
        }
        
    }
    if(name4.value!="NULL" || fatherName4.value!="NULL" || motherName4.value!="NULL" || rollNo4.value!="NULL" || password4.value!="NULL" || registrationNo4.value!="NULL"){   
        var formData={
            "name": name4.value,
            "rollNo": rollNo4.value,
            "password": password4.value,
            "registrationNumber": registrationNo4.value,
            "class": stuClass.value,
            "personalDetail":{
                "fatherName": fatherName4.value,
                "motherName": motherName4.value
            }
        };
        firebase.database().ref('gndu-amritsar/student/' + rollNo4.value).set(formData).then(function(){
            alert("You have succesfully created a new batch.");
        });
    } else {
        if(registrationNo4.value===""){
            alert("Enter the Registration Number for first student."); return;
        }
        if(rollNo4.value===""){
            alert("Enter Roll Number of the first student."); return;
        }
        if(name4.value===""){
            alert("Enter the name of the first student."); return;
        }
        if(fatherName4.value===""){
            alert("Enter the Father's Name of the first student."); return;
        }
        if(motherName4.value===""){
            alert("Enter the Mother's Name of the first student."); return;
        }
        if(password4.value===""){
            alert("Enter the Password of the first student."); return;
        }
        
    }
    if(name5.value!="NULL" || fatherName5.value!="NULL" || motherName5.value!="NULL" || rollNo5.value!="NULL" || password5.value!="NULL" || registrationNo5.value!="NULL"){   
        var formData={
            "name": name5.value,
            "rollNo": rollNo5.value,
            "password": password5.value,
            "registrationNumber": registrationNo5.value,
            "class": stuClass.value,
            "personalDetail":{
                "fatherName": fatherName5.value,
                "motherName": motherName5.value
            }
        };
        firebase.database().ref('gndu-amritsar/student/' + rollNo5.value).set(formData).then(function(){
            alert("You have succesfully created a new batch.");
        });
    } else {
        if(registrationNo5.value===""){
            alert("Enter the Registration Number for first student."); return;
        }
        if(rollNo5.value===""){
            alert("Enter Roll Number of the first student."); return;
        }
        if(name5.value===""){
            alert("Enter the name of the first student."); return;
        }
        if(fatherName5.value===""){
            alert("Enter the Father's Name of the first student."); return;
        }
        if(motherName5.value===""){
            alert("Enter the Mother's Name of the first student."); return;
        }
        if(password5.value===""){
            alert("Enter the Password of the first student."); return;
        }
        
    }*/
}

function parsingCSV(){
    var file = document.getElementById("uploadCsv").files[0];
    config={
        delimiter: "",  // auto-detect
        newline: "",    // auto-detect
        quoteChar: '"',
        escapeChar: '"',
        header: false,
        trimHeader: false,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: function(results, file) {
                //console.log("Parsing complete:", results, file);
                display(results);
            },
        error: function(errors) {
            alert("Error while parsing. Please check your file again and try.");
            console.log(errors);
        },
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined
    };
    
    Papa.parse(file, config);
    //console.log(results);
    function display(results){
        var r = results;
        console.log(r.data);  
    } 
}

function newBatch(){
    var batch = document.getElementById("iclass");
    var startingYear = document.getElementById("iyear");
    if(batch==1){
        endingYear = startingYear.value + 3;
    }
    else if(batch==2){
        endingYear = startingYear.value + 5; 
    }
    else if(batch==0){
        alert("Please select Class"); return;
    }
}