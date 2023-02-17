//Composant Bannière
function Banner(props) {
  return (
    <div className={props.class}>
      <img src={props.src} alt={props.alt} className={props.classImg} />
      <h1 className={props.classTitle}>{props.text}</h1>
    </div>
  )
}

export default Banner
