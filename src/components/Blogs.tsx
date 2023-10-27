import React from 'react'
import Blog from './Blog'

type Props = {}

const Blogs = (props: Props) => {
  return (
    <section className=' h-screen max-w-7xl p-5 mx-auto flex flex-col justify-center items-center space-y-24 '>
        <h1 className=" text-2xl uppercase tracking-[20px] text-violet-500">
        Blogs
      </h1>
      <div className='w-full flex flex-col items-start space-y-3 '>
         <Blog/>
         <Blog/>
         <Blog/>
         <Blog/>
      </div>
      <p className='text-center text-xs text-violet-500 cursor-pointer '>See more...</p>
    </section>
  )
}

export default Blogs