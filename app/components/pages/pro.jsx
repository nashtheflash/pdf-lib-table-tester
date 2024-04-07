import { CheckIcon } from '@heroicons/react/24/solid';

export function Pro() {
    return (
        <div className='flex basis-1/4 justify-between items-center text-primary'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Need to go Pro?</h2>
                    <p className='text-sm'>Unfortunatly we have to put some features behind a pay wall to support the project. We appriciate the support!!</p>
                    <div className="basis-2/4 w-ful">
                        <div className="divider divider-secondary divider-start text-md">Whats Included?</div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="flex justify-start item-center gap-2">
                                <div className='text-secondary'>
                                    <CheckIcon className='h-5 w-5'/>
                                </div>
                                <div>
                                    Horizontal Orientation
                                </div>
                            </div>

                            <div className="flex justify-start item-center gap-2">
                                <div className='text-secondary'>
                                    <CheckIcon className='h-5 w-5'/>
                                </div>
                                <div>
                                    2 Way Tables
                                </div>
                            </div>

                            <div className="flex justify-start item-center gap-2">
                                <div className='text-secondary'>
                                    <CheckIcon className='h-5 w-5'/>
                                </div>
                                <div>
                                    Multi page
                                </div>
                            </div>
                            
                            <div className="flex justify-start item-center gap-2">
                                <div className='text-secondary'>
                                    <CheckIcon className='h-5 w-5'/>
                                </div>
                                <div>
                                    Pro Settings
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-3/4">
                <h1> payments</h1>
            </div>
        </div>
    )
}
