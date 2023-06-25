let klava1 = {
    name: "Клавіатура дротова Logitech G2 Prodigy USB",
    otziv: 204,
    price: 1399, 
    akci: true,
    img: "a1.jpg"
}
let klava2 = {
    name: "Клавіатура Cougar Vantar",
    otziv: 6,
    price: 1286,
    akci: false,
    img: "a2.jpg"



}
let ball1 = 0;
let ball2 = 0;
if(klava1.price < klava2.price){
ball1 = klava2.price - klava1.price;
}else{
ball2 = klava1.price - klava2.price
}
ball1= ball1 + klava1.otziv*0.5;
ball2= ball2 + klava2.otziv*0.5;
let card = document.getElementById(`products`);
let info = `		<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava1.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava1.name}
    </div>
    
    <div class="reviews">
    ${klava1.otziv} відгуки
    </div>
    
    <div class="price">
    ${klava1.price}&#8372;<br>${ball1}
    </div>
</div>
</div>`;
info += `		<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava2.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava2.name}
    </div>
    
    <div class="reviews">
    ${klava2.otziv} відгуки
    </div>
    
    <div class="price">
    ${klava2.price}&#8372;<br>${ball2}
    </div>
</div>
</div>`;
card.innerHTML = info;

