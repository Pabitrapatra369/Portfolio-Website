import React from 'react'
import Project from './Project'
import Motion from './Motion'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className=' h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24 '>
       <h1 className="  text-2xl uppercase tracking-[20px] text-violet-500">
        Projects
      </h1>
      <Motion  delay={1} direction={'right'}>
      <div className=' hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 '>
          <Project/>
          <Project/>
          <Project/>
      </div>
      <div className=' grid md:hidden grid-cols-1 md:grid-cols-3 gap-8 '>
          <Project/>
          <Project/>
          
      </div>
      </Motion>
      
      <p className='text-center text-xs text-violet-500 cursor-pointer '><Link href="/projects">See more...</Link></p>
    </section>
  )
}

export default Projects