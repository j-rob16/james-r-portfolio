import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './scenes/NavBar';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from './components/DotGroup';
import Home from './scenes/Home';
import AboutMe from './scenes/AboutMe';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.remove('dark');
    body.classList.remove('light');
    body.classList.add(darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className='app'>
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <motion.div 
        className='h-[100%] max-w-[100%]'
        onViewportEnter={() => setSelectedPage('home')}
      >
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
          <Home 
            setSelectedPage={setSelectedPage}
            language={language}
          />
      </motion.div>

      <motion.div 
        className={`w-5/6 mx-auto ${darkMode ? 'dark' : 'light'}`}
        onViewportEnter={() => setSelectedPage('about')}
      >
        <AboutMe 
          language={language}
          darkMode={darkMode}
        />
      </motion.div>

      <motion.div 
        className='w-5/6 mx-auto'
        onViewportEnter={() => setSelectedPage('projects')}
      >
        <Projects
          language={language}
          darkMode={darkMode}
        />
      </motion.div>

      <motion.div 
        className='w-5/6 mx-auto md:h-full'
        onViewportEnter={() => setSelectedPage('contact')}
      >
        <Contact 
          language={language}
          darkMode={darkMode}
        />
      </motion.div>

      <Footer 
        language={language}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
