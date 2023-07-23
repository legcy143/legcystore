"use client"
import React from 'react'
import { ProjectDetail,ProjectDetailIntermediate } from '@/DataHandler/ProjectDetail'
import { ProjectCard } from '@/GlobalComponents/Card'
import { useRouter } from 'next/navigation';

const Intermediate = () => {
  const router = useRouter();
  return (
    <main className=''>
      <h1 className='title-primary'>Intermediate js project</h1>
      <section className=' flex flex-wrap gap-1 mt-5'>
      {ProjectDetailIntermediate.map((e:ProjectDetail , i:number , k:Array<ProjectDetail>)=>{
          return <ProjectCard classprop="m-auto"  key={e._id} name={e.name} description={e.description} img={e.img} onClick={()=>{router.push(e.route)}}/>
        })}
      </section>
    </main>
  )
}


export default Intermediate