import Logo from './images/logo.svg'
import Devices from './images/illustration-devices.svg'
import Hamburger from './images/icon-hamburger.svg'
import Close from './images/icon-close.svg'
import './App.css'
import { useState } from 'react';

function App() {
  
  const [ burger, setHamburger ] = useState(false)

  const hamburgerActive = () => {
    if (burger === false) {
      setHamburger(true)
      console.log(burger)
    } else {
      setHamburger(false)
      console.log(burger)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div className="w-1/2 bg-slate-200 h-[44%] absolute right-0 text-transparent rounded-bl-[90px]">...</div>

      <img src={Devices} alt="#" className='absolute top-[200px] right-[-200px] max-w-[65%] min-h-[400px] lg:max-w-[75%] md:w-[100%] md:max-w-[97%] md:min-h-[230px] md:max-h-[250px] md:top-[120px] md:right-[-20px] sm:min-h-[200px] sm:max-w-full'/>

      <div className="pt-16 pl-28 pr-28 lg:pl-20 lg:pr-20 md:pt-12 md:pl-10 md:pr-10 sm:pl-7 sm:pr-7">

        <nav className='flex justify-between sticky'>
          <img src={Logo} alt="#" />

          <div id="menu-ham" className={`flex uppercase barlow-c ${burger ? "md:flex-col md:absolute md:w-[100%] md:bg-white md:mt-14 md:shadow-xl md:rounded-md" : "hidden"}`}>
            <p className='mr-10 text-blue-950 font-bold m-auto lg:mr-7 md:m-auto md:p-2'>Product</p>
            <p className='mr-10 text-blue-950 font-bold m-auto lg:mr-7 md:m-auto md:p-2'>Features</p>
            <p className='mr-10 text-blue-950 font-bold m-auto lg:mr-7 md:m-auto md:p-2'>Pricing</p>
            <div className='mr-10 bg-slate-300 w-2 h-2 m-auto rounded-full lg:mr-7 md:m-auto md:w-full md:h-[2px] md:bg-slate-300'></div>
            <p className='font-bold text-slate-600 m-auto md:p-2'>Login</p>
          </div>

          <img src={Hamburger} alt="#" className={`hidden w-10 ${burger ? "md:hidden" : "md:flex"}`} onClick={hamburgerActive}/>
          <img src={Close} alt="#" className={`hidden w-8 ${burger ? "md:flex" : "md:hidden"}`} onClick={hamburgerActive}/>
        </nav>

        <section className='mt-[150px] md:mt-[330px] md:max-w-[315px] md:m-auto sm:max-w-[240px]'>
          <p className='barlow text-xl uppercase text-gray-400 tracking-widest lg:text-base sm:text-[14px]'><span className='bg-slate-800 p-1 pl-2 pr-2 text-white rounded-3xl barlow-c font-bold m-auto'>NEW</span> Monograph Dashboard</p>
          
          <h1 className='barlow-c font-bold text-blue-950 leading-[60px] mt-5 text-[55px] w-[450px] uppercase lg:text-[40px] lg:leading-[45px] lg:w-[350px] sm:mt-[10px] sm:text-[30px] sm:w-[250px] sm:leading-[35px]'>Powerful insights into your team</h1>
          
          <p className='text-gray-600 barlow max-w-[250px] text-[20px] mt-6 mb-8 lg:text-[15px] sm:mt-2 sm:mb-4'>Project planning and time tracking for agile teams</p>

          <p className='m-auto leading-4 tracking-wider text-[20px] uppercase barlow text-gray-500 lg:text-[15px] sm:text-[11px]'><button className='p-5 bg-[#FF5C5C] barlow-c font-bold uppercase text-white rounded-2xl sm:p-3'>Schedule a demo</button> to see a live preview</p>
        </section>

      </div>

    </div>
  );
}

export default App;
