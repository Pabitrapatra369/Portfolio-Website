import React from 'react'

type Props = {}

const SkillCircle = (props: Props) => {
  return (
    <div className=' h-24 w-24 flex justify-center items-center p-1 rounded-full shadow-lg shadow-gray-400 bg-violet-500 hover:bg-pink-500 duration-300 hover:scale-110 '>
        <div className='flex justify-center items-center bg-[#f1f6f9] rounded-full  h-full w-full'>
           <img src="/first.jpg" alt="Skills" className='' height={50} width={50} />
        </div>
    </div>
  )
}

export default SkillCircle