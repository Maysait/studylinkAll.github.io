let month = document.getElementById(`month`);
let zag = document.getElementById(`zag`);
let day = ` `;
let mica = prompt(`Введіть місяць`);
zag.innerHTML = `Календар місяця ${mica}`
let x = 0;
if(mica == 'Січень' || mica == 'Березень' || mica == 'Травень' || mica == 'Липень' || mica == 'Серпень' || mica == 'Жовтень' || mica == 'Грудень'){
x= 32;
}else if(mica =='Лютий'){
x = 29;
}else if(mica == 'Червень' || mica == 'Квітень' || mica == 'Вересень' || mica == 'Листопад'){  
x = 31;
}else{

}


for(i=1; i<x; i++){
if(i % 7 == 0 || (i+1) % 7 == 0){
day += `<div class="day vihidni">${i} <br> ${mica}</div>`;
}else{
    day += `<div class="day">${i} ${mica}</div>`;
}

}

month.innerHTML=day;

