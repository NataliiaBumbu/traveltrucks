import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  return (
    <div>
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <Link to={`/catalog/${camper.id}`}>Show more</Link>
    </div>
  );
};

export default CamperCard;
