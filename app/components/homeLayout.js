'use client';

import Image from 'next/image'
import Link from 'next/link';

import { useIntersectionObserver } from '../hooks';

export default function HomeLayout() {
  
  return (
        <div className="flex flex-col bg-base-100">
            <Hero/>
            <div className='px-12'>
                <ProductHighlights/>
                <InstallNow/>
            </div>
            <Footer/>
        </div>
  );
};

function Hero() {
    return (
        <div className="hero min-h-screen bg-base-100 text-gray-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src="/hero.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

function ProductHighlights() {
    const { isIntersecting: squareIsIntersecting, ref: squareRef } = useIntersectionObserver({
        threshold: 1,
    })
    
    const { isIntersecting: easyToUseIsIntersecting, ref: easyToUseRef } = useIntersectionObserver({
        threshold: 0.5,
    })
    
    const { isIntersecting: pageBreakIsIntersecting, ref: pageBreakRef } = useIntersectionObserver({
        threshold: 0.5,
    })
    
    const { isIntersecting: lightweightIsIntersecting, ref: lightweightRef } = useIntersectionObserver({
        threshold: 0.5,
    })
    
    const { isIntersecting: parameterIsIntersecting, ref: parameterRef } = useIntersectionObserver({
        threshold: 0.5,
    })


    console.log(`Render Section`, {
        squareIsIntersecting
    })
    return (
        <div className='flex flex-col mb-80 items-center justify-center'>
            <div className='relative flex h-fit'>
                <ProductText
                    easyToUseRef={easyToUseRef}
                    pageBreakRef={pageBreakRef}
                    lightweightRef={lightweightRef}
                    parameterRef={parameterRef}
                />
                <ProductSquare 
                    refs={squareRef}
                    squareIsIntersecting={squareIsIntersecting}
                    easyToUseIsIntersecting={easyToUseIsIntersecting}
                    pageBreakIsIntersecting={pageBreakIsIntersecting}
                    lightweightIsIntersecting={lightweightIsIntersecting}
                    parameterIsIntersecting={parameterIsIntersecting}
                />
            </div>
        </div>
    )
}

function ProductText({easyToUseRef, pageBreakRef, lightweightRef, parameterRef}) {
    return (
        <div className='flex flex-col bg-base-100 text-gray-500'>
            <div ref={easyToUseRef} className='flex justify-start h-screen items-center text-gray-500'>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Easy to use</h1>
                    <p className="py-6">Install the library, import the create table function, then print!</p>
                </div>
            </div>
            <div ref={pageBreakRef} className='flex justify-start h-screen items-center text-gray-500'>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Handle Page Breakes with Ease</h1>
                    <p className="py-6">Pages can start with or without headers. Table demensions are returned facilitating dynamic footers to fill space</p>
                </div>
            </div>.
            <div ref={lightweightRef} className='flex justify-start h-screen items-center text-gray-500'>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Lightweight & Preformant</h1>
                    <p className="py-6">Pdf-Lib-Table has no external dependances and can print hundreds of pages with ease</p>
                </div>
            </div>
            <div ref={parameterRef} className='flex justify-start h-screen items-center text-gray-500'>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Over 50 parameters</h1>
                    <p className="py-6">Easy to get going, but enough customization to grow with your project</p>
                </div>
            </div>
        </div>
    )
}

function ProductSquare({refs, squareIsIntersecting, easyToUseIsIntersecting, pageBreakIsIntersecting, lightweightIsIntersecting, parameterIsIntersecting}) {
    return (
        <div ref={refs} className={`sticky top-[calc(100vh/2-300px)] right-0 h-fit w-fit transform transition-all ease-in-out duration-200 ${easyToUseIsIntersecting | pageBreakIsIntersecting | lightweightIsIntersecting | parameterIsIntersecting ? 'opacity-100' : 'opacity-0 translate-x-32'}`}>
            <div className="card w-full h-full bg-base-200 text-primary-content">
                <div className="card-body">
                    <div className='grid grid-cols-1 grid-rows-1'>
                        <EasyToUse easyToUseIsIntersecting={easyToUseIsIntersecting}/>
                        <PageBreak pageBreakIsIntersecting={pageBreakIsIntersecting}/>
                        <LightWeight lightweightIsIntersecting={lightweightIsIntersecting}/>
                        <Parameters parameterIsIntersecting={parameterIsIntersecting}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function EasyToUse({easyToUseIsIntersecting}) {
    return (
        <div className={`mockup-code transition-opacity ease-in duration-200 col-start-1 col-end-1 row-start-1 row-end-1 ${easyToUseIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <pre data-prefix="1"><code>{`import { createPDFTables } from 'pdf-lib-table';`}</code></pre> 
            <pre data-prefix="2"><code></code></pre> 
            <pre data-prefix="3"><code>{`//TABLE SETTINGS`}</code></pre> 
            <pre data-prefix="4"><code>{`const pdfSettings = {`}</code></pre> 
            <pre data-prefix="5"><code>     data,</code></pre>
            <pre data-prefix="6"><code>     columns,</code></pre>
            <pre data-prefix="7"><code>     pdfDoc</code></pre>
            <pre data-prefix="8"><code>{`});`}</code></pre>
            <pre data-prefix="9"><code></code></pre>
            <pre data-prefix="10"><code></code></pre>
            <pre data-prefix="11"><code>{`const tables = await createPDFTables(`}</code></pre>
            <pre data-prefix="12"><code>     data</code></pre>
            <pre data-prefix="13"><code>     page</code></pre>
            <pre data-prefix="14"><code>     pdfDoc</code></pre>
            <pre data-prefix="15"><code>     columnDefs</code></pre>
            <pre data-prefix="16"><code>     StandardFonts</code></pre>
            <pre data-prefix="17"><code>     rgb</code></pre>
            <pre data-prefix="18"><code>     {`{pdfSettings}`}</code></pre>
            <pre data-prefix="19"><code>{`);`}</code></pre>
            <pre data-prefix="20"><code></code></pre>
            <pre data-prefix="21"><code></code></pre>
            <pre data-prefix="22"><code>{`tables.drawVerticalTables();`}</code></pre>
        </div>
    )
}

function PageBreak({pageBreakIsIntersecting}) {
    return (
        <div className={`relative flex justify-center items-center h-full w-full bg-gray-800 rounded-md overflow-hidden transition-opacity ease-in duration-200 col-start-1 col-end-1 row-start-1 row-end-1 ${pageBreakIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <Image
                src="/continues-on-next-page.svg"
                alt="Picture of the author"
                fill='true'
            />
        </div>
    
    )
}

function LightWeight({lightweightIsIntersecting}) {
    return (
        <div className={`flex justify-center items-center h-full w-full bg-gray-800 rounded-md transition-opacity ease-in duration-200 col-start-1 col-end-1 row-start-1 row-end-1 ${lightweightIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <Image
                src="/to-the-stars.svg"
                width={600}
                height={600}
                alt="Picture of the author"
            />
        </div>
    
    )
}

function Parameters({parameterIsIntersecting}) {
    return (
        <div className={`flex justify-center items-center h-full w-full bg-gray-800 rounded-md transition-opacity ease-in duration-200 col-start-1 col-end-1 row-start-1 row-end-1 ${parameterIsIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <Image
                src="/computer-program.svg"
                width={600}
                height={600}
                alt="Picture of the author"
            />
        </div>
    
    )
}

function InstallNow() {
    return (
        <div className='flex justify-center items-center mb-48'>
            <div className='flex flex-col justify-center items-center w-[500px]'>
                <h1 className='text-primary text-6xl mb-8'>Install Now!</h1>
                <div className='w-full pb-2'>
                    <h6 className='text-secondary'>1. Install daisyUI as a Node package:</h6>
                </div>
                <div className="mockup-code w-full mb-4">
                    <pre data-prefix="$"><code>npm i pdf-lib-table</code></pre>
                </div>
                <div className='w-full'>
                    <h6 className='text-secondary'>2. Import pdf-lib-table in you project files:</h6>
                </div>
                <div className="mockup-code w-full mb-4">
                    <pre data-prefix="$"><code>{`import {createTable} from 'pdf-lib-table';`}</code></pre>
                </div>
                <Link href='/documentation'>
                    <button className="btn btn-primary">View Documentation</button>
                </Link>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link href='/examples' className="link link-hover">Examples</Link>
                <Link href='/contact' className="link link-hover">Contact</Link>
                <Link href='/documentation' className="link link-hover">Documentation</Link>
                <Link href='/terms' className="link link-hover">Terms of Use</Link>
            </nav> 
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav> 
            <aside>
                <p>Copyright © 2024 - All right reserved by Acutally Good Websites</p>
            </aside>
        </footer>
    )
}
