import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { FaArrowRight } from "react-icons/fa6";

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.5,
            ease: 'easeIn',
        },
    }),
};

const TestCard = ({ title, image, description, name, profession, direction  }) => {

  return (
    <motion.div
        className="rounded-2xl relative w-full flex bg-mainBlack md:gap-6"
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        variants={slideVariants}
        transition={{ duration: 0.5 }}
    >
        <div className='flex flex-col md:gap-5 ss:gap-5 gap-2 md:p-10 
        ss:p-6 p-4 justify-center items-start tracking-tight w-full'>
            <h1 className='text-white md:text-[30px] ss:text-[25px] 
            text-[18px] font-medium md:leading-[2.2rem] md:max-w-[20ch]
            ss:leading-[2.3rem] leading-[2.3rem]'>
                "{title}"
            </h1>

            <p className='text-main3 md:leading-[20px]
            ss:leading-[20px] leading-[18px] md:text-[14px] 
            ss:text-[14px] text-[13px]'>
                {description}
            </p>

            <div className='flex flex-col'>
                <p className='text-white md:leading-[20px]
                ss:leading-[20px] leading-[18px] md:text-[13px] 
                ss:text-[14px] text-[13px] font-semibold'>
                    {name}
                </p>

                <p className='text-main3 md:leading-[20px]
                ss:leading-[20px] leading-[18px] md:text-[12px] 
                ss:text-[12px] text-[11px]'>
                    {profession}
                </p>
            </div>
        </div>

        <div className='flex w-2/3'>
            <img 
                src={image}
                alt='Testimonial'
                className='object-cover rounded-r-2xl'
            />
        </div>
    </motion.div>
  )
};

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const testimonialsLength = testimonials.length;

    const scrollLeft = () => {
        if (activeIndex > 0) {
            setDirection(-1);
            setActiveIndex(activeIndex - 1);
        }
    };
    
    const scrollRight = () => {
        if (activeIndex < testimonialsLength - 1) {
            setDirection(1);
            setActiveIndex(activeIndex + 1);
        }
    };


  return (
    <section className='relative w-full min-h-[600px] flex items-center'>
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

            <div className='flex items-center md:gap-10 ss:gap-8 gap-6'>
                <button 
                    className='border-mainBlack border-[3px] md:p-3 ss:p-3 
                    p-2 rounded-full grow2'
                    onClick={scrollLeft}
                    disabled={activeIndex === 0}

                >
                    <FaArrowRight size={22} 
                        className="transform rotate-180 text-mainBlack"
                    />
                </button>

                <div className='overflow-hidden w-full flex'>
                    <AnimatePresence custom={direction}>
                        <TestCard
                            key={activeIndex}
                            {...testimonials[activeIndex]}
                            direction={direction}
                        />
                    </AnimatePresence>
                </div>

                <button 
                    className='md:p-3 ss:p-3 p-2 border-mainBlack
                    rounded-full grow2 border-[3px]'
                    onClick={scrollRight}
                    disabled={activeIndex === testimonialsLength - 1}
                >
                    <FaArrowRight size={22} 
                        className="text-mainBlack"
                    />
                </button>
            </div>
        </div>
    </section>
  )
};

export default SectionWrapper(Testimonial, '');