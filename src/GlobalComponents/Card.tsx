"use client"
import React, { useState, memo, useRef, useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export const ProjectCard = memo((props: any) => {
    return (
        <div className={`bg-pink-50  p-2 max-w-xs rounded-lg transition-all cursor-pointer shadow-md hover:shadow-lg hover:bg-pink-100 group flex-shrink-0 ${props.classprop}`} {...props}>
            <img className="rounded-md cover" src="./assets/sample_1.png" alt="img" />
            <div className="flex-center justify-between py-2">
                <div>
                    <p className='capitalize font-medium text-base leading-3'>name of app ok</p>
                    <small>calcualter app makes life eassy</small>
                    <small>calcualter app makes life eassy</small>
                </div>
                <button className='bg-black w-14 h-10 bg-opacity-20  rounded-full group-hover:bg-pink-500 transition-all'>
                    <ArrowForwardIcon className='group-hover:fill-white' />
                </button>
            </div>
        </div>
    )
})

export const LayoutStoreGroup = memo((props: any) => {
    const { children, title } = props;
    const parentRef = useRef<any>(0);
    const handleScroll = (x: number = 150): void => {
        parentRef.current.scrollBy(x, 0);
    }
    return (
        <main>
            <div className='flex-center justify-between p-1 px-3 md:px-10 text-xl font-semibold'>
                <h1 className="capitalize">{title}</h1>
                <Link href={title}>
                    <ArrowForwardIcon />
                </Link>
            </div>
            <section className='flex-center gap-x-2 overflow-x-auto p-2 pb-6 justify-start zero-scrollbar scroll-smooth relative' ref={parentRef}>
                {children}
            </section>
        </main>
    )
})

export const OnSearchCard = (props:any) => {
    const {name , description , stack , img} = props
    return (
        <main className='bg-gray-100 mb-1 p-2 rounded flex gap-x-2 cursor-pointer transition-all hover:bg-gray-200 hover:shadow-md' {...props}>
            <img className="rounded-full cover w-14 aspect-square" src="./assets/sample_1.png" alt="img" />
            <div className='flex flex-col'>
                <p className='font-medium capitalize'>{name}</p>
                <p className='leading-3 text-sm'>{description}</p>
                <p className='text-sm'>{stack}</p>
            </div>
        </main>
    )
}