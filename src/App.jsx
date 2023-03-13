import React,{useState} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {CreateFairLaunch,CreateLaunch,CreateLock,Home,LaunchPadList,Liquidity,Token,Pool1,Pool2,Pool3,Pool4,Form1,Form2,Form3,Viewlock} from './pages'
import Navbar from './components/Navbar'
import Navbtns from './components/Navbtns'
import Connect from './components/Connect'
import { motion } from 'framer-motion'

const App = () => {
  
  const [navToggle, setNavToggle] = useState(false);

  const navClickHandle = () =>{
    setNavToggle((prev) => !prev)
  }

  const [meta, setMeta] = useState(false)

  const metaHandleClick = () => {
    setMeta((prev) => !prev)
  }

  const [show1, setShow1] = useState(false);

  const setshowfunc1 = () => {
    setShow1((prev) => !prev)
  }

  const [show2, setShow2] = useState(false);

  const setshowfunc2 = () => {
    setShow2((prev) => !prev)
  }


  return (
    <div className=' bg-cprimary' >
      
        <Connect 
          meta={meta}
          metfun={metaHandleClick}
        />

      <div className=' sticky'>
        <Navbar 
          func={navClickHandle}
          tog={navToggle}
          metafun={metaHandleClick}
        />
      </div>
      <div className='flex '>
        <motion.div 
          className={`hidden md:flex overflow-x-hidden`}
          animate={navToggle? {width:[250, 70,]}: ''}
          transition={{ duration: 0.5 }}
          >
          <div>
            <Navbtns 
              togglenav1={setshowfunc1}
              togglenav2={setshowfunc2}
              toggle={navToggle}
            />
          </div>
        </motion.div>
        {
          navToggle ?         
            show1 ? 
              <div className='bg-cdimblack h-[80px] w-[160px] absolute text-center mt-[5.5%] ml-[5%] cnav' onMouseLeave={setshowfunc1}>
                <ul>
                  <Link to="/createlaunch"><li className='text-gray-500 text-[15px] font-medium navHover p-2 '>Create Launchpad</li></Link>
                  <Link to="/launchpadlist"><li className='text-gray-500 text-[15px] font-medium navHover p-2 '>Launchpad List</li></Link>
                </ul>
              </div>
            : null
          : null
        }
        {
          navToggle ?         
            show2 ? 
              <div className='bg-cdimblack  h-[80px] w-[160px] absolute text-center mt-[11%] ml-[5%] cnav' onMouseLeave={setshowfunc2}>
                <ul>
                  <Link to="/createlock"><li className='text-gray-500 text-[15px] font-medium navHover p-2 '>Create Lock</li></Link>
                  <Link to="/token"><li className='text-gray-500 text-[15px] font-medium navHover p-2 '>Token List</li></Link>
                  {/* <Link to="/liquidity"><li className='text-gray-500 text-[15px] font-medium navHover p-2 '>Luquidity</li></Link> */}
                </ul>
              </div>
            : null
          : null
        }
        <div className='flex justify-center w-[100%] pt-[5%] h-[100vh] md:h-[89vh]  overflow-y-scroll scrollnew1' >
            <div className='flex justify-center'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='createfairlaunch' element={<CreateFairLaunch />} />
                <Route path='createlaunch' element={<CreateLaunch />} />
                <Route path='createlock' element={<CreateLock />} />
                <Route path='launchpadlist' element={<LaunchPadList />} />
                <Route path='liquidity' element={<Liquidity />} />
                <Route path='token' element={<Token />} />
                <Route path='pool1' element={<Pool1 />} />
                <Route path='pool2' element={<Pool2 />} />
                <Route path='pool3' element={<Pool3 />} />
                <Route path='pool4' element={<Pool4 />} />
                <Route path='form1' element={<Form1 />} />
                <Route path='form2' element={<Form2 />} />
                <Route path='form3' element={<Form3 />} />
                <Route path='viewlock' element={<Viewlock />} />
              </Routes>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App