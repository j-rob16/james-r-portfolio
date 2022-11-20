import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section>
      <div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='bg-white mt-3 rounded-lg sm:rounded-l-lg'
        >
          <div>
            <img 
              src='assets/coding-language.png'
              href="https://www.flaticon.com/free-icons/coding"
              alt="Coding icons created by Graphix 's Art - Flaticon"
              className='max-w-[50px]'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;