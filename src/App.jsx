import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ResearchInterests from "./components/ResearchInterests.jsx";
import Projects from "./components/Projects.jsx";
import Research from "./components/Research.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <ResearchInterests />
        <Projects />
        <Research />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
