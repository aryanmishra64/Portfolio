import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    
      {/* Header will also be displayed on all pages */}
      <Header />
      
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        {/* Main Content Area */}
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
      {/* Footer will always be displayed */}
      <Footer />
    
    </>
  );
}

export default App;
