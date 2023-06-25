let imya = prompt(`Введіть своє ім'я`);
let email = prompt(`Введіть свій пошту`);
let username = document.getElementById(`username`);
username.innerHTML = `<a>${imya}</a>`;

let text = document.getElementById(`text`);
text.innerHTML = `<br><br><br><h2 align="center">Вітаю ${imya}!На вашу поштову скриньку <br> ${email} відправлено лист із підтверженням</h2>`;
