import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyCw3uDX-k-nQefdkkUAAdxU26rZl7xdKho",
      authDomain: "facebook-messenger-clone-80b12.firebaseapp.com",
      projectId: "facebook-messenger-clone-80b12",
      storageBucket: "facebook-messenger-clone-80b12.appspot.com",
      messagingSenderId: "446844885822",
      appId: "1:446844885822:web:bd8e5859a0e6bb81c4ea6f",
      measurementId: "G-D3WLLL16D5"
    });


const db = firebaseApp.firestore();

export default db;