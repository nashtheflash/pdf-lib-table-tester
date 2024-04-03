import { SparklesIcon } from "@heroicons/react/20/solid"

export function ToggleTheme({ isPro, setIsPro, themeController }) {
    
    const handelToggle = () => {
        setIsPro(!isPro);
    };

    return (
        <div className="flex justify-end">
            <label className="cursor-pointer label">
                <div className="relative">
                    <SparklesIcon className={`absolute -top-2 right-0 text-yellow-400 w-6 h-6 ${isPro ? 'visable' : 'hidden'}`}/>
                    <span className={`text-xl w-full mr-4 text-primary`}>{isPro ? 'Pro' : 'Standard'}</span> 
                </div>
                
                <input 
                    type="checkbox" 
                    onClick={handelToggle}
                    value="fantasy"
                    className={`toggle toggle-primary ${themeController ? 'theme-controller' : ''}`}
                    checked={isPro}
                />
            </label>
        </div>
    )
}