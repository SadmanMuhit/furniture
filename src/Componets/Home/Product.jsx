import React from 'react'

const Product = () => {
  return (
    <section>
        <div className='container m-auto pt-14'>
            <h6 className='text-[40px] font-bold font-poppins text-[#3A3A3A] text-center pt-14 pb-8'>Our Products</h6>
            <div className='grid lg:grid-cols-4 gap-8 cursor-pointer'> 
                <div>
                    <img src="/product.png" alt="" className='w-full h-60 object-cover'/>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Syltherine</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Stylish cafe chair</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 2.500.000</p>
                            <p className='text-base font-normal font-poppins text-[#B0B0B0] line-through'>Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/product4.png" alt="" className='w-full h-60 object-cover'/>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Leviosa</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Stylish cafe chair</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 2.500.000</p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/product2.png" alt="" className='w-full h-60 object-cover'/>
                    <p className='absolute bg-[#E97171] rounded-full top-6 right-6 pl-1.5 py-3 text-white text-base font-medium font-poppins'>-50%</p>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Lolito</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Luxury big sofa</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 7.000.000</p>
                            <p className='text-base font-normal font-poppins text-[#B0B0B0] line-through'>Rp 14.000.000</p>
                        </div>
                    </div>
                </div>   
                <div className='relative'>
                    <img src="/product3.png" alt="" className='w-full h-60 object-cover'/>
                    <p className='absolute bg-[#2EC1AC] rounded-full top-6 right-6 px-1.5 py-3 pl-[5px] text-white text-base font-medium font-poppins flex justify-center items-center'>NEW</p>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Respira</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Outdoor bar table and stool</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 500.000</p>
                        </div>
                    </div>
                </div>   
                <div className='relative'>
                    <img src="/product5.png" alt="" className='w-full h-60 object-cover bg-no-repeat bg-cover bg-center'/>
                    <p className='absolute bg-[#2EC1AC] rounded-full top-6 right-6 px-1.5 py-3 pl-[5px] text-white text-base font-medium font-poppins flex justify-center items-center'>NEW</p>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Grifo</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Night lamp</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 150.000</p>
                        </div>
                    </div>
                </div>   
                <div>
                    <img src="/product6.png" alt="" className='w-full h-60 object-cover'/>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Muggo</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Small mug</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 150.000</p>
                        </div>
                    </div>
                </div>   
                <div>
                    <img src="/product7.png" alt="" className='w-full h-60 object-cover'/>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Pingky</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Cute bed set</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 7,000.000</p>
                            <p className='text-base font-normal font-poppins text-[#B0B0B0] line-through'>Rp 14.000.000</p>
                        </div>
                    </div>
                </div>   
                <div>
                    <img src="/product8.png" alt="" className='w-full h-60 object-cover'/>
                    <div className='bg-[#F4F5F7] pl-4 pt-4 pb-[30px]'>
                        <h3 className='text-2xl font-semibold font-poppins text-[#3A3A3A]'>Potty</h3>
                        <p className='text-base font-medium font-poppins text-[#898989] pt-2'>Minimalist flower pot</p>
                        <div className='flex gap-4 pt-2 items-center'>
                            <p className='text-[20px] font-semibold font-poppins text-[#3A3A3A]'>Rp 500.000</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className='flex justify-center mt-8'>
            <button className='border py-3 px-[74px] border-[#B88E2F] text-base font-semibold font-poppins text-[#B88E2F]'>Show More</button>
        </div>
        <button>signup</button>
        </div>
    </section>
  )
}

export default Product