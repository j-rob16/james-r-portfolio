import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import languageSet from '../languageSet';

const AboutMe = ({ language }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  return (
    <section
      id='about'
      className='md:flex md:justify-between md:items-center md:h-full py-10 my-24'
    >

      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:items-center'>
        {isAboveMediumScreens ? (
        <div 
          className='relative z-0 ml-20 before:absolute before:-bottom-8 hover:before:-bottom-5 before:-left-8 hover:before:-left-5
                     before:rounded-3xl before:w-full before:max-w-[600px] before:h-full
                     before:border-2 before:border-[#829CBC] before:z-[-1]'        
        >
          <img 
            alt='profile'
            src='assets/james-profile.jpeg'
            className='max-w-[400px] md:max-w-[450px] xl:max-w-[600px] rounded-3xl
                       hover:filter'
          />
        </div>
        ) : (
          <div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
              }}
              className='w-full mx-auto text-left'
          >
            <div>
              <p className='font-playfair font-semibold text-4xl'>
                {languageSet[language].aboutMe}
              </p>
              <div className='flex justify-start mt-5'>
                <LineGradient width='w-1/3' />
              </div>
            </div>
          </motion.div>
            <img 
              alt='profile'
              src='assets/james-profile.jpeg'
              className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px] rounded-xl max-h-[550px]'
            />
          </div>
        )}
      </div>

      {/* TEXT SECTION */}
      {isAboveSmallScreens ? (
      <div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='mt-10'
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
            className='w-full mx-auto text-left'
        >
          <div>
            <p className='font-playfair font-semibold text-4xl'>
              {languageSet[language].aboutMe}
            </p>
            <div className='flex justify-start mt-5'>
              <LineGradient width='w-1/3' />
            </div>
          </div>
        </motion.div>
          <p className='font-playfair text-left'><span className='text-5xl relative top-1 right-2'>A</span> Software developer proficient in JavaScript, Python and Java seeking positions in Front End/Full Stack Software Development. From Scotland but currently based in Niseko, Japan.
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
          className='p-6 rounded-b-2xl'
        >
          <h4>Here are some of the technologies I have worked with recently:</h4>
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
      </div>
      ) : (
      <div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='mt-20 p-6'
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
          className='p-6 rounded-b-2xl'
        >
          <h4>Here are some of the technologies I have worked with recently:</h4>
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
      </div>

      )}
    </section>
  );
};

export default AboutMe;