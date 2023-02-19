import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsUGHdokgQXdavFbk4nHIvgtFXzOsn6bM",
  authDomain: "fashion-auth-62c26.firebaseapp.com",
  projectId: "fashion-auth-62c26",
  storageBucket: "fashion-auth-62c26.appspot.com",
  messagingSenderId: 393920433346,
  appId: "1:393920433346:web:39aea9489d5befb7177f5b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// console.log("db", db);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
