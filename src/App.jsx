import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<div>About Page</div>} />
    </Routes>
  );
}
