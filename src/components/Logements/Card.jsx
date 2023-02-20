import Logements from '../../Datas/data.json'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <ul className="listeLogements">
      {Logements.map((logement) => (
        <li key={`${logement.id}`} className="caseLogement">
          <Link to={`/logement/${logement.id}`}>
            <img src={logement.cover} alt="" className="imgLogement" />
            <div className="gradient"></div>
            <div className="titreLogement">{logement.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Cards
