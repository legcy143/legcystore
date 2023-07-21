"use client"
import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const BasicCard = () => {
    return (
        <div className="bg-pink-50  p-2 max-w-xs rounded-lg transition-all cursor-pointer shadow-lg hover:shadow-2xl group">
            <img className="rounded-md cover" src="./assets/sample_1.png" alt="img" />
            <div className="flex-center justify-between py-2">
                <div>
                    <p className='capitalize font-medium text-base leading-3'>name of app ok</p>
                    <small>calcualter app makes life eassy</small>
                </div>
                <button className='bg-black w-14 h-10 bg-opacity-20  rounded-full group-hover:bg-pink-500 transition-all'>
                    <ArrowForwardIcon className='group-hover:fill-white' />
                </button>
            </div>
        </div>
    )
}