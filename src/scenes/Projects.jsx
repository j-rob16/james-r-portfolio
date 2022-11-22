import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Project = ({ title, subtitle, href }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 hover:cursor-pointer
                         bg-frostblue z-30 flex flex-col justify-center items-center text-center p-16 text-indigo`
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
  <motion.div variants={projectVariant} className='relative' href={href}>
    <div className={overlayStyles}>
      <p className='text-2xl font-playfair'>{title}</p>
      <p className='mt-7'>{subtitle}</p>
    </div>
    <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
  </motion.div>
  )
}

const Projects = () => {
  return (
    <section 
      id='projects'
      className='pt-40 pb-48'
    > 
      <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
          className='md:w-2/5 mx-auto text-center'
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          Some of the Projects I have worked on:
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className='sm:grid sm:grid-cols-3 gap-4'
      >
      {/* ROW 1 */}
        <Project 
          title='Game Group Project' 
          subtitle='Built over 2 weeks as a team of 4.'
        />
        <Project 
          title='Nasa Group Project' 
          subtitle='Built over 7 days as a team of 4.'
        />

      </motion.div>
      </div>
    </section>
  );
};

export default Projects;