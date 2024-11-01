import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';
import React from 'react';

const Footer = () => {
  return (
    <section className='relative w-full md:min-h-[700px] ss:min-h-[700px] 
    min-h-[450px] flex items-center flex-col'>
        <div className='flex items-center w-full relative'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col w-full md:gap-5 ss:gap-5 gap-5'>
                        <img src={logo} alt='logo' className='md:w-[150px] 
                        ss:w-[180px] w-[160px] h-auto' />

                        <p className='text-white md:text-[14px] ss:text-[15px] 
                        text-[12px] md:leading-[25px] ss:leading-[25px] leading-[18px]'>
                            Envoy Angel Shipping and Logistics is a trusted provider 
                            of seamless, secure shipping solutions between Ireland 
                            and Nigeria. Simplifying the complexities of international 
                            shipping, one delivery at a time.
                        </p>
                        
                        <div className='flex md:gap-4 ss:gap-5 gap-3 items-center'>
                            {socialMedia.map((social, index) => (
                                <a target='_blank' href={social.link} rel="noreferrer" key={index}>
                                    <img src={social.image} alt='social'
                                        className='md:w-6 ss:w-6 w-5 h-auto'
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                
                <div className='w-full flex md:flex-row flex-col md:mt-6 
                ss:mt-8 mt-6'>
                    {footerLinks.map((footerLink, index) => (
                    <div key={index} className='flex flex-col md:my-3 ss:my-4
                    my-3 w-full'>
                        <h4 className={`font-bold md:text-[15px] ss:text-[17px] 
                        text-[14px] text-white 
                        ${index !== footerLinks.length - 1 ? 'md:mr-10 ss:mr-8 mr-8' : 'mr-12'}`}>
                        {footerLink.title}
                        </h4>

                        <ul className='list-none md:mt-5 ss:mt-4 mt-3 w-full 
                        justify-between flex flex-col'>
                        {footerLink.links.map((Link, index) => (
                            <a target='blank' href={Link.route} key={Link.name}>
                            <li className={`md:text-[13px] ss:text-[15px] grow2
                            text-[12px] md:leading-[19px] ss:leading-[20px] leading-[12px]
                            text-white hover:text-secondary cursor-pointer 
                            ${index !== footerLink.links.length - 1 ? 'md:mb-2.5 ss:mb-2 mb-2.5' : 'mb-0'}`}>
                                {Link.name}
                            </li>
                            </a>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </div>

      <motion.div variants={textVariant()} className='flex w-full
      justify-between items-center'>
        <div className='flex md:mt-8 ss:mt-10 mt-8 border-t-[1px] 
        border-main md:pt-6 ss:pt-8 pt-4 items-center'>
          <BiCopyright className='sm:mr-1 mr-1 md:text-[16px] 
          ss:text-[18px] text-[15px] mt-1 text-white' />

          <p className='md:text-[13px] ss:text-[16px] text-[12px] 
          text-white md:mt-1 ss:mt-1 mt-0.5'>
            2024 Envoy Angel Shipping and Logistics Ltd. All Rights Reserved.
          </p>
        </div>

        <p>
            Designed and Developed by <span className='font-bold'>
                <a href='https://www.pluggresources.com'>
                    Plugg Resources
                </a>
            </span>
        </p>
      </motion.div>
    </section>
  )
};

export default SectionWrapper(Footer, '');