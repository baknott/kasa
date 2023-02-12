import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import Mapping from '../components/Mapping/Mapping'
import StarRating from '../components/Rating/Rating'
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
      <div className="flexHrz spaBetw">
        <div className="leftFiche">
          <h1 className="logementTitle">{logement.title}</h1>
          <h5 className="location">{logement.location}</h5>
          <Mapping
            list={logement.tags}
            class="flexHrz spaAround boxTags"
            classElement="tags"
          />
        </div>
        <div className="rightFiche">
          <div className="owner spaAround">
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
      <div className="flexHrz spaBetw">
        <div className="boxInfo">
          <div className="boxTitle">Description</div>
          <div className="boxText greyBackground">{logement.description}</div>
        </div>
        <div className="boxInfo">
          <div className="boxTitle">Equipements</div>
          <Mapping
            list={logement.equipments}
            class="boxText greyBackground listLineHeight"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Fiche
