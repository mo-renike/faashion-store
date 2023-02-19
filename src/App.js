import React, { useEffect, useState } from "react";
import "./App.scss";
import HomePage from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./Components/header/Header";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import { auth, createUserProfileDocument } from "./firebase/firebaseConfig";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
