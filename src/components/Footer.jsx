import chroma from 'chroma-js'
import React from 'react'
import { TbColorSwatch, TbPigMoney } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Footer = ({ textColor, primaryButtonColor }) => {
  return (
    <div
      style={{ color: textColor ? textColor : 'black' }}
      className='footer grid gap-4 items-center flex-col w-full max-w-[1440px] px-4 sm:px-8 md:px-16 py-16'
    >
      <div className='flex flex-col justify-between h-full gap-2'>
        <TbColorSwatch className='text-6xl text-blue-600' />
        <div className='text-2xl font-bold'>BlendR</div>
        <div>
          Seamlessly Visualize, Test, and Optimize Color Schemes with Real-time
          Feedback. Revolutionize your workflow today!
        </div>
      </div>
      <div className='flex flex-col items-start h-full md:items-end'>
        <div className='flex flex-col items-start gap-2'>
          <div className='text-lg font-medium border-b-2 border-blue-600'>
            Site Map
          </div>
          <Link to='/'>Home</Link>
          <Link to='/generate-pallete'>Generate Pallete</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
