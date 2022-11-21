import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id='skills'
      className='w-5/6 mx-auto mt-40'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        className='bg-orange mt-3 rounded-t-2xl relative top-[-80px] border-b-black border-dashed border-b-[1px]'
      >
        <div className='flex flex-col items-center p-4 '>
          <div className='bg-yellow-300 rounded-full h-12 w-12 p-2'>
          <img 
            src='assets/coding-language.png'
            href="https://www.flaticon.com/free-icons/coding"
            alt="Coding icons created by Graphix 's Art - Flaticon"
            className='w-full h-full'
          />

          </div>
          <h4 className='font-playfair font-bold text-black text-xl'>Languages</h4>
          <p className='text-center mb-5'>Languages used to code my projects</p>
          <p>JavaScript</p>
          <p>Java</p>
          <p>Python</p>
        </div>
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
        className='bg-orange relative top-[-80px] border-b-black border-dashed border-b-[1px]'
      >
        <div className='flex flex-col items-center p-4 '>
          <div className='bg-yellow-300 rounded-full h-12 w-12 p-2'>
          <img 
            src='assets/coding-language.png'
            href="https://www.flaticon.com/free-icons/coding"
            alt="Coding icons created by Graphix 's Art - Flaticon"
            className='w-full h-full'
          />

          </div>
          <h4 className='font-playfair font-bold text-black text-xl'>Languages</h4>
          <p className='text-center mb-5'>My projects are built using a variety of frameworks and libraries</p>
          <p>JavaScript</p>
          <p>Java</p>
          <p>Python</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;