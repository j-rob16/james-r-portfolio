import { motion } from 'framer-motion';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ project, i }) => {
//   const projectTitle = title.split(" ").join("").toLowerCase();

  return (
    <div>
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
    </div>
  );
};

export default Project;