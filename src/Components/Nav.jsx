import React from 'react'
import { Hydra } from '../assets/images'
import { navLinks } from '../Constants'
import { hamburger,hydraLogo } from '../assets/icons'
import Button from './Button'

const  Nav = () => {
  return (
    <header className='bg-primary padding-x py-8 absolute z-10 w-full'>
        <nav className='flex max-container justify-between items-center '>
            <div className='flex items-center gap-4'>
            <a href="/">
                <img src={hydraLogo} alt="hydra-logo"width={130} height={29} />
            </a>
            <a href="/">
                <img src={Hydra} alt="logo" width={76} height={46} />
            </a>
            </div>

            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li>
                        <a href={item.href} key={item.label}
                        className=' font-montserrat leading-normal text-lg text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex gap-6 max-xl:hidden '>
                <Button label="CONTACT US" backgroundColor="bg-transparent"/>
                <Button label="JOIN HYDRA"  border = "bg-primary"/>
            </div>

            <div className='max-lg:block hidden'>
                <img src={hamburger} alt="hamburger" 
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav