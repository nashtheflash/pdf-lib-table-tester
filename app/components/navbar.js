export function NavBar({ nav, setNav }) {
    
    const handelNav = (page) => {
        const state = [...nav];
        const newState = state.map((nav) => nav.name === page.name ? {...nav, current: true} : {...nav, current: false})

        setNav(newState);
    };
    
    
    return (
        <div className="navbar justify-center bg-base-200">
            <div className="navbar-center">
                {
                    nav.map((page) => (
                        <button key={page.name} onClick={() => handelNav(page)} className={`btn btn-ghost text-xl text-primary ${page.current ? 'btn-active' : ''}`}>{page.name}</button>
                    ))
                }
            </div>
        </div>
    )
}