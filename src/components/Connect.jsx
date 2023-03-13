import React from 'react'
import { close, first, second, third, fourth } from '../assets'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Connect = ({meta , metfun}) => {


  return (
    meta ? <div className='absolute  h-[100%] w-[100%] bg_pop z-10 flex justify-center items-center'>
        <motion.div 
        className=' lg:w-[40%] h-[68%] xs:h-[53%] sm:h-[75%] sm:w-[60%] maindiv rounded-lg'
        initial={{y: -600}}
        animate={{y:0}}
        transition={{ duration: 0.5 }}
        >
            <div className='flex justify-between p-4 border-b-[1px] border-b-white'>
                <div>
                    <h1 className='text-white font-bold text-[30px]'>Connect a wallet</h1>
                </div>
                <div className='pt-3 pr-2 cursor-pointer' onClick={metfun}>
                    <img src={close} alt="" />
                </div>
            </div>
            <div>
                <Link>
                    <div className='flex  m-12 mt-6 mb-6 hovermeta cursor-pointer  p-4  rounded-xl border-[#cde7ff]'>
                        <img src={first} alt="sbv" className='w-[7%]' />
                        <div className='mx-4' />
                        <h1 className='text-white text-[20px]'>Metamask</h1>
                    </div>
                </Link>
                <Link>
                    <div className='flex  mx-12 mb-6 hovermeta cursor-pointer  p-4  rounded-xl border-[#cde7ff]'>
                        <img src={second} alt="sbv" className='w-[7%]' />
                        <div className='mx-4' />
                        <h1 className='text-white text-[20px]'>WalletConnect</h1>
                    </div>
                </Link>
                <Link>
                    <div className='flex  mx-12 mb-6 hovermeta cursor-pointer  p-4  rounded-xl border-[#cde7ff]'>
                        <img src={third} alt="sbv" className='w-[7%]' />
                        <div className='mx-4' />
                        <h1 className='text-white text-[20px]'>Coinbase</h1>
                    </div>
                </Link>
                <Link>
                    <div className='flex  mx-12 hovermeta cursor-pointer  p-4  rounded-xl border-[#cde7ff]'>
                        <img src={fourth} alt="sbv" className='w-[7%]' />
                        <div className='mx-4' />
                        <h1 className='text-white text-[20px]'>TrustWallet</h1>
                    </div>
                </Link>
            </div>
        </motion.div>
    </div> : <div></div>
  )
}

export default Connect