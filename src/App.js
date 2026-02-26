import {Route, Routes} from "react-router";
import {HomePage} from "./page/home/homePage";
import {AboutPage} from "./page/about/AboutPage";
import {PreOrderPage} from "./page/PreOrder/PreOrderPage";
import {Header} from "./components/header/header";
import React from "react";
import "./styles/interactive.css";
import {ContactsPage} from "./page/Contacts/ContactsPage";


function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pre-order" element={<PreOrderPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
