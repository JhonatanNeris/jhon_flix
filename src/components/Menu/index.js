import React from 'react'

//Import Logo
import Logo from '../../assets/img/Logo.png'

//Import do CSS 
import './Menu.css'

//Import styled components
import Button from '../Button'

//React Router dom
import { Link } from 'react-router-dom'

//Import de components
//import ButtonLink from './components/ButtonLink'

const Menu = () => {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img src={Logo} alt="logo" className='Logo' />
            </Link>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu