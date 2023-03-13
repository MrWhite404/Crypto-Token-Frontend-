import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.svg'
import menu2 from '../assets/menu2.svg'
import logo from '../assets/logo.png'
import Navbtns from './Navbtns'
import close1 from '../assets/close1.svg'
import { motion } from 'framer-motion'

const Navbar = ({func, tog, metafun}) => {
    
    const [resmob, setResMob] = useState(false)

    const modHandleClick = () => {
        setResMob((prev) => !prev);
    }

  return (
    <div className='p-4 sticky w-full top-0 left-0 right-0 bg-cdimblack border-b-[1px] border-b-gray-800'>
        <div className='flex justify-between w-full'>
            <div className=' cursor-pointer flex'>
                <button onClick={func}>
                    <img src={tog ? menu2 : menu} alt="menu" className='w-[30px] hidden md:block '/>
                </button>
                <button onClick={modHandleClick}>
                    <img src={menu} alt="menu" className='w-[30px] block md:hidden '/>
                </button>
                <div className='ml-4 flex'>
                    <Link to='/'>
                        <div className='flex flex-row'>
                            <img src={logo} alt="logo" className=' w-[40px] sm:block  hidden'/>
                            <h1 className=' text-cyellow font-bold text-[20px] xs:text-[25px] ml-2'>LI-AI-PAD</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-end mr-2'>
                <button className=' text-cprimary px-4 xs:px-6 font-medium bg-cyellow rounded-lg' onClick={metafun}>
                    Connect
                </button>
            </div>
        </div>
        {
            resmob ? 
                <motion.div
                    initial={{x: -300}}
                    animate={{x:0}}
                    transition={{ duration: 0.5 }}
                    className='text-center absolute h-[100vh] bg-cdimblack  ml-[-20px] mt-[-50px]'
                >
                    <img src={close1} alt="menu" className='w-[28px]  md:hidden ml-auto m-2 p-1' onClick={modHandleClick}/>
                    <Navbtns />
                </motion.div>
            : null
        }
    </div>
  )
}

export default Navbar