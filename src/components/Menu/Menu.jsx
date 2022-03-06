import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'

import { SCMenu } from './styles'

export const Menu = () => {
  return (
    <SCMenu>
      <Link to='/products'>
        <MenuIcon />
      </Link>
    </SCMenu>
  )
}
