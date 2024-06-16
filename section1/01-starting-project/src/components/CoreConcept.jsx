// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
export default function CoreConcept({title, description, image}) {
    return (
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }