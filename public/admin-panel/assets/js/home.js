function load(){
    firebase.database().ref('gndu-amritsar/timeTable/').once('value',function(snapshot1){
        data=snapshot1.val();

var mon1 = document.getElementById("mon1");
var mon2 = document.getElementById("mon2");
var mon3 = document.getElementById("mon3");
var mon4 = document.getElementById("mon4");
var mon5 = document.getElementById("mon5");
var mon6 = document.getElementById("mon6");
var mon7 = document.getElementById("mon7");
var mon8 = document.getElementById("mon8");
var tues1 = document.getElementById("tues1");
var tues2 = document.getElementById("tues2");
var tues3 = document.getElementById("tues3");
var tues4 = document.getElementById("tues4");
var tues5 = document.getElementById("tues5");
var tues6 = document.getElementById("tues6");
var tues7 = document.getElementById("tues7");
var tues8 = document.getElementById("tues8");
var wed1 = document.getElementById("wed1");
var wed2 = document.getElementById("wed2");
var wed3 = document.getElementById("wed3");
var wed4 = document.getElementById("wed4");
var wed5 = document.getElementById("wed5");
var wed6 = document.getElementById("wed6");
var wed7 = document.getElementById("wed7");
var wed8 = document.getElementById("wed8");
var thu1 = document.getElementById("thu1");
var thu2 = document.getElementById("thu2");
var thu3 = document.getElementById("thu3");
var thu4 = document.getElementById("thu4");
var thu5 = document.getElementById("thu5");
var thu6 = document.getElementById("thu6");
var thu7 = document.getElementById("thu7");
var thu8 = document.getElementById("thu8");
var fri1 = document.getElementById("fri1");
var fri2 = document.getElementById("fri2");
var fri3 = document.getElementById("fri3");
var fri4 = document.getElementById("fri4");
var fri5 = document.getElementById("fri5");
var fri6 = document.getElementById("fri6");
var fri7 = document.getElementById("fri7");
var fri8 = document.getElementById("fri8");

        mon1.innerHTML = data.monday.first;
        mon2.innerHTML = data.monday.second;
        mon3.innerHTML = data.monday.third;
        mon4.innerHTML = data.monday.fourth;
        mon5.innerHTML = data.monday.fifth;
        mon6.innerHTML = data.monday.sixth;
        mon7.innerHTML = data.monday.seventh;
        mon8.innerHTML = data.monday.eighth;

        tues1.innerHTML = data.monday.first;
        tues2.innerHTML = data.monday.second;
        tues3.innerHTML = data.monday.third;
        tues4.innerHTML = data.monday.fourth;
        tues5.innerHTML = data.monday.fifth;
        tues6.innerHTML = data.monday.sixth;
        tues7.innerHTML = data.monday.seventh;
        tues8.innerHTML = data.monday.eighth;

        wed1.innerHTML = data.monday.first;
        wed2.innerHTML = data.monday.second;
        wed3.innerHTML = data.monday.third;
        wed4.innerHTML = data.monday.fourth;
        wed5.innerHTML = data.monday.fifth;
        wed6.innerHTML = data.monday.sixth;
        wed7.innerHTML = data.monday.seventh;
        wed8.innerHTML = data.monday.eighth;

        thu1.innerHTML = data.monday.first;
        thu2.innerHTML = data.monday.second;
        thu3.innerHTML = data.monday.third;
        thu4.innerHTML = data.monday.fourth;
        thu5.innerHTML = data.monday.fifth;
        thu6.innerHTML = data.monday.sixth;
        thu7.innerHTML = data.monday.seventh;
        thu8.innerHTML = data.monday.eighth;

        fri1.innerHTML = data.monday.first;
        fri2.innerHTML = data.monday.second;
        fri3.innerHTML = data.monday.third;
        fri4.innerHTML = data.monday.fourth;
        fri5.innerHTML = data.monday.fifth;
        fri6.innerHTML = data.monday.sixth;
        fri7.innerHTML = data.monday.seventh;
        fri8.innerHTML = data.monday.eighth;
})
var notice1 = document.getElementById("notice1");
var notice2 = document.getElementById("notice2");
var notice3 = document.getElementById("notice3");

firebase.database().ref('gndu-amritsar/teacherOnLeave/').once('value',function(snapshot2){
    data=snapshot2.val();

var teacherLeave1 = document.getElementById("teacherLeave1");
var teacherLeave2 = document.getElementById("teacherLeave2");
var teacherLeave3 = document.getElementById("teacherLeave3");

            teacherLeave1.innerHTML = data.teacherName;
            teacherLeave2.innerHTML = data.teacherName;
            teacherLeave3.innerHTML = data.teacherName;
})
}
