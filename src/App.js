import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SocialMedia from "./components/SocialMedia";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <SocialMedia />
    </div>
  );
}

export default App;
