"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import sample from "@/public/sample.json"
export default function UserSerie () {
    let{title} = useParams()
    title = decodeURIComponent(title)
    
  return (
    <div className='w-[90%] h-full flex flex-col items-center pt-5'>
        {title && sample.entries.map((e)=>
        <>
        <h2 className='text-black font-bold text-4xl'>{e.title === title && e.title}</h2>
        
         <div className='w-1/2 h-full flex justify-center '>
            {e.title === title &&
            <>
              <img className='w-3/5 h-[450px] pt-5 rounded-xl' src={ e?.images["Poster Art"]?.url} alt="" />
              <div className='flex flex-col'>
              <h2 className='ps-4 font-medium txt-md pt-5'>{e.description}</h2>
              <h2 className='pt-20 ps-4 font-bold text-lg'>{e.releaseYear}</h2>
              </div>
            </>
              }
         </div>
         </>
        )}
    </div>
  )
}