 const firebaseConfig = {
    apiKey: "AIzaSyCuVfsuIizNTO1Vsvrm6_7S2u2uwf-vUUU",
    authDomain: "shoe-heaven.firebaseapp.com",
    databaseURL: "https://shoe-heaven-default-rtdb.firebaseio.com",
    projectId: "shoe-heaven",
    storageBucket: "shoe-heaven.appspot.com",
    messagingSenderId: "1029905764705",
    appId: "1:1029905764705:web:315d9c1307cfb81999b520",
    measurementId: "G-N9CY2JWRP4"
  };

  firebase.initializeApp(firebaseConfig);
  var shoeHeavenDB = firebase.database().ref("shoeHeaven");

  document.getElementById("subscribeForm").addEventListener("submit", submitForm);

  function submitForm(e) {
     e.preventDefault();

     var email = getElementVal('Email');
     saveMessages(email);

     document.getElementById("subscribeForm").reset();
  }

  const saveMessages = (email) =>{
       var newContactForm = shoeHeavenDB.push();

       newContactForm.set({
         email : email
       })
  };

  const getElementVal = (id) =>{
   return document.getElementById(id).value;
  }