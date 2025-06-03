// props is a commonly used name
// {} to destruct object. The order matters from the actual attributes in the data
export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }