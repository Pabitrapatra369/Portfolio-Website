"use client"
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Typewriter = (props: Props) => {
    const[text]=useTypewriter({
        words:["Hi,Its Pabitra Patra","Web Developer","Content Creater"],
        loop:true,
        delaySpeed:2000
    })
  return (
    <h1 className=' text-3xl md:5xl font-extrabold text-center'>{text}</h1>
  )
}

export default Typewriter