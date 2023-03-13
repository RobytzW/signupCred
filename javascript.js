const password = document.getElementById('passwordField');
const eye = document.getElementsByClassName('password');

password.addEventListener('click', ()=> {
    for(var i = 0; i < eye.length; ++i)
        eye[i].classList.toggle('inactive');
    
    if(password.type === 'password') password.type = 'text';
        else password.type = 'password';
})