import React from 'react'

const Badge = ({ title }: { title: string }) => {
  return (
    <div>
        <div className="flex gap-3 items-center">
            <div className='h-10 sm:h-14 bg-red-500 w-4 sm:w-7 rounded-md' />
            <p className='font-semibold text-red-500 text-sm sm:text-base'>{title}</p>
        </div>
    </div>
  )
}

export default Badge