import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenu5Fill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`
        ${selectedPage === lowerCasePage ? "text-redHighlight border-b-redHighlight border-b-4" : ""}
        ${isTopOfPage ? "hover:text-[#f7f7f7]" : "hover:text-yellow-400"}
        transition duration-500 h-[100%] py-2 px-4
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
            <div className='flex justify-between gap-10 font-opensans text-sm font-semibold mr-16 px-4 border-b-[0.5px] border-black'>
              <Link 
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link 
                page='About'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link 
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
              <Link 
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isTopOfPage={isTopOfPage}
              />
            </div>

          </div>
            {/* TOGGLE BUTTONS */}
            <div
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className = 'flex justify-around items-center hover:cursor-pointer fixed bg-gray-200 right-0 w-24 h-16'
            >
              {mode === 'light' ? 
                <CiLight className='w-[50%] h-[50%]' /> 
                : 
                <MdDarkMode className='text-white w-[50%] h-[50%]'/>}
              <div>
                <h5>日本語</h5>
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
                <CiLight className='w-[50%] h-[50%]' /> 
                : 
                <MdDarkMode className='text-white w-[50%] h-[50%]'/>}
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