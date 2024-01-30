import React from 'react'

function About() {
  return (
    <div className='px-6 bg-[#DFE3E4]] py-12 w-full flex flex-col items-center'>
      <p className='font-semibold text-center text-xl 2xl:text-2xl 3xl:text-3xl font-merriweather-sans 3xl:my-8'>About Company</p>
      <p className='mt-4 text-justify md:w-3/4 text-base 3xl:text-2xl'>
      Welcome to Evyco, your dedicated partner for 
      comprehensive trading solutions. With a focus 
      on excellence, innovation, and client 
      satisfaction, we offer expert services in 
      product sourcing, supply chain management, and
       market analysis. Our global network and 
       customer-centric approach ensure tailored solutions
        to meet your unique business needs.
      </p>
      <p className='mt-4 md:w-3/4 text-base 3xl:text-2xl'>
        Step into a world where diversity thrives, and options abound. From the tantalizing flavors of fine cuisine to the sleek efficiency of automotive engineering; from the comfort of home furnishings to the thrill of adventure gear, we offer an unparalleled array of products to cater to every taste and requirement.
        Embark on a journey of exploration as you peruse our vast catalogue, spanning from the latest in electronics to the timeless elegance of fashion; from the precision of machinery to the warmth of household necessities. Whether you seek the practicality of construction materials or the joy of children's toys, we've curated a collection that promises to delight and inspire. 
      </p>
      <p className='mt-4 md:w-3/4 text-base 3xl:text-2xl'>
        Read more about our products and services <a className='text-underline hover:underline text-blue-700' href={'/products'}>here</a>.
      </p>
      <p className='mt-4 md:w-3/4 text-base 3xl:text-2xl'>
        Or let’s explore possibilities together. <a className='text-underline hover:underline text-blue-700' href='/#contact'>Contact us</a> now to discuss how  Evyco can contribute to your success.
      </p>
    </div>
  )
}

export default About