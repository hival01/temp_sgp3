import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import XSS from "./Pages/Home_page.jsx";
import LandingPage from "./Pages/Landing_page.jsx";
import Pass_check from "./Pages/Pass_check.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/XSS" element={<XSS />} />
        <Route path="/Pass_check" element={<Pass_check />} />
      </Routes>
    </>
  );
}

export default App;
