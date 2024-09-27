import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hub, Phone } from "./pages";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
