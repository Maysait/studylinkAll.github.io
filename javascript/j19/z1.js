
function napusatu(){
 let test  = document.getElementById(`test`).value
 document.getElementById(`zagolovok`).innerHTML= test;

}

function local(){
    let test = document.getElementById(`test`).value
    localStorage.setItem(`slovo`,test);
}
function getlocal(){
    document.getElementById(`zagolovok`).innerHTML =
    localStorage.getItem(`slovo`)
}