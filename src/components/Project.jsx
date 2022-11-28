import { motion } from 'framer-motion';
import projects from '../projects';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ index }) => {
  const overlayStyles = `absolute h-full w-full opacity-100 hover:opacity-90 transition duration-500 hover:cursor-pointer
                         bg-gradient-to-r from-transparent to-black z-[30] flex flex-col justify-center items-end p-16`

  return (
    <div className={`bg-gamegroupproject h-full w-5/6`}>
        <div className={overlayStyles}>
          <div className='w-1/4 mr-5'>
            <h4 
              className='text-right text-white font-playfair'
            >
              {projects[index].title}
            </h4>
            <p
              className='text-right text-white font-playfair'
            >
              {projects[index].description}
            </p>
          </div>
        </div>
    </div>
  );
};

export default Project;