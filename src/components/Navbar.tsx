import '../css/NavbarStyles.css'
import { MenuHamburguer } from '../icons/MenuHamburger'

export function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          Home
        </li>
        <li>
          Something 1
        </li>
        <li>
          Something 2
        </li>
        <li id='icon-menu'>
          <MenuHamburguer />
        </li>
      </ul>

    </nav>
  )
}
