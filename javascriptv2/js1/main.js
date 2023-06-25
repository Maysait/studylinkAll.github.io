const firebaseConfig = {
    apiKey: "AIzaSyDov3A87nr1WVa8B9E3Ym-1r3sVVbnvMVs",
    authDomain: "magazin-oryshiya.firebaseapp.com",
    projectId: "magazin-oryshiya",
    storageBucket: "magazin-oryshiya.appspot.com",
    messagingSenderId: "22230178471",
    appId: "1:22230178471:web:9e362cd2a139e7ca219982"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let massive = []
db.collection('users').get().then(function(res){
    res.forEach(function(doc) {
        massive.push(doc.data());
    });
})
console.log(massive)
function drawUsers(){
 let tbody = document.getElementById('tbody');
 let users_tbody = '';
massive.map(function(user){
    users_tbody += `            <tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
    </tr>`
})

 tbody.innerHTML = users_tbody;
}