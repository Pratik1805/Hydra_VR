import React from 'react'
import { Hydra } from '../assets/images'
import { navLinks } from '../Constants'
import { hamburger,hydraLogo } from '../assets/icons'
import Button from './Button'

const Nav = () => {
  return (
    <header className='bg-primary px-4 py-6 absolute z-10 w-full gap-5'>
        <nav className='flex flex-1 justify-between items-center'>
            <div className='flex items-center gap-4'>
            <a href="/">
                <img src={hydraLogo} alt="hydra-logo"width={102} height={103} />
            </a>
            <a href="/">
                <img src={Hydra} alt="logo" width={76} height={46} />
            </a>
            </div>

            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li>
                        <a href={item.href}
                        className=' font-montserrat leading-normal text-lg text-white'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex gap-2 max-lg:hidden '>
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