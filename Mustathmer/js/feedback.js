const firebaseConfig = {
    apiKey: "AIzaSyChcZtEZjqkK1ZFYuw-ULxAPyWoFgxTSxg",
    authDomain: "mustathmer-system.firebaseapp.com",
    databaseURL: "https://mustathmer-system-default-rtdb.firebaseio.com",
    projectId: "mustathmer-system",
    storageBucket: "mustathmer-system.appspot.com",
    messagingSenderId: "502188726306",
    appId: "1:502188726306:web:b5837c7edf585f926d527b"
  };
   
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  

    var msgContent = getElementVal("msgContent");
  
    saveMessages(msgContent);
  
    // Enable alert
    document.querySelector(".alert").style.display = "block";
  
    // Remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    // Reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  function selectEmoji(emojiId) {
    document.querySelectorAll('.emoji').forEach(em => {
        em.classList.remove('selected');
    });
    document.getElementById(emojiId).classList.add('selected');
}
