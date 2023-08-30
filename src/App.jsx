import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Header } from "./Container/Header/Header";
import "./app.css";
import { Footer } from "./Container/Footer/Footer";
import { Policy } from "./Pages/Policy/Policy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
