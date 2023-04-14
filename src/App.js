import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import {Routes,Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="service" element={<Service/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
