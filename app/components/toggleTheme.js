import { SparklesIcon } from "@heroicons/react/20/solid"

export function ToggleTheme({ isStandard, setIsStandard }) {
    
    const handelToggle = () => {
        setIsStandard(!isStandard);
    };

    return (
        <div className="flex justify-end">
            <label className="cursor-pointer label">
                <div className="relative">
                    <SparklesIcon className={`absolute -top-2 right-0 text-yellow-400 w-6 h-6 ${isStandard ? 'hidden' : 'visable'}`}/>
                    <span className={`text-xl w-full mr-4 text-primary`}>{isStandard ? 'Standard' : 'Pro'}</span> 
                </div>
                
                <input 
                    type="checkbox" 
                    onClick={handelToggle}
                    onChange={() => ''}
                    value="wireframe"
                    className='toggle bg-primary theme-controller'
                    checked={isStandard}
                />
            </label>
        </div>
    )
}
