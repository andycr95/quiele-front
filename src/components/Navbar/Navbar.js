import { images } from '../../assets';
import { Avatar, Content, FirstContent, SecondContent } from './styles'
import { useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { user  } = useSelector(state => state.auth);
  return (
    <Content>
      <FirstContent>
          <h3>Bienvenido</h3>
          {user ? <h4>{user.user.name}</h4> : null}
      </FirstContent>
      <SecondContent>
          <img src={images.notiIcon} alt="notiIcon" />
          <NavLink to={`/me`}>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQG7w8pfuyR4Lg/profile-displayphoto-shrink_100_100/0/1572980056108?e=1663804800&v=beta&t=6xAr0JKqumduv0tlePudndvlIUy_j7bM3hpqCnMo28U" alt="avatar" />
          </NavLink>
      </SecondContent>
    </Content>
  )
}

export default Navbar;