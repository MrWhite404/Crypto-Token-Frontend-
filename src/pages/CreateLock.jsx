import React from 'react'
import { motion } from 'framer-motion'

const CreateLock = () => {
  return (
    <div className='flex justify-center w-[10px]  h-[115vh]'>
        <div className='flex flex-col'>
        <div className='mx-auto'>
          <h1 className='text-cyellow font-bold text-[18px]'>CREATE LOCK</h1>
        </div>
        <motion.div 
            whileHover={{ y: -5 }}
            transition={{duration: 0.3}}
            className='bg-cdimblack md:p-8 p-4 py-8 rounded-md mt-12 w-[50vh] xs:w-[43vh]  sm:w-[100vh] lg:w-[160vh]'
        >
            <div className='flex justify-center'>
                <h1 className='text-white font-bold text-[25px] text-center'>Enter the token lock information</h1>
            </div>
            <form className='flex flex-col mt-8'>
                <div>
                    <p className='text-white'>Token or LP Token address <span className=' text-red-600'>*</span></p>
                </div>
                <div className='mt-4 mb-5'>
                    <input type="text" placeholder='' className=' bg-cdimblack inputc rounded-md w-[100%] h-[40px] text-white' />
                </div>
                <div className='flex flex-col mt-3'>
                    <div className='flex my-2'>
                        <input type="checkbox" name="busd" id="" />
                        <p className='text-white ml-2'>Use another owner?</p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mt-4'>
                  <div className=' w-full sm:w-[45%]'>
                    <h1 className='text-white'>Title<span className=' text-red-600'>*</span></h1>
                    <input type="text" placeholder='' className=' bg-cdimblack inputc rounded-md w-[100%] h-[40px] mt-2 text-white' />
                  </div>
                  <div className='w-full sm:w-[45%] mt-6 sm:mt-0'>
                    <h1 className='text-white'>Amount<span className=' text-red-600'>*</span></h1>
                    <input type="text" placeholder='' className=' bg-cdimblack inputc rounded-md w-[100%] h-[40px] mt-2 text-white' />
                  </div>
                </div>
                <div className='flex flex-col mt-8'>
                    <div className='flex'>
                        <input type="checkbox" name="bnb" id="" />
                        <p className='text-white ml-2'>Use vesting?</p>
                    </div>
                </div>
                <div className='mt-8'>
                  <input type="date" name="" id="" className=' bg-cdimblack inputc rounded-md w-[100%] h-[40px]  text-white'/>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className=' bg-cyellow py-2 px-4 rounded-md font-semibold'>Approve</button>
                </div>
            </form>
            <div className='mt-4'>
          <p className='text-white max-w-[1000px]'>Note : Please exclude Our Contract address project from fees, rewards, max tx amount to start locking tokens.We don't support rebase tokens.</p>
      </div>
        </motion.div>
      </div>
  </div>
  )
}

export default CreateLock