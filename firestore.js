// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDonax4cLSlnK_f8vesFGoz7oCmc6qxU",
  authDomain: "authentification-45810.firebaseapp.com",
  databaseURL:
    "https://authentification-45810-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "authentification-45810",
  storageBucket: "authentification-45810.appspot.com",
  messagingSenderId: "352190920736",
  appId: "1:352190920736:web:5a525a7c783b37e8cc6445",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Récupération des éléments du DOM
const name = document.getElementById("name");
const age = document.getElementById("age");

const button1 = document.getElementById("submitData");
const button2 = document.getElementById("updateData");
const button3 = document.getElementById("deleteData");

// Add function
function AddData() {
  const name1 = name.value;
  const age2 = age.value;
  console.log(name1);

  addDoc(collection(db, "users"), {
    name: name1,
    age: age2,
  });
  alert("User added");
}

function UpdateData() {
  const name1 = name.value;
  const age2 = age.value;

  updateDoc(doc(db, "users", "47MYoYBWYayPGoBbz2TB"), {
    name: name1,
    age: age2,
  });
  console.log("User updated");
}

// delete Data
function DeleteData() {
  deleteDoc(doc(db, "users", "DibmjLqzyKIKS4ZYjNjS"));
  alert("User removed");
}

// Event Listener
button1.addEventListener("click", AddData);
button2.addEventListener("click", UpdateData);
button3.addEventListener("click", DeleteData);
