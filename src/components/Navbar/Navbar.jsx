// Libraries
import { Link, Outlet } from 'react-router-dom'

// Components
import { Menu } from '../Menu/Menu'
import { User } from '../User/User'

// Styles
import { SCNavbar, SCItem } from './styles'

export const Navbar = () => {
  return (
    <>
      <SCNavbar>
        <SCItem>
          <Menu />
        </SCItem>
        <SCItem>
          <Link className='logo' to='/home'>DARKSTAR</Link>
        </SCItem>
        <SCItem>
          <User />
        </SCItem>
      </SCNavbar>
      <Outlet />
    </>
  )
}
