var notice1 = document.getElementById("notice1");
var notice2 = document.getElementById("notice2");
var notice3 = document.getElementById("notice3");


function loading()
{
    var username = document.getElementById("namelabel");
    username.innerHTML=localStorage.getItem('name');
    alert(username.innerHTML + " New Message From the admin-panel");
}
function loadTT() {
    day = new Date();
    var d = day.getDay();
    localStorage.setItem('day', d);
    var weekDay = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'monday'];
    if (d == 6 || d == 0) {
        d = 1;
    }
    var data1 = {};
    
    firebase.database().ref('gndu-amritsar/timeTable/' + stuClass + '/' + weekDay[d] + '/').once('value', function (snapshot1) {
        data1 = snapshot1.val();

        var mon9_10 = document.getElementById("mon9-10");
        var mon10_11 = document.getElementById("mon10-11");
        var mon11_12 = document.getElementById("mon11-12");
        var mon12_1 = document.getElementById("mon12-1");
        var mon1_2 = document.getElementById("mon1-2");
        var mon2_3 = document.getElementById("mon2-3");
        var mon3_4 = document.getElementById("mon3-4");
        var mon4_5 = document.getElementById("mon4-5");

        mon9_10.innerHTML = data1.first;
        mon10_11.innerHTML = data1.second;
        mon11_12.innerHTML = data1.third;
        mon12_1.innerHTML = data1.fourth;
        mon1_2.innerHTML = data1.fifth;
        mon2_3.innerHTML = data1.sixth;
        mon3_4.innerHTML = data1.seventh;
        mon4_5.innerHTML = data1.eighth;
    }).then(function(){
        document.getElementById('dayTitle').innerHTML=weekDay[d].toUpperCase();
    });
}

function prevDay() {
    var d = localStorage.getItem('day');
    if (d == 6 || d == 0 || d==1) {
        d = 5;
    }
    else{
        d--;
    }
    localStorage.setItem('day', d);
    loadTimeTable(d);
}
function nextDay() {
    var d = localStorage.getItem('day');
    if (d == 6 || d == 0 || d==5) {
        d = 1;
    }
    else{
        d++;
    }
    localStorage.setItem('day', d);
    loadTimeTable(d);
}
function loadTimeTable() {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var date = new Date();
    var dayOfTheMonth = days[date.getDay()]
    var academic_class='MCA-(FYIC)';
    var semester = 'Semester1';
        var lectures = {};
        var slotname;
    // firebase.database().ref('gndu-amritsar/timeTable/' + stuClass + '/' + weekDay[d] + '/').once('value', function (snapshot1) {
        firebase.database().ref('gndu-amritsar/timeTable/' + semester + '/' + academic_class + '/' + dayOfTheMonth+'/').on('value',function(snapshot){
        lectures = snapshot.val();

        var mon9_10 = document.getElementById("mon9-10");
        var mon10_11 = document.getElementById("mon10-11");
        var mon11_12 = document.getElementById("mon11-12");
        var mon12_1 = document.getElementById("mon12-1");
        var mon1_2 = document.getElementById("mon1-2");
        var mon2_3 = document.getElementById("mon2-3");
        var mon3_4 = document.getElementById("mon3-4");
        var mon4_5 = document.getElementById("mon4-5");
var i
for(i=1;i<=9;i++)
{
    slotname='Slot' +i;
    if(lectures[slotname]!=null || lectures[slotname]!=undefined)
    {
        mon9_10[slotname].innerText=lectures[slotname];
    }
    else
        {
            mon9_10[slotname].innerText='free';
        }

}

        // mon9_10.innerText=lectures['10-11'];

        // mon9_10.innerHTML = data1.first;
        // mon10_11.innerHTML = data1.second;
        // mon11_12.innerHTML = data1.third;
        // mon12_1.innerHTML = data1.fourth;
        // mon1_2.innerHTML = data1.fifth;
        // mon2_3.innerHTML = data1.sixth;
        // mon3_4.innerHTML = data1.seventh;
        // mon4_5.innerHTML = data1.eighth;
    });
    //     .then(function(){
    //     document.getElementById('dayTitle').innerHTML=weekDay[d].toUpperCase();
    // });
}

function chkLogin() {
    var rollNo = localStorage.getItem('rollNo');
    if (rollNo === null || rollNo === undefined) {
        window.location = "assets/templates/sign-in.html"
    }
}

var stuClass = localStorage.getItem('class');
function load() {
    // var nameLabel = document.getElementById("nameLabel");
    // var firstName = localStorage.getItem('name').split(" ");
    // nameLabel.innerHTML = firstName[0];


    firebase.database().ref().child('gndu-amritsar/teacheronleave/2020-06-03').on('value', function (snapshot2) {
        data = snapshot1.val();

        var teacherLeave1 = document.getElementById("teacherLeave1");
        var teacherLeave2 = document.getElementById("teacherLeave2");
        var teacherLeave3 = document.getElementById("teacherLeave3");

        teacherLeave1.innerHTML = data.teacherName;
        teacherLeave2.innerHTML = data.teacherName;
        teacherLeave3.innerHTML = data.teacherName;

    })
}

function DmcStatus(){
    firebase.database().ref('gndu-amritsar/DmcDistribution/'+localStorage.getItem('class')+'/'+localStorage.getItem('rollNo')).on('value', function (snapshot2) {
        data = snapshot2.val();

        if(data==="Pending"){
            document.getElementById("dmcStatus").style.visibility="visible";
        }
        else{
            document.getElementById("dmcStatus").style.visibility="hidden";
        }
    });
}