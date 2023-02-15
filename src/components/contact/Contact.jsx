import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import LineGradient from '../lineGradient'
import contactImage from '../../assets/images/contact-image.jpeg'

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    console.log('~ e', e)
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section className='py-10 px-10 w-5/6 bg-white shadow my-20 mx-auto h-5/6'>
      {/* HEADINGS */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='flex justify-end w-full'
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow'>CONTACT ME</span>
            {' '}
            TO GET STARTED
          </p>
          <div className='flex md:justify-end my-5'>
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className='basis-1/2 flex justify-center'
        >
          <img src={contactImage} alt='contact' />
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className='basis-1/2 mt-10 md:mt-0'
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e'
            method='POST'
          >
            <input
              className='mb-3 block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600'
              type='text'
              placeholder='NAME'
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className='mb-3 block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600'
              type='text'
              placeholder='EMAIL'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className='block w-full mb-3 rounded-lg border border-gray-400 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600'
              name='message'
              placeholder='MESSAGE'
              rows='4'
              cols='50'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === 'required'
                  && 'This field is required.'}
                {errors.message.type === 'maxLength'
                  && 'Max length is 2000 char.'}
              </p>
            )}

            <button
              type='submit'
              className='w-full rounded-lg bg-green px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300'
            >
              Sign in
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
