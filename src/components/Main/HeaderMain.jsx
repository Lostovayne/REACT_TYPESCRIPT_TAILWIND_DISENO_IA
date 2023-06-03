import { RiReactjsFill, RiRefreshLine } from 'react-icons/ri'
import Lenguage from '../Sidebar/Lenguage'

const HeaderMain = () => {
    return (
        <header className='flex items-center justify-between border-b border-slate-500/40 '>
            <Lenguage>
                <RiReactjsFill className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>React</span>
            </Lenguage>

            <button className='flex items-center gap-3 rounded-md  my-4 py-[11px] px-3'>
                <RiRefreshLine className='text-gray-600 text-xl cursor-pointer' />
                <span className='text-slate-400 text-sm font-medium'>
                    Clear all chats
                </span>
            </button>
        </header>
    )
}
export default HeaderMain
