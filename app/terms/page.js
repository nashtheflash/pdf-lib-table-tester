import TermDocument from '@/app/components/markdown/terms.mdx'

export default async function Terms() {
    return (
        <div className='h-fit min-h-screen bg-base-100 text-black'>
            <div className='grid grid-cols-4 auto-cols-max py-12'>
                <div className='col-start-2 col-end-4'>
                    <TermDocument/>
                </div>
            </div>
        </div>
    )
}
