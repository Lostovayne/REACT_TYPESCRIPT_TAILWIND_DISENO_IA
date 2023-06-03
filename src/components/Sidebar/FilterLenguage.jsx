import Lenguage from './Lenguage'
import {
    RiReactjsFill,
    RiVuejsLine,
    RiAngularjsLine,
    RiGatsbyLine,
    RiMarkdownLine,
    RiAmazonLine
} from 'react-icons/ri'
const FilterLenguage = () => {
    return (
        <div className='h-4/6 w-full  flex flex-col gap-5'>
            <Lenguage>
                <RiReactjsFill className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>React</span>
            </Lenguage>
            <Lenguage>
                <RiAmazonLine className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>Aws</span>
            </Lenguage>
            <Lenguage>
                <RiMarkdownLine className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>Markdown</span>
            </Lenguage>
            <Lenguage>
                <RiReactjsFill className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>NextJs</span>
            </Lenguage>
            <Lenguage>
                <RiVuejsLine className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>VueJs</span>
            </Lenguage>
            <Lenguage>
                <RiAngularjsLine className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>Angular</span>
            </Lenguage>
            <Lenguage>
                <RiGatsbyLine className='text-2xl text-slate-400' />
                <span className='text-slate-400 text-base'>Gatsby</span>
            </Lenguage>
        </div>
    )
}
export default FilterLenguage
