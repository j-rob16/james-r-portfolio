import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenu5Fill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import ToggleButtons from '../components/ToggleButtons';
import useMediaQuery from '../hooks/useMediaQuery';
import languageSet from '../languageSet';

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage, title, darkMode }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`
        ${selectedPage === lowerCasePage ? 'text-redHighlight border-b-redHighlight border-b-4' : isTopOfPage ? 'text-[#f7f7f7]' : darkMode ? 'text-white' : 'text-charcoal'}
        ${isTopOfPage ? '' : darkMode ? 'text-white' : 'text-charcoal'}
        transition duration-500 h-[100%] py-2 px-4`}  
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
      {title}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage, darkMode, setDarkMode, language, setLanguage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage ? '' : `shadow-black shadow-md opacity-90 ${darkMode ? 'dark' : 'light'}`;

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-3`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
        <>
          {/* <h4 className='font-playfair text-4xl font-bold text-redHighlight'><span className='text-blue text-5xl'>J</span>R</h4> */}
          <div className={`p-3 rounded-2xl ${isTopOfPage ? '' : 'bg-redHighlight'}`}>
            <img 
              src='logo.svg' 
              alt='logo' 
              className='max-h-[60px] max-w-[60px]'
            />
          </div>

          <div className='flex items-center absolute right-10'>
          {/* NAV LINKS */}
            <div className={`flex justify-between gap-10 ${languageSet[language].font} text-sm font-bold mr-16 px-4 border-b-[0.5px] border-black`}>
              <Link 
                page='Home'
                title={languageSet[language].home}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
                darkMode={darkMode}
              />
              <Link 
                page='About'
                title={languageSet[language].about}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
                darkMode={darkMode}
              />
              <Link 
                page='Projects'
                title = {languageSet[language].projects}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
                darkMode={darkMode}
              />
              <Link 
                page='Contact'
                title={languageSet[language].contact}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
                darkMode={darkMode}
              />
            </div>
          </div>

          {/* TOGGLE BUTTONS */}
          <ToggleButtons 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
          />
        </>
        ) : (
          <div className='flex justify-between w-full'>

            {/* MENU BUTTON */}
            <button
              className='rounded-full bg-opacity-100 p-2 h-12 w-12'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <RiMenu5Fill 
                className='text-blue hover:text-redHighlight mx-auto'
                size='1.8rem'
              />
            </button>

            {/* LOGO */}
          <div 
            className={`p-3 rounded-2xl mx-auto ${isTopOfPage ? '' : 'bg-redHighlight'}`}
          >
            <img 
              src='logo.svg' 
              alt='logo' 
              className='max-h-[30px] max-w-[30px]'
            />
          </div>

            {/* TOGGLE BUTTONS */}
            <ToggleButtons 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
            />
          </div>
        )}
        
        {/* MOBILE POP-UP MENU */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed left-0 bottom-0 h-full w-[250px] bg-[#f7f7f7] opacity-100'>
            {/* CLOSE ICON */}
            <div className='flex justify-end p-12'>
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <GrClose 
                  size='1.8rem'
                />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className={`${languageSet[language].font} flex flex-col gap-10 ml-[33%] text-2xl`}>
              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <Link 
                  page='Home'
                  title={languageSet[language].home}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  darkMode={darkMode}
                />

              </div>

              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <Link 
                  page='About'
                  title={languageSet[language].about}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  darkMode={darkMode}
                />
              </div>

              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <Link 
                  page='Projects'
                  title = {languageSet[language].projects}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  darkMode={darkMode}
                />
              </div>

              <div className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <Link 
                  page='Contact'
                  title={languageSet[language].contact}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  darkMode={darkMode}
                />

              </div>
            </div>

          </div>
        )}
      </div>
      <div className={isTopOfPage ? '' : `w-full h-0 absolute bottom-0 `}></div>
    </nav>
  );
};

export default NavBar;