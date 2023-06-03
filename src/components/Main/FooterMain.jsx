import { RiSendPlane2Line } from 'react-icons/ri'

const FooterMain = () => {
    return (
        <footer className=' py-8 flex items-center justify-center'>
            <div className='rounded-xl bg-[#020202] flex items-center justify-between p-4 w-full lg:w-4/6'>
                <input
                    type='text'
                    className='w-full outline-none bg-transparent placeholder:lg:text-base placeholder:text-slate-600 text-slate-400 font-medium text-base
                                placeholder:text-sm
                                '
                    placeholder='Let the magic begin, Ask a question'
                />

                <RiSendPlane2Line className=' text-xl  lg:text-2xl text-slate-400 cursor-pointer font-semibold' />
            </div>
        </footer>
    )
}
export default FooterMain
