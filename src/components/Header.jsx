import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={Logo} alt='Platzi Video' />
    </Link>
    <div className='heade r__menu'>
      <div className='header__menu--profile'>
        <img src={UserIcon} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li>
          {' '}
          <Link to='/login'> Iniciar Secion </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
