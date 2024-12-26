import { useState, useEffect } from 'react';
import { ReactComponent as LocalIcon } from '../../assets/loc-ship.svg';
import { ReactComponent as InternationalIcon } from '../../assets/int-ship.svg';
import { HiOutlineArrowRight } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { blogpic } from '../../assets';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        const data = await response.json();
        const sortedCountries = [...data].sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);


  return (
    <section className='w-full h-full'>
      <div className='w-full h-full flex md:flex-row flex-col md:gap-20
      ss:gap-8 gap-6'>
        <div className='md:w-[70%] w-full flex flex-col md:gap-8 ss:gap-8 
        gap-6'>
          <div className='flex flex-col'>
            <h1 className='text-primary tracking-tight font-bold md:text-[30px] 
            ss:text-[28px] text-[22px]'>
              User Dashboard
            </h1>

            <h4 className='text-main2 tracking-tight font-medium md:text-[16px] 
            ss:text-[16px] text-[14px] md:leading-[1.5rem] ss:leading-[1.5rem] 
            leading-[1.3rem]'>
              Welcome to your user dashboard! You can see your shipments,
              perform tasks and much more.
            </h4>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-2'>
              <h4 className='tracking-tight text-main4 md:text-[16px] 
              ss:text-[16px] text-[14px] font-semibold'>
                Active Shipments
              </h4>

              <div className='w-3 h-3 rounded-full bg-greenSuccess'/>
            </div>

            <div className='w-full flex md:flex-row ss:flex-row flex-col 
            md:gap-6 ss:gap-6 gap-5'>
              <div className='md:w-[50%] bg-primary3 rounded-lg p-5 flex 
              flex-col gap-5'>
                <div className='flex items-center gap-2'>
                  <InternationalIcon 
                    className='w-[1.4rem] h-auto object-contain
                    text-primary'
                  />

                  <p className='text-primary tracking-tight md:text-[14px] 
                  ss:text-[15px] text-[13px] font-bold'>
                    International Shipping
                  </p>
                </div>

                <div className="w-full flex gap-5 items-center">
                  <div className="flex gap-2.5">
                    <img
                      src={
                        countries.find(
                          (country) => country.cca2 === 'IE'
                        )?.flags?.png
                      }
                      alt="flag"
                      className="w-10 h-[1.4rem] rounded-[0.2rem]"
                    />

                    <p className="md:text-[16px] ss:text-[16px] 
                    text-[14px] tracking-tight font-extrabold text-main2">
                      Ireland
                    </p>
                  </div>

                  <p className="md:text-[14px] ss:text-[15px] 
                  text-[13px] tracking-tight font-semibold text-main4">
                    to
                  </p>

                  <div className="flex gap-2.5">
                    <img
                      src={
                        countries.find(
                          (country) => country.cca2 === 'NG'
                        )?.flags?.png
                      }
                      alt="flag"
                      className="w-10 h-[1.4rem] rounded-[0.2rem]"
                    />

                    <p className="md:text-[16px] ss:text-[16px] 
                    text-[14px] tracking-tight font-extrabold text-main2">
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='text-[13px] font-medium text-main4
                  tracking-tight'>
                    Status
                  </p>

                  <h4 className='md:text-[16px] ss:text-[16px] text-[14px] 
                  tracking-tight font-extrabold text-main2'>
                    Package Shipped
                  </h4>

                  <div className='flex items-center gap-3.5'>
                    <p className="font-medium text-[13px] text-main4
                    tracking-tight">
                      Monday 28th October, 2024<span className='md:hidden ss:hidden'>, 11:25AM</span>
                    </p>

                    <div className='h-[3px] w-[3px] bg-main4
                    hidden md:flex ss:flex rounded-full'/>

                    <p className="font-medium text-[13px] tracking-tight 
                    text-main4 hidden md:flex ss:flex">
                      11:25AM
                    </p>
                  </div>

                  <h3 className='text-primary underline cursor-pointer
                  hover:text-secondary grow2 md:text-[15px] ss:text-[15px] 
                  text-[13px] font-semibold mt-6 tracking-tight'>
                    See shipment details
                  </h3>
                </div>
              </div>

              <div className='md:w-[50%] bg-primary3 rounded-lg p-5 flex 
              flex-col gap-5'>
                <div className='flex items-center gap-2'>
                  <LocalIcon 
                    className='w-[1.4rem] h-auto object-contain
                    text-primary'
                  />

                  <p className='text-primary tracking-tight md:text-[14px] 
                  ss:text-[15px] text-[13px] font-bold'>
                    Local Shipping
                  </p>
                </div>

                <div className="w-full flex gap-5 items-center">
                  <div className="flex gap-2.5">
                    <img
                      src={
                        countries.find(
                          (country) => country.cca2 === 'IE'
                        )?.flags?.png
                      }
                      alt="flag"
                      className="w-10 h-[1.4rem] rounded-[0.2rem]"
                    />

                    <p className="md:text-[16px] ss:text-[16px] 
                    text-[14px] tracking-tight font-extrabold text-main2">
                      Dublin
                    </p>
                  </div>

                  <p className="md:text-[14px] ss:text-[15px] 
                  text-[13px] tracking-tight font-semibold text-main4">
                    to
                  </p>
                  
                  <p className="md:text-[16px] ss:text-[16px] 
                  text-[14px] tracking-tight font-extrabold text-main2">
                    Galway
                  </p>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='text-[13px] font-medium text-main4
                  tracking-tight'>
                    Status
                  </p>

                  <h4 className='md:text-[16px] ss:text-[16px] text-[14px] 
                  tracking-tight font-extrabold text-main2'>
                    Awaiting drop-off
                  </h4>

                  <p className="font-medium text-[13px] text-main4
                  tracking-tight">
                    Drop your shipment at the selected pickup station
                  </p>

                  {/* <div className='flex items-center gap-3.5'>
                    <p className="font-medium text-[13px] text-main4">
                      Monday 28th October, 2024<span className='md:hidden ss:hidden'>, 11:25AM</span>
                    </p>

                    <div className='h-[3px] w-[3px] bg-main4
                    hidden md:flex ss:flex rounded-full'/>

                    <p className="font-medium text-[13px] tracking-tight 
                    text-main4 hidden md:flex ss:flex">
                      11:25AM
                    </p>
                  </div> */}

                  <h3 className='text-primary underline cursor-pointer
                  hover:text-secondary grow2 md:text-[15px] ss:text-[15px] 
                  text-[13px] font-semibold mt-6 tracking-tight'>
                    See shipment details
                  </h3>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-3 mt-2 cursor-pointer
            grow8'>
              <h3 className='text-primary md:text-[16px] ss:text-[16px] 
              text-[14px] font-semibold tracking-tight'>
                See all shipments
              </h3>

              <HiOutlineArrowRight className='text-[14px] text-primary'
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>

        <div className='md:w-[30%] ss:w-[50%] h-[90vh] w-full flex flex-col
        md:gap-8 ss:gap-8 gap-6'>
          <div className='w-full md:rounded-2xl ss:rounded-2xl rounded-xl
          h-[50%] relative'
          style={{
            backgroundImage: `url(${blogpic})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-3/4
              bg-gradient-to-b from-transparent to-black md:rounded-2xl 
              ss:rounded-2xl rounded-xl"
            />

            <div className='flex justify-between gap-5 w-full absolute 
            md:p-7 ss:p-7 p-5 bottom-0'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-white md:text-[20px] ss:text-[20px] 
                text-[17px] font-bold md:leading-[1.7rem] md:max-w-[17ch]
                ss:leading-[1.7rem] leading-[1.3rem] tracking-tight'>
                  The Ultimate Guide to Shipping Between Ireland and Nigeria
                </h2>

                <div className='flex items-center gap-3 cursor-pointer grow8'>
                  <p className='text-white tracking-tight md:text-[15px] 
                  ss:text-[14px] text-[13px] font-medium'>
                    New Blog Post
                  </p>

                  <HiOutlineArrowRight 
                    className='md:text-[15px] ss:text-[15px] text-[14px] 
                    text-white'
                  />
                </div>
              </div>

              <div className='md:w-[6rem] ss:w-[6rem] w-[4rem] h-auto 
              bg-white rounded-full cursor-pointer grow2'>
                <MdArrowOutward
                  className='md:w-[5rem] ss:w-[5rem] w-[3rem] 
                  h-auto md:p-5 ss:p-5 p-3 text-main2'
                />
              </div>
            </div>
          </div>

          <div className='w-full h-50%'>
            <div className='my-6 w-full md:rounded-2xl ss:rounded-2xl 
            rounded-xl md:p-7 ss:p-7 p-5 bg-mainalt flex flex-col md:gap-8 
            ss:gap-8 gap-6'>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;