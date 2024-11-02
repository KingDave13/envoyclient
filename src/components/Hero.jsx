import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from "react-icons/hi";
import { websearch, heroImages, socialproof, curve } from '../assets';
import { SectionWrapper2 } from '../hoc';


const ImageCard = ({ image }) => {
    return (
        <div className='w-[550px] h-[250px]'>
            <img 
                src={image}
                alt='heroImage'
                className='rounded-2xl w-full'
            />
        </div>
    );
};


const Hero = () => {
    const navigate = useNavigate();
    const trackContainerRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const [imagesToShow, setImagesToShow] = useState(5);

    const updateImagesToShow = () => {
        if (window.innerWidth <= 1440) {
            setImagesToShow(3);
        } else {
            setImagesToShow(heroImages.length);
        }
    };

    useEffect(() => {
        updateImagesToShow();

        window.addEventListener('resize', updateImagesToShow);
        return () => window.removeEventListener('resize', updateImagesToShow);
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (trackContainerRef.current && !trackContainerRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [trackContainerRef]);

  return (
    <section className='relative w-full md:min-h-[500px] ss:min-h-[800px] 
    items-center flex flex-col md:gap-14 ss:gap-10 gap-8 md:mt-44 ss:mt-0 
    mt-10'>
        <div className='relative items-center w-full max-w-[68rem] flex'
        >
            <div className='md:items-center ss:items-center w-full flex 
            flex-col md:gap-8 ss:gap-6 gap-6'>
                <motion.div variants={textVariant(0.3)}
                className='flex flex-col justify-center md:gap-6 ss:gap-6 gap-4
                items-center'
                >
                    <h1 className='text-primary font-[700] md:text-[57px]
                    ss:text-[50px] text-[33px] md:leading-[4.2rem] tracking-tight
                    ss:leading-[65px] leading-[38px] text-center
                    md:max-w-[25ch] relative'>
                        <span className="relative inline-block">
                            Secure
                            <img 
                                src={curve}
                                alt="curve-line" 
                                className="absolute top-0 -left-2 w-full 
                                h-auto scale-[1.23] pointer-events-none 
                                z-[-10]" 
                            />
                        </span> and seamless deliveries across borders
                    </h1>

                    <p className='text-main font-[500] md:text-[17px] 
                    md:leading-[1.3rem] ss:leading-[1.3rem] leading-[1.3rem] 
                    ss:text-[17px] text-[14px] md:max-w-[80ch] ss:max-w-[620px]
                    max-w-[320px] text-center tracking-tight'>
                        With Envoy Angel, your shipments are in safe hands. 
                        From quick and easy bookings to 24/7 tracking, we're 
                        here to ensure a smooth logistics experience for 
                        every shipment, big or small.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(0.5)}>
                    <div className='flex flex-row md:gap-5 ss:gap-5 gap-3 
                    items-center text-white'>
                        <a href='/'
                        className='bg-primary text-[13px] py-3 px-6 flex
                        text-white rounded-full grow4 cursor-pointer w-1/8
                        items-center gap-3'
                        >
                            <p>
                                Book a Shipment
                            </p>
                            
                            <HiOutlineArrowRight className='text-[14px]'/>
                        </a>
                        
                        <motion.div ref={trackContainerRef} 
                            className={`text-[13px] rounded-full py-3 px-6 flex
                            items-center
                            ${isExpanded 
                            ? 'border border-secondary' 
                            : 'bg-secondary text-white grow4 cursor-pointer gap-3'}`}
                            animate={{ width: isExpanded ? '310px' : '173px' }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            style={{ overflow: 'hidden' }}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsExpanded(true);
                            }}
                        >
                            {isExpanded ? (
                                <input
                                    type="text"
                                    placeholder="Enter Tracking Number"
                                    className="flex-grow text-main
                                    focus:outline-none text-[13px]"
                                    onBlur={() => setIsExpanded(false)}
                                />
                            ) : (
                                <p>
                                    Track Shipment
                                </p>
                            )}
                            <img src={websearch} alt='trackshipment'
                            className={`w-5 h-5 ${isExpanded 
                                ? 'wht2 cursor-pointer'
                                : 'wht'}`}
                            />
                        </motion.div>
                    </div>  
                </motion.div> 
            </div>
        </div>

        <motion.div variants={textVariant(0.7)} 
        className='flex items-center justify-center w-full relative'>
            <div className='overflow-hidden w-full flex'>
                <div className='flex gap-6 w-full items-center justify-center'>
                    {heroImages.slice(0, imagesToShow).map((item, index) => (
                        <div key={index}>
                            <ImageCard 
                                image={item}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='absolute top-[55%] w-1/4'>
                <img 
                    src={socialproof} 
                    alt='socialproof'
                    className='w-[100%]'
                />
            </div>
        </motion.div>
    </section>  
  )
};

export default SectionWrapper2(Hero, 'hero');