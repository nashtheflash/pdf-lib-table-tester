import Documentation from '../components/markdown/documentation.mdx';

export default function Doc() {
    return (
        <div className='absolute grid grid-cols-4 gap-6 px-4 py-8 bg-base-100 text-black h-[calc(100vh-64px)]'>
            <div className='col-span-1'>
                <DocNav/>
            </div>
            <div className='col-span-3'>
                <Documentation/>
            </div>
        </div>
    )
}

function DocNav() {
    return (
        <ul className="sticky top-[32px] left-0 menu bg-base-200 w-56 rounded-box h-[calc(100vh-64px-64px)]">
            <li><a>Item 1</a></li>
            <li>
                <details open>
                    <summary>Parent</summary>
                    <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    )
}
