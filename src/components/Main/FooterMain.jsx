import { RiSendPlane2Line } from 'react-icons/ri'
import getFetchingData from '../../data/fetch'
import { useState } from 'react'

const FooterMain = ({ setResponse }) => {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setText('')
    getFetchingData(text)
      .then((data) => {
        console.log(data[0].data.chat_history)
        setResponse({
          question: data[0].data.chat_history[0],
          message: data[0].data.chat_history[1]
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <footer className=' py-8 flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='rounded-xl bg-[#020202] flex items-center justify-between p-4 w-full lg:w-4/6'>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          className='w-full outline-none bg-transparent placeholder:lg:text-base placeholder:text-slate-600 text-slate-400 font-medium text-base
                                placeholder:text-sm
                                '
          placeholder='Let the magic begin, Ask a question'
        />

        <RiSendPlane2Line className=' text-xl  lg:text-2xl text-slate-400 cursor-pointer font-semibold' />
      </form>
    </footer>
  )
}
export default FooterMain
