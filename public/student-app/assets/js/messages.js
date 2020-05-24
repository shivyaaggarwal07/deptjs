function loadMsg(){
	var unreadCount = 0;
	firebase.database().ref('gndu-amritsar/student/'+localStorage.getItem('rollNo')+'/newMessageCount').once('value',function(snapshot){
	    unreadCount=parseInt(snapshot.val());
    }).then(function (){
    	var msgData = [];
		firebase.database().ref('gndu-amritsar/student/'+localStorage.getItem('rollNo')+'/messages').once('value',function(snapshot){
	    	data=snapshot.val();
	    	$.each(data, function(i,n) {
	    	msgData.push(n);});
	    	var msgCount=msgData.length;
		    var messageDiv = document.getElementById("messages");
		    var i=msgCount-1;
		    for (; i>=0 && unreadCount>0 ; i--){
		    	var messageContainer = document.createElement("div");   
		    	messageContainer.className="container";
		    	messageContainer.style.background="grey";
		    	var messageNode = document.createElement("P");   
		    	messageNode.innerHTML=msgData[i].message;
		    	messageContainer.style.color="white";
		    	messageContainer.appendChild(messageNode);
		    	var timeNode = document.createElement("span");
		    	timeNode.className="time-right";
		    	timeNode.innerHTML=msgData[i].time;
		    	messageContainer.appendChild(timeNode);
		    	messageDiv.appendChild(messageContainer);
		    	unreadCount--;
		    }
	    	while(i>=0){
		    	var messageContainer = document.createElement("div");   
		    	messageContainer.className="container";
		    	messageContainer.style.background="white";
		    	var messageNode = document.createElement("P");   
		    	messageNode.innerHTML=msgData[i].message;
		    	messageContainer.appendChild(messageNode);
		    	var timeNode = document.createElement("span");
		    	timeNode.className="time-right";
		    	timeNode.innerHTML=msgData[i].time;
		    	messageContainer.appendChild(timeNode);
		    	messageDiv.appendChild(messageContainer);
		    	i--;
		    }
	    }).then(function(){
	    	firebase.database().ref('gndu-amritsar/student/'+localStorage.getItem('rollNo')+'/newMessageCount').set("0");
	    });
    });
    	
}
