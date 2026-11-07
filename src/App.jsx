import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BanjarScript from './components/BanjarScript';
import NiskalaMasa from './components/NiskalaMasa';
import Portfolio from './components/Portfolio';
import Prestasi from './components/Prestasi';
import CV from './components/CV';
import GithubActivity from './components/GithubActivity';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Light mode exclusively as requested
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.removeItem('jokobim-theme');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BanjarScript />
        <NiskalaMasa />
        <Portfolio />
        <Prestasi />
        <CV />
        <GithubActivity />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;