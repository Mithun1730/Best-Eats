import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6' >
        {/* Cards */}
        <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            {/* Overlay */}
            <p className='font-bold text-2xl px-2 pt-2'> Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black px-5 mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            {/* Overlay */}
            <p className='font-bold text-2xl px-2 pt-2'> New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black px-5 mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/3768001/pexels-photo-3768001.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            {/* Overlay */}
            <p className='font-bold text-2xl px-2 pt-2'> We Deliver Desserts Too!</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black px-5 mx-2 p-2 rounded-xl absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full  rounded-xl object-cover' src="https://images.pexels.com/photos/5589834/pexels-photo-5589834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards