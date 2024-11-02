
import React from 'react'
import sample from "@/public/sample.json"
import Link from 'next/link';
export default function Series(e) {
 
   return (
    <div className='w-full h-full flex flex-wrap justify-center gap-4 pt-5'>
      {sample && sample.entries.map((e) => 
        
        <div  key={e.title}  className={`w-[80%] md:w-[45%] lg:w-[30%] h-[450px] rounded-lg hover:duration-300 hover:ease-out hover:opacity-70 hover:border hover:border-white ${e.programType === "series"? "hidden" : "block"}`}>
         
           
            <div className='w-full h-[90%] '>
              <img 
              className='w-full h-full' 
              src={(e.releaseYear >= 2010 && e.programType === "movie")? e?.images["Poster Art"]?.url : ""} 
              alt=""
               />
            </div>
            <Link href={`movies/${e.title}`}>
             <h2  className='text-black text-2xl cursor-pointer'>{e?.programType === "movie"? e.title : console.log(e.programType)}</h2>
            </Link>
         


        </div>
      )}
    </div>
  );
}

