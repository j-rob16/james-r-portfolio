import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full py-10 mb-48
                 bg-bridge bg-cover bg-no-repeat w-[100%] h-[100%]'
    >
      {/* IMAGE SECTION */}
      {/* <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
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
            <img 
              alt='profile'
              src='assets/james-profile.jpeg'
              className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px] rounded-xl max-h-[550px]'
            />
          </div>
        )}
      </div> */}

      {/* MAIN SECTION */}
      <div className='z-30 basis-2/5 mt-48 md:mt-32'>
        <motion.div
          className='flex justify-center items-center basis-3/5 mb-7'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}        
        >
          <div className='flex flex-col'>
            <p className='font-playfair text-sm text-left text-white'>Hi, I'm</p>
            <p
              className='text-5xl font-playfair z-10 text-center md:text-start mb-2
                        text-redHighlight transition duration-700'
            >
            James {""} Robbins
            </p>
            <p className='font-playfair text-sm text-right text-white'>A Junior Software Developer</p>

          </div>
        </motion.div>

        {/* ABOUT ME */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='flex justify-center mb-10'
        >

        </motion.div>

        {/* CONTACT ME SECTION */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='flex justify-center'
        >
          <AnchorLink
            className='bg-redHighlight text-[#f7f7f7] rounded-xl py-3 px-7 font-semibold
                      hover:bg-[#f7f7f7] hover:text-redHighlight transition duration-500 hover:cursor-pointer'
            onClick={() => setSelectedPage("contact")}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          {/* <AnchorLink
            className='rounded-r-sm bg-burnt hover:bg-crayola hover:pl-0.5 py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div 
              className='bg-crayola hover:bg-burnt text-burnt hover:text-crayola transition duration-500 
                         w-full h-full px-10 hover:
                         flex items-center justify-center font-playfair'
            >
              Let's talk.
            </div>
          </AnchorLink> */}
        </motion.div>

        {/* SOCIAL MEDIA */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='flex mt-5 justify-center'
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;