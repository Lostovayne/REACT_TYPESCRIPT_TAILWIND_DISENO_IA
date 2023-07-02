import { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

const CardsContainer = (response) => {
  const [arrayChat, setArrayChat] = useState([])
  useEffect(() => {
    if (response.text !== '') {
      const newArrayChat = [...arrayChat, response]
      setArrayChat(newArrayChat)
    }
  }, [response])

  console.log(arrayChat)

  return (
    <ScrollToBottom className=' flex-1  h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400'>
      {arrayChat.length <= 0 ? (
        <section className='h-1/2 mx-auto  w-full font-medium lg:py-14 lg:w-4/5 flex items-center gap-5 justify-center flex-wrap'>
          <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
            How to connect langchain to search engines with serpapi?
          </p>
          <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
            How do I use GPT and wolframAlpha?
          </p>
        </section>
      ) : (
        <section className='h-1/2 mx-auto  w-full font-medium lg:py-14 lg:w-4/5 flex items-center gap-5 justify-center flex-wrap py-4'>
          {arrayChat.map(({ text }, index) => (
            <div key={index} className='flex flex-col items-center justify-center  gap-4'>
              <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-6 py-2 lg:py-3 rounded-lg  h-auto lg:h-auto'>
                {text.question.message}
              </p>
              <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-2 lg:py-3 rounded-lg w-full   h-auto lg:h-28'>
                {text.message.message}
              </p>
            </div>
          ))}
        </section>
      )}
    </ScrollToBottom>
  )
}
export default CardsContainer
