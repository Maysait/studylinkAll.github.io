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
  var provider = new firebase.auth.GoogleAuthProvider();