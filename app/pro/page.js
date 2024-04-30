'use client';
 
import { PaymentWrapper } from "../components";
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Pro() {

    const cart = [{price: 'price_1P3O5FD237q7PsOHCG7lLMFC', quantity: 1,}]

    return (
        <div className='flex justify-between items-center gap-2 text-primary h-full w-full'>
            <div className='grow flex flex-col gap-4'>
                <FreeCard/>
                <ProCard/> 
                <ChartCard/>
            </div> 
            <div className="h-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary scrollbar-track-slate-300 scrollbar-w-2 overflow-auto">
                <PaymentWrapper 
                    provider={'stripe'}
                    products={cart}
                />
            </div>
        </div>
    )
}


export function FreeCard() {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Standard Version</h2>
                <p className='text-sm'>The free version with let you build a standard single page table.</p>
                <div className="basis-2/4 w-ful">
                    <div className="divider divider-secondary divider-start text-md">Whats Included?</div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                Auto Sizing
                            </div>
                        </div>

                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                Vertical Tables
                            </div>
                        </div>

                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                Single Page
                            </div>
                        </div>
                        
                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                25 Custom Settings
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export function ProCard({ cart }) {

    return (
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
    )
}


export function ChartCard() {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Need Charts too?</h2>
                <p className='text-sm'>Add PDF-LIB-Chart for only $10 more</p>
                <div className="basis-2/4 w-ful">
                    <div className="divider divider-secondary divider-start text-md">Whats Included?</div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                               Pie Charts 
                            </div>
                        </div>

                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                Bar Charts
                            </div>
                        </div>

                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                Line Charts
                            </div>
                        </div>
                        
                        <div className="flex justify-start item-center gap-2">
                            <div className='text-secondary'>
                                <CheckIcon className='h-5 w-5'/>
                            </div>
                            <div>
                                All features included
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
