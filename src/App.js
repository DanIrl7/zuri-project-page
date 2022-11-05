import "./index.css";

import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">

      
    
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
   
  );
}
