import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";
import HighScoreScreen from "./pages/HighScoreScreen";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/highscore" element={<HighScoreScreen />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
