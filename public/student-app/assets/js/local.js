function local(){
    var roll = localStorage.getItem('rollNo');
      if(roll===null || roll===undefined){
          window.location = "sign-in.html"
      }
}
function delLocal(){
    localStorage.removeItem('rollNo');
    localStorage.removeItem('name');
    localStorage.removeItem('class');
    window.location = "assets/templates/sign-in.html"
}
function localHome(){
    var roll = localStorage.getItem('rollNo');
      if(roll===null || roll===undefined){
          window.location = "./assets/templates/sign-in.html"
      }
}
function chkLink(){
    var linkID = document.getElementById("linkID");
    var linkFee = document.getElementById("linkFee");

    firebase.database().ref('gndu-amritsar/index/links/').once('value',function(snapshot){
        data=snapshot.val();
        
        linkID.href="";
        linkFee.href="";
    });
}

function messageCount(){
  var msgCount = document.getElementById('messageCount');
  firebase.database().ref('gndu-amritsar/student/'+localStorage.getItem('rollNo')+'/newMessageCount').on('value',function(snapshot){
    data=snapshot.val();
    if (parseInt(data)>0) {
      msgCount.style.visibility="visible";  
      msgCount.innerHTML=data;
    }
    else{
      msgCount.style.visibility="hidden";  
    }
  });
}