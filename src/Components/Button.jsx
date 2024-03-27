import React from 'react'

const Button = ({label, backgroundColor, border,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center px-3 py-3 border text-lg  text-white font-montserrat 
    ${backgroundColor 
        ? `${backgroundColor} ${border}`
        : "bg-button-gradient border-primary" 
    }
    rounded-full ${fullWidth && "w-full"}  border-2` } >
        {label}
    </button>
  )
}

export default Button