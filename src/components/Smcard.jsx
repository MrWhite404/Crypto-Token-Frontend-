import React from 'react'
import { motion } from 'framer-motion'

const Smcard = ({ amount, text }) => {
  return (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{duration: 0.3}}
        className='text-center py-12 rounded-md px-8 bg-cdimblack w-[240px]'
    >
        <h1 className='text-white text-[30px] font-bold'>{amount}</h1>
        <p className='text-white mt-2'>{text}</p>
    </motion.div>
  )
}

export default Smcard