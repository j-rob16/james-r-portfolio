import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { RiMenu5Fill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
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
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage ? '' : 'bg-orange';

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-4xl font-bold text-yellow-300'>JR</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
        <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
          <Link 
            page='Home'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link 
            page='Skills'
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        ) : (
          <button
            className='rounded-full bg-yellow-300 p-2 h-12 w-12'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <RiMenu5Fill 
              className='text-orange mx-auto'
              size='1.8rem'
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;