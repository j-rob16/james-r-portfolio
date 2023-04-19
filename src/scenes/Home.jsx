import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';
import languageSet from '../languageSet';
import ScrollPrompt from '../components/ScrollPrompt';

const Home = ({ language ,setSelectedPage }) => {

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center md:h-full py-10 mb-48
                 bg-bridge bg-cover bg-fixed bg-no-repeat w-[100%] h-[100%]'
    >

      {/* MAIN SECTION */}
      <div className='z-30 basis-3/5 mt-48 md:mt-32'>
        {/* NAME */}
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
            <p className={`${languageSet[language].font} text-sm text-center sm:text-left text-white`}>{languageSet[language].hi}</p>
            <p
              className={`${languageSet[language].font} text-5xl z-10 text-center md:text-start mb-2
                        text-redHighlight transition duration-700`}
            >
            <div className='flex flex-row flex-wrap justify-center'>
              <span className={language === 'japanese' ? 'order-2' : ''}>{languageSet[language].nameFirst}</span>
              <span>{" "}</span>
              <span>{languageSet[language].nameLast}</span>
            </div>
            </p>
            <p className={`${languageSet[language].font} text-sm text-center sm:text-right text-white`}>{languageSet[language].hi2}</p>

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
          <p
            className={`w-3/5 text-center ${languageSet[language].font} text-slate-100`}
          >{languageSet[language].intro}</p>
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
            className={`bg-redHighlight text-[#f7f7f7] rounded-xl py-3 px-7 font-semibold
                      hover:bg-[#f7f7f7] hover:text-redHighlight transition duration-500 hover:cursor-pointer
                      ${languageSet[language].font}`}
            onClick={() => setSelectedPage("contact")}
            href='#contact'
          >
            {languageSet[language].contactMe}
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
          <SocialMediaIcons 
            width={'w-3/5'}
          />
        </motion.div>
      </div>

      <ScrollPrompt />
    </section>
  );
};

export default Home;