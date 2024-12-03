import React from 'react'
import hamburger from '../assets/Vector (1).png'

const Navbar = () => {
  return (
    <div className=' flex justify-between px-10 items-center shadow-lg lg:px-20 '>
        {/* logo text */}
        <h2 className='text-[20px] text-primary  lg:text-[36px] font-poppins logopadding'>Eventrakka</h2>
        {/* hamburger imgae that hides on large screens  */}
        <div className='pt-5 pb-5'> <img src={hamburger} alt=""  className="h-5 w-6  lg:hidden "/></div>


        {/* nav items that show up on large screens  */}
        <div className='hidden lg:flex lg:gap-10 xl:gap-20 font-poppins navPadding text-primary'>
            <a href="">Home</a>
            <a href="">Events</a>
            <a href="">Community</a>
            <a href="">About</a>
            <a href="">Login</a>
            

        </div>
    </div>
  )
}

export default Navbar