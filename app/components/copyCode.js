'use client';
import { useState } from "react";
import { ClipboardIcon, SparklesIcon, CheckIcon } from "@heroicons/react/20/solid"

export function CopyCode({ isPro, setIsPro }) {
    const [coppied, setCoppied] = useState(false);

    const handelToggle = () => {
        setIsPro(!isPro);
    };

    return (
        <div className='flex w-full mb-2 justify-end items-center'>
            <div className="flex justify-end w-48">
                <label className="cursor-pointer label">
                    <div className="relative">
                        <SparklesIcon className={`absolute -top-2 right-0 text-yellow-400 w-6 h-6 ${isPro ? 'visable' : 'hidden'}`}/>
                        <span className={`text-xl w-full mr-4 text-primary`}>{isPro ? 'Pro' : 'Standard'}</span> 
                    </div>
                    
                    <input 
                        type="checkbox" 
                        onClick={handelToggle}
                        value="fantasy"
                        className="toggle toggle-primary theme-controller"
                        defaultChecked
                    />
                </label>
            </div>
            <div 
                onMouseLeave={
                    //allows animation to finish
                    () => setTimeout(() => {
                        coppied && setCoppied(false)
                    }, "250")
                } 
                className="tooltip tooltip-left h-8" data-tip={!coppied ? 'Copy Config' : 'Coppied!!'}
            >
                <button
                    onClick={() => setCoppied(!coppied)}
                    className={`btn btn-square btn-outline btn-sm ${isPro ? 'btn-primary' : ''}`}
                >
                    <ClipboardIcon/>
                </button>
            </div>
        </div>
    )
}