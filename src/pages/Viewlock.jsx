import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Viewlock = () => {
  return (
    <div className='md:h-[83vh]'>
        <div className='flex lg:flex-row flex-col gap-4 '>
        <motion.div 
          whileHover={{ y: -5 }}
          transition={{duration: 0.3}}
          className=' bg-cdimblack p-8 h-[63vh] xs:h-[40vh] sm:h-[50vh] sm:w[50vh] rounded-md  mx-auto w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh]'
        >
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <div className='ml-2 mt-4 text-[18px]'>
                    <h1 className='text-white font-bold text-[25px]'>Lock info</h1>
                </div>
                </div>
              </div>
              <div className='h-[3px] bg-white mt-4'/>
              <div className='mt-8'>
                  <div className='flex justify-between'>
                      <h1 className='text-white font-medium'>Current Locked Amount</h1>
                      <h1 className='text-white font-medium '>974.6794</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-medium'>Current Values Locked</h1>
                      <h1 className='text-white font-medium'>$1,825</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-medium'>Liquidity Address</h1>
                      <h1 className='text-cyellow font-medium text-[10px] lg:text-[15px] text-right'>0x82A99144149373f9671<br/>0Dd24be9e6C233264D616</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-medium'>Pair Name</h1>
                      <h1 className='text-cyellow font-medium'>METAAI/WBNB</h1>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <h1 className='text-white font-medium '>Dex	</h1>
                      <h1 className='text-white font-medium '>Pancakeswap</h1>
                  </div>
              </div>
        </motion.div>
        </div>
        <div className='flex justify-center'>
      <div className='flex flex-col'>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{duration: 0.3}}
            className=' bg-cdimblack mt-8 grid grid-rows-6 gap-8 md:grid-cols-6 md:gap-0 text-center p-8 md:h-[20vh] rounded-sm w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh]'
          >
            <div className='lg:px-'>
              <div>
                <h1 className=' text-gray-400 font-bold'>Wallet</h1>
              </div>
              <div className='flex pt-6'>
                  <div className='mx-auto'>
                    <h1 className='text-white font-semibold'>MetaAI/Wrapped BNB</h1>
                  </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-gray-400  font-bold'>AMOUNT</h1>
              </div>
              <div className='pt-6'>
                <h1 className='text-white'>974.6794</h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-gray-400  font-bold'>Cycle(d)</h1>
              </div>
              <div className='pt-6'>
                <h1 className='text-white'>974.6794</h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-gray-400  font-bold'>Cycle Release(%)</h1>
              </div>
              <div className='pt-6'>
                <h1 className='text-white'>974.6794</h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-gray-400  font-bold'>TGE(%)</h1>
              </div>
              <div className='pt-6'>
                <h1 className='text-white'>974.6794</h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className='text-gray-400  font-bold'>Unlock time(UTC)</h1>
              </div>
              <div className='pt-6'>
                <Link to='/viewlock'><h1 className='text-white'>2023.06.03 13:04</h1></Link>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Viewlock