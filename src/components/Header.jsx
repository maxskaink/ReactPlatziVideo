import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            user.email ?
              <img src={gravatar(user.email)} alt='icono' /> :
              <img src={UserIcon} alt='icono' />
          }
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
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);

