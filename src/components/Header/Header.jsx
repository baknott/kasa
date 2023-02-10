import { Link } from 'react-router-dom'
import logoR from '../../images/logo-red.png'

function Header() {
  return (
    <div className="header">
      <img src={logoR} alt="logo kasa rouge" />
      <nav>
        <Link to="/" className="liens">
          Accueil
        </Link>
        <Link to="/a-propos" className="liens">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
