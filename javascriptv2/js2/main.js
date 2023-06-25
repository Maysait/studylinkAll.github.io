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

  let spiner = document.getElementById('spiner');
  let list = document.getElementById('list');
  let statty = [];

  db.collection('articles').get().then(function(res){
    
res.forEach(function(title){
    statty.push(title.data())
    spiner.innerHTML = '';
    drawArticle(title.data())
})
  })
  console.log(statty)
  function drawArticle(data){
    let article = document.createElement('article');

    let title = document.createElement('h2');

    let text = document.createElement('div');
    
    let avtor = document.createElement('a');

    title.innerHTML = data.title;
    text.innerHTML = data.article;

    avtor.innerHTML = 'Оригінальна стаття'
    avtor.href = data.author;

    article.appendChild(title)
    article.appendChild(text)
    article.appendChild(avtor)

    list.appendChild(article)
  }