import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenu5Fill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`
        ${selectedPage === lowerCasePage ? "text-redHighlight" : ""}
        hover:text-blue transition duration-500
        `}  
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage, mode, setMode }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage ? '' : 'bg-[#ffffff] shadow-black shadow-md opacity-90';

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
        <>
          <h4 className='font-playfair text-4xl font-bold text-redHighlight'><span className='text-blue text-5xl'>J</span>R</h4>

          <div className='flex items-center absolute right-10'>
            <div className='flex justify-between gap-16 font-opensans text-sm font-semibold mr-16'>
              <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='About'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

            {/* TOGGLE BUTTONS */}
            <div
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className='flex justify-center items-center hover:cursor-pointer w-12 h-12'
            >
              {mode === 'light' ? 
                <CiLight className='w-[70%] h-[70%]' /> 
                : 
                <MdDarkMode className='text-white w-[70%] h-[70%]'/>}
            </div>
          </div>
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
            <h4 className='font-playfair text-4xl font-bold text-redHighlight'><span className='text-blue text-5xl'>J</span>R</h4>

            {/* TOGGLE BUTTONS */}
            <div
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className='flex justify-center items-center hover:cursor-pointer w-12 h-12'
            >
              {mode === 'light' ? 
                <CiLight className='w-[70%] h-[70%]' /> 
                : 
                <MdDarkMode className='text-white w-[70%] h-[70%]'/>}
            </div>
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
            <div className='flex flex-col gap-10 ml-[33%] text-2xl'>
              <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='About'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link 
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

          </div>
        )}
      </div>
      <div className={isTopOfPage ? '' : `w-full h-0 absolute bottom-0 `}></div>
    </nav>
  );
};

export default NavBar;