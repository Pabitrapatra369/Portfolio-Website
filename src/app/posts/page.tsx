import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import React from 'react'

type Props = {}

const PostsPage = (props: Props) => {
  return (
    <section className=' w-full bg-[#F1F6F9]'>
      <Navbar/>
      <div className=' max-w-7xl min-h-screen mx-auto p-5'>
           <div className=' w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-12 '>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
           </div>
        </div>
      <Footer/>
    </section>
  )
}

export default PostsPage