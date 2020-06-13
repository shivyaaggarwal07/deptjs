var fyic = document.getElementById("ifyic");
var tyc= document.getElementById("ityc");
var batch = document.getElementById("ibatch");
var table = document.getElementById("htmltable");
function valid()
{
	var sno = ["1","2","3","4","5","6","7"];
	if(fyic.checked==true)
	{
		table.style.display="block";
		var studentsleft={};
		var database=firebase.database();
		var firebaseref=database.ref().child('gndu-amritsar/Studentsleft/2017-2020');
		firebaseref.once('value',function(snapshot){
			studentsleft=snapshot.val();
		}).then(function(){
			if(studentsleft!=null || studentsleft !=undefined)
			{
				let row = "<tr><td><label>" + sno[0] +"</label></td><td><label>" + studentsleft.Name.First + "</label></td><td><label>" + studentsleft.Rollno.First +
				"</label></td></tr>";
				$('#htmltable').append(row);
				let row1 = "<tr><td><label>" + sno[1] + "</label></td><td><label>" + studentsleft.Name.Second + "</label></td><td><label>" + studentsleft.Rollno.Second +
				"</label></td></tr>";
				$('htmltable').append(row1);
				let row2 = "<tr><td><label>" + sno[2] + "</label></td><td><label>" + studentsleft.Name.Third + "</label></td><td><label>" + studentsleft.Rollno.Third +
				"</label></td></tr>";
				$('htmltable').append(row2);
			}
			else
			{
				alert("No record of students left found");
			}
		});
	}
}