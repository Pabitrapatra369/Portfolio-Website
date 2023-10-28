import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ProjectPage = (props: Props) => {
  return (
    <section className=' w-full bg-[#F1F6F9]'>
      <Navbar/>
       <div className=' min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4 '>
        <h1 className=' font-extrabold text-3xl '>MERN Stack Blog App</h1>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2 text-sm text-violet-500 '>
                <p>Cereated at:</p>
                <p className=' font-bold'>2023/09/06</p>
            </div>
            <button className='text-[#f1f6f9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm '>
                <Link href="/">Link</Link>
            </button>
        </div>
        <img src="/fourth.jpg" alt="" className=' w-full object-cover border-2 border-violet-500 ' height={500} width={500} />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, quibusdam ipsum! Libero vel cupiditate labore soluta reiciendis a sunt dolorem deserunt accusamus repellat sapiente saepe officia doloremque aut impedit, totam quae, accusantium doloribus, placeat laboriosam nisi dicta perferendis error. Eos adipisci perspiciatis eius animi error itaque eaque, doloremque nam soluta atque. Sed accusantium expedita perferendis, quis mollitia dolorum officia temporibus amet officiis cupiditate reprehenderit delectus a tempora, laudantium quam neque porro perspiciatis, nemo fugiat. Corrupti asperiores quia illo, excepturi dolor pariatur aliquam voluptatem ullam saepe provident, alias tempore! Minima saepe error possimus blanditiis optio provident ipsam quas quo reprehenderit quibusdam.</p>
        <div className='flex items-center scroll-px-4 text-violet-500'>
            <h3>Tech Used:</h3>
            <div className='flex items-center space-x-2 text-sm font-bold'>
                   <p className=' bg-violet-200 rounded-lg p-1'>NEXT 13</p>
            </div>
        </div>
       </div>
      <Footer/>
    </section>
  )
}

export default ProjectPage