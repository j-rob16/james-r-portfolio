import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
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
      className='py-48'
    >
      {/* HEADING */}
      <motion.div
        className='flex justify-end w-full'
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
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow '>CONTACT ME </span>TO GET STARTED
          </p>
          <div className='flex md:justify-end my-5'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}     
          className='basis-1/2 mt-10 md:mt-0'   
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action = 'https://formsubmit.co/52f0c494affb4f11422077e5987e2923'
            method='POST'
          >
          {/* NAME */}
            <input 
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
              type='text'
              placeholder='NAME'
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

            {/* EMAIL */}
            <input 
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='text'
              placeholder='EMAIL'
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

            {/* MESSAGE */}
            <textarea
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='text'
              placeholder='MESSAGE'
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

            {/* SUBMIT BUTTON */}
            <button
              type='submit'
              className='p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                        hover:text-white transition duration-500'
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
};

export default Contact;