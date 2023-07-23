"use client"
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { OnSearchCard } from './Card';
import { searchQuery } from '@/DataHandler/ProjectDetail';

const Navbar = () => {
  const router = useRouter()
  return (
    <main className='h-20 flex-center justify-between px-2 md:px-10 gap-x-4 relative z-10'>
      {/* <img src="" alt="" /> */}
      <div className='logo relative overflow-hidden cursor-pointer' onClick={() => { router.push("/") }}>
        {`{LS}`}
      </div>
      <SearchBar />
      <div className='flex-center gap-x-2'>
        <GitHubIcon className='icon' />
        {/* <LinkedInIcon className='icon'/> */}
        <button className='btn' onClick={() => { router.push("/contact") }}>contact us</button>
      </div>
    </main>
  )
}

export default Navbar


const SearchBar = () => {
  const router = useRouter()
  const [searchResult, setsearchResult] = useState<string[] | any>([false])
  
  const handleSearch = (e: any) => {
    let val = e.target.value
    let arr = searchQuery.filter((e: any) => {
      return e = e.name.includes(val)
    })
    if (arr.length == 0 || val.length <= 0) {
      setsearchResult([false])
      return 0;
    }
    setsearchResult(arr)
  }
  return (
    <div className='hidden md:flex search relative shadow-sm'>
      <input type="search" placeholder='search . . .' className='peer '
        onChange={handleSearch} />
      <SearchIcon />
      {/*add hidden */}
      <div className='hover:flex flex-col hidden peer-focus:flex absolute top-10 bg-white h-56 overflow-hidden overflow-y-auto rounded shadow-2xl p-1 scrollbar w-full'>
        {/* card */}

        {
          searchResult.map((e: any, i: number, k: any) => {
            if (e == false) {
              return <h1 className='text-center font-semibold p-2 py-5'>No Data Found 👻</h1>
            }
            if (k.length > 0) {
              return <OnSearchCard key={e?._id} name={e.name} description={e.description} onClick={() => { router.push(e.route) }} />
            }
          })
        }
      </div>
    </div>
  )
}