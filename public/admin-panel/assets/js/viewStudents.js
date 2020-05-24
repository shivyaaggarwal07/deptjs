function loadData(){
    var students = {};
    firebase.database().ref('gndu-amritsar/classStudents/MCA-(TYC)/').once('value',function(snapshot){
		students=snapshot.val();
    }).then(function(){
		students.forEach(rollNo => {
			firebase.database().ref('gndu-amritsar/student/' + rollNo).once('value', function (snapshot) {
				studentDetail = snapshot.val();
			}).then(function () {
				let row = "<tr><td><label>" + studentDetail.name + "</label></td><td><label>" + studentDetail.personalDetail.fatherName 
					+ "</label></td><td><label>" + studentDetail.personalDetail.motherName + "</label></td><td><label>" + studentDetail.rollNo 
					+ "</label></td><td><label>" + studentDetail.registrationNumber + 
					"</label></td><td> <button onclick=\"deleteStudent('" + studentDetail.rollNo + "')\"> Delete</button></td></tr>";
				document.getElementById('studentDetailContainer').innerHTML += row;
			});
		}); 
	});
}

loadData();

function deleteStudent(rollNo) {
	console.log(rollNo);
}