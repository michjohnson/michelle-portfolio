import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationContact from './components/EducationContact';
import Footer from './components/Footer';
export default function App() { 
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <EducationContact />
      <Footer />
    </>
  );
}

