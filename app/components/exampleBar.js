export function ExampleBar({examples, setCurrentExample}) {
    
    const handleExampleChange = (page) => {
        const state = [...examples];
        const newState = state.map((example) => example.name === page.name ? {...example, current: true} : {...example, current: false});

        setCurrentExample(newState);
    };

    return (
        <ul className="menu menu-horizontal bg-base-200 text-secondary">
            {
                examples.map((ex) => {
                    return (
                    <li key={ex.name}><button onClick={() => handleExampleChange(ex)} className={` ${ex.current ? 'underline' : ''}`}>{ex.name}</button></li>
                    )
                })
            }
        </ul>
    )
}
