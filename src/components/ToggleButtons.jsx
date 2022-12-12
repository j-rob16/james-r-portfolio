import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

import languageSet from '../languageSet';

const ToggleButtons = ({language, setLanguage, darkMode, setDarkMode}) => {
  return (
    <div className='fixed bg-gray-400 rounded-l-lg right-0 my-auto w-28 h-14
                    flex items-center justify-around'
    >
      <div
        onClick={() => setDarkMode(!darkMode)}
        className='hover:cursor-pointer'
      >
        {darkMode === false ? 
            <CiLight className='w-[120%] h-[120%] pl-1' /> 
            : 
            <MdDarkMode className='text-white w-[120%] h-[120%] pl-1'/>}
        </div>

        <div
        onClick={() => setLanguage(language === 'english' ? 'japanese' : 'english')}
        className='hover:cursor-pointer'
        >
          <p className='text-sm'>{languageSet[language].lang}</p>
        </div>

    </div>

  );
};

export default ToggleButtons;
