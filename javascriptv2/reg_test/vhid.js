function googleAuth(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var user = result.user;
    console.log(user)
    createUserDb(user.uid,user.displayName,"Пєтькін",user.email,"0885833535")
  }).catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;
    console.log(errorCode)
    console.log(errorCode)
    console.log(email)


  });
} 

function logOut(){
    firebase.auth().signOut().then(() => {
        console.log('Успішно розлоговано')
      }).catch((error) => {

      });
}


function createUserDb(id,name,lastname,email,phone){
    let newUser = {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        isAdmin: false
    }
    db.collection('first_reg').doc(id).set(newUser).then(res => {
        console.log('Успішно зарегестровавоно')
    })

}