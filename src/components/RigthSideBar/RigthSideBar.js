import React from 'react'
import { Card, Content } from './styles';

function RigthSideBar() {
  return (
    <Content>
      <Card className='first'>
        <div className='header'>
          <h1>Metas</h1>
          <select>
            <option value='1'>Mes</option>
            <option value='1'>Mes</option>
            <option value='1'>Mes</option>
          </select>
        </div>
      </Card>
      <Card className='second'>
        <h1>Transferencia Rápida</h1>
      </Card>
      <Card className='third'>
        <h1>Metas</h1>
      </Card>
    </Content>
  )
}

export default RigthSideBar;