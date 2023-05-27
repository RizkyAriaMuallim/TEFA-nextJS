import Link from 'next/link'
import Card from './card';
const SideBar = ({component}) => {
    return (
        <div className="grid grid-cols-testTemplate h-full">
            {/* sidebar */}
            <div className=" bg-gray-950">
            <ul className='text-neutral-100 font-bold m-4'>
                <li className='rounded-lg border-2 p-2 border-blue-300 m-1 block'>
                    <Link href="/">Root</Link>
                </li>
                <li className='rounded-lg border-2 p-2 border-blue-300 m-1 block'>
                    <Link href="/about">About</Link>
                </li>
                <li className='rounded-lg border-2 p-2 border-blue-300 m-1 block'>
                    <Link href="/information">Information</Link>
                </li>
            </ul>
            </div>

            {/* right page */}
            <div className=" bg-slate-200 p-5 grid grid-cols-testTemplate h-full">
                {component}
            </div>
        </div>
    )
}

export default SideBar;