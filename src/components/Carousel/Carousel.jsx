import React, { useState } from 'react'
import LeftArrow from '../../images/left-arrow.png'
import RightArrow from '../../images/right-arrow.png'

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousImage = () =>
    setCurrentIndex(
      currentIndex === 0 ? props.pictures.length - 1 : currentIndex - 1
    )
  const nextImage = () =>
    setCurrentIndex(
      currentIndex === props.pictures.length - 1 ? 0 : currentIndex + 1
    )

  return (
    <div className="blocPictures">
      <img
        src={props.pictures?.[currentIndex]}
        alt="photos du logement"
        className="logementPictures"
      />
      {props.pictures && props.pictures.length > 1 && (
        <div className="blocArrowsPictures spaBetw">
          <img
            src={LeftArrow}
            alt="Fleche Gauche"
            onClick={previousImage}
            className="oneArrowPictures"
          />
          <img
            src={RightArrow}
            alt="Fleche Droite"
            onClick={nextImage}
            className="oneArrowPictures"
          />
        </div>
      )}
    </div>
  )
}

export default Carousel
