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
	firebase.database().ref().child('gndu-amritsar/scholarship/2017CSC1048/documents').once('value',function(snapshot){
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