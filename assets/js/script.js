var questionInput,nameInput,submitButton;
var database, firebase;
var lastContent = "";

document.addEventListener("DOMContentLoaded", function(){
    questionInput = document.getElementById("ask");
    nameInput = document.getElementById("name");
    submitButton = document.getElementById("submitResponse");
    submitButton.addEventListener("click", submitScore);
    
    nameInput.onkeydown = function(e){
        if(e.keyCode == 13){
          submitScore();
        }
     };
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCb4Gd6Rn8jtqWgaewuRouEqeNl31unGos",
    authDomain: "ask-me-stuff-f5832.firebaseapp.com",
    databaseURL: "https://ask-me-stuff-f5832.firebaseio.com",
    projectId: "ask-me-stuff-f5832",
    storageBucket: "ask-me-stuff-f5832.appspot.com",
    messagingSenderId: "120555375818",
    appId: "1:120555375818:web:b0a080cb6f5da692e77833"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
database = firebase.database();
console.log(firebase);

function submitScore(){
    var questionObject = {question: questionInput.value, name: nameInput.value};
    if(questionObject.question === lastContent)return;
    lastContent = questionObject.question;
    database.ref().push(questionObject);
    alert("response sent!")
    questionInput.value="";
    nameInput.value="";
}
