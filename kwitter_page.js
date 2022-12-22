//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDA-XfoyKsr5z6i_nUydQcQDnLk6SqJM_U",
      authDomain: "kwitter-f3047.firebaseapp.com",
      databaseURL: "https://kwitter-f3047-default-rtdb.firebaseio.com",
      projectId: "kwitter-f3047",
      storageBucket: "kwitter-f3047.appspot.com",
      messagingSenderId: "70082412262",
      appId: "1:70082412262:web:349576955d8cee053b8527"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}