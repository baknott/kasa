import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Mapping from '../components/Mapping/Mapping'
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
      <Banner
        src={logement.cover}
        alt="photo de couverture du logement"
        class="banner"
      />
      <div className="flexHrz spaBetw">
        <div className="leftFiche">
          <h1>{logement.title}</h1>
          <h5>{logement.location}</h5>
          <Mapping list={logement.tags} class="flexHrz spaAround" />
        </div>
        <div className="rightFiche">
          <div className="owner">
            <div>{logement.host?.name}</div>
            <img
              src={logement.host?.picture}
              alt={logement.host?.name}
              className="ownerImg"
            />
          </div>
          <div className="rating">note : {logement.rating}</div>
        </div>
      </div>
      <div className="flexHrz">
        <div className="boxInfo">
          <h4 className="boxTitle">Description</h4>
          <div className="boxText">{logement.description}</div>
        </div>
        <div>
          <h4>Equipements</h4>
          <Mapping list={logement.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Fiche
