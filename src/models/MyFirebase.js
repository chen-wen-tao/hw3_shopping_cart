// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function MyFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyBYV-oOjCQhxAFtBUw-9goJPAY3ZLPofA0",
        authDomain: "shoppingcart-9a627.firebaseapp.com",
        projectId: "shoppingcart-9a627",
        storageBucket: "shoppingcart-9a627.appspot.com",
        messagingSenderId: "409758899481",
        appId: "1:409758899481:web:4f8b987512dad5ad033988",
        measurementId: "G-CKBJX57YXH"
      };
      
       // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
}

const myFirebase = new MyFirebase();
export default myFirebase;