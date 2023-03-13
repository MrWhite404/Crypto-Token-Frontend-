import React from 'react'
import Button from '../components/button'
import Smcard from '../components/Smcard'
import { Link } from 'react-router-dom'
import Lgcard from '../components/Lgcard'


const Home = ({name}) => {
  return (
    <div className='flex justify-center mt-12 md:mt-0 w-[50vh] xs:w-[43vh] sm:w-[100vh] lg:w-[160vh] '>
      <div className='flex flex-col'>
        <div className=' text-center'>
          <h1 className='text-white font-bold text-[30px]'>THE LAUNCHPAD YOU DESERVE IS HERE!</h1>
          <p className='text-white pt-6 font-semibold'>Innovating the EVM ecosystem through the NovaPad Defi Launchpad</p>
        </div>
        <div className='text-center flex justify-center gap-2 mt-12'>
          <Link to='/createlaunch'>
            <div className=' bg-cyellow py-2 px-4 rounded-md font-semibold'>Create Now</div>
          </Link>
          <Link>
            <div className=' bg-cyellow py-2 px-4 rounded-md font-semibold'>Learn More</div>
          </Link>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cold-3 lg:grid-cols-4 mx-auto gap-4 mt-16'>
          <Smcard 
            amount='$56.47'
            text='Total Liquidity Raised'
          />
          <Smcard 
            amount='4'
            text='Total Projects'
          />
          <Smcard 
            amount='2'
            text='Total Participants'
          />
          <Smcard 
            amount='$0.00'
            text='Total Value Locked'
          />
        </div>
        <div className=' text-center pt-12'>
          <h1 className='text-white font-bold text-[30px]'>A SUITE OF TOOLS FOR TOKEN SALES.</h1>
          <p className='text-white pt-6 font-semibold max-w-[850px] mx-auto'>A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!</p>
        </div>
        <div className='flex lg:flex-row flex-col justify-center mx-auto gap-4 mt-16'>
          <div className=' sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 gap-4 '>
            <Lgcard 
              title='Standard'
              content='Create standard tokens on ETH, BSC, AVAX, Fantom, Polygon.'
            />
            <Lgcard 
              title='Deflationary'
              content='Create deflationary tokens with tax and/or charity functions.'
            />
            <Lgcard 
              title='Customization'
              content='Create a token sale for your own custom token easily.'
            />
            <Lgcard 
              title='Launchpad'
              content='Use the token you mint to create a launchpad with just a few clicks'
            />
            <Lgcard 
              title='Branding'
              content='Adding logo, social links, description, listing on NovaPad.'
            />
            <Lgcard 
              title='Management'
              content='The portal to help you easily update content for your launchpad.'
            />
            <Lgcard 
              title='Community'
              content='Promote your launchpad to thousands of buyers on NovaPad.'
            />
            <Lgcard 
              title='Locking'
              content='Lock your liquidity to NovaSwap, PancakeSwap after presale.'
            />
          </div>
        </div>
        <div className='text-center mx-auto pt-12 pb-[6%]'>
          <p className='text-white max-w-[1026px]'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
        </div>
      </div>
    </div>
 
  )
}

export default Home