let h1 = document.getElementById(`h1`);
h1.setAttribute('class','blue');
function blocki(){

    let test = document.getElementById(`test`);
    let vidro = '';
    for(i=0;i<document.getElementById(`number`).value;i++){
        vidro += `
            <div class="block">
            Блок номер ${i+1}
            </div>
        `
    }
    test.innerHTML = vidro;
}

function changeBG(){
  let block = document.querySelectorAll(`.block`)
  for(i=0;i<block.length;i++){
    block[i].setAttribute("style", `background: ${document.getElementById(`select`).value};`);
  }
} 