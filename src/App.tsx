import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
import Soon from "./pages/soon/Soon";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Soon />} />
        <Route path="/contact" element={<Soon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
