function load(){
    var data={};

    firebase.database().ref('gndu-amritsar/index').once('value',function(snapshot){
        data=snapshot.val();
        var recent = document.getElementById("recent");
        var message = document.getElementById("message");

        recent.innerHTML = data.recent;
        message.innerHTML = data.message;

        
    })
    firebase.database().ref('gndu-amritsar/faculty').once('value',function(snapshot){
        data=snapshot.val();
        var teacherName1 = document.getElementById("teachername1");
        var teacherName2 = document.getElementById("teachername2");
        var teacherName3 = document.getElementById("teachername3");
        var teacherName4 = document.getElementById("teachername4");
        var teacherName5 = document.getElementById("teachername5");
        var teacherName6 = document.getElementById("teachername6");
        var teacherName7 = document.getElementById("teachername7");
        var teacherName8 = document.getElementById("teachername8");
        var teacherName9 = document.getElementById("teachername9");
        var teacherImage1 = document.getElementById("teacherImage1");
        var teacherImage2 = document.getElementById("teacherImage2");
        var teacherImage3 = document.getElementById("teacherImage3");
        var teacherImage4 = document.getElementById("teacherImage4");
        var teacherImage5 = document.getElementById("teacherImage5");
        var teacherImage6 = document.getElementById("teacherImage6");
        var teacherImage7 = document.getElementById("teacherImage7");
        var teacherImage8 = document.getElementById("teacherImage8");
        var teacherImage9 = document.getElementById("teacherImage9");
        var teacherDetail1 = document.getElementById("teacherdetail1");
        var teacherDetail2 = document.getElementById("teacherdetail2");
        var teacherDetail3 = document.getElementById("teacherdetail3");
        var teacherDetail4 = document.getElementById("teacherdetail4");
        var teacherDetail5 = document.getElementById("teacherdetail5");
        var teacherDetail6 = document.getElementById("teacherdetail6");
        var teacherDetail7 = document.getElementById("teacherdetail7");
        var teacherDetail8 = document.getElementById("teacherdetail8");
        var teacherDetail9 = document.getElementById("teacherdetail9");

        teacherName1.innerHTML = data.teacherName1;
        teacherName2.innerHTML = data.teacherName2;
        teacherName3.innerHTML = data.teacherName3;
        teacherName4.innerHTML = data.teacherName4;
        teacherName5.innerHTML = data.teacherName5;
        teacherName6.innerHTML = data.teacherName6;
        teacherName7.innerHTML = data.teacherName7;
        teacherName8.innerHTML = data.teacherName8;
        teacherName9.innerHTML = data.teacherName9;
        teacherDetail1.innerHTML = data.teacherDetail1;
        teacherDetail2.innerHTML = data.teacherDetail2;
        teacherDetail3.innerHTML = data.teacherDetail3;
        teacherDetail4.innerHTML = data.teacherDetail4;
        teacherDetail5.innerHTML = data.teacherDetail5;
        teacherDetail6.innerHTML = data.teacherDetail6;
        teacherDetail7.innerHTML = data.teacherDetail7;
        teacherDetail8.innerHTML = data.teacherDetail8;
        teacherDetail9.innerHTML = data.teacherDetail9;
        teacherImage1.innerHTML.src="";
        teacherImage2.innerHTML.src="";
        teacherImage3.innerHTML.src="";
        teacherImage4.innerHTML.src="";
        teacherImage5.innerHTML.src="";
        teacherImage6.innerHTML.src="";
        teacherImage7.innerHTML.src="";
        teacherImage8.innerHTML.src="";
        teacherImage8.innerHTML.src="";
        

        
    })

    var data1={};
    firebase.database().ref('gndu-amritsar/index/testimonials').once('value',function(snapshot){
        data1=snapshot.val();
        var name1 = document.getElementById("name1");
        var image1 = document.getElementById("image1");
        var message1 = document.getElementById("message1");
        var name2 = document.getElementById("name2");
        var image2 = document.getElementById("image2");
        var message2 = document.getElementById("message2");
        var name3 = document.getElementById("name3");
        var image3 = document.getElementById("image3");
        var message3 = document.getElementById("message3");
    
        name1.innerHTML = data1.name1;
        message1.innerHTML = data1.message1;
        name2.innerHTML = data1.name2;
        message2.innerHTML = data1.message2;
        name3.innerHTML = data1.name3;
        message3.innerHTML = data1.message3;
       
        image1.innerHTML.src="";
        image2.innerHTML.src="";
        image3.innerHTML.src="";
        
    })
}
function submitQuery(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var query = document.getElementById("query");
    if(name.value===""){
        alert("Please Enter your Name."); return;
    }
    if(email.value===""){
        alert("Please Enter your Email-ID."); return;
    }
    if(subject.value===""){
        alert("Please Enter the subject of your Query."); return;
    }
    if(query.value===""){
        alert("Please Enter your Query."); return;
    }
    var formData={
        "name":name.value,
        "email":email.value,
        "subject":subject.value,
        "message":query.value
    }
    firebase.database().ref('gndu-amritsar/index/contact/').push(formData).then(function(){
        alert("You have succesfully passed the Query. Your Query will be rectified soon.");
        document.getElementById("submit").disabled=true;
    });
    
}

