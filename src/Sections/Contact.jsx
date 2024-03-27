import React from 'react'
import { contact } from '../Constants'

const Contact = () => {
 return (
    <section className="contact sm:rounded-full rounded-3xl flex flex-col sm:flex-row justify-evenly items-center sm:gap-4 gap-12 overflow-hidden sm:max-w-[100%] w-full m-auto ">
      {contact.map((item) => (
        <div key={item.name} className='flex flex-col md:flex-row max-md:flex-col items-center justify-center text-center flex-wrap py-4'>
          <img src={item.imgURl} className="w-[72px] h-[72px]"/>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-white font-semibold text-xl">{item.name}</h3>
            <p className="text-gray-200">{item.value}</p>
          </div>
        </div>
      ))}
    </section>
 )
}

export default Contact