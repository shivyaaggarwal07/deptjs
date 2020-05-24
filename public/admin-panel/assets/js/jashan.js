var eventsArray = [];
var name = document.getElementById("iname");
var rollNo = document.getElementById("irollno");
var jclass = document.getElementById("iclass");
var event1 = document.getElementById("event1");
var event2 = document.getElementById("event2");
var event3 = document.getElementById("event3");
var event4 = document.getElementById("event4");
var event5 = document.getElementById("event5");
var event6 = document.getElementById("event6");
var event7 = document.getElementById("event7");
var event8 = document.getElementById("event8");
var bhangra = document.getElementById("b1");
var gidda = document.getElementById("g1");
var painting = document.getElementById("p1");
var quiz = document.getElementById("q1");
var debate = document.getElementById("d1");
var cultural = document.getElementById("c1");
var singing = document.getElementById("s1");
var rangoli = document.getElementById("r1");
var submitButton = document.getElementById("isubmit");
var cancelButton = document.getElementById("ireset");
function validate()
{
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
    if(jclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(event1.checked==false && event2.checked==false && event3.checked==false && event4.checked==false && event5.checked==false && event6.checked==false && event7.checked==false && event8.checked==false)
    {
        alert("Please select atleast 1 event.");
        return;
    }
    if(event1.checked==true)
    {
        eventsArray.push("Dance")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Acting")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Singing")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Painting")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Quiz")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Cultural")
    }
    if(event1.checked==true)
    {
        eventsArray.push("Literary")
    }

    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "jclass" : jclass.value,
                    "events" : eventsArray
                   
    };
    firebase.database().ref('jashan/' + rollNo.value).set(formData).then(function(){
        alert("You have succesfully filled jashan form.");
    });
}
function reset()
{
    name.value="";
    rollNo.value="";
    jclass.value="";
    events.value="";

}
