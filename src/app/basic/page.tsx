"use client"
import React from 'react'
import { ProjectDetail, ProjectDetailBasic } from '@/DataHandler/ProjectDetail'
import { ProjectCard } from '@/GlobalComponents/Card'
import { useRouter } from 'next/navigation';

const Basic = () => {
  const router = useRouter();
  return (
    <main className=''>
      <h1 className='title-primary'>basic js project</h1>
      <section className=' flex flex-wrap gap-1 mt-5'>
      {ProjectDetailBasic.map((e:ProjectDetail , i:number , k:Array<ProjectDetail>)=>{
          return <ProjectCard classprop="m-auto"  key={e._id} name={e.name} description={e.description} img={e.img} onClick={()=>{router.push(e.route)}}/>
        })}
      </section>
    </main>
  )
}

export default Basic