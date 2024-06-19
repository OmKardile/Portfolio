import Navbar from "./components/Navbar";
// import logo from './assets/logo.png'
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Typed from 'react-typed';
function App() {
  return (
   <div className="scroll-smooth">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    <Contact/>
    </div>
  );
}

export default App;
