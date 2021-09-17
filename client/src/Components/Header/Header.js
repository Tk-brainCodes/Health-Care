import React from 'react'
import Logo from './logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
      </Link>
      <div className='user-auth'>
        <div className='image-containerAvatar'></div>
        Eboreime thankGod
      </div>
    </header>
  )
}
export default Header
