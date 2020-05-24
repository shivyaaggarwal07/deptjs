function load(){
    var recent = document.getElementById("recent")
    var message = document.getElementById("message")
    var stu1Name = document.getElementById("stu1Name")
    var stu1Image = document.getElementById("stu1Image")
    var stu1Message = document.getElementById("stu1Message")
    var stu2Name = document.getElementById("stu2Name")
    var stu2Image = document.getElementById("stu2Image")
    var stu2Message = document.getElementById("stu2Message")
    var sty3Name = document.getElementById("stu3Name")
    var stu3Image = document.getElementById("stu3Image")
    var stu3Message = document.getElementById("stu3Message")
    var linkID = document.getElementById("linkID")
    var linkFee = document.getElementById("linkFee")

    firebase.database().ref('gndu-amritsar/index/').once('value',function(snapshot){
        data=snapshot.val();
        recent.value=data.recent;
        message.value=data.message;
        stu1Name.value=data.testimonials.name1;
        stu1Message.value=data.testimonials.message1;
        stu2Name.value=data.testimonials.name2;
        stu2Message.value=data.testimonials.message2;
        stu3Name.value=data.testimonials.name3;
        stu3Message.value=data.testimonials.message3;
        linkID.value=data.links.linkID;
        linkFee.value=data.links.linkFee;
    })

};

function update(){
    var recent = document.getElementById("recent")
    var message = document.getElementById("message")
    var stu1Name = document.getElementById("stu1Name")
    var stu1Image = document.getElementById("stu1Image")
    var stu1Message = document.getElementById("stu1Message")
    var stu2Name = document.getElementById("stu2Name")
    var stu2Image = document.getElementById("stu2Image")
    var stu2Message = document.getElementById("stu2Message")
    var sty3Name = document.getElementById("stu3Name")
    var stu3Image = document.getElementById("stu3Image")
    var stu3Message = document.getElementById("stu3Message")
    var linkID = document.getElementById("linkID")
    var linkFee = document.getElementById("linkFee")

    var formData={
        "recent":recent.value,
        "message":message.value,
        "testimonials":{
            "stu1Name":stu1Name.value,
            "stu1Image":stu1Image.value,
            "stu1Message":stu1Message.value,
            "stu2Name":stu2Name.value,
            "stu2Image":stu2Image.value,
            "stu2Message":stu2Message.value,
            "stu3Name":stu3Name.value,
            "stu3Image":stu3Image.value,
            "stu3Message":stu3Message.value
        },
        "links":{
            "linkID":linkID.value,
            "linkFee":linkFee.value
        }
    }

    firebase.database().ref('gndu-amritsar/index/').set(formData).then(function(){
        alert("You have succesfully updated the Department Website's Information.");
        document.getElementById("submit").disabled=true;
    })
}