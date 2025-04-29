import Project from "./Components/Project.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Navbar from "./Navbar.jsx";

function App() {
 return  (
  <>
  <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
