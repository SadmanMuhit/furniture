import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='bg-[url("/banner.png")] bg-no-repeat bg-center bg-cover'>
      <div className='container m-auto pt-[500px] pb-[263px] flex justify-end'>
      <div className='bg-[#FFF3E3] pt-[62px] pl-10 pr-11 pb-9 rounded-[10px]'>
      <h5 className='text-base font-semibold font-poppins text-[#333333] tracking-[3px]'>New Arrival</h5>
      <h1 className='text-[52px] font-bold font-poppins leading-16 text-[#B88E2F] w-[600px] mt-1 mb-4'>Discover Our New Collection</h1>
      <p className='text-lg font-medium font-poppins text-[#333333] w-[546px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <button className='bg-[#B88E2F] py-[25px] px-[72px] text-white text-base font-bold font-poppins mt-10'>BUY Now</button>
      </div>
      </div>
    </section>
    </>
  )
}

export default Banner