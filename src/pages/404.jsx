import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Error() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas</p>
        </div>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error
