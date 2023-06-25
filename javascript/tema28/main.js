document.querySelectorAll('.accordion_item').forEach
(function(acord){
    acord.addEventListener('click', function(){
        let opened = document.querySelector(`.isOpen`);
        
        toggle_item(this)
        if(opened && opened !== acord){
            toggle_item(opened)
        }
    })
})
function toggle_item(el){
    let element = el.querySelector(`.accordion_body`)
    if(!el.classList.contains(`isOpen`)){
    el.classList.add(`isOpen`);
    element.style.height = `${element.scrollHeight}px`
    }else{
        element.removeAttribute(`style`);
        el.cLassList.remove(`isOpen`);
    }
}