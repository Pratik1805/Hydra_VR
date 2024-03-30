import React from 'react'
import { horizontalLine } from '../assets/images'
import Button from './Button'

const ServiceCard = ({key, img, heading, description}) => {
  return (
    <div key={key} className='Card flex flex-1 flex-col justify-center items-center max-w-sm shadow-lg max-sm:w-full rounded-xl'>
      <div className=' rounded-full object-contain overflow-hidden mt-2'>
        <img src={img} alt="Icon"/>
      </div>
       
       <div className=' flex flex-col items-center justify-center mt-2 text-justify px-6 py-4'>
        <h2 className='text-white font-semibold font-montserrat text-2xl py-2'>{heading}</h2>
        <img src={horizontalLine} alt="horizontalLine" />
        <p className=' text-slate-300 font-montserrat py-2'>{description}</p>
       <Button label={"TRY IT NOW"} fullWidth/>
       </div>

    </div>
  )
}

export default ServiceCard