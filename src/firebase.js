import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD8ybjkwVk1ol-fRStC_VeAHVycu7kp8AI",
    authDomain: "kristijantop-aa7f9.firebaseapp.com",
    projectId: "kristijantop-aa7f9",
    storageBucket: "kristijantop-aa7f9.appspot.com",
    messagingSenderId: "18870817042",
    appId: "1:18870817042:web:cfc9ce95f412b40e4723cb"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage();


export {
    app,
    storage,
    ref,
    getDownloadURL
}