import React from 'react'

const Range = () => {
  return (
    <section>
        <div className='container m-auto pt-14 text-center'>
          <p className='text-[32px] font-bold font-poppins text-[#333333]'>Browse The Range</p>
          <p className='text-[20px] font-normal font-poppins text-[#666666] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='flex justify-center mt-[62px] gap-5'>
            <img src="/MaskGroup.png" alt="" />
            <img src="/ivingroom.png" alt="" />
            <img src="/MaskGroup 2.png" alt="" />
          </div>
          <div className='flex justify-center gap-[326px] items-center pt-[30px]'>
            <p className='text-2xl font-semibold font-poppins text-[#333333]'>Dining</p>
            <p className='text-2xl font-semibold font-poppins text-[#333333]'>Living</p>
            <p className='text-2xl font-semibold font-poppins text-[#333333]'>Bedroom</p>
          </div>
        </div>
    </section>
  )
}

export default Range