import Image from 'next/image'

export default async function HomeLayout() {
  
  return (
        <div className="flex flex-col bg-base-100">
            <Hero/>
            <ProductHighlights/>
            <InstallNow/>
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
    return (
        <div classname='flex flex-col bg-base-100 text-gray-500'>
            <div className='flex justify-start pl-12 items-center text-gray-500'>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold">Easy to use</h1>
                    <p className="py-6">Install the library, import the create table function, then print!</p>
                </div>
            </div>.
            <div className='flex justify-start pl-12 items-center text-gray-500'>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold">Handle Page Breakes with Ease</h1>
                    <p className="py-6">Pages can start with or without headers. Table demensions are returned facilitating dynamic footers to fill space</p>
                </div>
            </div>.
            <div className='flex justify-start pl-12 items-center text-gray-500'>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold">Lightweight & Preformant</h1>
                    <p className="py-6">Pdf-Lib-Table has no external dependances and can print hundreds of pages with ease</p>
                </div>
            </div>
            <div className='flex justify-start pl-12 items-center text-gray-500'>
                <div className='w-1/3'>
                    <h1 className="text-5xl font-bold">Over 50 parameters</h1>
                    <p className="py-6">Easy to get going, but enough customization to grow with your project</p>
                </div>
            </div>
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
                <button className="btn btn-primary">View Documentation</button>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Documentation</a>
                <a className="link link-hover">Terms of Use</a>
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
