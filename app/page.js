"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import sample from "@/public/sample.json"
import Movies from "./movies/page";
import Series from "./series/page";

export default function Home() {
  
  



  
  return (
    <>
       
      <div>

        <header className='flex h-20 w-screen text-white font-bold bg-black/70 items-center'>
          <h2 className='text-3xl ms-20 '>Popular Titles</h2>
        </header>
        <section className="mt-4 h-full  flex  ">
          <div className="w-[12%] h-full ms-20  flex items-center justify-center flex-col">
            <article className="w-full h-60  bg-black flex items-center justify-center ">
              <img className="" src="/assets/placeholder.png" />
              <Link href="/series">
                <h2 className="cursor-pointer text-center absolute text-white text-2xl left-32">SERIES</h2>
              </Link>
            </article>
            <h2 className="">Popular Series</h2>
          </div>
           
          <div className="w-[12%] h-full ms-20  flex items-center justify-center flex-col">
            <article className="w-full h-60  bg-black flex items-center justify-center ">
              <img className="" src="/assets/placeholder.png" />
              <Link href="/movies">
                <h2 className="text-center absolute text-white left-96 text-2xl">MOVIES</h2>
              </Link>
            </article>
            <h2 className="cursor-pointer">Popular Movies</h2>

          </div>
          
        </section>
      </div>
    </>
  );
}

