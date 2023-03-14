const password = document.getElementById('passwordField');
const eye = document.getElementsByClassName('password');
const inputs = document.getElementsByTagName('input');
const btn = document.getElementById('link');

password.addEventListener('click', ()=> {
    for(var i = 0; i < eye.length; ++i)
        eye[i].classList.toggle('inactive');
    
    if(password.type === 'password') password.type = 'text';
        else password.type = 'password';
})

btn.addEventListener('click', () => {
    let cnt = 0;
    for(let i = 0; i < inputs.length; ++i)
        if(inputs[i].value.length == 0) cnt = 1;
        
    if(cnt == 0) location.href = "home.html";
        else alert("Empty input!");
})