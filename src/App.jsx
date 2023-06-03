import { useState } from 'react'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='w-screen h-screen grid grid-cols-1 lg:grid-cols-6 '>
            <Sidebar open={open} setOpen={setOpen} />
            <Main open={open} setOpen={setOpen} />
        </div>
    )
}
export default App
