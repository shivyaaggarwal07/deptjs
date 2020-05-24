var rollNo = document.getElementById('rollno');
var password = document.getElementById('password');

function signin(){
    if(rollNo.value==="" || rollNo===undefined){
        alert("Please Enter your Roll Number.");
        return false;
    }
    if(password.value==="" || password.value===undefined){
        alert("Please Enter your Password.");
        return false;
    }
    firebase.database().ref('gndu-amritsar/student/'+rollNo.value+'/password').once('value',function(snapshot){
        data1=snapshot.val();
        if( password.value===data1){
            firebase.database().ref('gndu-amritsar/student/'+rollNo.value).once('value',function(snapshot){
                data2=snapshot.val();
                localStorage.setItem('class', data2.class);
                localStorage.setItem('rollNo', data2.rollNo);
                localStorage.setItem('name', data2.name);
            }).then(function(){
            	$.getJSON('https://ipapi.co/json/', function(data) {
				  var ip = data.ip;
				  var region = data.region;
				  var deviceData = {
				  	"ip": ip,
				  	"region": region
				  }
				  firebase.database().ref('gndu-amritsar/student/' + rollNo.value+'/registeredDevices/').push(deviceData).then(function(){
			      }).then(function(){
			      	document.location.href = "../../home.html";
                	return false;
			      });
				});
            })
        }
        else if(data1==null){
            alert("This roll number is not registered with us. Please enter the correct roll number and try again. ");
            return false;
        }
        else if(password.value!=data1){
            alert("Please enter correct Password.");
            return false;
        }
    })
    return false;
}
