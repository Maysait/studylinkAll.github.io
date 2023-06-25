let article_id = new URL(window.location.href).searchParams.get("id");

function getArticle(article_id) {
    db.collection('articles').doc(article_id).get().then(res => {
        let article = {
            id: res.id,
            ...res.data()
        }
        console.log(article)
        article1(article)

    })
}
getArticle(article_id)



function article1(statya){
  document.getElementById('main').innerHTML = `
  <h2 class="title">${statya.title}</h2>
  <br></br>
  <p class="text">${statya.article}
  </p>
  <div class="avtor">
  <a href="${statya.author}">Посилання на джерело</a>
  </div>
  `
}
