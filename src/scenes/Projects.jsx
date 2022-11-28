import { useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'framer-motion-carousel';
import projects from '../projects';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
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
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
      setIndex(index + 1)
  }

  return (
    <section 
      id='projects'
      className=''
    > 
      <div className='my-0 h-[550px]rounded-2xl'>
        <Project 
          index={index}
        />
      </div>
      <div>
        <button
          onClick={incrementIndex}
        >
          <HiOutlineArrowSmLeft />
        </button>
        <button
          onClick={() => setIndex(index -1)}
        >
          <HiOutlineArrowSmRight />
        </button>
        {index}
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