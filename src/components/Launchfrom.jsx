import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Launchfrom = ({ name }) => {
  return (
    <div className='flex justify-center w-[10px]'>
      <div className='flex flex-col'>
        <div className='mx-auto'>
          <h1 className='text-cyellow font-bold text-[18px]'>{name}</h1>
        </div>
        <div className=' md:block hidden'>
          <div className='flex justify-between gap-[180px] mt-8  cursor-pointer'>
            <div className='text-center'>
              <h1 className=' text-black  px-3 py-[4px] rounded-full text-[15px] bg-cyellow inline-block'>1</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-gray-400 inline-block'>2</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-gray-400 inline-block'>3</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-gray-400 inline-block'>4</h1>
            </div>
          </div>
          <div className=' border-2 border-gray-400 ml-1 mt-[-1rem] z-0'  />
          <div className='flex  mt-4 ml-[-20px] justify-between'>
            <div>
              <p className=' text-cyellow text-[15px] italic'>Verify Token</p>
            </div>
            <div>
              <p className=' text-gray-400 mr-[50px] text-[15px] italic'>DeFi Launchpad info</p>
            </div>
            <div>
              <p className=' text-gray-400 ml-[-75px] text-[15px] italic'>Add Additional info</p>
            </div>
            <div>
              <p className=' text-gray-400 text-[15px] italic'>Finish</p>
            </div>
          </div>
        </div>
        <motion.div 
            whileHover={{ y: -5 }}
            transition={{duration: 0.3}}
            className='bg-cdimblack md:p-8 p-8 py-8 rounded-md mt-12 w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh]'
        >
            <div className='flex justify-center'>
                <h1 className='text-white font-bold text-[25px] text-center sm:text-left'>Enter the token address and verify</h1>
            </div>
            <form className='flex flex-col mt-8'>
                <div>
                    <p className='text-white'>Token address <span className=' text-red-600'>*</span></p>
                </div>
                <div className='mt-4 mb-5'>
                    <input type="text" placeholder='' className=' bg-cdimblack inputc rounded-md w-[100%] h-[40px] text-white' />
                </div>
                <div>
                    <p className='text-white'>Currency</p>
                </div>
                <div className='flex flex-col mt-3'>
                    <div className='flex'>
                        <input type="checkbox" name="bnb" id="" />
                        <p className='text-white ml-2'>BNB</p>
                    </div>
                    <div className='flex my-2'>
                        <input type="checkbox" name="busd" id="" />
                        <p className='text-white ml-2'>BUSD</p>
                    </div>
                    <div className='flex'>
                        <input type="checkbox" name="usdt" id=""/>
                        <p className='text-white ml-2'>USDT</p>
                    </div>
                </div>
                <div className='mt-4 mb-4'>
                    <p className='text-white'>Free Options</p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <input type="checkbox" name="bnb" id="" />
                        <p className='text-white ml-2'>0.5 BNB + 5% USDT raised only</p>
                    </div>
                    <div className='flex my-2'>
                        <input type="checkbox" name="busd" id="" />
                        <p className='text-white ml-2'>0.5 BNB + 2% USDT raised + 2% token sold</p>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <Link to='/form1'>
                      <button className=' bg-cyellow py-2 px-4 rounded-md font-semibold'>Approve</button>
                    </Link>
                </div>
            </form>
        </motion.div>
        <div className='mt-4 pb-[6%]'>
          <p className='text-white max-w-[1000px]'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
      </div>
      </div>
    </div>
  )
}

export default Launchfrom