import React from 'react'

function MenuCard({name, price, image, description}) {
  return (
    <div className='flex flex-col md:flex-row border border-gray-300 rounded-md px-4 py-4 gap-x-4 gap-y-4 md:w-[40%]'>
      <img className='w-full md:w-32 h-32 object-cover rounded-md' src={image} alt={name} />
      <div className='flex flex-col justify-between'>
        <div>
          <span className='text-gray-950 text-lg font-semibold'>{name}</span>
          <span className='block text-gray-600'>${price}</span>
          <span className='block text-gray-500 text-sm'>{description}</span>
        </div>
       <button className='text-white  w-32 py-2 px-4 bg-gradient-to-tl to-pink-500 from-pink-600 rounded-md'>Order Now</button>
      </div>
    </div>
  )
}


export default MenuCard