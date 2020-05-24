function validate(){
    var oldPassword = document.getElementById("oldpassword")
    var newPassword = document.getElementById("newpassword")
    var confirmPassword = document.getElementById("confirmpassword")
    if(oldPassword.value===""){
        alert("Please enter your old Password"); return;
    }
    if(newPassword.value===""){
        alert("Please enter your new Password"); return;
    }
    if(confirmPassword.value===""){
        alert("Please enter new password for the second time to confirm"); return;
    }
    if(!(newPassword.value===confirmPassword.value)){
        alert("New passwords didn't matched"); return;
    }
    if(newPassword.value===oldPassword.value){
        alert("New Password cannot be same as old Passowrd"); return;
    }
}
