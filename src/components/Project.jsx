import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ project, language }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const projectBackground = project.title['english'].split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-100 overflow-none
                         bg-gradient-to-r from-transparent to-black z-[30] flex flex-col justify-center items-end p-16 overflow-none`

  return (
    <>
    {isAboveSmallScreens ? (
      <div className='relative my-20'>
        <div className={overlayStyles}>
            <h4 
              className='text-white mb-5 text-xl font-playfair'
            >
              {project.title[language]}
            </h4>
            <p
              className='text-white text-right font-playfair max-w-[12rem]'
            >
              {project.description[language]}
            </p>
        </div>
        <img 
          src={`../assets/${projectBackground}.png`}
          alt={project.title[language]}
        />
      </div>
    ) : (
      <div className='relative my-20'>
        <h4 
          className={`text-charcoal text-center mb-5 text-xl font-playfair`}
        >
          {project.title[language]}
        </h4>
        <div className={overlayStyles}>
            <p
              className='text-white text-sm text-right font-playfair max-w-[12rem]'
            >
              {project.description[language]}
            </p>
        </div>
        <img 
          src={`../assets/${projectBackground}.png`}
          alt={project.title[language]}
        />
      </div>
    )}
    </>
  );
};

export default Project;