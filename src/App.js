import "./App.scss";
import HomePage from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./Components/header/Header";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </div>
  );
}

export default App;
