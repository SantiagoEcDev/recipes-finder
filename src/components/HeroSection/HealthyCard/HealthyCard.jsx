import "./HealthyCard.css"
import { FaStar } from "react-icons/fa";

export const HealthyCard = ({image, name,firstIngredient, secondIngredient, rate}) => {
  return (
    <article className="healthy-card">
      <img className="healthy-card-image" src={image} alt="" />
      <div className="healthy-card-food-info">
      <h2 className="healthy-card-title">{name}</h2>
      <span className="healthy-card-ingredients-container">
        <p className="healthy-card-ingredients">{firstIngredient} & {secondIngredient}</p>
         <span className="healty-card-rate"><FaStar /> {rate}</span>
      </span>
      </div>
      
    </article>
  );
};
