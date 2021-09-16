import React from 'react'
import Logo from './logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='user-auth'>
        <div className='image-containerAvatar'></div>
        Eboreime thankGod
      </div>
    </header>
  )
}
export default Header
