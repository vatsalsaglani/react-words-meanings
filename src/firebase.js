import firebase from 'firebase';

// initialize database

const config = {
    apiKey: "AIzaSyA0VXJ_oafGIJ4aMt_m9DCe6cT-18jHsvE",
    authDomain: "words-meanings.firebaseapp.com",
    databaseURL: "https://words-meanings.firebaseio.com",
    projectId: "words-meanings",
    storageBucket: "words-meanings.appspot.com",
    messagingSenderId: "469124762297"
  };

  firebase.initializeApp(config);
  export default firebase;




{/* <script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0VXJ_oafGIJ4aMt_m9DCe6cT-18jHsvE",
    authDomain: "words-meanings.firebaseapp.com",
    databaseURL: "https://words-meanings.firebaseio.com",
    projectId: "words-meanings",
    storageBucket: "words-meanings.appspot.com",
    messagingSenderId: "469124762297"
  };
  firebase.initializeApp(config);
</script> */}