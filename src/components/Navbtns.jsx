import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { auth,doc,home,lock,rocket,shield,telegram,twitter,arrow, arrowdown } from '../assets'

const styles = 'flex flex-row navHover  p-3 pl-0 rounded-sm mb-4 pr-[75px] ';


const Navbtns = ({togglenav1, togglenav2, toggle}) => {

  const [navarrow1, setNAvArrow1] = useState(false);

  const handleClick1 = () => {
    setNAvArrow1((prev) => !prev)
  }

  const [navarrow2, setNAvArrow2] = useState(false);

  const handleClick2 = () => {
    setNAvArrow2((prev) => !prev)
  }



  return (
    <div className='sticky bg-cdimblack flex flex-col p-6 h-[89.1vh]   overflow-y-scroll scrollnew '>
        <Link to='/'><div className={styles}>
        
          <div className='flex gap-[21px] w-full '>
            <div className='     '>
              <img src={home} alt="home" className='linkColor p-1 w-[26px]'  />
            </div>
            <div>
              <h1 className=' text-gray-400 font-medium text-[16px]'>Home</h1>
             </div>
          </div>
        
      </div></Link>
      <div className={styles} onClick={toggle ? null : handleClick1}>
        <Link to>
          <button>
            <div className='flex gap-[22px] '>
              <div className=' w-[26px]' onMouseEnter={togglenav1}>
                <img src={rocket} alt="home" className='linkColor p-1'  />
              </div>
              <div>
                  <h1 className='  text-gray-400 font-medium text-[16px] cnavh'>Launchpads</h1>
              </div>
              <div className='mr-[-1000px] '>
                <img src={navarrow1 ? arrowdown : arrow} alt=""/>
              </div>
            </div>
          </button>
        </Link>
      </div>
      {
        navarrow1 ?
          <motion.div
            initial={{x: -100}}
            animate={{x:0}}
            transition={{ duration: 0.5 }}
            className='mt-[-20px] flex flex-col justify-center items-center ml-10  py-2'
          >
            <ul className='ml-auto w-[24vh]'>
              <Link to="/createlaunch"><li className='text-gray-500 text-[15px] font-medium navHover p-2 text-left '>Create Launchpad</li></Link>
              <Link to="/launchpadlist"><li className='text-gray-500 text-[15px] font-medium navHover p-2 text-left'>Launchpad List</li></Link>
            </ul>
          </motion.div>
        : null
      }
      <div className={styles} onClick={toggle ? null : handleClick2}>
        <Link>
          <button>
            <div className='flex gap-[22px] '>
              <div className=' w-[26px]' onMouseEnter={togglenav2}>
                <img src={lock} alt="home" className='linkColor p-1'  />
              </div>
              <div>
                  <h1 className=' text-gray-400 font-medium text-[16px]'>LI-AI Lock</h1>
              </div>
              <div className='mr-[-1000px] ml-2'>
                <img src={navarrow2 ? arrowdown : arrow} alt="" />
              </div>
            </div>
          </button>
        </Link>
      </div>
      {
        navarrow2 ?
          <motion.div
            initial={{x: -100}}
            animate={{x:0}}
            transition={{ duration: 0.5 }}
            className='mt-[-20px] flex flex-col justify-center items-center pl-10  py-2'
          >
            <ul className='ml-auto w-[24vh]'>
              <Link to="/createlock"><li className='text-gray-500 text-[15px] font-medium navHover p-2 text-left'>Create Lock</li></Link>
              <Link to="/token"><li className='text-gray-500 text-[15px] font-medium navHover p-2 text-left'>Token List</li></Link>
              {/* <Link to='/liquidity'><li className='text-gray-500 text-[15px] font-medium navHover p-2 text-left'>Luquidity</li></Link> */}
            </ul>
          </motion.div>
        : null
      }
        <Link to='#'><div className={styles}>
          <div className='flex gap-[22px]'>
            <div className='    w-[26px]'>
              <img src={auth} alt="home" className='linkColor p-1'  />
            </div>
              <div>
                <h1 className=' text-gray-400 font-medium text-[16px]'>KYC&Audit</h1>
              </div>
          </div>
      </div></Link>
        <a href='#'><div className={styles}>
          <div className='flex gap-[22px]'>
            <div className='    w-[26px]'>
              <img src={doc} alt="home" className='linkColor p-1'  />
            </div>
              <div>
                <h1 className=' text-gray-400 font-medium text-[16px]'>Docs</h1>
              </div>
          </div> 
      </div></a>
        <a href='https://web.telegram.org/'><div className={styles}>
          <div className='flex gap-[22px]'>
            <div className='    w-[26px]'>
              <img src={telegram} alt="home" className='linkColor p-1'  />
            </div>
              <div>
                <h1 className=' text-gray-400 font-medium text-[16px]'>Telegram</h1>
              </div>

          </div>
      </div></a>
        <a href='https://twitter.com/?lang=en'><div className={styles}>
          <div className='flex gap-[22px]'>
            <div className='    w-[26px]'>
              <img src={twitter} alt="home" className='linkColor p-1'  />
            </div>
              <div>
                <h1 className=' text-gray-400 font-medium text-[16px]'>Twitter</h1>
              </div>
          </div>
      </div></a>
    </div>
  )
}

export default Navbtns