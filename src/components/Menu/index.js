import React from 'react'

//Import Logo
import Logo from '../../assets/img/Logo.png'

//Import do CSS 
import './Menu.css'

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} alt="logo" className='Logo' />
            </a>
            <a href="/" className='ButtonLink'>
                Novo vídeo
            </a>
        </nav>
    )
}

export default Menu