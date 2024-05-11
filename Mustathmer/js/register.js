const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Function to handle signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform your signup form validation here
    // If signup is successful, redirect to Virtual Tour.html page
    window.location.href = "Virtual Tour.html";
});

// Function to handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform your login form validation here
    // If login is successful, redirect to Virtual Tour.html page
    window.location.href = "Virtual Tour.html";
});


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
