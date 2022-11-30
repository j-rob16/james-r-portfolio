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

  return (
    <section 
      id='projects'
      className='mt-48'
    > 
    <h4 className={`${languageSet[language].font} text-redHighlight text-center text-4xl`}>{languageSet[language].projects}</h4>
    <p className={`${languageSet[language].font} text-center mt-4`}>{languageSet[language].projectsSubtitle}</p>
    <div>
      {projects.map((project, i) => {
        return (
          <Project 
            project={project}
            key={i}
            language={language}
          />

        )
      })}
    </div>
    </section>
  );
};

export default Projects;