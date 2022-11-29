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
      {projects.map((project, i) => {
        return (
          <Project 
            project={project}
            key={i}
          />

        )
      })}
    </section>
  );
};

export default Projects;