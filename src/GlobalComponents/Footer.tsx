"use client"
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  let year = new Date().getFullYear().toLocaleString().replace(/[^0-9]/g , "");
  
  return (
    <main className='mt-auto flex-center flex-col p-5 opacity-90'>
      <div className='flex-center gap-x-2'>
      <GitHubIcon className='icon'/>
      <GitHubIcon className='icon'/>
      <GitHubIcon className='icon'/>
      </div>
      <small className='text-lg font-semibold mt-2'>copyright © legcy {year}</small>
    </main>
  )
}

export default Footer