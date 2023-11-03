"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Motion from './Motion'
type Props = {}

const Navbar = (props: Props) => {
  const pathname=usePathname()
  // console.log(pathname)
  return (
    <nav className=' sticky z-10 top-0 max-w-7xl mx-auto p-5 flex items-center justify-between'>
       <Motion  delay={1} direction={'left'}>
       <div className='flex items-center space-x-6'>
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.linkedin.com/in/pabitra-patra-558875225/" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://github.com/Pabitrapatra369" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.instagram.com/pkpatra_/" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.facebook.com/profile.php?id=100094139532005" />

        </div>
       </Motion>
        <Motion  delay={1} direction={'right'} >
        <div className='flex items-center space-x-4 md:space-x-8'>
            {pathname!=="/projects"&&<Link className=' text-violet-900 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base' href="/projects">Projects</Link>}
            {pathname!=="/posts"&&<Link className='text-violet-900 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base'  href="/posts">Blogs</Link>}
            {pathname!=="/"&&<Link className='text-violet-900 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base'  href="/">Home</Link>}
        </div>
        </Motion>
       
    </nav>
  )
}

export default Navbar