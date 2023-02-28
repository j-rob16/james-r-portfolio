import SocialMediaIcons from '../components/SocialMediaIcons';
import languageSet from '../languageSet';

const Footer = ({ language, darkMode }) => {
  const order = language === 'japanese' ? 'order-2' : '';

  return (
    <footer className={`h-48 bg-red pt-10 md:pt-32 ${darkMode ? 'dark' : 'light'}`}>
      <div className='w-5/6 mx-auto flex flex-col sm:flex-row justify-center md:justify-around items-center'>
        <SocialMediaIcons 
          width={'w-1/3'}
        />
        <div className='md:flex justify-center md:justify-end text-center items-center sm:ml-4 gap-1'>
          <p className={`${order} ${languageSet[language].font} text-md text-yellow mr-2`}>{languageSet[language].footer}</p>
          <p className={`${languageSet[language].font} font-semibold text-2xl text-redHighlight`}>{languageSet[language].nameFirst}{" "}{languageSet[language].nameLast}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;