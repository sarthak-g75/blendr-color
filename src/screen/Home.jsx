import React, { useEffect, useState } from 'react'
import { NavbarPrimary } from '../components/Navbar'
import Footer from '../components/Footer'
import { TiArrowShuffle } from 'react-icons/ti'
import chroma from 'chroma-js'
import { schemes } from '../scheme'
import { Link } from 'react-router-dom'

const generateRandomScheme = () => {
  const index = (Math.random() * schemes.length).toFixed(0)
  return schemes[index]
}

const Tools = ({
  backgroundColor,
  textColor,
  primaryButtonColor,
  secondaryButtonColor,
  accentColor,
  setBackgroundColor,
  setTextColor,
  setPrimaryBtnColor,
  setSecondaryBtnColor,
  setAccentColor,
  setName,
}) => {
  const randomise = () => {
    const { background, primaryCTA, secondaryCTA, text, accent, name } =
      generateRandomScheme()
    setBackgroundColor(background)
    setPrimaryBtnColor(primaryCTA)
    setSecondaryBtnColor(secondaryCTA)
    setTextColor(text)
    setName(name)
    setAccentColor(accent)
    document.body.style.background = background
    document.body.style.color = text
  }
  return (
    <div className='fixed bottom-8 p-2 max-w-[90vw] flex-wrap rounded-lg bg-gray-200/50 backdrop-blur-lg flex items-center justify-center gap-2'>
      <button
        style={{
          background: backgroundColor,
          color: chroma(backgroundColor).get('hsl.l') < 0.5 ? 'white' : 'black',
        }}
        className={`swatch flex-1 border border-gray-700/20 relative rounded-md`}
      >
        <input
          type='color'
          id='main-color'
          name='main-color'
          className='absolute left-0 invisible w-full h-16 bg-transparent border-none rounded appearance-none cursor-pointer -z-10'
          value={backgroundColor}
          onChange={(e) => {
            setBackgroundColor(e.target.value)
            document.body.style.background = backgroundColor
          }}
        />
        <label
          htmlFor='main-color'
          className='flex items-center justify-center w-full p-2 px-4 text-center cursor-pointer h-max md:h-16 md:p-4 md:px-8'
        >
          <span className='hidden md:block'>Background</span>
          <span className='block md:hidden'>BG</span>
        </label>
      </button>
      <button
        style={{
          background: textColor,
          color: chroma(textColor).get('hsl.l') < 0.5 ? 'white' : 'black',
        }}
        className={`swatch flex-1 border border-gray-700/20 relative rounded-md`}
      >
        <input
          type='color'
          id='text-color'
          name='text-color'
          className='absolute left-0 invisible w-full h-16 bg-transparent border-none rounded appearance-none cursor-pointer -z-10'
          value={textColor}
          onChange={(e) => {
            setTextColor(e.target.value)
            document.body.style.color = textColor
          }}
        />
        <label
          htmlFor='text-color'
          className='flex items-center justify-center w-full p-2 px-4 text-center cursor-pointer h-max md:h-16 md:p-4 md:px-8'
        >
          Text
        </label>
      </button>
      <button
        style={{
          background: primaryButtonColor,
          color:
            chroma(primaryButtonColor).get('hsl.l') < 0.5 ? 'white' : 'black',
        }}
        className={`swatch flex-1 border border-gray-700/20 relative rounded-md`}
      >
        <input
          type='color'
          id='primary-color'
          name='primary-color'
          className='absolute left-0 invisible w-full h-16 bg-transparent border-none rounded appearance-none cursor-pointer -z-10'
          value={primaryButtonColor}
          onChange={(e) => setPrimaryBtnColor(e.target.value)}
        />
        <label
          htmlFor='primary-color'
          className='flex items-center justify-center w-full gap-1 p-2 px-4 text-center cursor-pointer h-max md:h-16 md:p-4 md:px-8'
        >
          <span className='hidden md:block'>Primary</span>
          <span className='block md:hidden'>1</span>
          CTA
        </label>
      </button>
      <button
        style={{
          background: secondaryButtonColor,
          color:
            chroma(secondaryButtonColor).get('hsl.l') < 0.5 ? 'white' : 'black',
        }}
        className={`swatch flex-1 border border-gray-700/20 relative rounded-md`}
      >
        <input
          type='color'
          id='secondary-color'
          name='secondary-color'
          className='absolute left-0 invisible w-full h-16 bg-transparent border-none rounded appearance-none cursor-pointer -z-10'
          value={secondaryButtonColor}
          onChange={(e) => setSecondaryBtnColor(e.target.value)}
        />
        <label
          htmlFor='secondary-color'
          className='flex items-center justify-center w-full gap-1 p-2 px-4 text-center cursor-pointer h-max md:h-16 md:p-4 md:px-8'
        >
          <span className='hidden md:block'>Secondary</span>
          <span className='block md:hidden'>2</span>
          CTA
        </label>
      </button>
      <button
        style={{
          background: accentColor,
          color: chroma(accentColor).get('hsl.l') < 0.5 ? 'white' : 'black',
        }}
        className={`swatch flex-1 border border-gray-700/20 relative rounded-md`}
      >
        <input
          type='color'
          id='accent-color'
          name='accent-color'
          className='absolute left-0 invisible w-full h-16 bg-transparent border-none rounded appearance-none cursor-pointer -z-10'
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
        <label
          htmlFor='accent-color'
          className='flex items-center justify-center w-full p-2 px-4 text-center cursor-pointer h-max md:h-16 md:p-4 md:px-8'
        >
          Accent
        </label>
      </button>
      <button
        onClick={randomise}
        className='flex items-center justify-center flex-1 bg-white border rounded-md border-gray-700/20 aspect-square h-11 md:h-16 hover:bg-gray-100 fl'
      >
        <TiArrowShuffle className='text-xl text-black' />
      </button>
    </div>
  )
}

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fdfcfa')
  const [textColor, setTextColor] = useState('#0f2335')
  const [primaryButtonColor, setPrimaryBtnColor] = useState('#be2659')
  const [secondaryButtonColor, setSecondaryBtnColor] = useState('#cce5df')
  const [accentColor, setAccentColor] = useState('#0f2335')
  const [name, setName] = useState('')

  console.log(schemes.length)
  useEffect(() => {
    const { background, primaryCTA, secondaryCTA, text, accent, name } =
      generateRandomScheme()
    setName(name)
    setBackgroundColor(background)
    setPrimaryBtnColor(primaryCTA)
    setSecondaryBtnColor(secondaryCTA)
    setTextColor(text)
    setAccentColor(accent)

    document.body.style.background = background
    document.body.style.color = text
  }, [])

  return (
    <>
      <NavbarPrimary
        backgroundColor={backgroundColor}
        primaryButtonColor={primaryButtonColor}
      />
      <div className='relative flex items-center flex-col gap-10 w-full max-w-[1440px] px-4 sm:px-8 md:px-16 py-16'>
        <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
          <div className='flex flex-col items-center justify-center my-16 mb-0 text-3xl font-black text-center capitalize md:text-5xl'>
            Redefining the way we{' '}
            <span className='text-center'>
              choose{' '}
              <span
                style={{
                  color: accentColor,
                  borderColor: accentColor,
                }}
                className='border-b-4'
              >
                Colors
              </span>{' '}
              for our UI/UX
            </span>
          </div>
          <div
            style={{ color: accentColor }}
            className='max-w-3xl text-center'
          >
            Seamlessly Visualize, Test, and Optimize Color Schemes with
            Real-time Feedback. Revolutionize your workflow today!
          </div>
          <div className='flex items-center gap-2 md:gap-4'>
            <button
              onClick={() => {
                const {
                  background,
                  primaryCTA,
                  secondaryCTA,
                  text,
                  accent,
                  name,
                } = generateRandomScheme()
                setName(name)
                setBackgroundColor(background)
                setPrimaryBtnColor(primaryCTA)
                setSecondaryBtnColor(secondaryCTA)
                setTextColor(text)
                setAccentColor(accent)

                document.body.style.background = background
                document.body.style.color = text
              }}
              className='px-4 py-3 font-medium transition-all rounded-lg md:px-8 md:py-4 hover:shadow-lg hover:-translate-y-1'
              style={{
                background: primaryButtonColor,
                color:
                  chroma(primaryButtonColor).get('hsl.l') < 0.5
                    ? 'white'
                    : 'black',
              }}
            >
              Randomise
            </button>
            <Link
              to={'/generate-pallete'}
              className='px-4 py-3 font-medium transition-all rounded-lg md:px-8 md:py-4 hover:shadow-lg hover:-translate-y-1'
              style={{
                background: secondaryButtonColor,
                color:
                  chroma(secondaryButtonColor).get('hsl.l') < 0.5
                    ? 'white'
                    : 'black',
              }}
            >
              Generate Pallete
            </Link>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-xs'>Pallete In Use</div>
            <div className='text-lg font-extrabold'>{name}</div>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-2 my-10 mt-5'>
          {Array(25)
            .fill(0)
            .map((ele) => (
              <div
                style={{
                  background:
                    Math.random() < 0.5
                      ? primaryButtonColor
                      : Math.random() < 0.2
                      ? secondaryButtonColor
                      : accentColor,
                  borderRadius:
                    Math.random() < 0.5
                      ? '1rem'
                      : Math.random() < 0.2
                      ? '0.5rem'
                      : '0.25rem',
                  opacity:
                    Math.random() < 0.5 ? 1 : Math.random() < 0.2 ? 0.5 : 0.25,
                }}
                className='w-16 h-16 bg-black'
              />
            ))}
        </div>
        <form
          style={{ borderColor: primaryButtonColor }}
          className='flex flex-col items-start w-full max-w-2xl gap-4 p-8 my-20 border-2 rounded-lg'
        >
          <div className='flex flex-col items-start w-full gap-2'>
            <label
              style={{ color: primaryButtonColor }}
              className='font-medium'
            >
              Email
            </label>
            <input
              type='text'
              style={{ borderColor: secondaryButtonColor }}
              className={
                'w-full outline-none border-2 px-4 py-2 rounded-lg bg-transparent ' +
                `focus:ring-[${primaryButtonColor}]`
              }
              placeholder='Your Email'
            />
          </div>
          <div className='flex flex-col items-start w-full gap-2'>
            <label
              style={{ color: primaryButtonColor }}
              className='font-medium'
            >
              Message
            </label>
            <input
              type='text'
              style={{ borderColor: secondaryButtonColor }}
              className={
                'w-full outline-none border-2 px-4 py-2 rounded-lg bg-transparent ' +
                `focus:ring-[${primaryButtonColor}]`
              }
              placeholder="This doesn/'t work"
            />
          </div>
          <button
            className='w-full px-6 py-3 font-medium transition-all rounded-lg hover:shadow-lg hover:-translate-y-1'
            style={{
              background: primaryButtonColor,
              color:
                chroma(primaryButtonColor).get('hsl.l') < 0.5
                  ? 'white'
                  : 'black',
            }}
          >
            Submit
          </button>
        </form>
        <Tools
          setName={setName}
          backgroundColor={backgroundColor}
          textColor={textColor}
          primaryButtonColor={primaryButtonColor}
          secondaryButtonColor={secondaryButtonColor}
          accentColor={accentColor}
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
          setPrimaryBtnColor={setPrimaryBtnColor}
          setSecondaryBtnColor={setSecondaryBtnColor}
          setAccentColor={setAccentColor}
        />
      </div>
      <Footer
        textColor={textColor}
        primaryButtonColor={primaryButtonColor}
      />
    </>
  )
}

export default Home
