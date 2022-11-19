import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
    >
      {/* IMAGE SECTION */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
        {isAboveMediumScreens ? (
        <div className='top-[-50px]'>
          <img 
            alt='profile'
            src='assets/james-profile.jpeg'
            className='max-w-[400px] md:max-w-[600px] rounded-2xl
                       hover:filter hover:saturate-150 transition duration-500'
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
      </div>

      {/* MAIN SECTION */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}        
        >
          <p
            className='text-5xl font-playfair z-10 text-center md:text-start hover:text-orange transition duration-700'
          >
          &lt;James {""} 
            <span
              className='text-yellow-300'
            >
            Robbins 
            </span>
            {" "} /&gt;</p>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='flex mt-5 justify-center md:justify-start'
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;