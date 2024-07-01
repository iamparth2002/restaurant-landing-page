import React from 'react'

const Food = ({img,title}) => {
  return (
    <div className=' bg-[#FAFAFA] flex flex-col p-2 md:p-5 rounded-2xl text-wrap'>
        <div className='bg-white rounded-full p-4'>

        <img src={img} alt="" />
        </div>
        <h2 className=' text-center font-semibold text-pretty'>{title}</h2>
    </div>
  )
}

export default Food