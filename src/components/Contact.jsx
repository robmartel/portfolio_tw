import React from 'react';

const Contact = () => {
  return (
    // Title & Header
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-gray-500'>Contact</p>
          <p className='py-6'>Submit form to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          {/* Form using getForm */}
          <form
            action='https://getform.io/f/effa6ed2-e5e0-4d08-b541-c6dd6dc8c79b'
            method='post'
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-w
                 focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-w
                 focus:outline-none'
            />
            <textarea
              name='message'
              rows='10'
              placeholder='Add Comments'
              className='p-2 bg-transparent border-2 rounded-md text-w
                 focus:outline-none'
            ></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110'>
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
