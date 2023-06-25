function drawUsers(){
let users_table = document.getElementById('users_table');
let users_house = '';
users.map(function(user,index){
users_house += `
<tr>
<td>${index+1}</td>
<td>${user.name}</td>
<td>${user.email}</td>
<td>
    <button class="btn btn-sm btn-primary" onclick="showModal('${user.id}')">
        Детально
    </button>
</td>
<td>
    <button class="btn btn-danger">Видалити</button>
</td>
</tr>
`

})


users_table.innerHTML = users_house;
}
drawUsers()

function showModal(id){
    let myModal = document.getElementById('myModal');
    myModal.style.display = "block"
    letuser_chel = findUser(id);
    myModal.innerHTML = `
    <div class="modal-content">
		  <div class="modal-header text-center">
			<h4>Повна інформація про користувача</h4>
			<span class="close" onclick="hideModal()">&times;</span>
		  </div>
		  <div class="modal-body py-3">
			<p><b>Ім'я:</b>${user_chel.name}</p>
			<p><b>Місто:</b> Львів</p>
			<p><b>Email:</b> abc@example.com</p>
			<p><b>Телефон:</b> 0984215215</p>
			<p><b>Сайт:</b> hildegard.org</p>
			<p><b>Компанія:</b> Romaguera-Crona</p>
		  </div>
		  <div class="modal-footer">
			<button class="btn btn-sm btn-secondary"onclick="hideModal()">Скасувати</button>
			<a class="btn btn-sm btn-success" href="https://www.google.com.ua/maps/@7.5981518,-74.8025844,13.12z">Показати на карті</a>
			<a class="btn btn-sm btn-warning" href="mailto: abc@example.com">Написати email</a>
		  </div>
		</div>
    `
}

function hideModal(){
    let myModal = document.getElementById('myModal');
    myModal.style.display = "none"
}
function findUser(id){
    let filtered = users.filter(function(user){
        return user.id === id
    })
    return filtered[0];
}

