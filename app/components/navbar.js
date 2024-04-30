'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const pages = [
    {name: 'Home', current: true, link: '/'},
    {name: 'Examples', current: false, link: '/examples'},
    {name: 'Documentaion', current: false, link: '/documentation'},
    {name: 'About', current: false, link: '/about'},
    {name: 'Pro', current: false, link: '/pro'},
];
 
export function NavBar(props) {
    const pathname = usePathname()
    
    return (
        <div className='flex justify-center items-center bg-base-200'>
            <LogoSection/>
            <div className="navbar justify-center">
                <div className="navbar-center">
                    {
                        pages.map(({name, link}) => (
                            <Link key={name} href={link}>
                                <button key={name} className={`btn btn-ghost text-xl text-primary ${link === pathname? 'btn-active' : ''}`}>{name}</button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
    
}

function LogoSection() {
    return(
        <div className="flex flex-col w-full max-w-80">
            <h1 className="text-primary">PDF-LIB-TABLE</h1>
            <div className="divider divider-primary mt-0"></div>
        </div>
    )
}
