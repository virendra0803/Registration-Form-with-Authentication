const firebaseConfig = {
    apiKey: "AIzaSyDler-2cIKeWQRYVpBOLEi6WsJWJWlwQRc",
    authDomain: "login-form-d7e23.firebaseapp.com",
    databaseURL: "https://login-form-d7e23-default-rtdb.firebaseio.com",
    projectId: "login-form-d7e23",
    storageBucket: "login-form-d7e23.appspot.com",
    messagingSenderId: "152966772986",
    appId: "1:152966772986:web:60be4016732b12fef6f143",
    measurementId: "G-JPZX2ZSJ1F"
  };
  
//   initialize firebox


  firebase.initializeApp(firebaseConfig);

//   referancr your database
var loginformdb = firebase.database().ref('loginform');
document.getElementById('loginform').addEventListener('login', loginform);
function loginform(e) {
    e.preventDefault();
    var uname = getElementval('unameid');
    var psw = getElementval('pswid');
    console.log(uname,psw);

}
const getElementval = (id) => {
    return document.getElementById(id).ariaValueMax;
}

d
