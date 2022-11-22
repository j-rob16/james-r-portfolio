import { useEffect, useState } from 'react';
import NavBar from './scenes/NavBar';
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from './components/DotGroup';
import Home from './scenes/Home';
import LineGradient from './components/LineGradient';
import AboutMe from './scenes/AboutMe';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';

function App() {
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
      />
      <div className='w-5/6 mx-auto'>
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Home 
          setSelectedPage={setSelectedPage}
        />
      </div>
      {/* <LineGradient /> */}

      <div className='bg-frostblue h-[80%]'>
        <AboutMe />
      </div>

      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>

      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
