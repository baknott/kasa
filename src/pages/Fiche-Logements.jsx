import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import Mapping from '../components/Mapping/Mapping'
import StarRating from '../components/Rating/Rating'
import Collapse from '../components/Collapse/Collapse'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../Datas/data'

function Fiche() {
  const { id } = useParams()
  const [logement, setLogement] = useState({})

  useEffect(() => {
    const filteredLogement = data.filter((obj) => obj.id === id)[0]
    setLogement(filteredLogement)
  }, [id])

  return (
    <div>
      <Header />
      <Carousel pictures={logement.pictures} />
      <div className="infosLogement">
        <div className="leftFiche">
          <h1 className="logementTitle">{logement.title}</h1>
          <h5 className="location">{logement.location}</h5>
          <Mapping list={logement.tags} class="flexHrz" classElement="tags" />
        </div>
        <div className="rightFiche">
          <div className="owner">
            <div className="ownerName">{logement.host?.name}</div>
            <img
              src={logement.host?.picture}
              alt={logement.host?.name}
              className="ownerImg"
            />
          </div>
          <StarRating rating={logement.rating} />
        </div>
      </div>
      <div className="infosLogement ficheCollapse">
        <Collapse
          title="Description"
          content={logement.description}
          collapseSize="collapseHalf"
        />
        <Collapse
          title="Equipement"
          content={
            <Mapping
              list={logement.equipments}
              class="listBloc"
              classElement="listLineHeight"
            />
          }
          collapseSize="collapseHalf"
        />
      </div>

      <Footer />
    </div>
  )
}

export default Fiche
