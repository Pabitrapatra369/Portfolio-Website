import Link from 'next/link'
import React from 'react'

type Props = {}

const Post = (props: Props) => {
  return (
    <Link href="/posts/slug" className=" flex items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 bg-violet-100 rounded-lg shadow-lg shadow-gray-300 p-3">
      <div className='w-[40%]'>
        <img src="/fourth.jpg" alt="blog image" className='w-full object-cover rounded-lg  ' height={100} width={100}/>
      </div>
      <div className=' w-[65%] flex flex-col items-start '>
            <h1 className=' font-bold text-xl'>Why Learning TypeScript is Important in 2023</h1>
            <div className='flex items-center  space-x-1 text-violet-500 text-sm '>
              <p>Author:</p>
              <p className=' font-bold'>Pk Patra</p>
            </div>
            <div className=' w-full flex justify-between items-center  space-x-1 text-violet-500 text-sm '>
              <p className=' text-xs'>2023/09/03</p>
              <p className=' font-bold text-xs '>Click to read more</p>
            </div>
      </div>
    </Link>
  )
}

export default Post