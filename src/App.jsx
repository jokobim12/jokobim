import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BanjarScript from './components/BanjarScript';
import Portfolio from './components/Portfolio';
import Prestasi from './components/Prestasi';
import CV from './components/CV';
import GithubActivity from './components/GithubActivity';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jokobim-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jokobim-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <BanjarScript />
        <Portfolio />
        <Prestasi />
        <CV />
        <GithubActivity theme={theme} />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
