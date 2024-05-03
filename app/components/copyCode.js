'use client';

import { ToggleTheme, CopyConfigButton } from "./";

export function CopyCode({ isStandard, setIsStandard, userPdfSettings }) {

    return (
        <div className='flex w-full mb-2 justify-end items-center'>
            <ToggleTheme
                isStandard={isStandard}
                setIsStandard={setIsStandard}
            />
            <CopyConfigButton
                isStandard={isStandard}
                userPdfSettings={userPdfSettings}
            />
        </div>
    )
}
