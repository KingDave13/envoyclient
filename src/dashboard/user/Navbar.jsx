import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { PiBell } from "react-icons/pi";
import { profilepic } from "../../assets";

const Navbar = () => {
  return (
    <section className='w-full flex items-center z-20 border-b border-b-main7'>
      <div className="w-full flex items-center py-5 px-8 justify-between">
        <div className='bg-mainalt w-[50%] rounded-full flex p-3 gap-3
        items-center'>
          <IoSearchOutline
            className='w-[1.3rem] h-auto text-main2'
          />

          <input
            type="text"
            placeholder="Search for anything"
            className="text-main4 focus:outline-none text-[15px] 
            placeholder:text-main4 font-semibold tracking-tight bg-transparent"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-mainalt rounded-full p-3">
            <FiMail
              className='text-main2 text-[20px]'
            />
          </div>

          <div className="bg-mainalt rounded-full p-3">
            <PiBell
              className='text-main2 text-[20px]'
              strokeWidth={3}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden">
              <img
                src={profilepic}
                alt="profilepic"
                className="w-11 h-11 object-cover"
              />
            </div>

            <p className="text-[16px] tracking-tight text-main2
            font-semibold">
              Peter Alaks
            </p>

            <MdKeyboardArrowDown
              className='text-main2 text-[20px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Navbar;