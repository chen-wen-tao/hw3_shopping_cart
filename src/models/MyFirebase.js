// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
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
    const db = getFirestore(app);
    


    const me = {};
    me.getProducts = async() => { 
        const productsRef = collection(db, "Products");
        const querySnapshot = await getDocs(productsRef);
        return querySnapshot.docs.map((d) => d.data());
    }

    me.getProductsToBuy = async() => { 
        const productsToBuyRef = collection(db, "ProductsToBuy");
        const querySnapshot = await getDocs(productsToBuyRef);
        return querySnapshot.docs.map((d) => d.data());
    }

    me.addProduct = async(name, price) => {
        await setDoc(doc(db, "Products", (name + ("" + (await me.getProducts()).length))), {
            id: (await me.getProducts()).length,
            name: name,
            price: price,
            image: "https://via.placeholder.com/150",
          });
    }

    me.addProductToBuy = async(product) => {
        await setDoc(doc(db, "ProductsToBuy", (product.name + ("" + (await me.getProductsToBuy()).length))), {
            id: (await me.getProductsToBuy()).length,
            name: product.name,
            price: product.price,
          });
    }

    me.removeProductToBuy = async(product) => {
        console.log((product.name + "" +product.id));
        await deleteDoc(doc(db, "ProductsToBuy", (product.name + "" +product.id)));
    }
    return me;
}

export const myFirebase = new MyFirebase();