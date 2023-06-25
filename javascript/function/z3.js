let user = {
    name:"Петро",
    lastname:"Іванов",
    age:14,
    email:"petro007@gmail.com",
    city:"Хмельницький"
}

let body = document.getElementById(`body`);

function showUser(){
    body.innerHTML = `        <tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
</tr>`;
}
function changeName(x){
    user.name = x;
    showUser()
}
function changeLastName(y){
    user.LastName = y;
    showUser()
}
function changeAge(i){
    user.age = i;
    showUser()
}
function changeEmail(a){
    user.email = a;
    showUser()
}
function changeCity(e){
    user.City = e;
    showUser()
}