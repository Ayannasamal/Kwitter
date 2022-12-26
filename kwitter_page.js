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
username = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + username + "<img class='user_tick' src='tick.png'> </h4> ";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +" </span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }


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

function updateLike(message_id){
      console.log("like button has been clicked with the id"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLike = Number(likes) + 1;
      console.log(updatedLike);

      firebase.database().ref(room_name).child(message_id).update({ like : updatedLike});
}

getData();