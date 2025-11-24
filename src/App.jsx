import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeveloperPortfolio from "./developer_portfolio"
import IntroPage from "./Introduction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DeveloperPortfolio />} />
      <Route path="/intro" element={<IntroPage />} />
    </Routes>
  );
}
export default App