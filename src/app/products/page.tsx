import React from 'react'
import { categoriesAndProducts } from '../../../public/data/categories-and-products'
import Image from 'next/image'

function page() {
  return (
    <div className='bg-white p-2 pb-8 min-h-screen mt-[62px] 2xl:mt-24 3xl:mt-32'>
        <p className='text-xl 3xl:text-4xl text-black'>Products and services</p>
        <p className='text-sm ml-2 text-[#7b7b7b] 3xl:text-lg'>Explore our comprehensive product and service offerings</p>
        {
            categoriesAndProducts.map((category, i) =>(
                <div key={i}>
                    <p className='text-xl mt-6 my-4 font-semibold 3xl:text-3xl text-black'>{category.title}</p>
                    <div className='flex flex-wrap'>
                    {
                        category.products.map((product, i) => (
                            <div key={i} className='flex flex-col justify-between items-center w-32 h-32 xl:w-40 xl:h-40 3xl:w-56 3xl:h-56 m-2 2xl:m-8'>
                                <Image className='w-24 h-24 xl:w-32 xl:h-32 3xl:w-52 3xl:h-52' src={product.image} alt="a4 papers" /> 
                                <p className='text-center 3xl:text-xl text-black'>{product.title}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default page