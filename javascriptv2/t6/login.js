let users = []


function login(){
    let user_email = document.getElementById('user_email').value;
    let user_password = document.getElementById('user_password').value;
    db.collection('saitUsers').get().then(res=>{
    res.forEach(doc =>{
        let user = doc.data();
        user.id = doc.id
        
        if(user.email == user_email && user.id == user_password){
            localStorage.setItem('loged', user)
            window.location.href = 'index.html'
        }


    })
})

}

function checkUser(){
 let check = localStorage.getItem('loged')
if(check === null ){

}else{
    window.location.href = 'index.html'
}

}
checkUser()