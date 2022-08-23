import React, { useEffect } from 'react'
import { images } from '../../assets'
import Table from '../../components/Table/Table'
import Principal from '../../layouts/Principal/Principal'
import { BalanceContent, ButtonInSecondContent, Card, CardsContent, Content, FirstContent, SecondContent } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetSuccess } from '../../features/auth/authSlice'

function HomePage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuthenticated, user } = useSelector(state => state.auth)

    useEffect(() => {
      if (!isAuthenticated || !user) {
        navigate('/login')
      }
      dispatch(resetSuccess())
    }, [isAuthenticated, dispatch, navigate, user])
    return (
        <Principal>
            <Content>
              <BalanceContent>
                <FirstContent>
                  <h2>Balance</h2>
                  <h1>$ 270,000.00</h1>
                  <div>
                    <span>Account No.: 0107940714</span>
                    <span className='bank'>WEMA Bank</span>
                  </div>
                </FirstContent>
                <SecondContent>
                  <ButtonInSecondContent>Reportes</ButtonInSecondContent>
                </SecondContent>
              </BalanceContent>
              <CardsContent>
                <Card>
                  <div className='iconContent'>
                    <img src={images.lockIcon} alt='lockIcon'/>
                  </div>
                  <div className='descriptionContent'>
                    <h1>Clientes atrasados</h1>
                    <span>Clientes con pagos atrasados</span>
                  </div>
                  <div className='bottomContent'>
                    <h4>20</h4>
                  </div>
                </Card>
                <Card>
                  <div className='iconContent'>
                    <img src={images.dollarIcon} alt='dollarIcon'/>
                  </div>
                  <div className='descriptionContent'>
                    <h1>Salidas</h1>
                    <span>Gastos realizados en mes</span>
                  </div>
                  <div className='bottomContent'>
                    <h4>$ 20.000.000</h4>
                  </div>
                </Card>
                <Card>
                  <div className='iconContent'>
                    <img src={images.goalIcon} alt='goalIcon'/>
                  </div>
                  <div className='descriptionContent'>
                    <h1>Metas del mes</h1>
                    <span>Metas estimadas para el mes</span>
                  </div>
                  <div className='bottomContent'>
                    <h4>$ 20.000.000</h4>
                  </div>
                </Card>
                <Card>
                  <div className='iconContent'>
                    <img src={images.billIcon} alt='billIcon'/>
                  </div>
                  <div className='descriptionContent'>
                    <h1>Pago pendiente</h1>
                    <span>Clientes con pagos pentientes</span>
                  </div>
                  <div className='bottomContent'>
                    <h4>20</h4>
                  </div>
                </Card>
              </CardsContent>
              <Table/>
            </Content>
        </Principal>
    )
  }

  export default HomePage;