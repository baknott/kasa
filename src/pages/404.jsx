import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import ErrorImg from '../images/404.png'
import Footer from '../components/Footer/Footer'

function Error() {
  return (
    <div className="main">
      <Header />
      <div className="error">
        <img src={ErrorImg} alt="404" className="errorImg" />
        <h1>Oups! La page que vous demandez n'existe pas</h1>

        <Link to="/" className="lienError">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error
