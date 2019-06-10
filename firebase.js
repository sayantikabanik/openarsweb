(function() {
  const config = {
    apiKey: "pJGAqHFNVyJEzI3WOc52nkQTaxt0HKLJmhb8dN8K",
  authDomain: "openars-a97c6.firebaseapp.com",
  databaseURL: "https://openars-a97c6.firebaseio.com"
  };

  firebase.initializeApp(config);
 /* const bigTextEvaluationStudents = document.getElementById('sensor value');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('sensor value');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());*/

  var table = document.querySelector('#table1');
 // var table2=document.querySelector('#table2');
  const dbEvaluationStudentsRef = firebase.database().ref().child('Address of accident');
  const dbnearest=firebase.database().ref().child('Nearest Hospital Coordinates');    
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }
      
    /*  dbnearest.on('value', snap2 => {
    while(table2.hasChildNodes()) {
		    table2.removeChild(table2.firstChild);
	  }*/

   var students = snap.val();
   // var val2=snap2.val();
      
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = students[i][j];
			}
		}
          
          //second one
           /*for(var i in val2) {
      var row2 = table2.insertRow(-1);
      for(var j in val2[i]) {
				cell = row2.insertCell(-1);
				cell.innerHTML = val2[i][j];
			}
		}*/
  });
}()
 
 

);