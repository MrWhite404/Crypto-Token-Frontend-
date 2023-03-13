import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Lgcard = ({ title, content }) => {
  return (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{duration: 0.3}}
        className='text-center py-6 rounded-md px-8 bg-cdimblack w-[240px] mt-4'
    >
        <img src={logo} className='w-[35%] mx-auto' />
        <h1 className='text-white text-[30px] font-bold'>{title}</h1>
        <p className='text-white mt-2'>{content}</p>
    </motion.div>
  )
}

export default Lgcard