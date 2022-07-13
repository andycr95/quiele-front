import React, { Component } from 'react'
import { Content, FirstContent, Form, SecondContent } from './styles'
import { images } from '../../assets'

export default class LoginPage extends Component {
  render() {
    return (
        <Content>
            <FirstContent>
              <img src={images.logo} alt="logo"/>
              <h1>Iniciar Sesión</h1>
            </FirstContent>
            <SecondContent>
                <Form>
                  <h1>Hola!</h1>
                  <span>Iniciar sesión para empezar</span>
                  <input type="text" placeholder="Usuario"/>
                  <input type="password" placeholder="Contraseña"/>
                  <button>Ingresar</button>
                </Form>
            </SecondContent>
        </Content>
    )
  }
}
