
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
type Props = {}

const Header = (props: Props) => {
  return (
   <section className='h-[calc(100vh-56px)] w-full justify-center items-center '>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div className=' bg-white rounded-full h-40 w-40 flex justify-center items-center  shadow-md shadow-gray-400 hover:scale-105 duration-500 overflow-hidden border-purple-500'>
            <img src="/first.jpg" alt="image" height={150} width={150}/>
        </div>
        <p className=' font-bold'>
            I build responsive full stack layouts
        </p>
        
      </div>

   </section>
  )
}

export default Header 