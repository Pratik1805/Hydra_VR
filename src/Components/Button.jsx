import React from 'react'

const Button = ({label, backgroundColor, border}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-4 py-6 border text-lg leading-none text-white font-montserrat 
    ${backgroundColor 
        ? `${backgroundColor} ${border}`
        : "bg-button-gradient border-primary" 
    }
     rounded-full border-2` } >
        {label}
    </button>
  )
}

export default Button