import React from 'react'
import Test from '../components/Test'
import Lgcard from '../components/Lgcard'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const LaunchPadList = () => {
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col'>
        <div className=' text-center pt-'>
            <h1 className='text-cyellow font-bold text-[18px]'>LAUNCHPAD LIST</h1>
        </div>
        <div className='flex mt-12 justify-center md:justify-start '>
            <div className='cuborder p-2'>
                <h1 className='text-cyellow '>All</h1>
            </div>
            <div className='ml-2 cuborder p-2'>
                <h1 className='text-cyellow'>MY CONTRIBUTION</h1>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-center mx-auto gap-4 mt-16'>
          <div className=' grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 md:gap-14 lg:gap-14 '>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{duration: 0.3}}
              className='text-center py-4 rounded-md px-4  bg-cdimblack w-[45vh] xs:w-[40vh] xs:mx-auto sm:w-[320px] md:mb-[20%]'
            >
              <div className='flex justify-between'>
                  <div className='flex'>
                      <div className='w-[30%]'>
                          <img src={logo} className='' />
                      </div>
                      <div className='ml-2 mt-4 text-[18px]'>
                          <h1 className='text-white'>Test</h1>
                      </div>
                  </div>
                  <div className=''>
                      <h1 className='text-white px-1 py-1  bg-blue-600 rounded-3xl text-[10px]'>PRESALE</h1>
                      <h1 className='text-white mt-2  px-1 py-1  bg-blue-400 rounded-3xl text-[10px]'>COMPLETED</h1>
                  </div>
              </div>
              <div className='mt-6'>
                  <div className='flex justify-between'>
                      <h1 className='text-white font-semibold'>Total raised</h1>
                      <h1 className='text-white font-semibold'>0.2 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Softcap</h1>
                      <h1 className='text-white font-semibold'>0.1 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Hardcap</h1>
                      <h1 className='text-white font-semibold'>0.2 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Min / Max Alloc</h1>
                      <h1 className='text-white font-semibold'>0.1 - 0.2 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <h1 className='text-white '>Start Time:</h1>
                      <h1 className='text-white '>2023-01-08 23:05</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white '>End Time:</h1>
                      <h1 className='text-white '>2023-01-08 23:15</h1>
                  </div>
              </div>
              <div>
                  <div className='w-full h-[10px] rounded-2xl bg-cyellow mt-6'></div>
                  <div className='flex justify-between'>
                      <p className='text-white text-[12px]'>100.00%</p>
                      <p className='text-white text-[12px]'>1 BNB = 10 test</p>
                  </div>
              </div>
                    <Link to='/pool1'>
                    <button className=' bg-cyellow w-full py-2 rounded-lg mt-7'>view pool</button>
                  </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{duration: 0.3}}
              className='text-center py-4 rounded-md px-4  bg-cdimblack w-[45vh] xs:w-[40vh] xs:mx-auto  sm:w-[320px] mt-8 sm:mt-0 md:mb-[20%]'
            >
              <div className='flex justify-between'>
                  <div className='flex'>
                      <div className='w-[30%]'>
                          <img src={logo} className='' />
                      </div>
                      <div className='ml-2 mt-4 text-[18px]'>
                          <h1 className='text-white'>Test</h1>
                      </div>
                  </div>
                  <div className=''>
                      <h1 className='text-white px-1 py-1  bg-blue-600 rounded-3xl text-[10px]'>PRESALE</h1>
                      <h1 className='text-white mt-2  px-1 py-1  bg-red-400 rounded-3xl text-[10px]'>CANCELED</h1>
                  </div>
              </div>
              <div className='mt-6'>
                  <div className='flex justify-between'>
                      <h1 className='text-white font-semibold'>Total raised</h1>
                      <h1 className='text-white font-semibold'>0 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Softcap</h1>
                      <h1 className='text-white font-semibold'>0.05 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Hardcap</h1>
                      <h1 className='text-white font-semibold'>0.1 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Min / Max Alloc</h1>
                      <h1 className='text-white font-semibold'>0.05 - 0.1 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <h1 className='text-white '>Start Time:</h1>
                      <h1 className='text-white '>2023-01-08 10:50</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white '>End Time:</h1>
                      <h1 className='text-white '>2023-01-09 00:00</h1>
                  </div>
              </div>
              <div>
                  <div className='w-full h-[10px] rounded-2xl bg-gray-600 mt-6'></div>
                  <div className='flex justify-between'>
                      <p className='text-white text-[12px]'>0%</p>
                      <p className='text-white text-[12px]'>1 BNB = 10 test</p>
                  </div>
              </div>
              <div className='mt-6'>
                    <Link to='/pool2'>
                    <button className=' bg-cyellow w-full py-2 rounded-lg'>view pool</button>
                     </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{duration: 0.3}}
              className='text-center py-4 rounded-md px-4  bg-cdimblack w-[45vh] xs:w-[40vh] xs:mx-auto  sm:w-[320px] mt-8 md:mt-0 md:mb-[20%]'
            >
              <div className='flex justify-between'>
                  <div className='flex'>
                      <div className='w-[30%]'>
                          <img src={logo} className='' />
                      </div>
                      <div className='ml-2 mt-4 text-[18px]'>
                          <h1 className='text-white'>Test</h1>
                      </div>
                  </div>
                  <div className=''>
                      <h1 className='text-white px-1 py-1  bg-blue-600 rounded-3xl text-[10px]'>PRESALE</h1>
                      <h1 className='text-white mt-2  px-1 py-1  bg-red-400 rounded-3xl text-[10px]'>CANCELED</h1>
                  </div>
              </div>
              <div className='mt-6'>
                  <div className='flex justify-between'>
                      <h1 className='text-white font-semibold'>Total raised</h1>
                      <h1 className='text-white font-semibold'>0 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Softcap</h1>
                      <h1 className='text-white font-semibold'>0.05 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Hardcap</h1>
                      <h1 className='text-white font-semibold'>0.1 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Min / Max Alloc</h1>
                      <h1 className='text-white font-semibold'>0.01 - 0.1 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <h1 className='text-white '>Start Time:</h1>
                      <h1 className='text-white '>2023-01-08 10:35</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white '>End Time:</h1>
                      <h1 className='text-white '>2023-01-08 10:38</h1>
                  </div>
              </div>
              <div>
                  <div className='w-full h-[10px] rounded-2xl bg-gray-600 mt-6'></div>
                  <div className='flex justify-between'>
                      <p className='text-white text-[12px]'>0%</p>
                      <p className='text-white text-[12px]'>1 BNB = 10 test</p>
                  </div>
              </div>
              <div className='mt-6'>
                    <Link to='/pool3'>
                    <button className=' bg-cyellow w-full py-2 rounded-lg'>view pool</button>
                     </Link>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{duration: 0.3}}
              className='text-center py-4 rounded-md px-4  bg-cdimblack w-[45vh] xs:w-[40vh] xs:mx-auto  sm:w-[320px] mt-8 md:mt-0 md:mb-[20%]'
            >
              <div className='flex justify-between'>
                  <div className='flex'>
                      <div className='w-[30%]'>
                          <img src='https://uploads-ssl.webflow.com/6371b0491316250c140cc011/6371b283f0039425d860e074_Nova-p-500.png' className='' />
                      </div>
                      <div className='ml-2 mt-4 text-[18px]'>
                          <h1 className='text-white'>Launch</h1>
                      </div>
                  </div>
                  <div className=''>
                      <h1 className='text-white px-1 py-1  bg-blue-600 rounded-3xl text-[10px]'>PRESALE</h1>
                      <h1 className='text-white mt-2  px-1 py-1  bg-red-400 rounded-3xl text-[10px]'>CANCELED</h1>
                  </div>
              </div>
              <div className='mt-6'>
                  <div className='flex justify-between'>
                      <h1 className='text-white font-semibold'>Total raised</h1>
                      <h1 className='text-white font-semibold'>0 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Softcap</h1>
                      <h1 className='text-white font-semibold'>3 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Hardcap</h1>
                      <h1 className='text-white font-semibold'>4 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white font-semibold'>Min / Max Alloc</h1>
                      <h1 className='text-white font-semibold'>0.01 - 4 BNB</h1>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <h1 className='text-white '>Start Time:</h1>
                      <h1 className='text-white '>2022-12-25 20:30</h1>
                  </div>
                  <div className='flex justify-between mt-2'>
                      <h1 className='text-white '>End Time:</h1>
                      <h1 className='text-white '>2022-12-27 03:30</h1>
                  </div>
              </div>
              <div>
                  <div className='w-full h-[10px] rounded-2xl bg-gray-600 mt-6'></div>
                  <div className='flex justify-between'>
                      <p className='text-white text-[12px]'>0%</p>
                      <p className='text-white text-[12px]'>1 BNB = 1,000 lch</p>
                  </div>
              </div>
              <div className='mt-6'>
                  <Link to='/pool4'>
                    <button className=' bg-cyellow w-full py-2 rounded-lg'>view pool</button>
                  </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='pb-[6%]'>

      </div>
    </div>
  )
}

export default LaunchPadList