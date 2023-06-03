const CardsContainer = () => {
    return (
        <main className=' flex-1 '>
            <h2 className=' py-3 lg:pt-8 text-center font-medium text-base lg:text-xl text-slate-300 '>
                Examples
            </h2>
            <section className='h-1/2 mx-auto  w-full font-medium lg:py-14 lg:w-4/5 flex items-center gap-5 justify-center flex-wrap'>
                <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
                    How to connect langchain to search engines with serpapi?
                </p>
                <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
                    How do I use GPT and wolframAlpha?
                </p>
                <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
                    How to load and index a pdf
                </p>
                <p className='text-center flex items-center bg-[#0A0A0A] text-slate-400 px-10 py-4 lg:py-8 rounded-lg w-full lg:w-1/3  h-20 lg:h-28'>
                    What is AgentExecutor and sequential chain?
                </p>
            </section>
        </main>
    )
}
export default CardsContainer
