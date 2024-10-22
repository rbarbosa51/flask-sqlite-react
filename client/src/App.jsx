import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Home, Hub, Loading, Phone } from "./pages";

export default function App() {
  return (
    <div className="h-screen bg-peacocktw">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hub"
          element={
            <Suspense fallback={<Loading />}>
              <Hub />
            </Suspense>
          }
        />
        <Route path="/phone" element={<Phone />} />
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
}
