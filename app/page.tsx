import React from 'react'

const page = () => {
  return (
    <>

  <div className='grid sm:grid-cols-2 m-4 gap-4'>
    <div className='bg-red-300 h-[100px] rounded-md'>1</div>
    <div className='bg-green-300 h-[100px] rounded-md'>2</div>
  </div>
<hr />
  <div className='grid m-4 gap-4 sm:grid-cols-4 grid-cols-2'>
    <div className='bg-red-300 h-[100px] rounded-md'>1</div>
    <div className='bg-green-300 h-[100px] rounded-md'>2</div>
    <div className='bg-blue-300 h-[100px] rounded-md'>3</div>
    <div className='bg-purple-300 h-[100px] rounded-md'>4</div>
  </div>
  <hr />
  <div className='grid sm:grid-cols-12 grid-cols-2 m-4 gap-4'>
    <div className='bg-red-300 h-[100px] rounded-md sm:col-span-2'>1</div>
    <div className='bg-green-300 h-[100px] rounded-md sm:col-span-10'>2</div>
  </div>
     
    </>
    
  )
}

export default page