"use client"
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <main className='h-20 flex-center justify-between px-10 gap-x-4'>
      {/* <img src="" alt="" /> */}
      <div className='logo relative overflow-hidden'>
        {`{LS}`}
      </div>
      <div className='search relative'>
        <input type="search" placeholder='search . . .' className='peer '/>
        <SearchIcon />
        <div className='hover:flex hidden peer-focus:flex absolute top-10 bg-white h-56 overflow-hidden overflow-y-auto rounded shadow-2xl p-1 scrollbar'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, labore officiis dignissimos nostrum tempore facilis, atque tenetur porro, nulla nihil eaque. Iure libero quas fugit nesciunt nulla atque cum quasi.</p>
        </div>
      </div>
      <div className='flex-center gap-x-2'>
        <GitHubIcon className='icon'/>
        {/* <LinkedInIcon className='icon'/> */}
        <button className='btn'>contact us</button>
      </div>
    </main>
  )
}

export default Navbar