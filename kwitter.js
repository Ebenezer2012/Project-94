var firebaseConfig = {
    apiKey: "AIzaSyBHREP566lfly5DPUq8z96MC_ENc2um8iw",
    authDomain: "letschat-9249f.firebaseapp.com",
    databaseURL: "https://letschat-9249f-default-rtdb.firebaseio.com",
    projectId: "letschat-9249f",
    storageBucket: "letschat-9249f.appspot.com",
    messagingSenderId: "659937507316",
    appId: "1:659937507316:web:470be6c8e22fb0f6066ba1"
  };
  
  firebase.initializeApp(firebaseConfig); 
  function addUser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding User"
});
}