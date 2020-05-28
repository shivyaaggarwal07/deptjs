function load()
{
	var data={};
		var courses = document.getElementById("courses");
		var fee = document.getElementById("fee");
		var verify = document.getElementById("verify");
		var syllabus = document.getElementById("syllabus");
	firebase.database().ref().child('gndu-amritsar/links').once('value',function(snapshot){
		data=snapshot.val();
		courses.value = data.courses;
		fee.value = data.fee;
		verify.value = data.verify;
		syllabus.value = data.syllabus;

	})
}
function update()
{
	 var linkdata={
	 		"courses":courses.value,
	 		"fee":fee.value,
	 		"verify":verify.value,
	 		"syllabus":syllabus.value	
	 }
	 firebase.database().ref().child('gndu-amritsar/links').set(linkdata).then(function(){
	 	alert("You have updated the links");
	 	document.getElementById("iupdate").disabled=true;
	 })
}