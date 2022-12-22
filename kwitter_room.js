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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding the Room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html"


}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
