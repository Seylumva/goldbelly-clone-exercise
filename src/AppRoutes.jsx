import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attribution from "./components/Attribution";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex-shrink-0 basis-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <Attribution />
      </div>
    </Router>
  );
};

export default AppRoutes;
