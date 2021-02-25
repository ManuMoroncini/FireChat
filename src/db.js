import firebase from "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyBlAu9NRU1tOjcVX7EqDykOEHlse6YADPQ",
    authDomain: "firevuechat-5d450.firebaseapp.com",
    projectId: "firevuechat-5d450",
    storageBucket: "firevuechat-5d450.appspot.com",
    messagingSenderId: "997203347623",
    appId: "1:997203347623:web:8d3c46a1e046d539fbb382"
}

const db = firebase.initializeApp(config);
export default db;