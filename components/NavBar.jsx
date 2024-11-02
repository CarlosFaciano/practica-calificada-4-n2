import React from 'react'

export default function NavBar() {
    return (
        <nav className='flex w-full h-20 bg-gradient-to-b from-blue-400 to-blue-700 items-center justify-between '>
            <h2 className='text-4xl text-white font-bold ms-4 lg:ms-20'>DEMO Streaming</h2>
            <div className='flex text-white gap-x-8 items-center me-10'>
                <ul>
                    <li>Log in</li>
                </ul>
                <button className='w-40 h-10 bg-gradient-to-b from-white via-black to-black/80 '>Start your free trial</button>
            </div>
        </nav>
    )
}
