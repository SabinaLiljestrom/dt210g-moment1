import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Mina Resor & Drömresmål" />
      <Footer />
    </div>
  );
};

export default App;
