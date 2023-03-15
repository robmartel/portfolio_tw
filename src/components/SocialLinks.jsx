import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          {' '}
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      value: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          {' '}
          Github <FaGithubSquare size={30} />
        </>
      ),
      value: 'https://github.com',
    },
    {
      id: 3,
      child: (
        <>
          {' '}
          Email <HiOutlineMail size={30} />
        </>
      ),
      value: 'mailto:abc@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          {' '}
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      value: '/resume.pdf',
      download: true,
      style: 'rounded-br-md',
    },
  ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {socialLinks.map(({ id, child, value, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
              ' ' +
              style
            }
          >
            <a
              href={value}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
