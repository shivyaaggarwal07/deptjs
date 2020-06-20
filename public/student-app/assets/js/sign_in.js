var rollNo = document.getElementById('rollno');
var password = document.getElementById('password');
function viewPassword()
{
  var passwordInput = document.getElementById('password');
  var passStatus = document.getElementById('pass-status');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fas fa-eye-slash';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fas fa-eye';
  }
}
function myFunction() {
  // var x = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
var data={};
var originalPassword = "";
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
        originalPassword=snapshot.val();
        if( password.value===originalPassword){
            firebase.database().ref('gndu-amritsar/student/'+rollNo.value).once('value',function(snapshot){
                data=snapshot.val();
                localStorage.setItem('class', data.class);
                localStorage.setItem('rollNo', data.rollNo);
                localStorage.setItem('name', data.name);
            }).then(function(){
    	      	document.location.href = "../../home.html";
            	return false;
    	      });
        }
        else if(originalPassword==null || originalPassword==undefined){
            alert("This roll number is not registered with us. Please enter the correct roll number and try again. ");
            return false;
        }
        else if(password.value!=originalPassword){
            alert("Please enter correct Password.");
            return false;
        }
    })
    return false;
}
