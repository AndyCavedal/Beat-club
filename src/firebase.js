import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARbiRA_FBuUoO7p4MyhnfdUu-zgstWeTc",
  authDomain: "beat-club-7476b.firebaseapp.com",
  projectId: "beat-club-7476b",
  storageBucket: "beat-club-7476b.appspot.com",
  messagingSenderId: "552296949770",
  appId: "1:552296949770:web:d7cf3724f80de73a5d97f3",
  measurementId: "G-HKSZNXJQKH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };