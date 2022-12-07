import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './scenes/NavBar';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from './components/DotGroup';
import Home from './scenes/Home';
import LineGradient from './components/LineGradient';
import AboutMe from './scenes/AboutMe';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  const [mode, setMode] = useState('light');
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

  return (
    <div className='app'>
      <NavBar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        mode={mode}
        setMode={setMode}
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
        className='w-5/6 mx-auto'
        onViewportEnter={() => setSelectedPage('about')}
      >
        <AboutMe 
          language={language}
        />
      </motion.div>

      <motion.div 
        className='w-full mx-auto'
        onViewportEnter={() => setSelectedPage('projects')}
      >
        <Projects
          language={language}
        />
      </motion.div>

      <motion.div 
        className='w-5/6 mx-auto md:h-full'
        onViewportEnter={() => setSelectedPage('contact')}
      >
        <Contact 
          language={language}
        />
      </motion.div>

      <Footer 
        language={language}
      />
    </div>
  );
}

export default App;
