import { PropTypes } from 'prop-types'
import { RiMenu3Fill } from 'react-icons/ri'
import Logo from '../../assets/Logo.png'
import Menu from './Menu'

const Sidebar = ({ open, setOpen }) => {
    return (
        <div
            className={`bg-[#0A0A0A] col-span-1 px-4 py-7 fixed h-screen w-full transition-all duration-300 lg:static flex flex-col gap-4 ${
                !open ? '-left-full top-0' : 'left-0 top-0'
            }`}>
            <header className='flex items-center justify-between h-10'>
                <div className='flex items-center gap-2 h-10'>
                    <img src={Logo} alt='logo' className='w-8 h-8' />
                    <h1 className='text-xl text-white font-medium '>
                        Collectiv.
                    </h1>
                </div>
                <RiMenu3Fill
                    className='text-2xl text-slate-300  lg:hidden cursor-pointer'
                    onClick={() => setOpen(!open)}
                />
            </header>

            <Menu />
        </div>
    )
}
export default Sidebar

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}
