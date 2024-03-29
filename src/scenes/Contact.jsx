import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import languageSet from '../languageSet';

const Contact = ({ language, darkMode }) => {
  const {
    register, 
    trigger, 
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id='contact'
      className={`pt-48 ${darkMode ? 'dark' : 'light'}`}
    >
      {/* HEADING */}
      <motion.div
        className='flex justify-center w-full'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <div>
          <p className={`${languageSet[language].font} font-semibold text-redHighlight text-4xl`}>
            {languageSet[language].contactMe}
          </p>
          <div className='flex md:justify-start my-5'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className='gap-16 p-5 dark:bg-slate-600 bg-gray-800 rounded-xl'>
        {/* <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}     
          className='md:mt-0'   
        > */}
          <form
            target='_blank'
            onSubmit={onSubmit}
            action = 'https://formsubmit.co/52f0c494affb4f11422077e5987e2923'
            method='POST'
          >
          {/* NAME */}
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{languageSet[language].formNameTitle}</span>
              <input 
                className='w-full bg-blue font-semibold text-gray-200 placeholder-gray-300 p-3'
                type='text'
                placeholder={`${languageSet[language].formName}`}
                {...register('name', {
                  required: true,
                  maxLength: 100
                })}
              />
              {errors.name && (
                <p className='text-red mt-1'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' && 'Max Length is 100 char.'}
                </p>
              )}
            </label>

            {/* EMAIL */}
            <label className='flex flex-col mt-4'>
              <span className='text-white font-medium'>{languageSet[language].formEmailTitle}</span>
              <input 
                className='w-full bg-blue font-semibold text-gray-200 placeholder-gray-300 p-3 mt-5'
                type='text'
                placeholder={`${languageSet[language].formEmail}`}
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='text-red mt-1'>
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' && 'Not a valid email address'}
                </p>
              )}
            </label>

            {/* MESSAGE */}
            <label className='flex flex-col mt-4'>
              <span className='text-white font-medium'>{languageSet[language].formMessageTitle}</span>
              <textarea
                className='w-full bg-blue font-semibold text-gray-200 placeholder-gray-300 p-3 mt-5'
                type='text'
                placeholder={`${languageSet[language].formMessage}`}
                rows='4'
                columns='50'
                {...register('message', {
                  required: true,
                  maxLength: 2000
                })}
              />
              {errors.message && (
                <p className='text-red mt-1'>
                  {errors.message.type === 'required' && 'This field is required'}
                  {errors.message.type === 'maxLength' && 'Max Length is 2000 char.'}
                </p>
              )}
            </label>

            {/* SUBMIT BUTTON */}
            <button
              type='submit'
              className='p-5 bg-blue font-semibold text-white mt-5
                        hover:text-redHighlight transition duration-500'
            >
              {languageSet[language].formSubmit}
            </button>
          </form>
        {/* </motion.div> */}
      </div>
    </section>
  )
};

export default Contact;