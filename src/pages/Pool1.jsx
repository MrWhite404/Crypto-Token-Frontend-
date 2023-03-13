import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Pool1 = () => {
  return (
     <div className='flex lg:flex-row flex-col gap-4 w-[50vh] xs:w-[43vh] md:h-[150vh] sm:w-[100vh] lg:w-[160vh]'>
      <div className=' bg-cdimblack p-8 h-[280vh] md:h-[140vh]  rounded-md'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='sm:w-[10%] w-[25%] '>
              <img src={logo} className='' />
          </div>
          <div className='ml-2 mt-4 text-[18px]'>
              <h1 className='text-white'>test Presale</h1>
          </div>
          </div>
          <div className=''>
              {/* <h1 className='text-white px-1 py-1  bg-blue-600 rounded-3xl text-[10px]'>PRESALE</h1> */}
              <h1 className='text-white mt-2  px-1 py-1  bg-blue-400 rounded-3xl text-[10px]'>CANCELED</h1>
          </div>
        </div>
        <div className='mt-8'>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Presale Address</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 text-[10px] xs:text-[12px] lg:text-[14px]'>0x82A99144149373f96710Dd24be9e6C233264D616</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Token Name</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0'>test</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Token Symbol</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0'>test</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Token Decimals</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0'>18</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold '>Token Address</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 text-[10px] xs:text-[12px] lg:text-[14px] text-center'>0x82A99144149373f96710Dd24be9e6C233264D616</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Total Supply</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>1,000 test</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Presale Rate</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>1 BNB = 10 test</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Listing Rate</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>1 BNB ~ 10 test</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Soft Cap</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>0.1 BNB</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Hard Cap</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>0.2 BNB</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Unsold Tokens</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>Burn</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Presale Start Time</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>2023-01-08 23:05</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Presale End Time</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>2023-01-08 23:15</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Listing On</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>Pancakeswap</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Liquidity Percent</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>51 %</h1>
            </div>
            <div className='flex justify-between flex-col text-center sm:flex-row sm:text-left mt-6'>
                <h1 className='text-gray-400 text-[20px] sm:text-[15px] font-semibold'>Liquidity Unlocked Time</h1>
                <h1 className='text-white sm:font-semibold mt-2 sm:mt-0 '>60 minutes</h1>
            </div>
        </div>
      </div>
      <div>
          <div  className='bg-cdimblack sm:h-[76vh] xs:h-[55vh] lg:w-[50vh] lg:ml-8 h-[80vh] rounded-md'>
            <div className='text-center pt-8'>
              <h1 className='text-white'>End</h1>
            </div>
            <div>
              <div className='mt-6'>
                  <div className='flex justify-between mt-4 px-8'>
                      <h1 className='text-[13px] text-cyellow '>00 D :</h1>
                      <h1 className='text-[13px] text-cyellow '>00 H :</h1>
                      <h1 className='text-[13px] text-cyellow '>00 M :</h1>
                      <h1 className='text-[13px] text-cyellow '>00 S</h1>
                  </div>
              </div>
              <div className='py-8 px-8 '>
                  <div className='w-[100%] h-[10px] rounded-2xl bg-cyellow mt-6'></div>
                  <div className='flex justify-between'>
                      <p className='text-white text-[12px]'>0 BNB</p>
                      <p className='text-white text-[12px]'>0.1 BNB</p>
                  </div>
              </div>
              <div className='py-8 px-8'>
                  <div className='flex justify-between'>
                      <p className='text-white'>Amount</p>
                  </div>
                  <div className='flex justify-between mt-4'>
                      <input type="text" className='w-[100%] bg-cdimblack outline-cyellow border-cyellow border-2
                       h-[40px]'/>
                  </div>
              </div>
              <div className='px-8'>
                 <Link to='/pool1' className=' '>
                   <button className=' bg-cyellow w-full py-2 font-bold '>Submit</button>
                 </Link>
              </div>
              <div className='flex flex-col p-4 px-8 justify-between mt-2'>
                    <h1 className='text-white font-semibold text-[14px]'>Your Contribution</h1>
                    <h1 className='text-white font-semibold text-[14px] '>0 BNB</h1>
              </div>
              {/* <div className='px-4'>
                 <Link to='/pool1' className=' '>
                   <button className=' bg-cyellow w-full py-2 font-bold '>Claim Token</button>
                 </Link>
              </div> */}
            </div>
          </div>
          <div>
        </div>
        <div  className='bg-cdimblack h lg:ml-8 rounded-md mt-4'>
            <div className='mt-6 py-4'>
                <div className='flex justify-between mt-2 px-8'>
                    <h1 className='text-white  text-[14px]'>Sale Type</h1>
                    <h1 className='text-white text-[14px]'>Presale</h1>
                </div>
                <div className='flex justify-between mt-2 px-8'>
                    <h1 className='text-white text-[14px]'>Access type</h1>
                    <h1 className='text-white text-[14px]'>Public</h1>
                </div>
                <div className='flex justify-between mt-2 px-8'>
                    <h1 className='text-white text-[14px]'>Min. Allocation</h1>
                    <h1 className='text-white text-[14px]'>0.5 BNB</h1>
                </div>
                <div className='flex justify-between mt-2 px-8'>
                    <h1 className='text-white text-[14px]'>Max. Allocation</h1>
                    <h1 className='text-white text-[14px]'>0.1 BNB</h1>
                </div>
            </div>   
        </div>
        <div  className='bg-cdimblack h lg:ml-8 rounded-md mt-4'>
            <div className='mt-6 py-4'>
                <div className='flex justify-between pl-8'>
                    <h1 className='text-white  text-[20px] font-bold'>Admin Zone</h1>
                </div>
                <div className='flex justify-between mt-2 px-8 py-6'>
                    <h1 className='text-white text-[18px]'>You are not onwer of pool</h1>
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Pool1