import { auth  } from "./config.js"
import {signInWithEmailAndPassword  }  from'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'


// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"; 
// console.log(collection);
const form=document.querySelector('form')
const email=document.querySelector('#email')
const password=document.querySelector('#pass')
const btn=document.querySelector('#btn')

form.addEventListener('submit',async(e)=>{


e.preventDefault()
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((user) => {
    // Signed in 

    console.log("Signed in");
    console.log(user);
    window.location ="./index.html"
    // ...
  })
  .catch((error) => {
    console.log(error.code);
  });
  const userD = {
    email :email.value,
    pass :password.value,

  }
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// email.value = ''
//     password.value = ''

})

