const data = {
    test : 'Hello World',
    socials:[
        {
            name: 'Google',
            image: 'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'
        },
        {
            name: 'Youtube',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png'
        },
        {
            name: 'Instagram',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
        },
        {
            name: 'Viber',
            image: 'https://play-lh.googleusercontent.com/lB6Ro6pjPw17G8HnTvv_qerC2yMGlvjVpryNXoeKfxyglyB8Ljk1HUxmegKU85acTmQ'
        },
        {
            name: 'Facebook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'
        }
    ],
    phones: []
}

const SocialsComponent = {
    props: ['social'],
    template: `    <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
    <h2 class="text-center">{{social.name}}</h2>
    <img v-bind:src="social.image" style='width:100px; height: 100px; margin:0 auto;'>
    </div>`
}

const PhoneComponent = {
    props: ['phone'],
    template: `        <div class="card" style="width: 18rem;">
    <img 
        v-bind:src="phone.img" 
        class="card-img-top" 
        alt="..."
        style="max-height: 300px; width: fit-content;margin: 0 auto;">
    <div class="card-body">
        <h5 class="card-title">{{phone.name}}</h5>
        <p class="card-text">{{phone.opus}}</p>
        <p class="d-flex justify-content-between">
          <span>Price:</span>
          <span>{{phone.price}}</span>
        </p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
</div>
`
}


const app = {
    data(){
        return data
    },
    methods: {

    },
    components: {
        SocialsComponent,PhoneComponent
    },
    mounted(){ 
        db.collection('tovari').get().then(res => {
            res.forEach(docum => {
                let phone = docum.data();
                phone.id = docum.id;
                this.phones.push(phone)
            })
        })
    }
}

Vue.createApp(app).mount('#app');