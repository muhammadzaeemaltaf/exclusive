import { Button } from '@/components/ui/button'
import React from 'react'
import Breadcrumb from './components/Breadcrumb'

const notFound = () => {
  return (
    <div className='py-16'>
            <div className="container space-y-10 md:space-y-28">
                <Breadcrumb page="404 Error"/>
                <div className='flex flex-col gap-5 md:gap-10 justify-center items-center py-6'>
                    <h1 className='text-4xl font-semibold md:text-[110px] md:font-[400]'>404 Not Found</h1>
                    <p className='text-center'>Your visited page not found. You may go home page.</p>
                    <Button className='bg-red-500 hover:bg-red-600 rounded px-12 py-4 mt-8'>Back to home page</Button>
                </div>
            </div>
    </div>
  )
}

export default notFound