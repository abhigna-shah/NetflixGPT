// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAcZ_aVFdmoTY7MRQoRG7AUOl952iN6028",
//   authDomain: "netflixgpt-42d3e.firebaseapp.com",
//   projectId: "netflixgpt-42d3e",
//   storageBucket: "netflixgpt-42d3e.firebasestorage.app",
//   messagingSenderId: "942586889041",
//   appId: "1:942586889041:web:0f67f66b4c590ec2f10970",
//   measurementId: "G-X5TSQP73XP",
// };

// if (typeof window !== "undefined") {
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// }

export default class firebaseSingleton {
  private static instance: firebaseSingleton;
  public static auth: Auth;

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  private firebaseConfig = {
    apiKey: "AIzaSyAcZ_aVFdmoTY7MRQoRG7AUOl952iN6028",
    authDomain: "netflixgpt-42d3e.firebaseapp.com",
    projectId: "netflixgpt-42d3e",
    storageBucket: "netflixgpt-42d3e.firebasestorage.app",
    messagingSenderId: "942586889041",
    appId: "1:942586889041:web:0f67f66b4c590ec2f10970",
    measurementId: "G-X5TSQP73XP",
  };

  private constructor() {
    this.initializeFirebase();
  }

  public static getInstance(): firebaseSingleton {
    if (!firebaseSingleton.instance) {
      firebaseSingleton.instance = new firebaseSingleton();
    }
    return firebaseSingleton.instance;
  }

  public initializeFirebase(): void {
    if (typeof window !== "undefined") {
      // Initialize Firebase
      const app = initializeApp(this.firebaseConfig);
      const analytics = getAnalytics(app);
      firebaseSingleton.auth = getAuth();
    }
  }
}
