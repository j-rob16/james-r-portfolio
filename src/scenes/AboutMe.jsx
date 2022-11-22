import { motion } from 'framer-motion';
import MarkerArrow from '../components/MarkerArrow';

const AboutMe = () => {
  return (
    <section
      id='about'
      className='w-5/6 mx-auto mt-40'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        className='bg-frostblue mt-3 p-6 rounded-t-2xl relative top-[-80px] border-b-black border-solid border-b-[.5px]'
      >
        <p className='font-playfair text-center'><span className='text-4xl relative top-1 right-2'>A</span> Software developer proficient in JavaScript, Python and Java seeking positions in Front End/Full Stack Software Development. From Scotland but currently based in Niseko, Japan.
            A highly motivated software developer student, aiming to kickstart my career in a field that offers me the chance to be intellectually stimulated while continuing to develop my skills as a lifelong learner. 

            Chronically curious and globally minded, my drive to better understand and experience the world has led me to spend the last 10 years living abroad - starting in New Zealand and now living long term in Japan. 

            My desire to understand how things work first sparked my curiosity in software development, this then transformed from a desire to simply understand software to becoming a software developer myself. After 12 months of self-studying at home, I enrolled in CodeClan's Professional Software Development bootcamp in order to add more structure to my self taught learning. I am now seeking to transition into a career as a Software Developer.
        </p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        className='bg-frostblue p-6 relative top-[-80px] rounded-b-2xl'
      >
        <h4>Here are a few technologies I have worked with recently</h4>
        <ul className='grid grid-cols-2 p-4 mt-4 font-playfair text-md gap-3'>
          <li className='flex flex-row'>
            <p>JavaScript (ES6+)</p>
          </li>
          <li className='flex flex-row'>
            <p>React</p>
          </li>
          <li className='flex flex-row'>
            <p>Node.js</p>
          </li>
          <li className='flex flex-row'>
            <p>Java</p>
          </li>
          <li className='flex flex-row'>
            <p>Python</p>
          </li>
          <li className='flex flex-row'>
            <p>TailwindCSS</p>
          </li>
          <li className='flex flex-row'>
            <p>MaterialUI</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutMe;