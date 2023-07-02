import { RiMenu2Line } from 'react-icons/ri'
import CardsContainer from './CardsContainer'
import FooterMain from './FooterMain'
import HeaderMain from './HeaderMain'
import { PropTypes } from 'prop-types'
import { useState } from 'react'

const Main = ({ open, setOpen }) => {
  const [response, setResponse] = useState('')
  return (
    <div className='bg-[#0A0A0A] col-span-5 h-screen w-full'>
      <button className=' px-5 py-8 lg:hidden' onClick={() => setOpen(!open)}>
        <RiMenu2Line className='text-2xl text-slate-300   cursor-pointer ' />
      </button>

      <section className='bg-[#0A0A0A] h-5/6 lg:h-screen px-4  lg:p-7'>
        <div className='bg-[#121214] w-full flex flex-col justify-between h-full rounded-xl px-8 py-4'>
          <HeaderMain />
          <CardsContainer text={response} />
          <FooterMain setResponse={setResponse} />
        </div>
      </section>
    </div>
  )
}
export default Main

Main.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}
