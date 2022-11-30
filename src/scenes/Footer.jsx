import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className='h-64 bg-red pt-10'>
      <div className='w-5/6 mx-auto flex flex-col md:flex-row justify-center md:justify-between'>
        <SocialMediaIcons />
        <div className='md:flex justify-center md:justify-end text-center items-center'>
          <p className='font-playfair text-md text-yellow mr-2'>A portfolio coded by:</p>
          <p className='font-playfair font-semibold text-2xl text-yellow'>JAMES ROBBINS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;