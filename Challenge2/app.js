import {Auth} from 'auth.js';


const loginBtn = document.getElementById('login_btn');
const regBtn = document.getElementById('rgstr_btn');

const newAuth = new Auth();
loginBtn.addEventListener("click", e=>{
    debugger
   newAuth.logIn();
})
regBtn.addEventListener("click", e=>{
    debugger
    newAuth.store();
   
})
