import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import News from './components/News.jsx';
import Research from './components/Research.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <News />
        <Research />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
