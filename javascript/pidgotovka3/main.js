function register(){
    let user = {
    name: '',
    email: '',
    password: '',
    loged: false

}

user.name = document.getElementById("name").value;
user.email = document.getElementById("email").value;
user.password = document.getElementById("password").value;
    if(user.name.length >= 3 && user.email.length > 6 && user.password.length > 6){
document.getElementById("message").innerHTML = `<div class="alert alert-success col-6">Успіх</div>`
localStorage.setItem("user", JSON.stringify(user))
    }else{
        document.getElementById("message").innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`
    }
    
}
