import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoC8Akb6IX-mwGcBNFb0z6IqkVfzy0bXc",
  authDomain: "streetstyle-coder-1f458.firebaseapp.com",
  projectId: "streetstyle-coder-1f458",
  storageBucket: "streetstyle-coder-1f458.appspot.com",
  messagingSenderId: "1027552578516",
  appId: "1:1027552578516:web:914902187c2caae883e441"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
