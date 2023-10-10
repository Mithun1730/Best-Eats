import React, { useState } from 'react'
import {data} from "./data/data"

const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data);

// Filter Type Burgers/Pizza/Others

const filterType = (category) => {
    setFoods(
        data.filter((items)=>{
            return items.category === category
        })
    )
}

// Filter By Prize

const filterPrice = (price)=>{
    setFoods(
        data.filter((items)=>{
            return items.price === price
        })
    )
}


  return (
    <div className='max-w-[1620px] mx-auto px-4 py-12' >
        <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='mt-10 font-bold text-gray-700'>Filter Type</p>
                <div className='flex flex-wrap'>
                <button onClick={()=>setFoods(data)} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>All</button>
                <button onClick={()=>filterType('burger')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Burgers</button>
                <button onClick={()=>filterType('pizza')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                <button onClick={()=>filterType('salad')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Salads</button>
                <button onClick={()=>filterType('chicken')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='mt-10 font-bold text-gray-700'>Filter Price</p>
                <div className='flex flex-wrap'>
                    <button onClick={()=>filterPrice('$')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$</button>
                    <button onClick={()=>filterPrice('$$')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className ='m-3 rounded-xl px-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        
        {/* Display Foods */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((items, index)=>(
                <div key={index} className='border shadow-xl rounded-lg hover:scale-105 duration-300'>
                    <img src={items.image} alt={items.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{items.name}</p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{items.price}</span>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Food