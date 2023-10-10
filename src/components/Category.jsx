import React from 'react'
import { categories } from './data/data'

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 py-20'>
        {categories.map((items, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex shadow-lg items-center justify-between'>
                <h2 className='font-bold sm:text-xl'>{items.name}</h2>
                <img src={items.image} alt={items.name} 
                className='w-20'/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Category