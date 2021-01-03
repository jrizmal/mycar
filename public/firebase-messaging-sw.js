importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    messagingSenderId: "766675325521"
};
firebase.initializeApp(config);

let messaging = firebase.messaging();

