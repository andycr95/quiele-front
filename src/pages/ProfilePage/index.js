import React, { useEffect, useState } from 'react'
import { images } from '../../assets'
import Principal from '../../layouts/Principal/Principal'
import ProfileMe from './Components/profile'
import { } from './styles'

function ProfilePage() {
  const [Me, setMe] = useState(false)

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('me')) {
      setMe(true)
    }
  }
  , [])

  return (
      <Principal>
        {Me ? <ProfileMe /> : <h1>Profile</h1>}
      </Principal>
  )
}

  export default ProfilePage;