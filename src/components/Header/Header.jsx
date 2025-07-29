import React from 'react'
import Container from '../Container/Container'
import ThemeBtn from './ThemeBtn'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
        <div className='flex sticky z-50 top-1 justify-between shadow-md bg-base-300/90 items-center p-5 max-w-6xl mx-auto w-full'>
            <div id="brand">
                <NavLink to={"/"} className='text-lg font-bold'>HireMe</NavLink>
            </div>
            <div id="navbar" className='flex items-center gap-5'>
                <NavLink to={"/saved-job"} className={({isActive}) => `text-sm font-semibold ${isActive ? "text-primary" : "text-base-content"}`}>Saved Jobs</NavLink>
                <ThemeBtn />
                <div id="profile">
                    profile
                    {/* <img src="" alt="profile" /> */}
                </div>
            </div>
        </div>
  )
}

export default Header