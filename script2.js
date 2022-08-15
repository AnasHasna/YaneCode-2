//Q1
let namee=document.getElementById('name');
let passwordd=document.getElementById('password');
let confirmPassword=document.getElementById('confirmPass');

let usernameLabel=document.createTextNode('Username :');
let input=document.getElementById('username');
namee.insertBefore(usernameLabel,input);

let passwordLabel=document.createTextNode('Password :');
let inPass=document.getElementById('inPassword');
passwordd.insertBefore(passwordLabel,inPass);

let conLabel=document.createTextNode('Confirm Password');
let incon=document.getElementById('inConfirm');
confirmPassword.insertBefore(conLabel,incon);

//Q2
const check = (e) => {
    const Elmnt=Array.from(event.target.parentNode.querySelectorAll('span'));
    if(e.target.value==='' && !Elmnt.length){
        e.target.insertAdjacentHTML('afterEnd', '<span style=" color:red;">Required</span>');

    }
    if (Elmnt && e.target.value!==''){
        Elmnt.forEach(elem =>elem.remove());
    }
}
input.addEventListener('blur',check);
inPass.addEventListener('blur',check);
incon.addEventListener('blur',check);

//Q3

let pass=document.getElementById('inPassword').value;
let verify=document.getElementById('inConfirm');
verify.addEventListener('blur',function(e){
    if(e.target.value !== verify){
        e.target.insertAdjacentHTML('afterEnd','<span style=" color:red;">Password dont match</span>')
    }
})