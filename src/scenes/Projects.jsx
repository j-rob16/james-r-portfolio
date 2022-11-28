import { motion } from 'framer-motion';
import Carousel from 'framer-motion-carousel';
import projects from '../projects';
import Project from '../components/Project';
import languageSet from '../languageSet';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = ({ language }) => {
  return (
    <section 
      id='projects'
      className=''
    > 
      <div className='flex flex-col w-5/6 mx-auto my-0 h-[550px] border-[0.5px] border-gray-400 rounded-2xl p-4'>
        <Carousel
          interval={20000}
        >
          {projects.map((project, i) => (
            <Project 
              project={project}
              i={i}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;

            {
              /* <div>
                            <img
                              draggable="false"
                              src={project.image}
                              key={i}
                              width="100%"
                              alt={project.name}
                              className='bg-gradient-to-r '
                            />
                            <h4 className='text-center'>{project.title}</h4>
                            <p>{project.description}</p>
                          </div> */
            }