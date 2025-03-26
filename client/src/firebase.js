// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

// Function to save order data to Firestore
export const saveOrder = async (orderData) => {
  try {
    // Reference to the 'orders' collection (will be created if it doesn't exist)
    const ordersRef = collection(db, 'orders');
    
    // Add timestamp and status to order data
    const orderWithMetadata = {
      ...orderData,
      createdAt: serverTimestamp(),
      status: 'pending'
    };
    
    // Add the document to Firestore and get a reference to it
    const docRef = await addDoc(ordersRef, orderWithMetadata);
    
    console.log("Order saved with ID:", docRef.id);
    return docRef.id; // Return the order ID for confirmation
  } catch (error) {
    console.error("Error saving order:", error);
    throw error; // Throw the error so we can handle it where the function is called
  }
};

// Export the database for use in other files
export { db }