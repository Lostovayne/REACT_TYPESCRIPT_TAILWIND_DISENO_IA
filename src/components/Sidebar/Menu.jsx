import { RiSearch2Line, RiRefreshLine, RiAddFill } from 'react-icons/ri'
import FilterLenguage from './FilterLenguage'

const Menu = () => {
    return (
        <section className='bg-[#121214] w-full h-full flex flex-col justify-between px-3 py-6 rounded-md '>
            <form action='' className='h-1/6'>
                <fieldset className='bg-[#1D1D1F] flex items-center gap-3 rounded-md h-10 px-3 '>
                    <RiSearch2Line className='text-gray-600 text-2xl  cursor-pointer' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent w-full outline-none text-slate-300 text-sm font-medium'
                    />
                </fieldset>
                <button className='bg-[#1D1D1F] flex items-center gap-3 rounded-md w-full my-4 py-[11px] px-3'>
                    <RiRefreshLine className='text-gray-600 text-xl cursor-pointer' />
                    <span className='text-slate-400 text-sm font-medium'>
                        Clear all chats
                    </span>
                </button>
            </form>
            <FilterLenguage />

            <button className='bg-[#1D1D1F] p-4 rounded-lg w-14 h-14 flex items-center justify-center'>
                <RiAddFill className='text-slate-400 text-xl cursor-pointer' />
            </button>
        </section>
    )
}
export default Menu
