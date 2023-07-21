"use client"
import { BasicCard } from '@/GlobalComponents/Card';
import Image from 'next/image'
import { useEffect } from 'react';


export default function Home() {
  return ( 
    <main>
      <section className='flex-center flex-col md:flex-row gap-1 p-1'>
      <BasicCard />
      <BasicCard /> 
      <BasicCard /> 
      <BasicCard /> 
      </section>
      <h1 className="font-bold text-5xl m-2 mt-10">
        start this project soon v 0.2
      </h1>
        <button className='btn'>button</button>
    </main>
  )
}
