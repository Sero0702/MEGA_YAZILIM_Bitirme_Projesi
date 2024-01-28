import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Images from "./components/Meram/Images";
import Footer from "./components/Footer/Footer";
import Project from "./components/Mega/Project";
import Home from "./components/Home/Home";
import History from "./components/About/History";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meram-tarihce" element={<History />} />
        <Route path="/meram" element={<Images />} />
        <Route path="/mega" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
