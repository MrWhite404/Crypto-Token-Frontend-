import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const From3 = () => {
  return (
    <div className='flex flex-col gap-4'>
          <div className='mx-auto'>
          <h1 className='text-cyellow font-bold text-[18px]'>CREATE LAUNCH</h1>
        </div>
            <div className=' md:block hidden'>
          <div className='flex justify-between gap-[180px] mt-8  cursor-pointer'>
            <div className='text-center'>
              <h1 className=' text-black  px-3 py-[4px] rounded-full text-[15px] bg-cyellow inline-block'>1</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-cyellow  inline-block'>2</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-cyellow  inline-block'>3</h1>
            </div>
            <div className='text-center'>
              <h1 className=' text-gray-800  px-3 py-[4px] rounded-full text-[15px] bg-cyellow  inline-block'>4</h1>
            </div>
          </div>
          <div className=' border-2 border-cyellow ml-1 mt-[-1rem] z-0'  />
          <div className='flex  mt-4 ml-[-20px] justify-between'>
            <div>
              <p className=' text-cyellow text-[15px] italic'>Verify Token</p>
            </div>
            <div>
              <p className=' text-cyellow mr-[50px] text-[15px] italic'>DeFi Launchpad info</p>
            </div>
            <div>
              <p className=' text-cyellow ml-[-75px] text-[15px] italic'>Add Additional info</p>
            </div>
            <div>
              <p className=' text-cyellow text-[15px] italic'>Finish</p>
            </div>
          </div>
        </div>
      <div className=' bg-cdimblack p-8 h-[1000vh] w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh]  rounded-md'>
        <div className='mt-8'>
            {/* <div className='flex flex-col text-center sm:flex-row justify-between '>
6              <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Total Token</h1>
                <h1 className='text-cyellow text-right font-semibold sm:mt-0 mt-2'>321,600 Test Token</h1>
            </div> */}
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Total Token</h1>
                <h1 className='text-cyellow text-right mt-2 sm:mt-0 mx-auto sm:mx-0'>321,600 Test Token</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Factory Adress</h1>
                <h1 className='text-white text-right mt-2 sm:mt-0 text-[10px] xs:text-[12px] lg:text-[14px]'>0x82A99144149373f96710Dd24be9e6C233264D616</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Token Name</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>PinkSaleTestToken</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Token Symbol</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>PinkSaleTestToken</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px] '>Token Decimals</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>18</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Presale Rate</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>200 PinkSaleTestToken</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Listing Rate</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>150 PinkSaleTestToken</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Sale Method</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>Public</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Soft Cap</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>500 BNB</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Hard Cap</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>1000 BNB</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Unsold Tokens</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>Burn</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Minimum Buy</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>0.01</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Maximum Buy</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>0.1</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Luquidity</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>80%</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Start Time</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>2022-05-01T16:43 (UTC)</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>End Time</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>2022-05-06T16:43 (UTC)</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Luquidity Lockup Time</h1>
                <h1 className='text-white text-[14px] mt-2 sm:mt-0'>365 Minutes</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Website</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://test.com">https://test.xyz</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Facebook</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://facebook.com">https://facebook.com</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Twitter</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://twitter.com">https://twitter.com</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>End Time</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'>2022-05-06T16:43 (UTC)</h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Telegram</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://telegram.com">https://telegram.com</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Github</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://github.io">https://github.io</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Instagram</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://instagram.com">https://instagram.com</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Discord</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://discord.gg">https://discord.gg</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Reddit</h1>
                <h1 className='text-cyellow text-[14px] mt-2 sm:mt-0'><a href="https://reddit.com">https://reddit.com</a></h1>
            </div>
            <div className='flex flex-col text-center sm:flex-row justify-between  mt-6'>
                <h1 className=' text-gray-400 sm:text-white font-semibold sm:text-[16px] text-[20px]'>Description</h1>
                <h1 className='text-white text-[14px] max-w-[200px] md:max-w-[400px] text-center sm:text-right mx-auto sm:mx-0 mt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
        </div>
        <div className='flex justify-center mt-4 gap-3'>
          <Link to='/form2'>
            <button className=' bg-white py-2 px-6 rounded-md font-semibold'>Back</button>
          </Link>
          <Link to='#'>
            <button className=' bg-cyellow py-2 px-6 rounded-md font-semibold'>Submit</button>
          </Link>
        </div>
      </div>
      <div className='pb-[6%]'>
  </div>
 </div>
  )
}

export default From3