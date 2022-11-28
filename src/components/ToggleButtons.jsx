import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';

import languageSet from '../languageSet';

const ToggleButtons = ({language, setLanguage, mode, setMode}) => {
  return (
    <div className='fixed bg-gray-400 rounded-l-lg right-0 my-auto w-24 h-14
                    flex items-center justify-around'
    >
      <div
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className='hover:cursor-pointer'
      >
        {mode === 'light' ? 
            <CiLight className='w-[50%] h-[50%]' /> 
            : 
            <MdDarkMode className='text-white w-[50%] h-[50%]'/>}
        </div>

        <div
        onClick={() => setLanguage(language === 'english' ? 'japanese' : 'english')}
        className='hover:cursor-pointer'
        >
          <h5>{languageSet[language].lang}</h5>
        </div>

    </div>

  );
};

export default ToggleButtons;
