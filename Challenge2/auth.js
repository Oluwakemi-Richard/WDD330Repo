import Game from './game2.js';

const loginBtn = document.getElementById('login_btn');
const storedName = localStorage.getItem('name');
const storedPw = localStorage.getItem('pw');
const userName = document.getElementById('userName');
const userPw = document.getElementById('userPw');
const errorClass = document.getElementById('error-code');
const helperText = document.getElementById('helperText');
const choices = Array.from(document.getElementsByClassName("choice-text"));

const newGame = new Game();
window.addEventListener('load', e => {
    debugger
    if (window.location.href.match('game.html') != null) {
    newGame.getQuestions();
    }
  });
  choices.forEach(choice =>{
    choice.addEventListener("click", e=>{
        e.preventDefault();
        newGame.CheckAnswer(e);
    })
   
})
export default class Auth {
    store(){
        helperText.style.display = 'none';
    
        var name = document.getElementById('name');
        var pw = document.getElementById('pw');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
        if(name.value.length == 0){
            errorClass.innerHTML =  "Please fill in email";
    
        }else if(pw.value.length == 0){
            errorClass.innerHTML =  "Please fill in password";
           
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            errorClass.innerHTML =  "Please fill in email and password";
    
        }else if(pw.value.length < 8){
            errorClass.innerHTML =  "Minimum of 8";
    
        }else if(!pw.value.match(numbers)){
            errorClass.innerHTML =  "please add 1 number')";
    
        }else if(!pw.value.match(upperCaseLetters)){
            errorClass.innerHTML =  "please add 1 uppercase letter";
    
        }else if(!pw.value.match(lowerCaseLetters)){
            errorClass.innerHTML =  "please add 1 lovercase letter";
    
        }else if(!specialChars.test(pw.value)){
            errorClass.innerHTML =  "please enter at least one special character";
        }
        else{
            localStorage.removeItem('name');
            localStorage.removeItem('pw');
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            alert('Your account has been created');
            errorClass.innerHTML ="";
            name.value="";
            pw.value="";
        }
    }
    logIn(){
        if(userName.value == storedName && userPw.value == storedPw){
            // alert('You are logged in.');
             return window.location.assign("./home.html");
             //window.location.href = "/yes.html";
            
         }else{
             alert('Check the username or password');
         } 
    }
}