
import { db } from "./config";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 



const tittle=document.querySelector('#tittle')
const description=document.querySelector('#description')
const form=document.querySelector('form')

form.addEventListener('submit',async (e)=>{
e.preventdefault()
    try {
        const docRef = await addDoc(collection(db, "users"), {
          tittle:tittle.value,
          description:description.value,

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    


})







