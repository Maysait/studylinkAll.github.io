db.collection('articles').get().then(res =>{
    res.forEach(doc =>{
        let object = doc.data();
        object.id = doc.id;
        drawArticle(object)
    })
})



function drawArticle(stat){
    let div = document.createElement('div')
    div.classList.add('article')

    let h3 = document.createElement('h3')
    h3.innerText = stat.title
    h3.addEventListener('click', function(){
        window.location.href = `article.html?id=${stat.id}`
    })

    let h4 = document.createElement('h4')
    h4.innerText = stat.id

    div.appendChild(h3)
    div.appendChild(h4)

    document.getElementById('articles').appendChild(div)
}