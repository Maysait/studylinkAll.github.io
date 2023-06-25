let user = {
    name:`Петро` ,
    lastname:'Петрикович' ,
    age: '8',
    email: 'petya8@gmail.com',
    misto: `Хмельницький`
}
function showuser(){
    document.getElementById(`table`).innerHTML = `<table>
    <tr>
        <th>імя</th>
        <th>Прізвище</th>
        <th>Вік</th>
        <th>Емейл</th>
        <th>Місто</th>
    </tr>
    <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.misto}</td>
    </tr>
</table>`;
}


function ChangeName(x){
    user.name = x;
    showuser()
}
function Changelastname(a){
    user.lastname = a;
    showuser()
}
function ChangeAge(y){
    user.age = y;
    showuser()
}
function ChangeEmail(k){
    user.misto = k;
    showuser()
}
function ChangeCity(l){
    user.misto = l;
    showuser()
}
function ChangeUserData(x, a, k, l, y){
    user.name = x;
    user.lastname = a;
    user.age = y;
    user.misto = k;
    user.misto = l;
    showuser()
}
function deluser(){
    document.getElementById(`table`).innerHTML = ``;
}