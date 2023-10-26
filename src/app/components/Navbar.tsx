import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='max-w-7xl mx-auto p-5 flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://facebook.com" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://twitter.com" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://twitter.com" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://twitter.com" />

        </div>
        <div className='flex items-center space-x-4 md:space-x-8'>
            <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href="/projects">Projects</Link>
            <Link className='text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base'  href="/blogs">Blogs</Link>
        </div>
    </nav>
  )
}

export default Navbar