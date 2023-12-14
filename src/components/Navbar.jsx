import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { TbColorFilter, TbColorSwatch, TbPigMoney } from 'react-icons/tb'
import chroma from 'chroma-js'

const Navbar = () => {
  return (
    <div className='p-8 py-4 flex items-center w-full justify-between bg-white/50 backdrop-blur-lg z-50 sticky top-0 border-b-2 border-[#94A3B8]/5'>
      <div className='flex items-center gap-2'>
        <TbColorSwatch className='text-2xl text-blue-600' />
        <span className='text-2xl font-bold'>BlendR</span>
      </div>
      <div className='flex items-center gap-4'>
        <Link
          className='font-medium transition-all hover:-translate-y-1'
          to={'/'}
        >
          <span className='hidden md:block'>Home</span>
          <div className='flex items-center justify-center w-8 h-8 md:hidden'>
            <FiHome className='text-lg' />
          </div>
        </Link>
        <Link
          className='font-medium transition-all hover:-translate-y-1'
          to={'/generate-pallete'}
        >
          <span className='hidden md:block'>Generate Pallete</span>
          <div className='flex items-center justify-center w-8 h-8 md:hidden'>
            <TbColorFilter className='text-lg' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

export const NavbarPrimary = ({ primaryButtonColor, backgroundColor }) => {
  var color = chroma(primaryButtonColor)
  return (
    <div
      style={{ background: backgroundColor + '7f' }}
      className='p-8 py-4 flex items-center w-full justify-between backdrop-blur-lg z-50 sticky top-0 border-b-2 border-[#94A3B8]/5'
    >
      <div className='flex items-center gap-2'>
        <TbColorSwatch className='text-2xl text-blue-600' />
        <span className='text-2xl font-bold'>BlendR</span>
      </div>
      <div className='flex items-center gap-4'>
        <Link
          className='font-medium transition-all hover:-translate-y-1'
          to={'/'}
        >
          <span className='hidden md:block'>Home</span>
          <div className='flex items-center justify-center w-8 h-8 md:hidden'>
            <FiHome className='text-lg' />
          </div>
        </Link>
        <Link
          className='font-medium transition-all hover:-translate-y-1'
          to={'/generate-pallete'}
        >
          <span className='hidden md:block'>Generate Pallete</span>
          <div className='flex items-center justify-center w-8 h-8 md:hidden'>
            <TbColorFilter className='text-lg' />
          </div>
        </Link>
      </div>
    </div>
  )
}
