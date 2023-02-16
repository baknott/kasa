//Composant réutilisable pour mapper des éléments de mon fichier de données JSON
function Mapping(props) {
  return (
    <div className={props.class}>
      {props.list &&
        props.list.map((element, index) => (
          <p key={props.list[index]} className={props.classElement}>
            {element}
          </p>
        ))}
    </div>
  )
}

export default Mapping
