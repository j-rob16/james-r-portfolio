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
                         md:bg-gradient-to-r from-transparent to-black z-[30] flex flex-col justify-center items-end p-16 overflow-none`

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
      <div className='my-20'>
        <img 
          src={`../assets/${projectBackground}.png`}
          alt={project.title[language]}
        />
        <h4 
          className={`text-charcoal text-center mb-5 text-xl ${project.font[language]}`}
        >
          {project.title[language]}
        </h4>
        <div className=''>
            <p
              className='text-charcoal text-sm text-center font-playfair max-w-[12rem]'
            >
              {project.description[language]}
            </p>
        </div>
      </div>
    )}
    </>
  );
};

export default Project;