import React, { Component } from 'react'
import { Content, ErrorContent, PrincipalButton } from './styles'
import { images } from '../../assets/index.js'
import { NavLink } from 'react-router-dom'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Content>
        <ErrorContent>
          <img src={images.logo} alt="Not Found" />
          <h1>Error 404</h1>
          <p>Lo sentimos, página no encontrada</p>
          <p>La página que estabas buscando no existe.</p>
          <PrincipalButton>
            <NavLink to="/">Regresar</NavLink>
          </PrincipalButton>
        </ErrorContent>
      </Content>
    )
  }
}
