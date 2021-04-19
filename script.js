var firebaseConfig = {
    apiKey: "AIzaSyDkwqGA9BKfEdV9Fg3MeyU-_ESqGDllPm4",
    authDomain: "demo1-57c2b.firebaseapp.com",
    databaseURL: "https://demo1-57c2b-default-rtdb.firebaseio.com",
    projectId: "demo1-57c2b",
    storageBucket: "demo1-57c2b.appspot.com",
    messagingSenderId: "1068437199855",
    appId: "1:1068437199855:web:8469255a15da39eea2741a",
    measurementId: "G-KTE7ENRSW4"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dbRef=firebase.database().ref().child("students")
  function add(){
      console.log("inserting")
     var name=document.getElementById("name").value
      var rno=document.getElementById("rno").value
       dbRef.child(rno).set({
        name:name,
        rno:rno
       })
    }
    function remove(){
        console.log("deleting")
        var roll=window.prompt("enter roll no")
        dbRef.child(roll).remove()
    }
    function changeData(){
        var sname=document.getElementById("name").value
        var rol=document.getElementById("rno").value
        dbRef.child(rol).update({name:sname,rno:rol})
        console.log("updated")
    }
    function readData(){
        dbRef.on("value",(snap)=>{
            snap.forEach((data)=>{
                console.log(data.val().name)
                console.log(data.val().rno)
            })
        })
    }
  