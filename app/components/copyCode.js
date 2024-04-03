'use client';

import { ToggleTheme, CopyConfigButton } from "./";

export function CopyCode({ isPro, setIsPro, userPdfSettings }) {

    return (
        <div className='flex w-full mb-2 justify-end items-center'>
            <ToggleTheme
                isPro={isPro}
                setIsPro={setIsPro}
                themeController={true}
            />
            <CopyConfigButton
                isPro={isPro}
                userPdfSettings={userPdfSettings}
            />
        </div>
    )
}