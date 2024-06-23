import React from 'react'

//Import Logo
import Logo from '../../assets/img/Logo.png'

//Import do CSS 
import './Menu.css'

//Import styled components
import Button from '../Button'

//Import de components
//import ButtonLink from './components/ButtonLink'

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} alt="logo" className='Logo' />
            </a>
            <Button as="a" className='ButtonLink' href='/'>
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu