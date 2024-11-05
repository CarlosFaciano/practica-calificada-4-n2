"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import sample from "@/public/sample.json"
import Movies from "./movies/page";
import Series from "./series/page";

export default function Home() {
  
  



  
  return (
    <>
       
      <div className=" w-screen flex-wrap ">

        <header className='flex h-20 w-screen text-white font-bold bg-black/70 items-center'>
          <h2 className='text-3xl ms-20 '>Popular Titles</h2>
        </header>
        <section className="mt-4 h-full w-full  flex justify-center flex-wrap">
          <div className="w-4/5 md:w-[30%] lg:w-[12%] h-full ms-20  flex items-center justify-center flex-col ">
            <article className="w-full h-60  bg-black flex items-center justify-center bg-[url('/assets/placeholder.png')] bg-no-repeat bg-center">
             
              <Link href="/series">
                <h2 className="cursor-pointer text-center  text-white text-2xl ">SERIES</h2>
              </Link>
            </article>
            <h2 className="">Popular Series</h2>
          </div>
           
          <div className="w-4/5 md:w-[30%] lg:w-[12%] h-full ms-20  flex  items-center justify-center flex-col">
            <article className="w-full h-60  bg-black flex items-center justify-center bg-[url('/assets/placeholder.png')] bg-no-repeat bg-center">
             
              <Link href="/movies">
                <h2 className="text-center text-white  text-2xl">MOVIES</h2>
              </Link>
            </article>
            <h2 className="cursor-pointer">Popular Movies</h2>

          </div>
          
        </section>
      </div>
    </>
  );
}

