import React from 'react'
import { useState } from 'react'
import TopArrow from '../../images/top-arrow.png'
import DownArrow from '../../images/down-arrow.png'

const Collapse = (props) => {
  const [openTab, setOpenTab] = useState(false)

  const openTabHandler = () => {
    setOpenTab((openTab) => !openTab)
  }

  return (
    <div className={props.collapseSize}>
      <div onClick={openTabHandler} className="collapse_header">
        <h2 className="collapse_header_title">{props.title}</h2>
        {!openTab ? (
          <img src={DownArrow} alt="fleche vers le bas" />
        ) : (
          <img src={TopArrow} alt="fleche vers le haut" />
        )}
      </div>
      {openTab && <div className="collapse_content">{props.content}</div>}
    </div>
  )
}

export default Collapse
