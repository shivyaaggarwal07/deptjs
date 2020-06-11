var eventsArray = [];
var name = document.getElementById("stuname");
var rollno = document.getElementById("rollno");
var jclass = document.getElementById("class");
var event1 = document.getElementById("event1");
var event2 = document.getElementById("event2");
var event3 = document.getElementById("event3");
var event4 = document.getElementById("event4");
var event5 = document.getElementById("event5");
var event6 = document.getElementById("event6");
var event7 = document.getElementById("event7");
// var event8 = document.getElementById("event8");
var bhangra = document.getElementById("b1");
var gidda = document.getElementById("g1");
var painting = document.getElementById("p1");
var quiz = document.getElementById("q1");
var debate = document.getElementById("d1");
var cultural = document.getElementById("c1");
var singing = document.getElementById("s1");
var rangoli = document.getElementById("r1");
function validate()
{
    var event ='';
var name = document.getElementById("iname");
var rollno = document.getElementById("irollno");
var jclass = document.getElementById("iclass");
var event1 = document.getElementById("event1");
var event2 = document.getElementById("event2");
var event3 = document.getElementById("event3");
var event4 = document.getElementById("event4");
var event5 = document.getElementById("event5");
var event6 = document.getElementById("event6");
var event7 = document.getElementById("event7");
var submitButton = document.getElementById("isubmit");
    if(name.value=="")
    {
        alert("please enter name");
        return;
    }
    if(rollno.value=="")
    {
        alert("please enter rollno");
        return;
    }
    if(jclass.value=="")        
    {
        alert("please enter class");
        return;
    }
    if(event1.checked==false && event2.checked==false && event3.checked==false && event4.checked==false && event5.checked==false && event6.checked==false && event7.checked==false)
    {
        alert("Please select atleast 1 event.");
        return;
    }
    if(event1.checked==true)
    {   
        event_1='dance';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event_1).set(event_1).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event_1+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event_1);
                // submitButton.disabled=true;
            }); 
        });
    }
    if(event2.checked==true)
    {
        event_2='painting';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event_2).set(event_2).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event_2+'/'  + rollno.value).set(formData).then(function(){
               alert("You have succesfully filled jashan form for event: "+event_2);
            }); 
        });
    }
    if(event3.checked==true)
    {
        event='acting';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event).set(event).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event);
            }); 
        });
    }
    if(event4.checked==true)
    {
        event='quiz';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event).set(event).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event);
            }); 
        });
    }
    if(event5.checked==true)
    {
        event='literary';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event).set(event).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event);
            }); 
        });
    }
    if(event6.checked==true)
    {
        event='cultural';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event).set(event).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event);
            }); 
        });
    }
    if(event7.checked==true)
    {
        event='singing';
        firebase.database().ref('gndu-amritsar/student/'+rollno.value+'/jashan/'+event).set(event).then(function(){
            var formData={
                'rollno':rollno.value,
                'class':jclass.value //localStorage.getItem('academic_class_name')
            }
            firebase.database().ref('gndu-amritsar/jashan/' + event+'/'  + rollno.value).set(formData).then(function(){
                alert("You have succesfully filled jashan form for event: "+event);
            }); 
        });
    }
}
function reset()
{
    var eventsArray = [];
var name = document.getElementById("iname");
var rollno = document.getElementById("irollno");
var jclass = document.getElementById("iclass");
var event1 = document.getElementById("event1"); 
var event2 = document.getElementById("event2");
var event3 = document.getElementById("event3");
var event4 = document.getElementById("event4");
var event5 = document.getElementById("event5");
var event6 = document.getElementById("event6");
var event7 = document.getElementById("event7");
var cancelButton = document.getElementById("ireset");
    name.value="";
    rollno.value="";
    jclass.value="";
    event1.checked="";
    event2.checked="";
    event3.checked="";
    event4.checked="";
    event5.checked="";
    event6.checked="";
    event7.checked="";

}
