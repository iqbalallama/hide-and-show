const type = new Typed ('.animation',{
    strings : ['Your Account','Your Profile'],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true
})
const text = document.getElementById('text');
const pass = document.getElementById('pass');
document.getElementById('check').addEventListener('click',function(){
    if(pass.type == "password"){
        pass.type = 'text';
    }else{
        pass.type = "password"
    }
})
document.getElementById('submit').addEventListener('click',function(){
    if(text.value == '' && pass.value == ''){
        alert('Please fill up your email or password')
    }else{
        alert('Successfully inter your Account')
    }
})