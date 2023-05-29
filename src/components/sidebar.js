import Link from 'next/link'
import Card from './card';
const SideBar = ({component}) => {
    return (
        <div className="sidebar">
            {/* sidebar */}
            <div className=" bg-gray-950">
            <ul className='sidebar-ul'>
                <li className='sidebar-li'>
                    <Link href="/">Root</Link>
                </li>
                <li className='sidebar-li'>
                    <Link href="/about">About</Link>
                </li>
                <li className='sidebar-li'>
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