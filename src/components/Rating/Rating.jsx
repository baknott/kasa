import React from 'react'
import RedStar from '../../images/R-Star.png'
import GreyStar from '../../images/G-Star.png'

function StarRating(props) {
  const stars = Array(5).fill(GreyStar)
  for (let i = 0; i < props.rating; i++) {
    stars[i] = RedStar
  }

  return (
    <div>
      {stars.map((star, index) => (
        <img key={index} src={star} alt={`star-${index + 1}`} />
      ))}
    </div>
  )
}

export default StarRating
