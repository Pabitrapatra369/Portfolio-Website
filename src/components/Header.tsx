
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import TypeWriter from './TypeWriter'
import CursorComponent from './CursorComponent'
import { SocialIcon } from 'react-social-icons'
import Motion from './Motion'
type Props = {}

const Header = (props: Props) => {
  return (
   <section className=' relative h-[calc(100vh-56px)] z-10 w-full flex justify-center items-center '>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <Motion delay={1} direction={'down'}>
        <div className=' bg-white rounded-full h-80 w-80 flex justify-center items-center  shadow-md shadow-gray-400 hover:scale-105 duration-500 overflow-hidden border-purple-500'>
            <img src="/picofme.png" alt="image" height={350} width={350}/>
        </div>
        </Motion>
        <Motion  delay={1} direction={''}>
        <p className=' font-bold'> 
            I build responsive full stack layouts
        </p>
        </Motion>
        <Motion  delay={1} direction={''}>
        <div className='flex justify-center space-x-2 items-center font-extrabold'>
       <TypeWriter/>
       <CursorComponent/>
       </div>
        </Motion>

        <Motion  delay={1} direction={'up'}>
       <div className='flex items-center space-x-6 '>
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.linkedin.com/in/pabitra-patra-558875225/" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://github.com/Pabitrapatra369" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.instagram.com/pkpatra_/" />
        <SocialIcon style={{height:25,width:25}} bgColor='#793FEF' className=' hover:scale-125 duration-200' url="https://www.facebook.com/profile.php?id=100094139532005" />

        </div>
        </Motion>
      </div>
      <div className=' absolute w-[50%] h-[30%] -z-10 md:w-[20%] filter blur-3xl opacity-70 bg-gradient-to-r from bg-fuchsia-500 to-indigo-600'/>
     
   </section>
  )
}

export default Header 