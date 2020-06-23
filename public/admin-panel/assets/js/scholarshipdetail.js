function scholarship()
{
	var data={};
	var name=document.getElementById("iname");
	var rollno= document.getElementById("irollno");
	var category=document.getElementById("icategory");
	var minority=document.getElementById("iminority");
	var incomecertificate=document.getElementById("iminority");
	var residencecertificate=document.getElementById("iresidence");
	var feeconcession=document.getElementById("ifeeconcession");
	// firebase.database().ref().child('gndu-amritsar/scholarship').once('value',function(snapshot){
	// 	snapshot.forEach(function(childSnapshot){
	// 		var childkey = childSnapshot.key;
	// 		var childData=childSnapshot.val();

	// 		// data.get(Object.values(childData))
	// 	});
	// 	for(var i=0;i<data.length;i++)
	// 	{
	// 		console.log(data[i]);
			
	// 	}
		name.value=data.name;
		rollno.value=data.rollno;
		category.value=data.category;
		minority.value=data.minority;
		incomecertificate.value=data.incomecertificate;
		residencecertificate.value=data.residencecertificate;
		feeconcession.value=data.feeconcession;
		key.value
	});
}