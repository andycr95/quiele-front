import React, { useState, useEffect } from 'react'
import { Content, FirstContent, Form, SecondContent } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { images } from '../../assets'
import { login, reset, setLoading } from "../../features/auth/authSlice";

function LoginPage() {
  const [LoginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const { email, password } = LoginForm
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, isError, isSuccess, isAuthenticated, message, user } = useSelector(state => state.auth)

  useEffect(() => {
    console.log(isSuccess,
      isAuthenticated,
      isError,
      isLoading);
    if (isSuccess) {
      console.log('s');
      toast.success('Se inició sesión')
      dispatch(setLoading(false))
      navigate('/')
    } else if (isAuthenticated) {
      console.log('a');
      navigate('/')
    } else if (isError) {
      console.log('e');
      toast.error(message)
    } else if (isLoading) {
      console.log('l');
      toast.info('Cargando...')
    } else{
      console.log('r');
      dispatch(reset())
    }
  }, [isSuccess, isError, isLoading, isAuthenticated, message, dispatch, navigate, user])
  

  function handleChange(event) {
    setLoginForm({ ...LoginForm, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('ssss');
    if (email && password) {
      dispatch(setLoading(true))
      dispatch(login({ email, password }))
    } else {
      toast.error('Todos los campos son obligatorios')
    }
  }

  return (
      <Content>
          <FirstContent>
            <img src={images.logo} alt="logo"/>
            <h1>Iniciar Sesión</h1>
          </FirstContent>
          <SecondContent>
              <Form onSubmit={handleSubmit}>
                <h1>Hola!</h1>
                <span>Iniciar sesión para empezar</span>
                <input type="text" placeholder="Correo electronico" onChange={handleChange} value={email} name='email'/>
                <input type="password" autoComplete='false' placeholder="Contraseña" onChange={handleChange} value={password} name='password'/>
                <button type='submit'>Ingresar</button>
              </Form>
          </SecondContent>
      </Content>
  )
}

export default LoginPage;
