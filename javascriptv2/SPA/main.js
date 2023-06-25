document.addEventListener('DOMContentLoaded', async function(){
    let error = await axios.get("templates/404.html");
    let home = await axios.get("templates/home.html");
    let phone = await axios.get("templates/phone.html");
    let login = await axios.get("templates/login.html");
    
    const info = {
        test: 'Перевірка',
        currentPath: window.location.hash,
        phones:[]
    }

const Login = {
    template: login.data,
    methods: {
        googleSign(){
            firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {





    var user = result.user;
    console.log(user)

  }).catch((error) => {
   
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode)
    console.log(errorMessage)
    console.log(email)
  });
        }
    }
}

    const Phone = {
        template: phone.data,
        methods: {
            getTovars(){
                this.$root.phones = []
                db.collection('tovari').get().then(res => {
                    res.forEach(docum => {
                    let phone = docum.data();
                    phone.id = docum.id;
                    this.$root.phones.push(phone)
                })
                })       
            }
        },
        mounted(){
            this.getTovars()
        }
      }
    

    const Home = {
        template: home.data
    };

    const Error = {
        template: error.data
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/error':Error,
        '/phones':Phone,
        '/login':Login
    }
    const aplic = {
        data(){
            return info;
        },
        methods:{

        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || Error
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(aplic).mount('#first_spa')
})