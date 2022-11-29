import { motion } from 'framer-motion';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ project }) => {
  const projectBackground = project.title.split(" ").join("-").toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-100
                         bg-gradient-to-r from-transparent to-black z-[30] flex flex-col justify-center items-end p-16 overflow-none`

  return (
    <div className='relative my-20'>
      <div className={overlayStyles}>
          <h4 
            className='text-white mb-5 text-xl font-playfair'
          >
            {project.title}
          </h4>
          <p
            className='text-white text-right font-playfair max-w-[12rem]'
          >
            {project.description}
          </p>
      </div>
      <img 
        src={`../assets/${projectBackground}.png`}
        alt={project.title}
      />
    </div>
  );
};

export default Project;