function addZag(){
    let number = document.getElementById(`number`).value;
    let div = document.getElementById(`div`);
    let korzinka = '';
    for(i=0;i<number;i++){
        korzinka += `
            <h1 align="center" class="yabko">Яблуко ${i+1}</h1>        
        `
    }
  div.innerHTML = korzinka
}
function changeBG(){
 let yabluki = document.getElementsByClassName(`yabko`);
    let bgc = document.getElementById(`bgc`).value;
    Array.from(yabluki).map(function(yabluko){
        yabluko.style.background = bgc;
    })
    
}   