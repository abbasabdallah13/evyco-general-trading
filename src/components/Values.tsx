import Image from 'next/image'
import React from 'react'
import cultivateRelationships from "../../public/assets/cultivate-relationships.png"
import fosterTrust from "../../public/assets/foster-trust.png"
import deliverExcellence from "../../public/assets/deliver-excellence.png"

const values = [
  {
    img: cultivateRelationships,
    title: "Cultivate Relationships"
  },
  {
    img: fosterTrust,
    title: "Foster Trust"
  },
  {
    img: deliverExcellence,
    title: "Deliver Excellence"
  },
]

function Values() {
  return (
    <div className="p-6 pt-14 bg-[#DFE3E4] text-black">
      <p className='text-center font-semibold font-merriweather-sans m-6 3xl:my-8 text-xl 2xl:text-2xl 3xl:text-3xl'>With every interaction we:</p>
      <div className='flex flex-col justify-around items-center min-[600px]:flex-row'>
        {
          values.map((value, i) => (
            <div key={i} className={`w-[90%] max-w-[396px] flex items-center gap-x-2 md:flex-col md: gap-y-12 ${i !== 0 && 'mt-4'}`}>
              <div className='w-[30%] flex justify-center'>
                <Image className='w-16 h-16 min-[600px]:w-[50px] min-[600px]:h-[50px] md:w-20 md:h-20 2xl:w-24 2xl:h-24' src={value.img} alt={value.title} width={100} height={100} />
              </div>
              <p className='w-[60%] ml-4 min-[600px]:ml-0 font-semibold text-sm lg:text-lg 2xl:text-base 3xl:text-3xl text-center'>{value.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Values 