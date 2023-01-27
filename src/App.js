import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" componemt={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
      <HomePage />
    </div>
  );
}

export default App;
