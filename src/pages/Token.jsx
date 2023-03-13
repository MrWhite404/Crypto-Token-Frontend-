import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Liquidity = () => {
  return (
<div className='flex justify-center  md:h-[82vh]'>
      <div className='flex flex-col '>
          <div className=' text-center '>
              <h1 className='text-cyellow font-bold text-[18px]'>LAUNCHPAD LIST</h1>
          </div>
          <div className='flex mt-12 justify-center md:justify-start '>
              <div className='cuborder p-2'>
                  <h1 className='text-cyellow '>LP LOCK LIST</h1>
              </div>
              <div className='ml-2 cuborder p-2'>
                  <h1 className='text-cyellow'>MY LOCK LIST</h1>
              </div>
          </div>
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{duration: 0.3}}
            className=' bg-cdimblack mt-8 grid grid-rows-3 gap-8 md:grid-cols-3 md:gap-0 text-center p-8 w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh]'
          >
            <div className='lg:px-4'>
              <div>
                <h1 className=' text-gray-400 font-bold'>NO</h1>
              </div>
              <div className='flex pt-6'>
                  <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png" alt="pic" className='md:w-[45px] md:h-[45px] md:block hidden' />
                  <div className='mx-auto '>
                    <h1 className='text-white font-semibold'>MetaAI/Wrapped BNB</h1>
                    <h1 className='text-white '>METAAI/WBNB</h1>
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
                <h1 className='text-gray-400  font-bold'>ACTION</h1>
              </div>
              <div className='pt-6'>
                <Link to='/viewlock'><h1 className='text-cyellow'>View</h1></Link>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Liquidity
