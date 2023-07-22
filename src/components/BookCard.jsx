import React from 'react'

const BookCard = ({title, image, author}) => {
  return (
    <div className='w-1/3 p-2'>
        <div className='flex bg-slate-100 shadow-lg rounded-md'>
            <img src={image} alt={title} className='rounded-s-md shadow-xl w-1/2 h-64' />
            <div className='m-5 w-1/2'>
                <h1 className='text-gray-700 text-2xl font-sans font-medium'>{title}</h1>
                <h3 className='text-gray-400 font-sans font-medium'>{author}</h3>
            </div>
        </div> 
    </div>
  )
}

export default BookCard
