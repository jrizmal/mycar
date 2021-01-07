import firebase from "firebase"
/* firebase */
var firebaseConfig = {
    apiKey: "AIzaSyAu_Zbyeo9_Zl1pUHpZbpgPDOULDBnl0_o",
    authDomain: "mycar-6d0a2.firebaseapp.com",
    databaseURL: "https://mycar-6d0a2.firebaseio.com",
    projectId: "mycar-6d0a2",
    storageBucket: "mycar-6d0a2.appspot.com",
    messagingSenderId: "766675325521",
    appId: "1:766675325521:web:637f661019c29f56c71e70"
};
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
const auth = firebase.auth()


export {
    messaging,
    auth,
    firebase,
}