import React from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

import "./App.css"; 
const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Mina Resor & Drömresmål" />
      <main>
        <ItemList /> {/*  Här visas listan med resmål */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
