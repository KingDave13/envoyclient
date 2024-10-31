import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { moveCards } from '../constants';

const MoveCard = ({ index, title, image, description }) => {

  return (
    <motion.div className='rounded-2xl relative md:basis-1/3 ss:basis-1/2 
    basis-full h-[500px] flex navsmooth cursor-pointer hover:shadow-xl'
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-3/4
        bg-gradient-to-b from-transparent to-primaryalt rounded-xl"
      />
      <div className="absolute bottom-0 left-0 right-0 h-2/3
        bg-gradient-to-b from-transparent to-primaryalt rounded-xl"
      />

      <div className='flex flex-col md:gap-4 ss:gap-2.5 absolute
      gap-2 md:p-8 ss:p-8 p-6 bottom-0'>
        <h1 className='text-white md:text-[30px] ss:text-[25px] 
        text-[18px] font-bold md:leading-[2.2rem] max-w-[10ch]
        ss:leading-[2.3rem] leading-[2.3rem]'>
          {title}
        </h1>

        <p className='text-white md:leading-[20px]
        ss:leading-[20px] leading-[18px] md:text-[13px] 
        ss:text-[14px] text-[13px]'>
          {description}
        </p>
      </div>
    </motion.div>
  )
};

const Testimonial = () => {
  return (
    <section className='relative w-full min-h-[700px] flex items-center'>
      <div className='flex flex-col w-full md:gap-12 ss:gap-10 gap-6'>
        <motion.div variants={textVariant()}
        className='flex flex-col justify-center items-center w-full md:gap-10
        ss:gap-8 gap-6'>
            <h1 className='text-primary font-bold md:text-[40px] 
            ss:text-[25px] text-[20px] tracking-tight md:leading-[0rem]
            ss:leading-[1.3rem] leading-[1.3rem]'>
                What our clients are saying
            </h1>

            <p className='text-main2 md:text-[15px] md:leading-[1.3rem] 
            ss:leading-[1.3rem] leading-[1.3rem] ss:text-[16px] text-[13px] 
            text-center font-semibold md:max-w-[75ch]'>
                Our commitment to exceptional service, seamless booking, 
                and reliable deliveries keeps our clients coming back 
                every time.
            </p>
        </motion.div>

        <div className='flex md:gap-8 ss:gap-8 gap-6 w-full'>
          {moveCards.map((card, index) => (
            <MoveCard
                key={index} 
                index={index} 
                {...card}
            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default SectionWrapper(Testimonial, '');