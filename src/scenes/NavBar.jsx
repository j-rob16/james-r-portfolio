import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`
        ${selectedPage === lowerCasePage ? "text-white" : ""}
        hover:text-yellow-300 transition duration-500
        `}  
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`bg-orange z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-4xl font-bold text-yellow-300'>JR</h4>

        {/* DESKTOP NAV */}
        <div>
          <Link 
            page='Home'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;